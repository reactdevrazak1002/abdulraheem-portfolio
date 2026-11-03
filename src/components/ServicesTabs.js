'use client';
import Link from 'next/link';
import { useState } from 'react';
import { categories } from '@/data/services';
import { services } from '@/data/services';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function ServicesTabs() {
  const [active, setActive] = useState(0);
  const cat = categories[active];
  const list = services.filter((s) => s.category === cat.id);
  return (
    <>
      <div className="tabs" role="tablist" aria-label="Service categories">
        {categories.map((c, i) => (
          <button key={c.id} role="tab" aria-selected={i === active} className="tab" onClick={() => setActive(i)}>{c.title}</button>
        ))}
      </div>
      <div className="grid">
        {list.map((s, k) => (
          <article key={s.slug} className="card" style={{ animation: `pop .5s ${k * 0.06}s both` }}>
            <div className="ic">{s.icon}</div>
            <h3><Link href={`/services/${s.slug}`}>{s.title}</Link></h3>
            <p>{s.description}</p>
            <div className="acts">
              <Link className="btn p" style={{ minHeight: 44, padding: '0 16px' }} href={`/?service=${s.slug}#contact`}>Enquire</Link>
              <a className="btn s" target="_blank" rel="noopener noreferrer" href={buildWhatsAppLink(s.whatsappMessage)}>WhatsApp</a>
            </div>
          </article>
        ))}
      </div>
      {active === 1 && <p className="note">Form applicability depends on your income sources and current rules — we help you choose the right one.</p>}
    </>
  );
}
