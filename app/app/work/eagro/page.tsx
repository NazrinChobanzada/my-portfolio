"use client";
import Link from "next/link";
import { useState } from "react";

export default function Eagro() {
  const [activeSlide, setActiveSlide] = useState(0);

  const screens = [
    { label: 'Dashboard Overview', sub: 'Main analytics hub for farm operators' },
    { label: 'Field Monitoring', sub: 'Real-time crop health and sensor data' },
    { label: 'AI Recommendations', sub: 'Actionable insights driven by machine learning' },
    { label: 'Inspection Reports', sub: 'Structured report flow for field inspectors' },
    { label: 'Mobile Scouting', sub: 'Field-first mobile interface for on-site use' },
    { label: 'Analytics & Reports', sub: 'Data visualisation and yield tracking' },
  ];

  const bgs = ['#E8E2D9', '#DFD8CE', '#D8D0C4', '#CFC8BC', '#C6BFB3', '#BDB8AA'];

  return (
    <>
      <style>{`
        .thumb { transition: all 0.3s ease; cursor: pointer; }
        .thumb:hover { opacity: 1 !important; }
        .back-link { transition: color 0.2s; }
        .back-link:hover { color: var(--dark) !important; }
        .impact-num { font-family: var(--ff-display); font-size: 3.5rem; font-weight: 500; line-height: 1; margin-bottom: 0.5rem; }
        .impact-label { font-size: 13px; color: var(--muted); font-weight: 300; line-height: 1.6; }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 3rem', borderBottom: '1px solid var(--border)', background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontFamily: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>
          Alex Doe
        </Link>
        <Link href="/#work" className="back-link" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>
          ← Back to work
        </Link>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '5rem 3rem 3rem' }}>
        <div style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>
          SaaS · B2B · AgTech
        </div>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Eagro
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--muted)', fontWeight: 300, maxWidth: '600px', lineHeight: 1.8, marginBottom: '3rem' }}>
          Redesigning an AI-driven agricultural platform to make powerful tools accessible to farmers, operators, and field inspectors.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', borderTop: '1px solid var(--border)' }}>
          {[
            { label: 'Role', value: 'UX Designer' },
            { label: 'Scope', value: 'Research · UI · Design System' },
            { label: 'Platform', value: 'Web App' },
            { label: 'Users', value: 'Farmers · Operators · Inspectors' },
            { label: 'Industry', value: 'AgTech / B2B SaaS' },
          ].map((item, i) => (
            <div key={item.label} style={{ padding: '1.25rem 0', borderRight: i < 4 ? '1px solid var(--border)' : 'none', paddingRight: i < 4 ? '2rem' : '0', paddingLeft: i > 0 ? '2rem' : '0' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.label}</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COVER */}
      <div style={{ background: '#E8E2D9', height: '620px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontSize: '5rem', color: 'var(--border)', fontWeight: 300 }}>Eagro · Cover</span>
        <div style={{ position: 'absolute', bottom: '1.5rem', right: '2rem', fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.08em' }}>Eagro Platform · Overview</div>
      </div>

      {/* OVERVIEW */}
      <section style={{ padding: '6rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Overview</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>An AI platform built for the field</h2>
        </div>
        <div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
            Eagro is an AI-driven agricultural management platform serving farmers, institutional operators, and field inspectors. The platform aggregates crop monitoring, field analytics, and compliance reporting into a single interface.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Despite its powerful capabilities, the existing product suffered from an outdated design language and overly complex information architecture — creating friction for users who needed fast, confident decisions in the field.
          </p>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: '6rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Problem</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Powerful tools, poor adoption</h2>
        </div>
        <div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '2rem' }}>
            The original Eagro interface exposed too much complexity at once. Users across all three audiences — farmers, operators, and inspectors — were struggling to complete core tasks efficiently. The design had grown without a coherent system, resulting in inconsistent patterns, overloaded screens, and a steep learning curve.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { title: 'Outdated visual language', desc: 'Interface patterns had not evolved with the product, creating a mismatch between capability and presentation.' },
              { title: 'Complex navigation', desc: 'Too many options visible simultaneously, with no clear hierarchy guiding users to their primary tasks.' },
              { title: 'No design system', desc: 'Inconsistent components across screens created cognitive overhead and slowed development.' },
              { title: 'Multi-role confusion', desc: 'Farmers, operators, and inspectors shared the same interface with no role-specific optimisation.' },
            ].map(item => (
              <div key={item.title} style={{ background: 'var(--warm)', padding: '1.5rem', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL WIDTH IMAGE */}
      <div style={{ background: '#DFD8CE', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', color: 'var(--border)', fontWeight: 300 }}>Before · Old Interface</span>
      </div>

      {/* UX RESEARCH */}
      <section style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>UX Research</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Understanding how each user role thinks and works</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Research focused on three distinct user roles with very different contexts of use — from farmers working in the field with limited connectivity, to institutional operators managing large-scale programs from the office.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
          {[
            {
              phase: '01 · Desk Research',
              title: 'Understanding the AgTech landscape',
              points: [
                'Analysed existing AgTech platforms and enterprise SaaS patterns',
                'Reviewed agricultural workflow documentation and compliance requirements',
                'Identified usability patterns that work for non-technical field users',
              ]
            },
            {
              phase: '02 · User Interviews',
              title: 'Listening to farmers, operators & inspectors',
              points: [
                'Farmers prioritised speed — they needed to complete tasks in under 2 minutes while in the field',
                'Operators needed clear data aggregation across multiple farms without switching contexts',
                'Inspectors required structured, exportable report flows with no room for ambiguity',
              ]
            },
            {
              phase: '03 · Competitive Analysis',
              title: 'Benchmarking against the market',
              points: [
                'Most competitors optimised for one user type, neglecting multi-role workflows',
                'AI features were commonly buried behind generic dashboards',
                'Design systems were rarely consistent — a clear opportunity for differentiation',
              ]
            },
          ].map(item => (
            <div key={item.phase} style={{ background: 'var(--cream)', padding: '2rem' }}>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>{item.phase}</div>
              <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '1.5rem', lineHeight: 1.3 }}>{item.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {item.points.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '12px', marginTop: '4px', flexShrink: 0 }}>✦</span>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ padding: '5rem 3rem', background: 'var(--warm)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.4rem,3vw,2rem)', fontWeight: 400, lineHeight: 1.5, marginBottom: '1.5rem', color: 'var(--dark)' }}>
            "I don&apos;t need more data. I need the platform to tell me what to do with it."
          </div>
          <div style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>— Farm Operator · User Interview</div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section style={{ padding: '6rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Key Pain Points</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>What was breaking the experience</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { num: '01', title: 'Information overload', desc: 'Every screen tried to show everything at once. Users could not identify priority actions without scanning the entire interface.' },
            { num: '02', title: 'Inconsistent UI patterns', desc: 'Similar actions were triggered in different ways across the platform, forcing users to re-learn interactions constantly.' },
            { num: '03', title: 'AI features were invisible', desc: 'The most valuable part of the product — its AI recommendations — were buried in secondary screens and rarely discovered.' },
            { num: '04', title: 'No mobile consideration', desc: 'Farmers and inspectors often work without reliable connectivity in the field. The existing interface was desktop-only and data-heavy.' },
          ].map(item => (
            <div key={item.num} style={{ display: 'flex', gap: '2rem', padding: '1.5rem 0', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 500, minWidth: '28px', paddingTop: '3px' }}>{item.num}</span>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0.4rem' }}>{item.title}</div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* UX STRATEGY */}
      <section style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>UX Strategy</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>From complexity to clarity</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The redesign strategy centred on three principles: progressive disclosure to reduce initial cognitive load, role-based optimisation to serve each user type appropriately, and surfacing AI value prominently within the primary workflow.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
          {[
            { num: '01', title: 'Progressive disclosure', desc: 'Show only what is needed for the current task. Advanced features revealed contextually, not all at once.' },
            { num: '02', title: 'Role-based design', desc: 'Distinct interface modes for farmers, operators, and inspectors — same platform, optimised entry points.' },
            { num: '03', title: 'AI-first surfaces', desc: 'AI recommendations elevated to the primary dashboard layer — actionable, contextual, and immediately visible.' },
          ].map(item => (
            <div key={item.num} style={{ borderTop: '2px solid var(--accent)', paddingTop: '1.5rem' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>{item.num}</div>
              <h3 style={{ fontSize: '15px', fontWeight: 500, marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DESIGN SYSTEM */}
      <section style={{ padding: '6rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', borderBottom: '1px solid var(--border)', background: 'var(--warm)' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Design System</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Building the foundation</h2>
        </div>
        <div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '2rem' }}>
            A core deliverable of the project was establishing a unified design system — the missing foundation that had allowed inconsistency to accumulate across the product. This included a component library, typography scale, colour system, and interaction patterns covering all three user contexts.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Colour tokens', 'Typography scale', 'Component library', 'Icon system', 'Form patterns', 'Data visualisation', 'Mobile components', 'Spacing system'].map(tag => (
              <span key={tag} style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: '5px 14px', fontSize: '12px', color: 'var(--muted)' }}>{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM IMAGE */}
      <div style={{ background: '#D8D0C4', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', color: 'var(--border)', fontWeight: 300 }}>Design System · Overview</span>
      </div>

      {/* SCREENS SLIDER */}
      <section style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Design</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Key screens & interactions</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The redesigned platform covers the full agricultural workflow — from real-time monitoring and AI-driven recommendations to field scouting and compliance reporting.
          </p>
        </div>

        {/* Main slide */}
        <div style={{ background: bgs[activeSlide], height: '560px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', transition: 'background 0.4s ease', position: 'relative' }}>
          <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', color: 'var(--border)', fontWeight: 300 }}>{screens[activeSlide].label}</span>
          <div style={{ position: 'absolute', bottom: '1.5rem', right: '2rem', fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.05em' }}>{activeSlide + 1} / {screens.length}</div>
        </div>

        {/* Label */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0.25rem' }}>{screens[activeSlide].label}</div>
          <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{screens[activeSlide].sub}</div>
        </div>

        {/* Thumbnails */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '0.5rem', marginBottom: '1.5rem' }}>
          {screens.map((screen, i) => (
            <div
              key={i}
              className="thumb"
              onClick={() => setActiveSlide(i)}
              style={{ background: bgs[i], height: '80px', border: i === activeSlide ? '2px solid var(--dark)' : '2px solid transparent', opacity: i === activeSlide ? 1 : 0.45, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{i + 1}</span>
            </div>
          ))}
        </div>

        {/* Prev / Next */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button onClick={() => setActiveSlide(i => Math.max(0, i - 1))} style={{ background: 'none', border: '1px solid var(--border)', padding: '0.6rem 1.25rem', fontSize: '13px', cursor: 'pointer', color: 'var(--muted)', borderRadius: '4px' }}>← Prev</button>
          <button onClick={() => setActiveSlide(i => Math.min(screens.length - 1, i + 1))} style={{ background: 'none', border: '1px solid var(--border)', padding: '0.6rem 1.25rem', fontSize: '13px', cursor: 'pointer', color: 'var(--muted)', borderRadius: '4px' }}>Next →</button>
        </div>
      </section>

      {/* IMPACT */}
      <section style={{ padding: '6rem 3rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '4rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Impact</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Results & reception</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The redesign was received positively across all user groups. The modernised interface and clearer information hierarchy significantly reduced the time users needed to complete core tasks, and AI features saw notably higher engagement after being surfaced prominently.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'var(--border)' }}>
          {[
            { num: '↑', label: 'Positive user feedback across all three roles after launch' },
            { num: '✦', label: 'AI recommendation features discovered and used by the majority of users' },
            { num: '↓', label: 'Significant reduction in support queries related to navigation confusion' },
            { num: '→', label: 'Unified design system adopted by the development team immediately' },
          ].map((item, i) => (
            <div key={i} style={{ background: 'var(--cream)', padding: '2rem' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', fontWeight: 400, marginBottom: '1rem', color: 'var(--accent)' }}>{item.num}</div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TAKEAWAY */}
      <section style={{ padding: '6rem 3rem', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', background: 'var(--dark)', color: 'var(--cream)' }}>
        <div>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Takeaway</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2 }}>What this project taught me</h2>
        </div>
        <div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300, marginBottom: '1.5rem' }}>
            Eagro reinforced that in complex B2B products, the biggest design challenge is rarely visual — it is structural. Users do not struggle because things look bad. They struggle because the information architecture does not reflect how they actually think.
          </p>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300 }}>
            Establishing a design system early was the single decision that had the greatest downstream impact — on consistency, development speed, and the overall quality of the final product.
          </p>
        </div>
      </section>

      {/* NEXT */}
      <section style={{ padding: '4rem 3rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)' }}>
        <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next project</span>
        <Link href="/work/finance-dashboard" style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 500, textDecoration: 'none', color: 'var(--dark)', letterSpacing: '-0.02em' }}>
          Finance Dashboard →
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