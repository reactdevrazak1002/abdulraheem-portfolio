'use client';
import { useState } from 'react';
import { services } from '@/data/services';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function ContactForm() {
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    if (d.website) return; // honeypot
    if (!d.name || d.name.trim().length < 2) { setError('Please enter your name.'); return; }
    setError('');
    const msg = `Hello TaxwithAbdul, I am ${d.name.trim()}. ${d.service ? `I am interested in your ${d.service}. ` : ''}${(d.message || '').trim()}`.trim();
    setStatus('Opening WhatsApp with your message…');
    window.open(buildWhatsAppLink(msg), '_blank', 'noopener,noreferrer');
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <h3>Start your enquiry on WhatsApp</h3>
      <label>Your name<input name="name" autoComplete="name" required /></label>
      {error && <span className="err" role="alert">{error}</span>}
      <label>Service
        <select name="service" defaultValue="">
          <option value="">General enquiry</option>
          {services.map((s) => <option key={s.id} value={s.title}>{s.title}</option>)}
        </select>
      </label>
      <label>Message (optional)<textarea name="message" rows={3} maxLength={800} /></label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p className="warn">Please do not share PAN, Aadhaar, bank or login details in your first message.</p>
      <button className="btn w" type="submit">💬 Continue on WhatsApp</button>
      <div role="status" aria-live="polite" className="ok">{status}</div>
    </form>
  );
}
