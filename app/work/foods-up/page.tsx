"use client";
import Link from "next/link";

export default function FoodsUp() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 5rem', borderBottom: '1px solid var(--border)', background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontFamily: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>Nazrin.</Link>
        <Link href="/#work" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>← Back to work</Link>
      </nav>

      {/* COMING SOON */}
      <section style={{ minHeight: 'calc(100vh - 200px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '5rem 2rem' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '2.5rem' }}>
          {[0, 1, 2].map(i => (
            <div key={i} style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent)', animation: `pulse-dot 1.4s ease-in-out ${i * 0.2}s infinite` }} />
          ))}
        </div>

        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>HealthTech · Nutrition AI</div>

        <h1 style={{
          fontFamily: 'var(--ff-display)',
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 500,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          marginBottom: '1.5rem',
          background: 'linear-gradient(90deg, var(--dark) 25%, var(--accent) 50%, var(--dark) 75%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'shimmer 3s linear infinite',
        }}>
          Coming Soon
        </h1>

        <p style={{ fontSize: '17px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, maxWidth: '480px', marginBottom: '2.5rem' }}>
          This case study is being finalized — documenting the UX decisions behind Tableau dashboards, from layout and chart selection to colour systems and technical constraints.
        </p>

        <Link href="/#work" style={{ fontSize: '13px', color: 'var(--dark)', textDecoration: 'none', letterSpacing: '0.05em', border: '1px solid var(--border)', padding: '0.75rem 1.5rem', borderRadius: '4px', transition: 'background 0.2s' }}>
          ← Explore other work
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}