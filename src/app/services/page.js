import ServicesTabs from '@/components/ServicesTabs';
export const metadata = { title: 'Services – GST, Income Tax, MSME & Bookkeeping', description: 'GST return filing, GST registration, income tax return filing, financial statements, MSME registration and bookkeeping services in India.', alternates: { canonical: '/services' } };
export default function ServicesPage() {
  return (
    <section className="page alt"><div className="wrap">
      <h1 style={{ fontSize: 'clamp(28px,4vw,42px)', marginBottom: 24 }}>Our Services</h1>
      <ServicesTabs />
    </div></section>
  );
}
