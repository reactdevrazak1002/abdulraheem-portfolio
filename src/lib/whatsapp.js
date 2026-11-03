import { site } from '@/config/site';
export function buildWhatsAppLink(message) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
