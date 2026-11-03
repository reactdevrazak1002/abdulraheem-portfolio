import Link from 'next/link';
import { Suspense } from 'react';
import Reveal from '@/components/Reveal';
import ServicesTabs from '@/components/ServicesTabs';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { steps } from '@/data/services';
import { faqs } from '@/data/faqs';
import { site } from '@/config/site';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const why = [
  ['🎯', 'Professional Approach', 'Structured, careful handling of every file.'],
  ['🛡️', 'Reliable Taxation Support', 'Dependable help across GST and income tax.'],
  ['🧭', 'Simplified Compliance Process', 'Complex rules explained in plain language.'],
  ['💼', 'Business-Focused Solutions', 'Support shaped around how you operate.'],
  ['⏱️', 'Timely Assistance', 'Clear timelines and regular updates.'],
  ['🤝', 'Personalised Client Support', 'Direct contact, not a call centre.'],
];
const who = ['Individuals', 'Small Businesses', 'Traders', 'Startups', 'Freelancers', 'MSMEs', 'Companies'];
const bars = [45, 70, 55, 90, 65, 100];

export default function Home() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ProfessionalService', name: site.name, url: site.url, telephone: site.phoneTel, email: site.email, areaServed: 'IN', description: 'Taxation, GST compliance, income tax filing, financial statements and business support services.' }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }} />

      <div className="hero">
        <div className="blob" style={{ width: 260, height: 260, background: '#C9A05E', top: -60, left: -60 }} />
        <div className="blob" style={{ width: 220, height: 220, background: '#005F56', bottom: -60, right: '30%', animationDelay: '-4s' }} />
        <div className="wrap">
          <Reveal>
            <span className="badge">GST · Income Tax · Compliance</span>
            <h1>Your Trusted Partner for <span>Taxation &amp; Financial Compliance</span></h1>
            <p>From GST compliance and Income Tax Returns to financial statements and business registrations, TaxwithAbdul helps individuals and businesses manage their financial responsibilities with confidence.</p>
            <div className="cta">
              <Link className="btn p" href="/#contact">Get Professional Assistance</Link>
              <Link className="btn o" href="/#services">Explore Our Services</Link>
              <a className="btn w" href={buildWhatsAppLink('Hello TaxwithAbdul, I would like to know more about your services.')} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
            </div>
            <div className="trust"><span>✓ Clear process</span><span>✓ Timely updates</span><span>✓ Personal support</span></div>
          </Reveal>
          <Reveal className="viz" delay={0.2}>
            <div aria-hidden="true">
              <div className="dash">
                <div className="row"><b style={{ color: '#fff' }}>Compliance overview</b><span>Illustration</span></div>
                <div className="bars">{bars.map((h, i) => <i key={i} style={{ '--h': `${h}%`, animationDelay: `${0.2 + i * 0.15}s` }} />)}</div>
                <div className="chips"><span>GSTR-1</span><span>GSTR-3B</span><span>ITR</span><span>MSME</span></div>
              </div>
              <div className="fl a">🛡️ Filing on track</div>
              <div className="fl b">🧾 Invoice reviewed ✓</div>
            </div>
          </Reveal>
        </div>
      </div>

      <section id="services" className="alt"><div className="wrap">
        <span className="eyebrow">Services</span>
        <Reveal as="h2">Everything your finances need, in one place</Reveal>
        <p className="lead">Choose a category, open a service for details, or send a quick WhatsApp enquiry.</p>
        <ServicesTabs />
      </div></section>

      <section id="why"><div className="wrap">
        <span className="eyebrow">Why choose us</span><h2>Compliance made simple</h2><p className="lead" />
        <div className="grid">{why.map(([i, t, d], k) => (
          <Reveal key={t} className="card" delay={k * 0.08}><div className="ic">{i}</div><h3>{t}</h3><p>{d}</p></Reveal>
        ))}</div>
      </div></section>

      <section id="how" className="alt"><div className="wrap">
        <span className="eyebrow">How it works</span><h2>Four simple steps</h2><p className="lead" />
        <div className="steps">{steps.map(([t, d], i) => (
          <Reveal key={t} className="step" delay={i * 0.12}><h3>{t}</h3><p>{d}</p></Reveal>
        ))}</div>
      </div></section>

      <section><div className="wrap">
        <span className="eyebrow">Who we serve</span><h2>Support for every kind of taxpayer</h2><p className="lead" />
        <Reveal className="pills">{who.map((w) => <span key={w}>{w}</span>)}</Reveal>
      </div></section>

      <section id="about" className="alt"><div className="wrap two">
        <Reveal>
          <span className="eyebrow">About</span><h2>About TaxwithAbdul</h2>
          <p style={{ color: 'var(--muted)' }}>TaxwithAbdul is focused on providing taxation, GST compliance, income tax filing, financial statement preparation, and business support services. Our goal is to simplify financial compliance and help individuals and businesses manage their tax-related responsibilities efficiently.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <span id="faq" className="eyebrow">FAQ</span><h2>Common questions</h2>
          {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
        </Reveal>
      </div></section>

      <section id="contact"><div className="wrap two">
        <Reveal>
          <span className="eyebrow">Contact</span><h2>Let’s talk about your requirement</h2>
          <p style={{ color: 'var(--muted)' }}>Send an enquiry and we’ll get back to you. Or reach us directly:</p>
          <p><a className="btn w" href={buildWhatsAppLink('Hello TaxwithAbdul, I would like to discuss my requirement.')} target="_blank" rel="noopener noreferrer">💬 Chat on WhatsApp</a></p>
          <p><a href={`tel:${site.phoneTel}`}><b>📞 {site.phoneDisplay}</b></a><br /><a href={`mailto:${site.email}`}><b>✉️ {site.email}</b></a></p>
        </Reveal>
        <Reveal delay={0.15}><Suspense fallback={null}><ContactForm /></Suspense></Reveal>
      </div></section>
    </>
  );
}
