import Link from 'next/link';
import Image from 'next/image';
import { site } from '@/config/site';
import { buildWhatsAppLink } from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fg">
          <div>
            <div className="logo"><Image src="/logo.png" alt="" width={50} height={44} /><span>Taxwith<b>Abdul</b></span></div>
            <p className="tag">{site.tagline}</p>
            <p>Taxation, GST and financial compliance support for individuals and businesses in India.</p>
          </div>
          <div>
            <b style={{ color: '#fff' }}>Explore</b>
            <ul>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/#how">Process</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
          <div>
            <b style={{ color: '#fff' }}>Contact</b>
            <ul>
              <li><a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a></li>
              <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
              <li><a href={buildWhatsAppLink('Hello TaxwithAbdul, I would like to know more.')} target="_blank" rel="noopener noreferrer">WhatsApp us</a></li>
            </ul>
          </div>
        </div>
        <p className="disc">Content on this site is for general information and is not a substitute for professional advice. Official government portals govern. © {new Date().getFullYear()} {site.name}.</p>
      </div>
    </footer>
  );
}
