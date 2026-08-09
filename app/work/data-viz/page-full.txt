"use client";
import Link from "next/link";
import { useState } from "react";

function AccordionItem({ item, defaultOpen }: { item: any; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen || false);

  return (
    <div style={{ borderTop: '1px solid var(--border)' }}>
      <button onClick={() => setOpen(o => !o)}
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 0', background: 'none', border: 'none', cursor: 'pointer', width: 'var(--ff-body)', textAlign: 'left' }}>
        <span style={{ fontSize: '15px', fontWeight: 500, color: 'var(--dark)' }}>{item.title}</span>
        <span style={{ fontSize: '18px', color: 'var(--muted)', transition: 'transform 0.3s', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', display: 'inline-block' }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom: '2rem' }}>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '2rem', maxWidth: '680px' }}>{item.desc}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {item.points.map((p: any, i: number) => (
                <div key={i} style={{ padding: '1rem 0', borderTop: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.3rem' }}>{p.label}</div>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{p.text}</div>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--border)' }} />
            </div>
            <div style={{ background: '#e8e4dc', borderRadius: '12px', overflow: 'hidden', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {item.img ? (
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
              ) : (
                <span style={{ width: 'var(--ff-display)', fontSize: '1rem', color: 'var(--border)', fontWeight: 300 }}>{item.title} · Screenshot</span>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function DataViz() {
  const sec: React.CSSProperties = {
    padding: '4rem 5rem',
    borderBottom: '1px solid var(--border)',
  };

  const accordionItems = [
    {
      id: 'layout',
      title: 'Layout & hierarchy',
      desc: 'Analytics teams sketch by data availability — not by reading order. I establish a reading hierarchy first: one primary metric, supporting context below, detail at the bottom.',
      img: '',
      points: [
        { label: 'F-pattern reading', text: 'Most critical KPI goes top-left. Secondary metrics follow natural reading order.' },
        { label: 'One primary metric', text: 'Every dashboard needs one number that answers the central question instantly.' },
        { label: 'Progressive detail', text: 'Summary at top, detail below. Users who need the number get it; users who need context can scroll.' },
        { label: 'Consistent grid', text: 'Misaligned elements create cognitive noise. A strict grid reduces visual friction.' },
      ]
    },
    {
      id: 'charts',
      title: 'Chart type selection',
      desc: 'Every chart type answers a different question. Choosing the wrong one doesn\'t just look wrong — it misleads. I map each data relationship to the most appropriate visual encoding.',
      img: '',
      points: [
        { label: 'Bar chart', text: 'Comparing discrete categories. Best for comparisons — humans judge length better than angle.' },
        { label: 'Line chart', text: 'Showing trends over continuous time. Lines imply connection — only use when data between points is meaningful.' },
        { label: 'KPI card', text: 'Single most important metric with context. The most-read element on any dashboard.' },
        { label: 'Pie / donut', text: 'Part-to-whole with fewer than 4 segments only. A bar chart almost always communicates the same thing more clearly.' },
      ]
    },
    {
      id: 'colour',
      title: 'Colour & accessibility',
      desc: 'In data visualization, colour is a data channel — not decoration. I define a colour system before building any dashboard and test every palette for colour-blind accessibility.',
      img: '',
      points: [
        { label: 'Sequential palettes', text: 'One hue, varying lightness — for data that goes from low to high. Never use a rainbow gradient.' },
        { label: 'Diverging palettes', text: 'Two hues meeting at neutral — for above/below target, positive/negative data.' },
        { label: 'Highlight colour', text: 'One accent colour for the most important data point. Everything else is grey.' },
        { label: 'Accessibility test', text: 'Every palette tested against deuteranopia and protanopia simulations before handoff.' },
      ]
    },
    {
      id: 'constraints',
      title: 'Tableau constraints',
      desc: 'Tableau has real technical limitations. Designing without accounting for them leads to handoff failures and broken layouts. I document constraints and solutions as part of every delivery.',
      img: '',
      points: [
        { label: 'Fixed layout system', text: 'I design at a fixed resolution and specify exact dashboard dimensions. Separate views for mobile and desktop.' },
        { label: 'Limited typography', text: 'I work within Tableau\'s font system and use size, weight, and colour contrast to establish hierarchy.' },
        { label: 'Calculated fields', text: 'I write UX logic in plain language in the spec so developers can translate it to the correct Tableau calculation.' },
        { label: 'Filter scope', text: 'I map filter scope explicitly — which filter affects which sheets — and test interaction behaviour before delivery.' },
      ]
    },
  ];

  return (
    <>
      <style>{`
        .next-link:hover { background: var(--warm) !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 5rem', borderBottom: '1px solid var(--border)', background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ width: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>Nazrin.</Link>
        <Link href="/#work" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>← Back to work</Link>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '5rem 5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Data Visualization · Tableau · UX</div>
        <h1 style={{ width: 'var(--ff-display)', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          Data Viz & Dashboards
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '2rem', paddingBottom: '2rem' }}>
          {[
            { label: 'Role', value: 'UX Designer · Data Viz' },
            { label: 'Tool', value: 'Tableau' },
            { label: 'Scope', value: 'Layout · Chart Selection · Colour · Constraints' },
            { label: 'Sectors', value: 'Multiple industries' },
          ].map((item, i) => (
            <div key={item.label} style={{ paddingRight: '2rem', borderRight: i < 3 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '2rem' : '0' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.label}</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Overview</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Data that gets read — and acted on</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Data analytics teams produce insights. My role was to make those insights visible, scannable, and immediately actionable — translating raw sketches and data requirements into Tableau dashboards that decision-makers could actually use.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              This work spans multiple sectors and project types. The through-line is the same: every layout decision, every chart choice, every colour has a reason — rooted in how people read data under real working conditions.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>My process</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>From analytics team sketch to final dashboard</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { num: '01', title: 'Understand the question behind the data', desc: 'Before touching layout or chart types, I work with the analytics team to understand what decision this dashboard needs to support. What does the viewer need to know in the first 10 seconds? What will they do with this information?' },
            { num: '02', title: 'Audit the sketch for cognitive load', desc: 'Analytics teams often think in data — not in how data is perceived. I review their sketches for information density, visual hierarchy, and whether the most important metric is actually the most visible thing on screen.' },
            { num: '03', title: 'Select chart types based on the comparison being made', desc: 'Every chart type answers a different question. Choosing the wrong one doesn\'t just look wrong — it misleads. I map each data relationship to the most appropriate visual encoding before touching Tableau.' },
            { num: '04', title: 'Apply a colour system with accessibility in mind', desc: 'Colour in data visualization is functional, not decorative. I define a palette that encodes meaning consistently, works for colour-blind users, and doesn\'t compete with the data itself.' },
            { num: '05', title: 'Work within Tableau\'s constraints', desc: 'Tableau has real technical limitations. Some layouts are impossible natively; some interactions require workarounds. I document what is achievable, flag what requires custom SQL or calculated fields, and design to the tool — not against it.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '3rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', alignItems: 'flex-start' }}>
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

      {/* DESIGN DECISIONS */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Design decisions</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>How I think about each layer</h2>
        </div>
        {accordionItems.map((item, idx) => (
          <AccordionItem key={item.id} item={item} defaultOpen={idx === 0} />
        ))}
        <div style={{ borderTop: '1px solid var(--border)' }} />
      </section>

        {/* GALLERY */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Dashboard Gallery</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Selected Tableau dashboards</h2>
        </div>

        <div style={{ columns: 2, gap: '1rem' }}>
          {[
            { h: 320, label: 'Sales Performance Dashboard' },
            { h: 220, label: 'HR Workforce Overview' },
            { h: 280, label: 'Financial KPI Summary' },
            { h: 360, label: 'Supply Chain Analytics' },
            { h: 240, label: 'Marketing Campaign Tracker' },
            { h: 300, label: 'Executive Summary View' },
            { h: 260, label: 'Regional Revenue Breakdown' },
            { h: 340, label: 'Operational Metrics Board' },
            { h: 200, label: 'Customer Retention Analysis' },
            { h: 280, label: 'Budget vs Actuals' },
            { h: 320, label: 'Product Performance Matrix' },
            { h: 240, label: 'Headcount Planning View' },
          ].map((item, i) => (
            <div key={i} style={{ breakInside: 'avoid', marginBottom: '1rem' }}>
              <div style={{ background: '#e8e4dc', borderRadius: '8px', overflow: 'hidden', height: item.h, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: 'var(--ff-display)', fontSize: '0.9rem', color: 'var(--border)', fontWeight: 300, textAlign: 'center', padding: '0 1rem' }}>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Before & After</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>What changes when UX thinking is applied to data</h2>
        </div>

        {/* BEFORE/AFTER IMAGE */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
          <div style={{ background: '#e8e4dc', borderRadius: '12px', overflow: 'hidden', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ width: 'var(--ff-display)', fontSize: '1rem', color: 'var(--border)', fontWeight: 300 }}>Before · Analytics team sketch</span>
          </div>
          <div style={{ background: '#e8e4dc', borderRadius: '12px', overflow: 'hidden', height: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ width: 'var(--ff-display)', fontSize: '1rem', color: 'var(--border)', fontWeight: 300 }}>After · UX reviewed dashboard</span>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
          <div style={{ background: 'var(--warm)', padding: '2rem' }}>
            <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Analytics team sketch</div>
            {[
              'All metrics given equal visual weight',
              'Chart type chosen by familiarity, not data type',
              'Colour used decoratively — different colour per bar',
              'No reading hierarchy — eye doesn\'t know where to start',
              'Filters placed wherever space allows',
              'Tooltips left as Tableau default',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ color: '#c0b8b0', fontSize: '12px', marginTop: '3px' }}>✗</span>
                <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--cream)', padding: '2rem' }}>
            <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>After UX review</div>
            {[
              'One primary KPI card anchors the page, everything else supports it',
              'Chart type matches the comparison being made',
              'Colour encodes meaning — one highlight, everything else grey',
              'F-pattern layout — most important information top-left',
              'Filters grouped and positioned for workflow',
              'Tooltips designed as mini data stories',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ color: '#5a8a5a', fontSize: '12px', marginTop: '3px' }}>✓</span>
                <span style={{ fontSize: '13px', color: 'var(--dark)', fontWeight: 400 }}>{item}</span>
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
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2 }}>Data visualization is UX — with higher stakes</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300, marginBottom: '1.5rem' }}>
              A confusing interface slows someone down. A confusing dashboard leads to a wrong decision. The stakes in data visualization are higher than most UX work — which is why the same rigor applied to product design needs to apply here.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300 }}>
              Working with technical constraints — Tableau&apos;s layout system, its limited typography, its filter logic — taught me that great design isn&apos;t about having unlimited tools. It&apos;s about knowing exactly what a tool can and cannot do, and designing to that edge precisely.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <Link href="/work/agrosupport" className="next-link"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 5rem', textDecoration: 'none', color: 'var(--dark)', borderTop: '1px solid var(--border)', background: 'transparent', transition: 'background 0.2s' }}>
        <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next case study</span>
        <span style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>AgroSupport →</span>
      </Link>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}