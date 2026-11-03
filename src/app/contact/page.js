import { Suspense } from 'react';
import ContactForm from '@/components/ContactForm';
import { site } from '@/config/site';
export const metadata = { title: 'Contact', description: 'Contact TaxwithAbdul for GST, income tax and compliance support in India.', alternates: { canonical: '/contact' } };
export default function ContactPage() {
  return (
    <section className="page"><div className="wrap two">
      <div><h1 style={{ fontSize: 'clamp(28px,4vw,42px)' }}>Contact</h1>
        <p style={{ color: 'var(--muted)' }}>Call <a href={`tel:${site.phoneTel}`}><b>{site.phoneDisplay}</b></a> or email <a href={`mailto:${site.email}`}><b>{site.email}</b></a>.</p></div>
      <Suspense fallback={null}><ContactForm /></Suspense>
    </div></section>
  );
}
