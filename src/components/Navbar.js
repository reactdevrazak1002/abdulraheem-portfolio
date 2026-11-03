'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { categories, services } from '@/data/services';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const first = (id) => services.find((s) => s.category === id).slug;
  return (
    <header>
      <div className="wrap nav">
        <Link className="logo" href="/" aria-label="TaxwithAbdul home" onClick={close}>
          <Image src="/logo.png" alt="" width={50} height={44} priority />
          <span>Taxwith<b>Abdul</b></span>
        </Link>
        <nav id="nav" aria-label="Main" className={open ? 'open' : ''}>
          <ul>
            <li className="dd">
              <Link className="nb" href="/services" onClick={close}>Services ▾</Link>
              <div className="menu">
                {categories.map((c) => (
                  <Link key={c.id} href={`/services/${first(c.id)}`} onClick={close}>{c.icon} {c.title}</Link>
                ))}
              </div>
            </li>
            <li><Link href="/#why" onClick={close}>Why Us</Link></li>
            <li><Link href="/#how" onClick={close}>Process</Link></li>
            <li><Link href="/#about" onClick={close}>About</Link></li>
            <li><Link href="/#faq" onClick={close}>FAQ</Link></li>
            <li><Link className="btn p" href="/#contact" onClick={close}>Contact</Link></li>
          </ul>
        </nav>
        <button className="btn s burger" aria-label="Toggle menu" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>☰</button>
      </div>
    </header>
  );
}
