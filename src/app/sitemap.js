import { site } from '@/config/site';
export default function sitemap() {
  return ['', '/contact', '/privacy-policy', '/terms-and-conditions'].map((p) => ({ url: `${site.url}${p}`, lastModified: new Date() }));
}
