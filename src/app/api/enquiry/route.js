import { NextResponse } from 'next/server';
import { site } from '@/config/site';

export const runtime = 'nodejs';
const hits = new Map(); // in-memory, per instance
const WINDOW = 10 * 60 * 1000;
const MAX = 5;

function limited(ip) {
  const now = Date.now();
  const list = (hits.get(ip) || []).filter((t) => now - t < WINDOW);
  list.push(now);
  hits.set(ip, list);
  return list.length > MAX;
}
const clean = (v, n) => String(v ?? '').replace(/[\r\n]+/g, ' ').trim().slice(0, n);

export async function POST(req) {
  const ip = (req.headers.get('x-forwarded-for') || 'unknown').split(',')[0].trim();
  if (limited(ip)) return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });

  let body;
  try { body = await req.json(); } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
  if (body.website) return NextResponse.json({ ok: true }); // honeypot: silently drop bots

  const name = clean(body.name, 80);
  const phone = clean(body.phone, 10);
  const email = clean(body.email, 120);
  const service = clean(body.service, 120) || 'General enquiry';
  const message = String(body.message ?? '').trim().slice(0, 1500);
  if (name.length < 2) return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 });
  if (!/^[6-9]\d{9}$/.test(phone)) return NextResponse.json({ error: 'Enter a valid 10-digit mobile number.' }, { status: 400 });
  if (email && !/^\S+@\S+\.\S+$/.test(email)) return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  if (!body.consent) return NextResponse.json({ error: 'Consent is required.' }, { status: 400 });

  const key = process.env.RESEND_API_KEY;
  if (!key) return NextResponse.json({ error: 'Email sending is not configured right now.' }, { status: 503 });

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || 'TaxwithAbdul <onboarding@resend.dev>',
        to: [site.email],
        reply_to: email || undefined,
        subject: `New enquiry: ${service} — ${name}`,
        text: `Name: ${name}\nPhone: ${phone}\nEmail: ${email || '-'}\nService: ${service}\n\nMessage:\n${message || '-'}`,
      }),
    });
    if (!r.ok) return NextResponse.json({ error: 'We could not send your enquiry right now.' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'We could not send your enquiry right now.' }, { status: 502 });
  }
}
