"use client";
import Link from "next/link";
import { useState } from "react";

export default function Eagro() {
  const [activeSlide, setActiveSlide] = useState(0);

  const screens = [
    { label: 'Soil Intelligence Map', sub: 'Heatmap-based soil data exploration with layer switching' },
    { label: 'Crop Health Monitoring', sub: 'AI-driven real-time analysis of crop conditions' },
    { label: 'Crop Variety Recommendation', sub: 'Data-backed planting suggestions based on soil and environment' },
    { label: 'Modular Dashboard', sub: 'Role-specific content within a shared flexible architecture' },
    { label: 'Operator View', sub: 'Streamlined monitoring and reporting for field operators' },
    { label: 'Inspector Flow', sub: 'Structured inspection and compliance reporting interface' },
  ];

  const bgs = ['#E8E2D9', '#DFD8CE', '#D8D0C4', '#CFC8BC', '#C6BFB3', '#BDB8AA'];

  const Frame = ({ bg, label }: { bg: string; label: string }) => (
    <div style={{ padding: '3rem 5rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--warm)' }}>
      <div style={{ background: '#e8e4dc', borderRadius: '16px', padding: '1.5rem' }}>
        <div style={{ borderRadius: '10px', width: '100%', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bg, overflow: 'hidden' }}>
          <span style={{ width: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--border)', fontWeight: 300 }}>{label}</span>
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
        .thumb { transition: all 0.3s ease; cursor: pointer; }
        .thumb:hover { opacity: 1 !important; }
        .next-link:hover { background: var(--warm) !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 5rem', borderBottom: '1px solid var(--border)', background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ width: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>Alex Doe</Link>
        <Link href="/#work" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>← Back to work</Link>
      </nav>

      
      {/* HEADER */}
<section style={{ padding: '5rem 5rem 0', borderBottom: '1px solid var(--border)' }}>
  <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AgTech · B2B SaaS · Web Platform</div>
  <h1 style={{ width: 'var(--ff-display)', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
    Eagro
  </h1>
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '2rem', paddingBottom: '2rem' }}>
    {[
      { label: 'Role', value: 'Head of UX/UI Design' },
      { label: 'Platform', value: 'Web Dashboard' },
      { label: 'Scope', value: 'Research · UI · Design System' },
      { label: 'Users', value: 'Farmers · Operators · Inspectors' },
    ].map((item, i) => (
      <div key={item.label} style={{ paddingRight: '2rem', borderRight: i < 3 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '2rem' : '0' }}>
        <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.label}</div>
        <div style={{ fontSize: '13px', fontWeight: 500 }}>{item.value}</div>
      </div>
    ))}
  </div>
</section>
      {/* COVER */}
      <div style={{ padding: '3rem 5rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--warm)' }}>
        <div style={{ background: '#e8e4dc', borderRadius: '16px', padding: '0' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '520px' }}>
            <img src="/eagro-cover.png" alt="Eagro Platform" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
      </div>
      {/* OVERVIEW */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Overview</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>An agricultural platform rebuilt for real decisions</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              This project focused on redesigning a complex agricultural platform used by farmers, operators, and inspectors to monitor field conditions and make data-driven decisions.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              The goal was not only to improve usability, but to establish a scalable system that integrates AI into everyday decision-making.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Problem</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Not missing features — missing clarity</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              The platform had evolved over time without a unified structure, resulting in fragmented user experiences and inconsistent interaction patterns.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Although the system offered powerful capabilities, users struggled to navigate and interpret the information efficiently. The same data appeared in different formats across roles, and workflows lacked clarity.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              The issue was not missing functionality, but the effort required to understand and use it.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
          {[
            { title: 'Shared functionality across users', desc: 'Core features needed to work consistently regardless of user role.' },
            { title: 'Role-specific workflows', desc: 'Each audience had distinct needs that required contextual adaptation.' },
            { title: 'High-volume data interactions', desc: 'The interface had to handle complex datasets without overwhelming users.' },
          ].map(item => (
            <div key={item.title} style={{ borderTop: '2px solid var(--accent)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0.6rem' }}>{item.title}</div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OLD INTERFACE */}
      <div style={{ padding: '3rem 5rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', background: 'var(--warm)' }}>
        <div style={{ background: '#e8e4dc', borderRadius: '16px', padding: '0' }}>
          <div style={{ borderRadius: '16px', overflow: 'hidden', height: '520px' }}>
            <img src="/eagro-cover.png" alt="Eagro Platform" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
      </div>

      {/* APPROACH */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Approach</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>A hybrid model — unified core, role-specific flows</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Instead of fully unifying or separating the experience, a hybrid model was introduced. Core functionalities such as data visualization, monitoring, and reporting were standardized to ensure consistency.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              At the same time, role-specific workflows were preserved where necessary to maintain relevance. This approach reduced redundancy while supporting different user goals within a coherent system.
            </p>
          </div>
        </div>
      </section>

      {/* UX RESEARCH */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>UX Research</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Understanding how each user role thinks and works</h2>
        </div>

        {/* STEP 01 */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', paddingBottom: '3rem', marginBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
          <div>
            <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>01 · Desk Research</div>
            <h3 style={{ width: 'var(--ff-display)', fontSize: '1.3rem', fontWeight: 500, lineHeight: 1.3, marginBottom: '1rem' }}>Understanding the AgTech landscape</h3>
            <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>
              Analysed existing AgTech platforms and enterprise SaaS patterns. Reviewed agricultural workflow documentation and compliance requirements across multiple regions.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              { label: 'Platforms analysed', value: '12+' },
              { label: 'Key pain points identified', value: '8' },
              { label: 'Workflow types mapped', value: '5' },
              { label: 'Compliance frameworks reviewed', value: '3' },
            ].map(item => (
              <div key={item.label} style={{ background: 'var(--warm)', border: '1px solid var(--border)', padding: '1.5rem' }}>
                <div style={{ width: 'var(--ff-display)', fontSize: '2.5rem', fontWeight: 400, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.5rem' }}>{item.value}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* STEP 02 */}
        <div style={{ paddingBottom: '3rem', marginBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '2.5rem' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>02 · User Interviews</div>
              <h3 style={{ width: 'var(--ff-display)', fontSize: '1.3rem', fontWeight: 500, lineHeight: 1.3, marginBottom: '1rem' }}>Listening to farmers, operators & inspectors</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>
                Conducted interviews across all three user roles to understand real workflows, mental models, and daily frustrations with existing tools.
              </p>
            </div>
            <div style={{ background: '#e8e4dc', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ background: '#DFD8CE', borderRadius: '8px', height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ width: 'var(--ff-display)', fontSize: '1.2rem', color: 'var(--border)', fontWeight: 300 }}>Affinity Diagram · Interview Insights</span>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
            {[
              { quote: 'I know my fields better than any sensor. What I need is a tool that confirms what I see and tells me what to do next.', role: 'Farmer', region: 'Azerbaijan' },
              { quote: "The data is there but I don't know what to make of it. I have to call someone every time I need to act on it.", role: 'Farm Operator', region: 'Regional Office' },
              { quote: 'Every inspection follows a different format. I need one structured flow I can trust every time.', role: 'Field Inspector', region: 'Ministry of Agriculture' },
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: '2px solid var(--accent)', paddingLeft: '1.25rem' }}>
                <p style={{ fontSize: '14px', color: 'var(--dark)', lineHeight: 1.8, marginBottom: '1rem', fontStyle: 'italic' }}>&ldquo;{item.quote}&rdquo;</p>
                <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{item.role} · {item.region}</div>
              </div>
            ))}
          </div>
        </div>

        {/* STEP 03 — Personas */}
        <div style={{ paddingBottom: '3rem', marginBottom: '3rem', borderBottom: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>03 · User Personas</div>
              <h3 style={{ width: 'var(--ff-display)', fontSize: '1.3rem', fontWeight: 500, lineHeight: 1.3, marginBottom: '1rem' }}>Three roles, three distinct contexts</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>
                Each user group had fundamentally different goals, environments, and expectations from the platform.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
              {[
                { role: 'Farmer', goal: 'Fast field decisions', context: 'In the field, limited connectivity', needs: ['Quick crop health overview', 'Simple AI recommendations', 'Offline capability'] },
                { role: 'Operator', goal: 'Multi-farm oversight', context: 'Office, high data volume', needs: ['Aggregated analytics', 'Cross-farm comparison', 'Export & reporting'] },
                { role: 'Inspector', goal: 'Structured compliance', context: 'Field + office hybrid', needs: ['Standardised report flow', 'Photo & note capture', 'Submission tracking'] },
              ].map(p => (
                <div key={p.role} style={{ background: 'var(--warm)', border: '1px solid var(--border)', padding: '1.5rem' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '12px', color: 'var(--cream)', fontWeight: 500 }}>{p.role[0]}</span>
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0.3rem' }}>{p.role}</div>
                  <div style={{ fontSize: '12px', color: 'var(--accent)', marginBottom: '0.5rem' }}>{p.goal}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '1rem', fontWeight: 300 }}>{p.context}</div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {p.needs.map((n, i) => (
                      <div key={i} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                        <span style={{ color: 'var(--accent)', fontSize: '10px', marginTop: '4px' }}>✦</span>
                        <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300 }}>{n}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* STEP 04 — Competitive Analysis */}
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>04 · Competitive Analysis</div>
              <h3 style={{ width: 'var(--ff-display)', fontSize: '1.3rem', fontWeight: 500, lineHeight: 1.3, marginBottom: '1rem' }}>Benchmarking against the market</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>
                Evaluated leading AgTech platforms across UX maturity, AI integration, and multi-role support.
              </p>
            </div>
            <div style={{ background: '#e8e4dc', borderRadius: '12px', padding: '1.25rem' }}>
              <div style={{ background: 'var(--cream)', borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr' }}>
                  {['Platform', 'Multi-role', 'AI features', 'Design system', 'Mobile'].map(h => (
                    <div key={h} style={{ background: 'var(--dark)', padding: '0.75rem 1rem', fontSize: '11px', color: 'var(--cream)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</div>
                  ))}
                  {[
                    { name: 'Eagro (redesigned)', vals: ['✓', '✓', '✓', '✓'] },
                    { name: 'Competitor A', vals: ['✗', '✓', '✗', '✗'] },
                    { name: 'Competitor B', vals: ['✗', '✗', '✗', '✓'] },
                    { name: 'Competitor C', vals: ['✓', '✗', '✗', '✗'] },
                  ].map((row, ri) => (
                    <>
                      <div key={`${row.name}-name`} style={{ background: ri === 0 ? 'var(--warm)' : 'var(--cream)', padding: '0.75rem 1rem', fontSize: '13px', fontWeight: ri === 0 ? 500 : 300, borderTop: '1px solid var(--border)', color: 'var(--dark)' }}>{row.name}</div>
                      {row.vals.map((v, vi) => (
                        <div key={`${row.name}-${vi}`} style={{ background: ri === 0 ? 'var(--warm)' : 'var(--cream)', padding: '0.75rem 1rem', fontSize: '14px', borderTop: '1px solid var(--border)', borderLeft: '1px solid var(--border)', color: v === '✓' ? '#5a8a5a' : '#c0b8b0', fontWeight: 500, textAlign: 'center' }}>{v}</div>
                      ))}
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem', marginTop: '2rem' }}>
            {[
              { num: '01', finding: 'Most competitors optimised for one user type, neglecting multi-role workflows entirely.' },
              { num: '02', finding: 'AI features were commonly buried behind generic dashboards and rarely discovered.' },
              { num: '03', finding: 'Design systems were absent or inconsistent — a clear opportunity for differentiation.' },
            ].map(item => (
              <div key={item.num} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent)', fontWeight: 500, minWidth: '24px', paddingTop: '2px' }}>{item.num}</span>
                <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>{item.finding}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ ...sec, background: 'var(--warm)' }}>
        <blockquote style={{ width: 'var(--ff-display)', fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 400, lineHeight: 1.5, color: 'var(--dark)', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
          &ldquo;Great products do not just provide functionality — they reduce the effort required to think.&rdquo;
        </blockquote>
      </section>

      {/* AI SYSTEM */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>AI-Driven Decision System</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Intelligence embedded directly into workflows</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)' }}>
          {[
            { title: 'Crop Health Monitoring', desc: 'Real-time AI analysis of crop conditions, identifying potential issues before they escalate. Reduces reliance on manual inspection and allows earlier, more confident responses.' },
            { title: 'Crop Variety Recommendation', desc: 'Based on soil data and environmental conditions, the platform suggests optimal crop varieties. Turns complex datasets into clear, actionable seasonal planning guidance.' },
            { title: 'Soil Intelligence Map', desc: 'The central decision-making tool. Transforms complex soil datasets into an intuitive visual experience through heatmaps, switchable data layers, and zone-level analysis.' },
          ].map(item => (
            <div key={item.title} style={{ background: 'var(--cream)', padding: '2rem' }}>
              <div style={{ width: '32px', height: '2px', background: 'var(--accent)', marginBottom: '1.25rem' }} />
              <h3 style={{ width: 'var(--ff-display)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '1rem', lineHeight: 1.3 }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI FRAME */}
      <Frame bg="#D8D0C4" label="Soil Intelligence Map · AI Layer" />

      {/* DESIGN SYSTEM */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Design System</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>The foundation for scale</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '2rem' }}>
              A consistent design system was established to ensure visual and functional coherence across the platform. Standardized components, interaction patterns, and states reduced inconsistencies and enabled faster development and iteration.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Colour tokens', 'Typography scale', 'Component library', 'Interaction states', 'Data visualisation', 'Form patterns', 'Mobile components', 'Spacing system'].map(tag => (
                <span key={tag} style={{ background: 'var(--warm)', border: '1px solid var(--border)', padding: '5px 14px', fontSize: '12px', color: 'var(--muted)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DESIGN SYSTEM FRAME */}
      <Frame bg="#CFC8BC" label="Design System · Component Library" />

      {/* SCREENS SLIDER */}
      <section style={sec}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Design</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Key screens & interactions</h2>
        </div>

        <div style={{ background: '#e8e4dc', borderRadius: '16px', padding: '1.5rem', marginBottom: '1rem' }}>
          <div style={{ borderRadius: '10px', width: '100%', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bgs[activeSlide], transition: 'background 0.4s ease', overflow: 'hidden' }}>
            <span style={{ width: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--border)', fontWeight: 300 }}>{screens[activeSlide].label}</span>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
          <div>
            <div style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0.2rem' }}>{screens[activeSlide].label}</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{screens[activeSlide].sub}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '13px', color: 'var(--muted)', marginRight: '0.5rem' }}>{activeSlide + 1} / {screens.length}</span>
            <button onClick={() => setActiveSlide(i => Math.max(0, i - 1))} disabled={activeSlide === 0}
              style={{ background: 'none', border: '1px solid var(--border)', width: '36px', height: '36px', cursor: 'pointer', color: 'var(--muted)', borderRadius: '50%', fontSize: '15px', opacity: activeSlide === 0 ? 0.3 : 1, transition: 'opacity 0.2s' }}>←</button>
            <button onClick={() => setActiveSlide(i => Math.min(screens.length - 1, i + 1))} disabled={activeSlide === screens.length - 1}
              style={{ background: 'none', border: '1px solid var(--border)', width: '36px', height: '36px', cursor: 'pointer', color: 'var(--muted)', borderRadius: '50%', fontSize: '15px', opacity: activeSlide === screens.length - 1 ? 0.3 : 1, transition: 'opacity 0.2s' }}>→</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: '0.5rem' }}>
          {screens.map((_, i) => (
            <div key={i} className="thumb" onClick={() => setActiveSlide(i)}
              style={{ background: bgs[i], height: '60px', borderRadius: '4px', border: i === activeSlide ? '2px solid var(--dark)' : '2px solid transparent', opacity: i === activeSlide ? 1 : 0.45, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Impact</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>What changed</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
            {[
              { icon: '→', label: 'Faster and more confident decision-making across all user roles' },
              { icon: '↓', label: 'Reduced cognitive load through clearer information hierarchy' },
              { icon: '✦', label: 'Improved clarity and consistency across the full platform' },
              { icon: '↑', label: 'Stronger foundation for future scalability and feature growth' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--cream)', padding: '1.5rem' }}>
                <div style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400, marginBottom: '0.75rem', color: 'var(--accent)' }}>{item.icon}</div>
                <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>{item.label}</p>
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
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2 }}>Structuring complexity, not eliminating it</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300, marginBottom: '1.5rem' }}>
              This project reinforced the importance of structuring complexity rather than eliminating it. Designing for multiple user roles requires balancing shared experiences with contextual needs.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300, marginBottom: '1.5rem' }}>
              A well-defined system has a greater long-term impact than isolated interface improvements.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300 }}>
              If revisited, the next step would be to introduce deeper user validation and further refine personalization across roles.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <Link href="/work/finance-dashboard" className="next-link"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 5rem', textDecoration: 'none', color: 'var(--dark)', borderTop: '1px solid var(--border)', background: 'transparent', transition: 'background 0.2s' }}>
        <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next case study</span>
        <span style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>Finance Dashboard →</span>
      </Link>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Alex Doe. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}