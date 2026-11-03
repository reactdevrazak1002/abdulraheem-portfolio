'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { categories, services } from '@/data/services';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function ContactForm() {
  const params = useSearchParams();
  const [service, setService] = useState('');
  const [errors, setErrors] = useState({});
  const [state, setState] = useState({ status: 'idle', msg: '' });

  useEffect(() => {
    const found = services.find((s) => s.slug === params.get('service'));
    if (found) setService(found.title);
  }, [params]);

  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const d = Object.fromEntries(new FormData(form));
    const er = {};
    if (!d.name || d.name.trim().length < 2) er.name = 'Please enter your name.';
    if (!/^[6-9]\d{9}$/.test(d.phone || '')) er.phone = 'Enter a valid 10-digit Indian mobile number.';
    if (d.email && !/^\S+@\S+\.\S+$/.test(d.email)) er.email = 'Enter a valid email address.';
    if (!d.consent) er.consent = 'Please give consent to continue.';
    setErrors(er);
    if (Object.keys(er).length) return;
    setState({ status: 'loading', msg: '' });
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...d, service, consent: true }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || 'Something went wrong.');
      setState({ status: 'success', msg: 'Thank you! Your enquiry has been sent. We will get back to you soon.' });
      form.reset();
      setService('');
    } catch (err) {
      setState({ status: 'error', msg: err.message });
    }
  }

  const waMsg = `Hello TaxwithAbdul, I would like to discuss ${service || 'my requirement'}.`;
  return (
    <form onSubmit={onSubmit} noValidate>
      <label>Name<input name="name" autoComplete="name" required /></label>
      {errors.name && <span className="err" role="alert">{errors.name}</span>}
      <label>Phone (10 digits)<input name="phone" inputMode="numeric" autoComplete="tel-national" maxLength={10} required /></label>
      {errors.phone && <span className="err" role="alert">{errors.phone}</span>}
      <label>Email (optional)<input name="email" type="email" autoComplete="email" /></label>
      {errors.email && <span className="err" role="alert">{errors.email}</span>}
      <label>Service
        <select name="service" value={service} onChange={(e) => setService(e.target.value)}>
          <option value="">General enquiry</option>
          {categories.map((c) => (
            <optgroup key={c.id} label={c.title}>
              {services.filter((s) => s.category === c.id).map((s) => <option key={s.slug} value={s.title}>{s.title}</option>)}
            </optgroup>
          ))}
        </select>
      </label>
      <label>Message<textarea name="message" rows={3} maxLength={1500} /></label>
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <label className="cc"><input type="checkbox" name="consent" /> I agree to be contacted about my enquiry.</label>
      {errors.consent && <span className="err" role="alert">{errors.consent}</span>}
      <p className="warn">Please do not share PAN, Aadhaar, bank or login details through this form.</p>
      <button className="btn p" type="submit" disabled={state.status === 'loading'}>{state.status === 'loading' ? 'Sending…' : 'Send Enquiry'}</button>
      <div id="msg" role="status" aria-live="polite">
        {state.status === 'success' && <span className="ok">{state.msg}</span>}
        {state.status === 'error' && (
          <span className="bad">{state.msg} You can reach us directly on <a href={buildWhatsAppLink(waMsg)} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>WhatsApp</a>.</span>
        )}
      </div>
    </form>
  );
}
