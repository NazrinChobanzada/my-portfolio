"use client";
import Link from "next/link";

export default function FinanceDashboard() {
  return (
    <>
      {/* NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 3rem', borderBottom: '1px solid var(--border)',
        background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100
      }}>
        <Link href="/" style={{ fontFamily: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>
          Alex Doe
        </Link>
        <Link href="/#work" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>
          ← Back to work
        </Link>
      </nav>

      {/* HERO */}
      <section style={{ padding: '5rem 3rem 3rem', maxWidth: '900px' }}>
        <div style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Mobile App · 2024
        </div>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 500, lineHeight: 1.1, marginBottom: '2rem', letterSpacing: '-0.02em' }}>
          Finance Dashboard
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.5rem 0', marginBottom: '3rem' }}>
          {[
            { label: 'Role', value: 'Lead UX Designer' },
            { label: 'Duration', value: '3 months' },
            { label: 'Tools', value: 'Figma, Miro' },
          ].map(item => (
            <div key={item.label}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.label}</div>
              <div style={{ fontSize: '14px', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COVER */}
      <div style={{ background: '#E8E2D9', height: '500px', margin: '0 3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontSize: '5rem', color: 'var(--border)', fontWeight: 300 }}>Cover Image</span>
      </div>

      {/* SUMMARY */}
      <section style={{ padding: '5rem 3rem', maxWidth: '700px' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Summary</div>
        <p style={{ fontSize: '18px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
          Redesigning the personal finance tracking experience to help users understand their spending habits with clarity and calm — without the anxiety that most finance apps create.
        </p>
      </section>

      {/* DIVIDER */}
      <div style={{ borderTop: '1px solid var(--border)', margin: '0 3rem' }} />

      {/* PROBLEM */}
      <section style={{ padding: '5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', maxWidth: '1000px' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Problem</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Why do finance apps feel overwhelming?</h2>
        </div>
        <div>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1rem' }}>
            Most finance apps bombard users with numbers, charts, and alerts — creating anxiety rather than clarity. Users abandon them within the first week.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The challenge was to design an experience that feels calm, trustworthy, and actually helps users make better financial decisions.
          </p>
        </div>
      </section>

      {/* IMAGE PLACEHOLDER */}
      <div style={{ margin: '0 3rem', background: '#DFD8CE', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', color: 'var(--border)', fontWeight: 300 }}>Process / Research</span>
      </div>

      {/* PROCESS */}
      <section style={{ padding: '5rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '4rem', maxWidth: '1000px' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Process</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Research & key insights</h2>
        </div>
        <div>
          {[
            { num: '01', text: 'Conducted 8 user interviews to understand pain points with existing finance apps.' },
            { num: '02', text: 'Identified that users want a weekly summary, not real-time data overload.' },
            { num: '03', text: 'Defined 3 core principles: calm, clear, and actionable.' },
          ].map(item => (
            <div key={item.num} style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 500, minWidth: '24px', paddingTop: '3px' }}>{item.num}</span>
              <p style={{ fontSize: '15px', lineHeight: 1.8, color: 'var(--muted)', fontWeight: 300 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGNS */}
      <section style={{ padding: '0 3rem 5rem' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '2rem' }}>The Design</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          {['#E8E2D9', '#DFD8CE', '#D8D0C4', '#CFC8BC'].map((bg, i) => (
            <div key={i} style={{ background: bg, height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', color: 'var(--border)', fontWeight: 300 }}>Screen {i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* LEARNINGS */}
      <section style={{ padding: '5rem 3rem', background: 'var(--warm)' }}>
        <div style={{ maxWidth: '700px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Impact & Learnings</div>
          <p style={{ fontSize: '18px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The redesign reduced user drop-off by 40% in testing. The biggest learning: simplicity is not about removing features — it&apos;s about revealing the right information at the right time.
          </p>
        </div>
      </section>

      {/* NEXT PROJECT */}
      <section style={{ padding: '4rem 3rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next project</span>
        <Link href="/work/design-system" style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 500, textDecoration: 'none', color: 'var(--dark)', letterSpacing: '-0.02em' }}>
          Design System →
        </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 3rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Alex Doe. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}