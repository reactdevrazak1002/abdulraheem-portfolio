import Link from 'next/link';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import JsonLd from '@/components/JsonLd';
import { services, steps } from '@/data/services';
import { faqs } from '@/data/faqs';
import { site } from '@/config/site';
import { buildWhatsAppLink } from '@/lib/whatsapp';

const why = [
  ['🎯', 'Professional Approach', 'Structured, careful handling of every file.'],
  ['🛡️', 'Reliable Taxation Support', 'Dependable help across GST and income tax.'],
  ['🧭', 'Simplified Compliance Process', 'Complex rules explained in plain language.'],
  ['💼', 'Business-Focused Solutions', 'Support shaped around how you operate.'],
  ['⏱️', 'Timely Assistance', 'Clear timelines and regular updates.'],
  ['🤝', 'Personalised Client Support', 'Direct WhatsApp access to your consultant.'],
];
const approach = [
  ['01', 'Understand first', 'We start by understanding your income, business and goals before suggesting anything.'],
  ['02', 'Compliance-first', 'Every filing and registration is handled with accuracy and the current rules in mind.'],
  ['03', 'Clear communication', 'Plain language, regular updates, and one point of contact on WhatsApp.'],
];
const who = ['Individuals', 'Small Businesses', 'Traders', 'Startups', 'Freelancers', 'MSMEs', 'Companies'];
const bars = [45, 70, 55, 90, 65, 100];
const wa = (m) => buildWhatsAppLink(m);

export default function Home() {
  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'ProfessionalService', name: site.name, url: site.url, telephone: site.phoneTel, areaServed: 'IN', description: 'Taxation, GST compliance, income tax filing, financial statements and business support services.' }} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) }} />

      <div className="hero">
        <div className="blob" style={{ width: 260, height: 260, background: '#C9A05E', top: -60, left: -60 }} />
        <div className="blob" style={{ width: 220, height: 220, background: '#005F56', bottom: -60, right: '30%', animationDelay: '-4s' }} />
        <div className="wrap">
          <Reveal>
            <span className="badge">Taxation &amp; Financial Compliance Consultancy</span>
            <h1>Your Trusted Partner for <span>Taxation &amp; Financial Compliance</span></h1>
            <p>From GST compliance and Income Tax Returns to financial statements and business registrations, TaxwithAbdul helps individuals and businesses manage their financial responsibilities with confidence.</p>
            <div className="cta">
              <a className="btn w" href={wa('Hello TaxwithAbdul, I would like professional assistance.')} target="_blank" rel="noopener noreferrer">💬 Get Professional Assistance</a>
              <Link className="btn o" href="/#services">Explore Our Services</Link>
            </div>
            <div className="trust"><span>✓ Clear process</span><span>✓ Timely updates</span><span>✓ Personal support</span></div>
          </Reveal>
          <Reveal className="viz" delay={0.2}>
            <div aria-hidden="true">
              <div className="dash">
                <div className="row"><b style={{ color: '#fff' }}>Compliance overview</b><span>Illustration</span></div>
                <div className="bars">{bars.map((h, i) => <i key={i} style={{ '--h': `${h}%`, animationDelay: `${0.2 + i * 0.15}s` }} />)}</div>
                <div className="chips"><span>GST</span><span>Income Tax</span><span>Accounts</span><span>MSME</span></div>
              </div>
              <div className="fl a">🛡️ Filing on track</div>
              <div className="fl b">🧾 Records organised ✓</div>
            </div>
          </Reveal>
        </div>
      </div>

      <section id="about"><div className="wrap two">
        <Reveal>
          <span className="eyebrow">About us</span>
          <h2>A taxation service brand built for clarity</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p style={{ color: 'var(--muted)', marginTop: 0 }}>TaxwithAbdul is focused on providing taxation, GST compliance, income tax filing, financial statement preparation, and business support services. Our goal is to simplify financial compliance and help individuals and businesses manage their tax-related responsibilities efficiently.</p>
          <p><a className="btn p" href={wa('Hello TaxwithAbdul, I would like to know more about your services.')} target="_blank" rel="noopener noreferrer">💬 Talk to us on WhatsApp</a></p>
        </Reveal>
      </div></section>

      <section id="services" className="alt"><div className="wrap">
        <span className="eyebrow">Our services</span>
        <Reveal as="h2">Complete tax &amp; compliance support</Reveal>
        <p className="lead" />
        <div className="sgrid">{services.map((s, i) => (
          <Reveal key={s.id} className="card sc" delay={i * 0.08}>
            <div className="ic">{s.icon}</div>
            <h3>{s.title}</h3>
            <a className="btn w" href={wa(s.whatsappMessage)} target="_blank" rel="noopener noreferrer">💬 Enquire on WhatsApp</a>
          </Reveal>
        ))}</div>
      </div></section>

      <section id="why"><div className="wrap">
        <span className="eyebrow">Why choose us</span><h2>Why clients choose TaxwithAbdul</h2><p className="lead" />
        <div className="grid">{why.map(([i, t, d], k) => (
          <Reveal key={t} className="card" delay={k * 0.08}><div className="ic">{i}</div><h3>{t}</h3><p>{d}</p></Reveal>
        ))}</div>
      </div></section>

      <section id="approach" className="alt"><div className="wrap">
        <span className="eyebrow">Our business approach</span><h2>How we work with you</h2><p className="lead" />
        <div className="grid">{approach.map(([n, t, d], k) => (
          <Reveal key={t} className="card" delay={k * 0.1}><div className="num">{n}</div><h3>{t}</h3><p>{d}</p></Reveal>
        ))}</div>
        <h3 style={{ margin: '48px 0 20px', fontSize: 24 }}>Our process in four steps</h3>
        <div className="steps">{steps.map(([t, d], i) => (
          <Reveal key={t} className="step" delay={i * 0.12}><h3>{t}</h3><p>{d}</p></Reveal>
        ))}</div>
      </div></section>

      <section><div className="wrap">
        <span className="eyebrow">Who we serve</span><h2>Support for every kind of taxpayer</h2><p className="lead" />
        <Reveal className="pills">{who.map((w) => <span key={w}>{w}</span>)}</Reveal>
      </div></section>

      <section style={{ paddingTop: 0 }}><div className="wrap">
        <Reveal className="ctaband">
          <div><h2>Ready to simplify your tax &amp; compliance?</h2><p>Message us on WhatsApp and get started today.</p></div>
          <div className="cta" style={{ margin: 0 }}>
            <a className="btn w" href={wa('Hello TaxwithAbdul, I would like professional assistance.')} target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
            <a className="btn o" href={`tel:${site.phoneTel}`}>📞 {site.phoneDisplay}</a>
          </div>
        </Reveal>
      </div></section>

      <section id="faq" className="alt"><div className="wrap" style={{ maxWidth: 820 }}>
        <span className="eyebrow">FAQ</span><h2>Common questions</h2><p className="lead" />
        {faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      </div></section>

      <section id="contact"><div className="wrap two">
        <Reveal>
          <span className="eyebrow">Contact</span><h2>Let’s discuss your requirement</h2>
          <p style={{ color: 'var(--muted)' }}>WhatsApp is the fastest way to reach us. Or call us directly:</p>
          <p><a className="btn w" href={wa('Hello TaxwithAbdul, I would like to discuss my requirement.')} target="_blank" rel="noopener noreferrer">💬 Chat on WhatsApp</a></p>
          <p><a href={`tel:${site.phoneTel}`}><b>📞 {site.phoneDisplay}</b></a></p>
        </Reveal>
        <Reveal delay={0.15}><ContactForm /></Reveal>
      </div></section>
    </>
  );
}
