import { site } from '@/config/site';
import { services } from '@/data/services';
export default function sitemap() {
  const pages = ['', '/services', '/contact', '/privacy-policy', '/terms-and-conditions'].map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
  return [...pages, ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, lastModified: new Date() }))];
}
