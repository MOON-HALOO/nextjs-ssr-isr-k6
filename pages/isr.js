import Link from 'next/link';

export async function getStaticProps() {
  const data = {
    message: 'Page last generated at: ' + new Date().toISOString(),
  };
  return { props: { data }, revalidate: 10 };
}

export default function ISRPage({ data }) {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.badge}>Next.js Rendering Lab</div>
        <h1 style={styles.title}>ISR Demo</h1>
        <p style={styles.subtitle}>Incremental Static Regeneration (10s window)</p>
        <nav style={styles.nav}>
          <Link href="/server-side" style={styles.link}>SSR Page</Link>
          <Link href="/isr" style={{ ...styles.link, ...styles.activeLink }}>ISR Page</Link>
        </nav>
      </header>

      <main style={styles.card}>
        <div style={styles.statusIndicator}>
          <span style={styles.dot}></span>
          <span>Static Cache (Revalidate: 10s)</span>
        </div>
        <h2 style={styles.cardTitle}>Generated Timestamp:</h2>
        <div style={styles.dataBox}>
          <code>{data.message}</code>
        </div>
        <p style={styles.cardDescription}>
          This content is prebuilt and served statically. Refreshing within 10 seconds serves cached HTML instantaneously without server recomputation.
        </p>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#064e3b',
    color: '#ecfdf5',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 20px',
  },
  header: { textAlign: 'center', marginBottom: '30px' },
  badge: {
    display: 'inline-block',
    padding: '6px 14px',
    backgroundColor: '#047857',
    color: '#a7f3d0',
    borderRadius: '20px',
    fontSize: '0.85rem',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '12px',
  },
  title: { fontSize: '2.5rem', margin: '0 0 8px 0', color: '#f0fdf4' },
  subtitle: { color: '#a7f3d0', fontSize: '1.05rem', margin: 0 },
  nav: { marginTop: '20px', display: 'flex', gap: '12px', justifyContent: 'center' },
  link: {
    color: '#d1fae5',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    border: '1px solid #059669',
    transition: '0.2s ease',
  },
  activeLink: { backgroundColor: '#10b981', color: '#064e3b', fontWeight: 'bold' },
  card: {
    backgroundColor: '#022c22',
    border: '1px solid #10b981',
    borderRadius: '16px',
    padding: '30px',
    width: '100%',
    maxWidth: '540px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
  },
  statusIndicator: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#34d399',
    fontSize: '0.85rem',
    marginBottom: '16px',
  },
  dot: { width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' },
  cardTitle: { fontSize: '1.4rem', margin: '0 0 16px 0', color: '#f0fdf4' },
  dataBox: {
    backgroundColor: '#064e3b',
    border: '1px solid #059669',
    borderRadius: '10px',
    padding: '16px',
    fontSize: '1.15rem',
    color: '#6ee7b7',
    wordBreak: 'break-all',
  },
  cardDescription: { marginTop: '16px', fontSize: '0.9rem', color: '#a7f3d0', lineHeight: 1.5 },
};