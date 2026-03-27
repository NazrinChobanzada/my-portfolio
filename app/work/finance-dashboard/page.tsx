"use client";
import Link from "next/link";
import { useState } from "react";

export default function FinanceDashboard() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { bg: '#E8E2D9', label: 'Entry Point — Dashboard Overview' },
    { bg: '#DFD8CE', label: 'Spending Breakdown' },
    { bg: '#D8D0C4', label: 'Weekly Summary View' },
    { bg: '#CFC8BC', label: 'Transaction Detail' },
  ];

  return (
    <>
      <style>{`
        .slide-btn { cursor: pointer; transition: all 0.3s ease; }
        .slide-btn:hover { opacity: 1 !important; }
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: var(--dark) !important; }
      `}</style>

      {/* NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 3rem', borderBottom: '1px solid var(--border)',
        background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100
      }}>
        <Link href="/" style={{ fontFamily: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>
          Alex Doe
        </Link>
        <Link href="/#work" className="nav-link" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>
          ← Back to work
        </Link>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '5rem 3rem 3rem' }}>
        <div style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          Mobile App · 2024
        </div>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2.5rem,5vw,4.5rem)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '3rem', maxWidth: '700px' }}>
          Finance Dashboard
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', borderTop: '1px solid var(--border)' }}>
          {[
            { label: 'Role', value: 'Lead UX Designer' },
            { label: 'Duration', value: '3 months' },
            { label: 'Tools', value: 'Figma, Miro' },
            { label: 'Year', value: '2024' },
          ].map((item, i) => (
            <div key={item.label} style={{ padding: '1.25rem 0', borderRight: i < 3 ? '1px solid var(--border)' : 'none', paddingRight: '2rem', paddingLeft: i > 0 ? '2rem' : '0' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.label}</div>
              <div style={{ fontSize: '14px', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COVER — full width */}
      <div style={{ background: '#E8E2D9', height: '600px', margin: '0', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontSize: '4rem', color: 'var(--border)', fontWeight: 300 }}>Cover Image</span>
        <div style={{ position: 'absolute', bottom: '1.5rem', right: '2rem', fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.08em' }}>Cover · Finance Dashboard</div>
      </div>

      {/* SUMMARY */}
      <section style={{ padding: '6rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Summary</div>
        </div>
        <p style={{ fontSize: '20px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, maxWidth: '600px' }}>
          Redesigning the personal finance tracking experience to help users understand their spending habits with clarity and calm — without the anxiety that most finance apps create.
        </p>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: '6rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Problem</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', fontWeight: 500, lineHeight: 1.3 }}>Why do finance apps feel overwhelming?</h2>
        </div>
        <div>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
            Most finance apps bombard users with numbers, charts, and alerts — creating anxiety rather than clarity. Users abandon them within the first week.
          </p>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The challenge was to design an experience that feels calm, trustworthy, and actually helps users make better financial decisions.
          </p>
        </div>
      </section>

      {/* IMAGE — full width */}
      <div style={{ background: '#DFD8CE', height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', color: 'var(--border)', fontWeight: 300 }}>Research & Process</span>
      </div>

      {/* PROCESS */}
      <section style={{ padding: '6rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Process</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.6rem', fontWeight: 500, lineHeight: 1.3 }}>Research & key insights</h2>
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

      {/* SLIDER */}
      <section style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '2rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase' }}>The Design</div>
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{activeSlide + 1} / {slides.length}</span>
        </div>

        {/* Main slide */}
        <div style={{ background: slides[activeSlide].bg, height: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', transition: 'background 0.4s ease', position: 'relative' }}>
          <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', color: 'var(--border)', fontWeight: 300 }}>Screen {activeSlide + 1}</span>
        </div>

        {/* Slide label */}
        <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '1.5rem', letterSpacing: '0.03em' }}>{slides[activeSlide].label}</div>

        {/* Thumbnails */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {slides.map((slide, i) => (
            <div
              key={i}
              className="slide-btn"
              onClick={() => setActiveSlide(i)}
              style={{
                background: slide.bg,
                height: '100px',
                cursor: 'pointer',
                border: i === activeSlide ? '2px solid var(--dark)' : '2px solid transparent',
                opacity: i === activeSlide ? 1 : 0.5,
                transition: 'all 0.3s ease',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}
            >
              <span style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.05em' }}>{i + 1}</span>
            </div>
          ))}
        </div>

        {/* Prev / Next */}
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
          <button
            onClick={() => setActiveSlide(i => Math.max(0, i - 1))}
            style={{ background: 'none', border: '1px solid var(--border)', padding: '0.6rem 1.25rem', fontSize: '13px', cursor: 'pointer', color: 'var(--muted)', borderRadius: '4px' }}
          >
            ← Prev
          </button>
          <button
            onClick={() => setActiveSlide(i => Math.min(slides.length - 1, i + 1))}
            style={{ background: 'none', border: '1px solid var(--border)', padding: '0.6rem 1.25rem', fontSize: '13px', cursor: 'pointer', color: 'var(--muted)', borderRadius: '4px' }}
          >
            Next →
          </button>
        </div>
      </section>

      {/* LEARNINGS */}
      <section style={{ padding: '6rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', background: 'var(--warm)', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Impact & Learnings</div>
        </div>
        <p style={{ fontSize: '20px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
          The redesign reduced user drop-off by 40% in testing. The biggest learning: simplicity is not about removing features — it&apos;s about revealing the right information at the right time.
        </p>
      </section>

      {/* NEXT PROJECT */}
      <section style={{ padding: '4rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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