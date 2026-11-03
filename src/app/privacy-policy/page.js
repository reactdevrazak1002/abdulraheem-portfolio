import { site } from '@/config/site';
export const metadata = { title: 'Privacy Policy', alternates: { canonical: '/privacy-policy' } };
export default function Privacy() {
  return (
    <section className="page"><div className="wrap prose">
      <h1 style={{ fontSize: 'clamp(28px,4vw,40px)' }}>Privacy Policy</h1>
      <p className="edit">EDITABLE CONTENT: this is a starting template based on the principles of India’s Digital Personal Data Protection Act, 2023. Please have it reviewed by a qualified professional before relying on it.</p>
      <h2>What we collect</h2><p>When you contact us on WhatsApp or by phone, we receive the details you choose to send, such as your name, phone number and requirement. The website form only prepares a WhatsApp message; it does not store your data on this website.</p>
      <h2>Why we collect it</h2><p>Only to respond to your enquiry and provide the services you ask for. We do not sell your personal data.</p>
      <h2>Sensitive information</h2><p>Please do not share PAN, Aadhaar, bank or login details in your first message.</p>
      <h2>Retention</h2><p>We keep enquiry details only as long as needed for the purpose above or as required by law.</p>
      <h2>Your requests</h2><p>You may ask to access, correct or erase your data, or withdraw consent, by messaging us on <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a> (WhatsApp or call).</p>
    </div></section>
  );
}
