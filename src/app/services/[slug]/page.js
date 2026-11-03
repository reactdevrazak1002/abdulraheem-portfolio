import Link from 'next/link';
import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import { services, getService, steps } from '@/data/services';
import { faqs } from '@/data/faqs';
import { site } from '@/config/site';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export function generateStaticParams() { return services.map((s) => ({ slug: s.slug })); }

export function generateMetadata({ params }) {
  const s = getService(params.slug);
  if (!s) return {};
  return { title: `${s.title} – ${s.categoryTitle}`, description: `${s.description} Professional support from TaxwithAbdul, India.`, alternates: { canonical: `/services/${s.slug}` } };
}

export default function ServicePage({ params }) {
  const s = getService(params.slug);
  if (!s) notFound();
  const related = services.filter((x) => x.category === s.category && x.slug !== s.slug).slice(0, 4);
  const wa = buildWhatsAppLink(s.whatsappMessage);
  return (
    <section className="page"><div className="wrap prose">
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: site.url },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${site.url}/services` },
        { '@type': 'ListItem', position: 3, name: s.title, item: `${site.url}/services/${s.slug}` }] }} />
      <p className="crumb"><Link href="/">Home</Link> / <Link href="/services">Services</Link> / {s.title}</p>
      <h1 style={{ fontSize: 'clamp(28px,4vw,42px)' }}>{s.icon} {s.title}</h1>
      <h2>Overview</h2><p>{s.description}</p>
      <h2>Who needs it</h2><p>{s.who}</p>
      <h2>Documents typically needed (indicative)</h2>
      <ul>{s.documents.map((d) => <li key={d}>{d}</li>)}</ul>
      <p className="warn">The exact list depends on your case. Please do not share PAN, Aadhaar, bank or login details through the website form.</p>
      <h2>Our process</h2>
      <ol>{steps.map(([t, d]) => <li key={t}><b>{t}</b> — {d}</li>)}</ol>
      <h2>FAQ</h2>
      {[faqs[3], faqs[1], faqs[7]].map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}
      <div className="cta" style={{ margin: '32px 0' }}>
        <Link className="btn p" href={`/?service=${s.slug}#contact`}>Send an Enquiry</Link>
        <a className="btn w" href={wa} target="_blank" rel="noopener noreferrer">💬 WhatsApp</a>
      </div>
      {related.length > 0 && (<><h2>Related services</h2>
        <div className="pills" style={{ marginTop: 12 }}>{related.map((r) => <Link key={r.slug} href={`/services/${r.slug}`}><span>{r.title}</span></Link>)}</div></>)}
    </div></section>
  );
}
