"use client";
import Link from "next/link";
import { useState } from "react";

export default function IngressAcademy() {
  const [activeSlide, setActiveSlide] = useState(0);

  const screens = [
    { label: 'Homepage Redesign', sub: 'Clearer value proposition and guided user journey from first visit', img: '/ingress-home.jpg' },
    { label: 'Course Detail Page', sub: 'Restructured information hierarchy for faster decision-making', img: '/training.jpg' },
    { label: 'Learning Roadmaps', sub: 'Career-oriented course sequences — showing the full path from beginner to senior-level roles', img: '/roadmap.jpg' },
    { label: 'Navigation System', sub: 'Reorganized menu structure with predictable, hierarchical flow', img: '/ingress-courses.jpg' },
    { label: 'Scholarship', sub: 'Dedicated page presenting scholarship opportunities and eligibility clearly', img: '/scholarship.jpg' },
    { label: 'Accessibility Layer', sub: 'Contrast fixes, readable pairings, and consistent interactive states', img: '/accesibility.jpg' },
  ];
    

  const bgs = ['#E8E2D9', '#DFD8CE', '#D8D0C4', '#CFC8BC', '#C6BFB3', '#BDB8AA'];

  const Frame = ({ bg, label }: { bg: string; label: string }) => (
    <div style={{ padding: '3rem 5rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--warm)' }}>
      <div style={{ background: '#e8e4dc', borderRadius: '16px', padding: '1.5rem' }}>
        <div style={{ borderRadius: '10px', width: '100%', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, overflow: 'hidden' }}>
          <span style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--border)', fontWeight: 300 }}>{label}</span>
        </div>
      </div>
    </div>
  );

  const sec: React.CSSProperties = {
    padding: '4rem 5rem',
    borderBottom: '1px solid var(--border)',
  };

  return (
    <>
      <style>{`
        .next-link:hover { background: var(--warm) !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 5rem', borderBottom: '1px solid var(--border)', background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ fontFamily: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>Nazrin.</Link>
        <Link href="/#work" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>← Back to work</Link>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '5rem 5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>EdTech · UX Redesign · Web Platform</div>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          Ingress Academy
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '2rem', paddingBottom: '2rem' }}>
          {[
            { label: 'Role', value: 'Product Designer' },
            { label: 'Platform', value: 'Educational Website' },
            { label: 'Scope', value: 'UX Audit · UI Redesign · IA · Accessibility' },
            { label: 'Type', value: 'UX Redesign' },
          ].map((item, i) => (
            <div key={item.label} style={{ paddingRight: '2rem', borderRight: i < 3 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '2rem' : '0' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.label}</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COVER */}
      <div style={{ width: '100%', height: '786px', overflow: 'hidden' }}>
          <img src="/ingress-cover.jpg" alt="Ingress Academy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* OVERVIEW */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Overview</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Strong content, held back by weak structure</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              This project focused on redesigning an existing learning platform to resolve usability issues, improve accessibility, and create a clearer path from discovery to enrollment.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              The platform already offered valuable educational content, but the experience lacked structure, consistency, and visual clarity. The goal was not to replace what worked — but to make it visible, trustworthy, and easy to act on.
            </p>
          </div>
        </div>
      </section>

      {/* UX AUDIT */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>UX Audit</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>A structured audit surfaced the real problems</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Before proposing any redesign, I conducted a full UX audit of the existing website — reviewing every page against accessibility standards, design consistency principles, and interaction patterns. The findings below are drawn directly from that audit and shaped every subsequent design decision.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

          {/* VISUAL DESIGN */}
          <div style={{ border: '1px solid var(--border)', background: 'var(--cream)' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>01 · Visual Design & Consistency</span>
            </div>
            <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                'White text with dark shadow over images and mixed typefaces — an outdated visual style misaligned with modern design trends',
                'Multiple font versions and inconsistent letter spacing values used across pages',
                'Buttons inconsistent both visually (colour and border styles) and logically across the site',
                'Icon sizes, subtitle styles, and colours varied without a system — no standard approach',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#c0b8b0', fontSize: '11px', marginTop: '4px', flexShrink: 0 }}>✗</span>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ACCESSIBILITY */}
          <div style={{ border: '1px solid var(--border)', background: 'var(--cream)' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>02 · Accessibility</span>
            </div>
            <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                'White text on blue navigation background failed contrast requirements for users with lower visual acuity',
                'Hero section background images changed rapidly — creating perception and readability problems',
                'Blue text on white backgrounds did not guarantee clear legibility for all users',
                'Dark text rendered on dark backgrounds in the selected course category state — a direct accessibility failure',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#c0b8b0', fontSize: '11px', marginTop: '4px', flexShrink: 0 }}>✗</span>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* LAYOUT & SPACING */}
          <div style={{ border: '1px solid var(--border)', background: 'var(--cream)' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>03 · Layout & Spacing</span>
            </div>
            <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                'No standard spacing system across the layout — padding values differed between the primary and secondary navigation levels',
                'Course category cards behaved unpredictably on hover, with content shifting and padding breaking',
                'Hover and default states of learning-area cards were inconsistent in both behaviour and content',
                '"Beginners welcome" was intended as a subtitle but rendered visually identical to body text — hierarchy was unreadable',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#c0b8b0', fontSize: '11px', marginTop: '4px', flexShrink: 0 }}>✗</span>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{f}</p>
                </div>
              ))}
            </div>
          </div>

          {/* NAVIGATION & INTERACTION */}
          <div style={{ border: '1px solid var(--border)', background: 'var(--cream)' }}>
            <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--border)' }}>
              <span style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>04 · Navigation & Interaction</span>
            </div>
            <div style={{ padding: '1.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                'Course categories were not presented as a tab view — the selected element was unclear at first glance, and switching between categories gave no feedback',
                'It was unclear which course belonged to which category — the mega menu lacked visible grouping logic',
                'The "Course" card header was visually almost identical to a button — misdirecting attention and breaking call-to-action conventions',
                'Slider navigation arrows in the hero and customers sections were visually inconsistent with each other',
                '"See all courses" call-to-action inside the navigation menu was neither standard nor intuitive',
              ].map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#c0b8b0', fontSize: '11px', marginTop: '4px', flexShrink: 0 }}>✗</span>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{f}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BEFORE FRAME */}
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <img src="/vs.jpg" alt="Before · Problem Areas Highlighted" style={{ width: '100%', height: '790px', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
      </div>

      {/* OBJECTIVES */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Objectives</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Four priorities that guided every design decision</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
          {[
            { num: '01', title: 'Simplify navigation', desc: 'Make it easier for users to browse courses and understand available learning paths.' },
            { num: '02', title: 'Improve accessibility', desc: 'Ensure readable contrast, stronger hierarchy, and better visual clarity throughout.' },
            { num: '03', title: 'Design consistency', desc: 'Create a cleaner spacing system and reusable layout structure across all pages.' },
            { num: '04', title: 'Conversion readiness', desc: 'Improve CTA visibility and reduce hesitation during the enrollment decision.' },
          ].map(item => (
            <div key={item.num} style={{ borderTop: '2px solid var(--accent)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>{item.num}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0.6rem' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ ...sec, background: 'var(--warm)' }}>
        <blockquote style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 400, lineHeight: 1.5, color: 'var(--dark)', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
          &ldquo;Good redesigns do more than modernize visuals — they remove friction from decision-making.&rdquo;
        </blockquote>
      </section>

      {/* APPROACH */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Approach</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Structural UX improvements with a polished, accessible UI</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { num: '01', title: 'Rebuilding navigation', desc: 'Courses reorganized into logical categories with clearer menu structure and faster discovery of relevant programs.' },
            { num: '02', title: 'Fixing contrast & readability', desc: 'Accessible text/background pairings introduced throughout. Hero sections redesigned for readability. Typography hierarchy improved.' },
            { num: '03', title: 'Creating a spacing system', desc: 'Standardized margin and padding values established. Better alignment across sections creates a more balanced, trustworthy visual rhythm.' },
            { num: '04', title: 'Strengthening user flow', desc: 'Clearer CTA placement, better page scanning behavior, and reduced visual friction guide users naturally toward enrollment.' },
            { num: '05', title: 'Homepage redesign', desc: 'The homepage was redesigned to communicate value immediately — what the platform offers, available categories, why to trust it, and how to start quickly.' },
            { num: '06', title: 'Course discovery experience', desc: 'Categorized browsing and more scannable layouts introduced, allowing users to compare and choose faster.' },
          ].map(item => (
            <div key={item.num} style={{ display: 'flex', gap: '3rem', padding: '2rem 0', borderTop: '1px solid var(--border)', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '40px', fontSize: '11px', color: 'var(--accent)', fontWeight: 500, paddingTop: '3px' }}>{item.num}</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </section>

      {/* SCREENS SLIDER — ArchiveX carousel */}
      <section style={sec}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Design</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Key screens & interactions</h2>
        </div>

       {/* CAROUSEL */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            transition: 'transform 0.4s ease',
            transform: `translateX(calc(50% - 35.7% - ${activeSlide + screens.length} * (71.4% + 1.5rem)))`,
          }}>
            {[...screens, ...screens, ...screens].map((screen, i) => {
              const isActive = i === activeSlide + screens.length;
              return (
                <div key={i} onClick={() => setActiveSlide(i - screens.length)}
                  style={{ flexShrink: 0, width: '71.4%', cursor: isActive ? 'default' : 'pointer', transition: 'all 0.4s ease', opacity: isActive ? 1 : 0.4, filter: isActive ? 'none' : 'blur(1.5px)', transform: isActive ? 'scale(1)' : 'scale(0.96)' }}>
                  <div style={{ background: '#e8e4dc', borderRadius: '8px', padding: '6px' }}>
                    <div style={{ borderRadius: '4px', width: '100%', height: '480px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bgs[i % screens.length] }}>
                      {screen.img
                        ? <img src={screen.img} alt={screen.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                        : <span style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--border)', fontWeight: 300 }}>{screen.label}</span>
                      }
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* ARROWS */}
          <button onClick={() => setActiveSlide(i => i - 1)}
            style={{ position: 'absolute', left: 'calc(14.3% + 1.25rem)', top: '50%', transform: 'translateY(-50%)', width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(0,0,0,0.25)', border: 'none', cursor: 'pointer', fontSize: '22px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, lineHeight: 1 }}>‹</button>
          <button onClick={() => setActiveSlide(i => i + 1)}
            style={{ position: 'absolute', right: 'calc(14.3% + 1.25rem)', top: '50%', transform: 'translateY(-50%)', width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(0,0,0,0.25)', border: 'none', cursor: 'pointer', fontSize: '22px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, lineHeight: 1 }}>›</button>
        </div>

        {/* CAPTION */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0.2rem' }}>{screens[((activeSlide % screens.length) + screens.length) % screens.length].label}</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{screens[((activeSlide % screens.length) + screens.length) % screens.length].sub}</div>
          </div>
          <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{(((activeSlide % screens.length) + screens.length) % screens.length) + 1} / {screens.length}</span>
        </div>

        {/* DOTS */}
        <div style={{ display: 'flex', gap: '6px', marginTop: '1rem' }}>
          {screens.map((_, i) => {
            const norm = ((activeSlide % screens.length) + screens.length) % screens.length;
            return (
              <div key={i} onClick={() => setActiveSlide(i)}
                style={{ width: i === norm ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === norm ? 'var(--dark)' : 'var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }} />
            );
          })}
        </div>
      </section>

      {/* BEFORE VS AFTER */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Audit → Resolution</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Every finding, answered</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            Each audit category was translated into a concrete set of design changes. Nothing in the redesign was aesthetic preference — every decision traces back to a documented finding.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            {
              area: 'Visual Design & Consistency',
              before: 'Mixed typefaces, text-with-shadow over images, inconsistent buttons and icon styles',
              after: 'A single type system with a defined scale, one button hierarchy (primary / secondary / text), and a unified icon set applied across every page',
            },
            {
              area: 'Accessibility',
              before: 'Failed contrast on navigation, dark-on-dark selected states, rapidly changing hero backgrounds',
              after: 'WCAG-compliant contrast pairings throughout, clearly differentiated selected states, and a stable hero with a readable overlay',
            },
            {
              area: 'Layout & Spacing',
              before: 'No spacing standard — padding differed between navigation levels, cards shifted on hover',
              after: 'A spacing token system applied consistently, with predictable card behaviour and stable hover states',
            },
            {
              area: 'Navigation & Interaction',
              before: 'Unclear category tabs, no visible course grouping, card headers that looked like buttons, non-standard CTAs',
              after: 'A true tab pattern with clear active states, courses grouped visibly under categories, and one unmistakable call-to-action per context',
            },
          ].map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '200px 1fr 1fr', gap: '0', borderTop: '1px solid var(--border)' }}>
              <div style={{ padding: '1.5rem 1.5rem 1.5rem 0' }}>
                <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--dark)', lineHeight: 1.4 }}>{row.area}</div>
              </div>
              <div style={{ padding: '1.5rem', borderLeft: '1px solid var(--border)', background: 'var(--warm)' }}>
                <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>Before</div>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#c0b8b0', fontSize: '11px', marginTop: '4px', flexShrink: 0 }}>✗</span>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{row.before}</p>
                </div>
              </div>
              <div style={{ padding: '1.5rem', borderLeft: '1px solid var(--border)', background: 'var(--cream)' }}>
                <div style={{ fontSize: '10px', color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>After</div>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#5a8a5a', fontSize: '11px', marginTop: '4px', flexShrink: 0 }}>✓</span>
                  <p style={{ fontSize: '13px', color: 'var(--dark)', fontWeight: 400, lineHeight: 1.7, margin: 0 }}>{row.after}</p>
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </section>

      {/* IMPACT */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Impact</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>What changed</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
            {[
              { icon: '✦', label: 'Easier course discovery through structured categories and clearer labels' },
              { icon: '↑', label: 'Improved readability and accessibility across all content areas' },
              { icon: '→', label: 'Stronger first impression and increased user confidence and trust' },
              { icon: '↓', label: 'More conversion-ready experience with reduced enrollment friction' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--cream)', padding: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400, marginBottom: '0.75rem', color: 'var(--accent)' }}>{item.icon}</div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8, margin: 0 }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section style={{ ...sec, background: 'var(--dark)', color: 'var(--cream)', borderBottom: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Reflection</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2 }}>Strong content can still underperform</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300, marginBottom: '1.5rem' }}>
              This project reinforced that even strong content can underperform when structure and usability are weak. Small issues such as contrast, spacing, and navigation often create major friction that compounds across every page.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300 }}>
              Fixing fundamentals can dramatically improve how a product is perceived and used — without changing a single word of content.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <Link href="/work/agrosupport" className="next-link"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 5rem', textDecoration: 'none', color: 'var(--dark)', borderTop: '1px solid var(--border)', background: 'transparent', transition: 'background 0.2s' }}>
        <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next case study</span>
        <span style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>AgroSupport →</span>
      </Link>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}