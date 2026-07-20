"use client";
import Link from "next/link";
import { useState } from "react";

export default function AgroSupport() {
  const [activeSlide, setActiveSlide] = useState(0);

  const screens = [
    { label: 'Opening screen', sub: 'Single question, no choice overload — cognitive load principle applied' },
    { label: 'Confirmation step', sub: 'Read-back protocol before giving financial figures' },
    { label: 'Subsidy result', sub: 'Structured card with plain language and verification disclaimer' },
  ];

  const bgs = ['#E8E2D9', '#DFD8CE', '#D8D0C4'];

  const sec: React.CSSProperties = {
    padding: '4rem 5rem',
    borderBottom: '1px solid var(--border)',
  };

  return (
    <>
      <style>{`
        .next-link:hover { background: var(--warm) !important; }
        .thumb { transition: all 0.3s ease; cursor: pointer; }
        .thumb:hover { opacity: 1 !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 5rem', borderBottom: '1px solid var(--border)', background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ width: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>Nazrin.</Link>
        <Link href="/#work" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>← Back to work</Link>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '5rem 5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>HFE · Conversational AI · AgTech</div>
        <h1 style={{ width: 'var(--ff-display)', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          AgroSupport
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '2rem', paddingBottom: '2rem' }}>
          {[
            { label: 'Role', value: 'HFE Designer · UI Design' },
            { label: 'Type', value: 'Concept / Portfolio' },
            { label: 'Scope', value: 'HFE · UX Research · UI · Figma' },
            { label: 'Status', value: 'In Development' },
          ].map((item, i) => (
            <div key={item.label} style={{ paddingRight: '2rem', borderRight: i < 3 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '2rem' : '0' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.label}</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COVER */}
      <div style={{ padding: '3rem 5rem', borderBottom: '1px solid var(--border)', background: 'var(--warm)' }}>
        <div style={{ background: '#e8e4dc', borderRadius: '16px', overflow: 'hidden', height: '520px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: 'var(--ff-display)', fontSize: '2rem', color: 'var(--border)', fontWeight: 300 }}>AgroSupport · Chatbot Interface</span>
        </div>
      </div>

      {/* OVERVIEW */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Overview</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Why a chatbot. Why farmers.</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Agricultural subsidy systems are complex by nature — eligibility varies by region, crop type, land size, certification status, and season. The people who need this information most are often smallholder farmers with limited digital literacy, patchy internet access, and no time to navigate bureaucratic portals.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              AgroSupport is a chatbot being built to make subsidy information accessible through natural conversation. My role covered HFE analysis and UI design — responsible for user research, failure mode analysis, interaction design, and wireframes before development handoff.
            </p>
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Context</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px', marginBottom: '1.5rem' }}>This project treats the chatbot as a human-system interface</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The "system" is government subsidy data and the "human" is a farmer making real financial decisions based on the bot's output. Errors here have economic consequences — which is why Human Factors Engineering principles guided every design decision.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'var(--border)' }}>
          {[
            { num: '01', title: 'Domain', desc: 'Agricultural subsidies — single-topic scope. Region + crop → entitlement amount.' },
            { num: '02', title: 'Primary channel', desc: 'Mobile browser. Low-bandwidth environments. One-thumb interaction assumed.' },
            { num: '03', title: 'AI backbone', desc: 'Conversational AI constrained by a structured instruction set defining scope, tone, and response format.' },
            { num: '04', title: 'Stakes', desc: 'Incorrect subsidy information leads to missed income or incorrect applications — real financial harm.' },
          ].map(item => (
            <div key={item.num} style={{ background: 'var(--cream)', padding: '1.5rem' }}>
              <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>{item.num}</div>
              <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* USER ANALYSIS */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>User Analysis</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Who is actually using this?</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            HFE starts with a precise description of the user population — not a marketing persona, but a realistic profile of capabilities, limitations, and context of use. For AgroSupport, this analysis shaped every design decision.
          </p>
        </div>

        {/* PERSONA */}
        <div style={{ background: 'var(--warm)', border: '1px solid var(--border)', padding: '2rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'var(--dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: '20px' }}>👨‍🌾</span>
            </div>
            <div>
              <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '0.2rem' }}>Ramiz, 54 — Smallholder Farmer</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '1rem', letterSpacing: '0.05em' }}>Wheat & vegetable grower · Ganja region · 12 hectares</div>
              <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8, margin: 0 }}>
                Accesses the web via a mid-range Android phone and occasionally desktop. Comfortable with basic web browsing and online search. Has heard about government subsidies from neighbors but doesn&apos;t know what he qualifies for or how to apply. Reads slowly on screen. Will abandon if confused within the first two messages.
              </p>
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: 'var(--border)' }}>
          {[
            { num: '01', title: 'Literacy', desc: 'Functional literacy. Short sentences, no abbreviations, no acronyms. Avoid terms like "eligibility criteria."' },
            { num: '02', title: 'Digital fluency', desc: 'Comfortable with web-based messaging and search. Conversational format lowers the entry barrier vs. form-based interfaces.' },
            { num: '03', title: 'Cognitive load tolerance', desc: 'Low. One question at a time. One topic per message. Too many options = abandonment.' },
            { num: '04', title: 'Technical context', desc: 'Rural connectivity. Interface must function with minimal data transfer and gracefully handle dropped connections.' },
          ].map(item => (
            <div key={item.num} style={{ background: 'var(--cream)', padding: '1.5rem' }}>
              <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>{item.num}</div>
              <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ ...sec, background: 'var(--warm)' }}>
        <blockquote style={{ width: 'var(--ff-display)', fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 400, lineHeight: 1.5, color: 'var(--dark)', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
          &ldquo;The farmer is not the problem. The interface is the problem. If an experienced adult cannot find what they need, the design has failed — not the user.&rdquo;
        </blockquote>
        <div style={{ marginTop: '1rem', paddingLeft: '1.5rem', fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>— Core HFE principle, adapted from Don Norman</div>
      </section>

      {/* FAILURE MODES */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Failure Mode Analysis</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>What can go wrong — and what happens if it does</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            HFE requires mapping failure modes before designing solutions. For a subsidy chatbot, failures aren&apos;t just inconvenient — they can result in a farmer making a financial decision based on wrong information. Eight failure modes were identified across two severity levels.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
          {[
            { severity: 'High', title: 'Wrong subsidy amount given', desc: 'Bot states incorrect AZN/hectare figure. Farmer plans based on it.', fix: 'Always qualify with "confirm with local authority"' },
            { severity: 'High', title: 'Region misunderstood', desc: 'Bot applies wrong regional rate. Subsidy rates differ significantly by region.', fix: 'Always confirm region before giving amounts' },
            { severity: 'High', title: 'Scope creep — medical / legal advice', desc: 'Bot answers outside its competence in a high-trust context.', fix: 'Hard scope boundary with redirect message' },
            { severity: 'High', title: 'Silent hallucination', desc: 'Bot invents a subsidy program with confidence. No indication of uncertainty.', fix: 'Always recommend official verification' },
            { severity: 'Medium', title: 'Crop name not recognized', desc: 'User writes local dialect name. Bot gives irrelevant response.', fix: 'Quick reply options for common crops' },
            { severity: 'Medium', title: 'User overwhelmed and abandons', desc: 'Bot asks multiple questions at once. User doesn\'t know which to answer first.', fix: 'One question per message, enforced in instruction set' },
            { severity: 'Medium', title: 'No recovery path after confusion', desc: 'User types something the bot doesn\'t understand. No "start over" option.', fix: 'Always offer "Correct my previous answer" option' },
            { severity: 'Medium', title: 'Outdated information', desc: 'Subsidy rates change seasonally. Bot gives last year\'s figures with confidence.', fix: 'Always include season disclaimer on figures' },
          ].map((item, i) => (
<div key={i} style={{ background: item.severity === 'High' ? '#fff8f8' : '#fffaf5', border: `1px solid ${item.severity === 'High' ? '#fecaca' : '#fed7aa'}`, borderTop: `3px solid ${item.severity === 'High' ? '#dc2626' : '#ea580c'}`, padding: '1.25rem' }}>              <div style={{ fontSize: '11px', fontWeight: 500, color: item.severity === 'High' ? '#dc2626' : '#ea580c', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.severity}</div>
              <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--dark)', marginBottom: '0.5rem', lineHeight: 1.4 }}>{item.title}</div>
              <div style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, marginBottom: '1rem' }}>{item.desc}</div>
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '0.75rem' }}>
                <div style={{ fontSize: '10px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>Mitigation</div>
                <div style={{ fontSize: '12px', color: 'var(--dark)', fontWeight: 300, lineHeight: 1.6 }}>{item.fix}</div>
              </div>
            </div>
          ))}
        </div>
      
      </section>

      {/* HFE PRINCIPLES */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Design Principles</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Five HFE principles, applied</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { tag: 'Cognitive Load', title: 'One question at a time', desc: 'Working memory can hold approximately 7±2 chunks of information (Miller\'s Law). Asking multiple questions simultaneously exceeds this limit for users under stress or with low digital fluency.', impl: 'Instruction set enforces single-question structure. Bot never asks for region and crop in the same message.' },
            { tag: 'Error Prevention', title: 'Confirm before acting', desc: 'In aviation HFE, read-back/hear-back protocols prevent communication errors in critical handoffs. The same logic applies here: confirm what was understood before providing financial information.', impl: 'Bot always restates the region and crop it heard before giving subsidy amounts.' },
            { tag: 'Feedback & Affordance', title: 'Quick replies reduce action cost', desc: 'Free-text entry introduces spelling variation and scope drift. Constraining the input space to recognized values at key decision points prevents both interpretation errors and out-of-scope queries.', impl: 'Common crops and regions surface as suggested inputs at critical steps. Free-text input remains available throughout.' },
            { tag: 'Plain Language', title: 'Write for the actual reading level', desc: 'HFE considers the full user population. Information systems serving the general public in high-stakes domains should be written at a reading level accessible to all intended users.', impl: 'No bureaucratic terms. "You can receive" not "you are entitled to receive." Amounts in clear numbers, not ranges where possible.' },
            { tag: 'Situation Awareness', title: 'User always knows where they are', desc: 'Endsley\'s Situation Awareness model identifies loss of SA as a root cause of human error. In a chatbot, the user must always understand what the bot understood and how to recover.', impl: 'Bot confirms understanding at each step. Recovery always available. No dead ends.' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: '3rem', padding: '2rem 0', borderTop: '1px solid var(--border)', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '11px', fontWeight: 500, color: 'var(--accent)', letterSpacing: '0.08em', textTransform: 'uppercase', paddingTop: '3px' }}>{item.tag}</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8, marginBottom: '0.75rem' }}>{item.desc}</p>
                <div style={{ fontSize: '13px', color: 'var(--dark)', fontWeight: 300, borderLeft: '2px solid var(--accent)', paddingLeft: '1rem', lineHeight: 1.7 }}>→ {item.impl}</div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--border)' }} />
        </div>
      </section>

      {/* DESIGN DECISIONS TABLE */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Design Rationale</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Key decisions and their justification</h2>
        </div>
        <div style={{ border: '1px solid var(--border)', overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 2fr', background: 'var(--dark)' }}>
            {['Decision', 'Alternative considered', 'HFE rationale'].map(h => (
              <div key={h} style={{ padding: '0.75rem 1.25rem', fontSize: '11px', color: 'var(--cream)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</div>
            ))}
          </div>
          {[
            { decision: 'Chatbot, not a form', alt: 'Multi-step web form with dropdowns', rationale: 'Conversational format matches how people naturally ask questions — especially where the query varies by person. A form forces users to understand the system\'s structure first; a chatbot meets them where they are.' },
            { decision: 'Single topic scope (subsidies only)', alt: 'General agricultural assistant', rationale: 'Scope creep increases hallucination risk and failure mode surface. Narrow scope = higher reliability = higher trust.' },
            { decision: 'Always verify before giving figures', alt: 'Immediate answer after crop + region', rationale: 'Read-back confirmation (aviation HFE) prevents the most costly failure: acting on misunderstood input. One extra message is worth it.' },
            { decision: 'Quick replies for common inputs', alt: 'Free-text only', rationale: 'Input normalization and error prevention. Suggested inputs constrain the input space at critical steps without removing free-text flexibility.' },
            { decision: 'Disclaimer on every financial figure', alt: 'Clean answers without caveats', rationale: 'Cognitive authority bias: users over-trust automated systems. Explicit verification reminder prevents over-reliance — a known failure mode in human-automation interaction.' },
          ].map((row, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 2fr', borderTop: '1px solid var(--border)', background: i % 2 === 0 ? 'var(--cream)' : 'var(--warm)' }}>
              <div style={{ padding: '1rem 1.25rem', fontSize: '13px', fontWeight: 500 }}>{row.decision}</div>
              <div style={{ padding: '1rem 1.25rem', fontSize: '13px', color: 'var(--muted)', fontWeight: 300, borderLeft: '1px solid var(--border)' }}>{row.alt}</div>
              <div style={{ padding: '1rem 1.25rem', fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, borderLeft: '1px solid var(--border)' }}>{row.rationale}</div>
            </div>
          ))}
        </div>
      </section>

      {/* KEY SCREENS */}
      <section style={sec}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Design</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Key screens — HFE decisions made visible</h2>
        </div>

        {/* CAROUSEL */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.4s ease', transform: `translateX(calc(-${activeSlide * 100}% / 1.4))` }}>
            {screens.map((screen, i) => (
              <div key={i} onClick={() => setActiveSlide(i)}
                style={{ flexShrink: 0, width: 'calc(71.4% - 1rem)', cursor: i !== activeSlide ? 'pointer' : 'default', transition: 'all 0.4s ease', opacity: i === activeSlide ? 1 : 0.45, transform: i === activeSlide ? 'scale(1)' : 'scale(0.95)' }}>
                <div style={{ background: '#e8e4dc', borderRadius: '16px', padding: '1.25rem' }}>
                  <div style={{ borderRadius: '10px', width: '100%', height: '480px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', background: bgs[i] }}>
                    <span style={{ width: 'var(--ff-display)', fontSize: '1.5rem', color: 'var(--border)', fontWeight: 300 }}>{screen.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CAPTION + ARROWS */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.25rem' }}>
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

        {/* DOTS */}
        <div style={{ display: 'flex', gap: '6px', marginTop: '1rem' }}>
          {screens.map((_, i) => (
            <div key={i} onClick={() => setActiveSlide(i)}
              style={{ width: i === activeSlide ? '20px' : '6px', height: '6px', borderRadius: '3px', background: i === activeSlide ? 'var(--dark)' : 'var(--border)', cursor: 'pointer', transition: 'all 0.3s ease' }} />
          ))}
        </div>
      </section>

      {/* WALKTHROUGH */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Validation</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Think-aloud walkthrough findings</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '2rem' }}>
              To validate interaction design decisions before engineering handoff, think-aloud walkthroughs were run with three participants matching the Ramiz persona using interactive wireframe prototypes. This allowed surfacing comprehension gaps and failure modes early — before development investment.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
              {[
                { icon: '✓', label: '3/3 participants reached subsidy figure without confusion' },
                { icon: '✓', label: 'Confirmation step caught 1 ambiguous crop name input' },
                { icon: '✓', label: 'No dead ends reached across all three sessions' },
                { icon: '✓', label: 'Average turns to answer: 3–4 conversational exchanges' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--cream)', padding: '1.25rem', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: '#065f46', fontSize: '13px', flexShrink: 0, fontWeight: 500 }}>{item.icon}</span>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* REFLECTION */}
      <section style={{ ...sec, background: 'var(--dark)', color: 'var(--cream)', borderBottom: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Reflection</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2 }}>What I learned</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              { num: '01', text: 'Failure mode analysis before wireframing changes everything. Mapping what can go wrong — before designing what should go right — produced a fundamentally different set of constraints than a typical UX process would have.' },
              { num: '02', text: 'The instruction set is the interface. In a conversational AI, the largest design lever isn\'t visual — it\'s the instruction set given to the model. Writing, testing, and iterating the instruction set is an HFE task.' },
              { num: '03', text: 'Scope constraints are a safety feature. Limiting the bot to one topic isn\'t a product limitation — it\'s an error prevention mechanism. Every topic added increases the probability of a failure mode.' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '2rem', padding: '1.5rem 0', borderTop: '1px solid #3A3630', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '11px', color: 'var(--accent)', minWidth: '24px', paddingTop: '3px' }}>{item.num}</span>
                <p style={{ fontSize: '15px', color: '#9E9690', fontWeight: 300, lineHeight: 1.8, margin: 0 }}>{item.text}</p>
              </div>
            ))}
            <div style={{ borderTop: '1px solid #3A3630' }} />
          </div>
        </div>
      </section>

      {/* NEXT */}
      <Link href="/work/archivex" className="next-link"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 5rem', textDecoration: 'none', color: 'var(--dark)', borderTop: '1px solid var(--border)', background: 'transparent', transition: 'background 0.2s' }}>
        <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next case study</span>
        <span style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>ArchiveX →</span>
      </Link>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}