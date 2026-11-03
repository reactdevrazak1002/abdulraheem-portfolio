import Link from 'next/link';
export const metadata = { title: 'Page not found' };
export default function NotFound() {
  return (
    <section className="page"><div className="wrap prose" style={{ textAlign: 'center', margin: '0 auto' }}>
      <h1 style={{ fontSize: 'clamp(32px,5vw,52px)' }}>404</h1>
      <p>Sorry, we couldn’t find that page.</p>
      <p><Link className="btn p" href="/">Back to home</Link></p>
    </div></section>
  );
}
