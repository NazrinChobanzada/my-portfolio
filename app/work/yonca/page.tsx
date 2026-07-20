"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

/*function AutoSlider({ items, bgs }: { items: { label: string; sub: string; img?: string }[]; bgs: string[] }) {
  const [idx, setIdx] = useState(0);
  const total = items.length;
  const duplicated = [...items, ...items, ...items];
  const cardW = 260;
  const gapW = 16;
  const startIdx = total;
  const tx = (startIdx + idx) * (cardW + gapW);
  const normalizedIdx = ((idx % total) + total) % total;

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(i => i + 1);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ userSelect: 'none' }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          gap: `${gapW}px`,
          transform: `translateX(-${tx}px)`,
          transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }}>
          {duplicated.map((screen, i) => (
            <div key={i} style={{ flex: `0 0 ${cardW}px`, height: '578px', borderRadius: '16px', background: bgs[i % bgs.length], overflow: 'hidden' }}>
              {screen.img
                ? <img src={screen.img} alt={screen.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
                : null
              }
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', gap: '6px', marginTop: '1.25rem' }}>
        {items.map((_, i) => (
          <div key={i}
            onClick={() => setIdx(i)}
            style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === normalizedIdx ? 'var(--dark)' : 'var(--border)', cursor: 'pointer', transition: 'background 0.3s' }}
          />
        ))}
      </div>
    </div>
  );
} */

function AutoSlider({ items, bgs }: { items: { label: string; sub: string; img?: string }[]; bgs: string[] }) {
  const cardW = 260;
  const half = Math.ceil(items.length / 2);
  const row1 = items.slice(0, half);
  const row2 = items.slice(half);

  const Card = ({ screen, i }: { screen: { label: string; img?: string }; i: number }) => (
    <div style={{ flex: `0 0 ${cardW}px`, height: '578px', borderRadius: '16px', background: bgs[i % bgs.length], overflow: 'hidden' }}>
      {screen.img
        ? <img src={screen.img} alt={screen.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
        : null}
    </div>
  );

  return (
    <div style={{ userSelect: 'none' }}>
      <style>{`
        @keyframes slideLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes slideRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
      `}</style>

      {/* ROW 1 — sola kayar */}
      <div style={{ overflow: 'hidden', marginBottom: '16px' }}>
        <div style={{ display: 'flex', gap: '16px', width: 'max-content', animation: 'slideLeft 40s linear infinite' }}>
          {[...row1, ...row1].map((screen, i) => (
            <Card key={i} screen={screen} i={i} />
          ))}
        </div>
      </div>

      {/* ROW 2 — sağa kayar */}
      <div style={{ overflow: 'hidden' }}>
        <div style={{ display: 'flex', gap: '16px', width: 'max-content', animation: 'slideRight 40s linear infinite' }}>
          {[...row2, ...row2].map((screen, i) => (
            <Card key={i} screen={screen} i={i + half} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Yonca() {
  const screens = [
    { label: 'Home', sub: '', img: '/home.png' },
    { label: 'Crop Calendar', sub: '', img: '/crop-calendar.png' },
    { label: 'Farmer', sub: '', img: '/farmer.png' },
    { label: 'Guide 1', sub: '', img: '/guide-1.png' },
    { label: 'Guide 2', sub: '', img: '/guide-2.png' },
    { label: 'Guide 3', sub: '', img: '/guide-3.png' },
    { label: 'Health', sub: '', img: '/health.png' },
    { label: 'Health Details', sub: '', img: '/health-details.png' },
    { label: 'Meyarlar', sub: '', img: '/Meyarlar üzrə dəyərləndimələr.png' },
    { label: 'No Data', sub: '', img: '/no-data.png' },
    { label: 'Pests', sub: '', img: '/pests.png' },
    { label: 'Pest Details', sub: '', img: '/pest-details.png' },
    { label: 'Satellite Monitoring', sub: '', img: '/Peyk monitorinqi.png' },
    { label: 'Phenological', sub: '', img: '/phenological.png' },
    { label: 'Photo', sub: '', img: '/photo.png' },
    { label: 'Promo Code', sub: '', img: '/promo code.png' },
    { label: 'Risk Details', sub: '', img: '/risk-details.png' },
    { label: 'Variety', sub: '', img: '/variety.png' },
  ];

  const bgs = ['#E8E2D9', '#DFD8CE', '#D8D0C4', '#CFC8BC', '#C6BFB3', '#BDB8AA', '#D8E8D0', '#C8D8C0'];

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
        <Link href="/" style={{ width: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>Nazrin.</Link>
        <Link href="/#work" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>← Back to work</Link>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '5rem 5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Mobile · AgTech · Android · Material 3</div>
        <h1 style={{ width: 'var(--ff-display)', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          Yonca
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '2rem', paddingBottom: '2rem' }}>
          {[
            { label: 'Role', value: 'Solo UX/UI Designer' },
            { label: 'Platform', value: 'Android · Material 3' },
            { label: 'Scope', value: 'UX Research · UI · Design System' },
            { label: 'Status', value: 'Live — Published on Google Play' },
          ].map((item, i) => (
            <div key={item.label} style={{ paddingRight: '2rem', borderRight: i < 3 ? '1px solid var(--border)' : 'none', paddingLeft: i > 0 ? '2rem' : '0' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.4rem' }}>{item.label}</div>
              <div style={{ fontSize: '13px', fontWeight: 500 }}>{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COVER */}
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <img src="/yonca.jpg" alt="Yonca App" style={{ width: '100%', height: '744px', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
      </div>

      {/* OVERVIEW */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Overview</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>A complete digital platform for Azerbaijani farmers</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Yonca is an AI-driven agricultural mobile application designed for farmers in Azerbaijan. It consolidates critical workflows — from field registration and subsidy applications to satellite monitoring and crop intelligence — into a single, accessible Android experience.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              Designed solo from research through to handoff, Yonca follows Material Design 3 guidelines while adapting to the specific context of use: farmers working outdoors, often in low-connectivity environments, who need fast access to critical information and government services.
            </p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Problem</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Fragmented tools, disconnected systems</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Farmers in Azerbaijan interact with multiple disconnected government systems, paper-based processes, and fragmented information sources to manage their agricultural operations. Subsidy applications, field registrations, and ministry requests each lived in different places — or didn't exist digitally at all.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              AI-powered capabilities like crop health monitoring and satellite imagery existed in separate enterprise tools inaccessible to individual farmers. The opportunity was to bring all of this into one coherent mobile experience.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
          {[
            { title: 'Fragmented government systems', desc: 'Subsidy applications, field registration, and ministry requests each required separate portals or paper processes.' },
            { title: 'No unified mobile experience', desc: 'Existing tools required desktop access — leaving gaps for farmers frequently in the field or away from a computer.' },       
            { title: 'Low digital literacy barrier', desc: 'Any solution had to be immediately understandable for users with varying levels of digital experience.' },
            { title: 'Connectivity constraints', desc: 'Rural Azerbaijan has inconsistent mobile data coverage — the app needed to function gracefully offline.' },
            { title: 'Trust in government data', desc: 'Farmers needed confidence that their submitted data was being processed correctly by official systems.' },
          ].map(item => (
            <div key={item.title} style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: '1.25rem' }}>
              <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.4rem' }}>{item.title}</div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* UX RESEARCH */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>UX Research</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Understanding how farmers actually work</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1px', background: 'var(--border)', marginBottom: '3rem' }}>
          {[
            { phase: '01 · Field Observation', title: 'Context of use', points: ['Farmers use phones one-handed while managing equipment or animals', 'Glare and bright sunlight require high contrast UI', 'Tasks are time-critical — no patience for multi-step flows', 'Voice and local dialect variations affect input methods'] },
            { phase: '02 · User Interviews', title: 'Mental models & pain points', points: ['Strong preference for familiar patterns — camera, messaging, maps', 'Distrust of systems that don\'t confirm what was submitted', 'Need for offline capability is non-negotiable for field use', 'Subsidy timelines are critical — farmers need deadline visibility'] },
            { phase: '03 · Competitive Analysis', title: 'Market landscape', points: ['No comprehensive agricultural app existed for the Azerbaijani market', 'International Agrotech apps were not localized and missed local regulations', 'Gap: AI features existed elsewhere but never combined with gov. integration'] },
          ].map(item => (
            <div key={item.phase} style={{ background: 'var(--cream)', padding: '1.5rem' }}>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{item.phase}</div>
              <h3 style={{ width: 'var(--ff-display)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '1.25rem', lineHeight: 1.3 }}>{item.title}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {item.points.map((p, i) => (
                  <div key={i} style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                    <span style={{ color: 'var(--accent)', fontSize: '11px', marginTop: '4px', flexShrink: 0 }}>✦</span>
                    <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{p}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <blockquote style={{ width: 'var(--ff-display)', fontSize: 'clamp(1.3rem,2.5vw,1.8rem)', fontWeight: 400, lineHeight: 1.5, color: 'var(--dark)', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
          &ldquo;I know what I need to do. I just need the app to get out of my way and let me do it.&rdquo;
        </blockquote>
        <div style={{ marginTop: '1rem', paddingLeft: '1.5rem', fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>— Farmer · User interview</div>
      </section>

      {/* DESIGN PRINCIPLES */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Design Principles</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Four principles that shaped every screen</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '2rem' }}>
          {[
            { num: '01', title: 'Speed over completeness', desc: 'Every primary action must be reachable in 2 taps or fewer. Farmers don\'t have time for deep navigation hierarchies.' },
            { num: '02', title: 'Clarity in the field', desc: 'High contrast, large touch targets, and minimal text density. The app must be usable in sunlight with one hand.' },
            { num: '03', title: 'Trust through transparency', desc: 'Every submission shows a confirmation. Every AI insight explains its source. Farmers must feel in control of their data.' },
            { num: '04', title: 'M3 with local context', desc: 'Material Design 3 provides the foundation. Local language, agricultural workflows, and Azerbaijani government systems define the adaptation.' },
          ].map(item => (
            <div key={item.num} style={{ borderTop: '2px solid var(--accent)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>{item.num}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0.6rem' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KEY FEATURES */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Key Features</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>One coherent experience across every agricultural workflow</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          {/* FIELD & LAND */}
          <div style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Field & Land</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Field Registration', desc: 'Guided multi-step flow for registering agricultural land with the Ministry, integrated with satellite boundary verification.' },                  { title: 'Satellite & NDVI Monitoring', desc: 'Real-time satellite imagery with NDVI overlays across registered fields. Vegetation index tracking detects early stress and growth anomalies with automatic alerts.' },
                  { title: 'Land Document Discrepancies', desc: 'Automated detection of inconsistencies between registered land documents and satellite data — flagging boundary mismatches, ownership conflicts, and cadastral errors.' },
                ]
                .map((item, idx, arr) => (
                    <div key={item.title} style={{ paddingBottom: '1.25rem', borderBottom: idx < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.3rem' }}>{item.title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '320px' }}>
              <img src="/fields.jpg" alt="Field & Land" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
          </div>

          {/* GOVERNMENT & COMPLIANCE */}
          <div style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Government & Compliance</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Subsidy Application', desc: 'End-to-end digital subsidy application flow connected to government systems with status tracking and approval history.' },
                  { title: 'Crop Declarations', desc: 'Digital declaration of crop planting information — replacing paper-based reporting to the Ministry.' },
                  { title: 'Ministry Requests', desc: 'Unified interface for submitting and tracking official requests to the Ministry of Agriculture with document upload and notifications.' },
                  { title: 'Agrochemical Analysis', desc: 'Soil and land agrochemical analysis reports integrated into the compliance workflow — supporting both field registration and official land-related submissions to the Ministry.' },
                ].map((item, idx, arr) => (
                    <div key={item.title} style={{ paddingBottom: '1.25rem', borderBottom: idx < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.3rem' }}>{item.title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '360px' }}>
              <img src="/govern.jpg" alt="Government & Compliance" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
          </div>

          {/* AI INTELLIGENCE */}
          <div style={{ borderTop: '1px solid var(--border)', padding: '2.5rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AI Intelligence</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Crop Suitability', desc: 'AI-powered crop suitability analysis recommending optimal crops based on soil composition, climate, and regional data.' },
                  { title: 'Plant Health Monitoring', desc: 'Identifies disease, pest pressure, and stress indicators from satellite and field imagery.' },
                  { title: 'Farmer Scoring', desc: 'Transparent scoring system showing the farmer\'s profile rating based on compliance, activity, and record quality.' },
                  { title: 'Smart Alerts', desc: 'Intelligent alert system notifying farmers of critical crop conditions, deadlines, and anomalies detected by AI.' },
                ].map((item, idx, arr) => (
                  <div key={item.title} style={{ paddingBottom: '1.25rem', borderBottom: idx < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.3rem' }}>{item.title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '360px' }}>
              <img src="/AI.jpg" alt="AI Intelligence" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
          </div>

          {/* PLANNING & AWARENESS */}
          <div style={{ borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '2.5rem 0', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Planning & Awareness</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {[
                  { title: 'Crop Management Calendar', desc: 'Seasonal planning tool integrating weather data with task scheduling for planting, irrigation, fertilization, and harvest windows.' },
                  { title: 'Weather Forecast', desc: 'Hyperlocal weather data tied to each registered field. 7-day forecast with agricultural alerts for extreme conditions.' },
                  { title: 'Agricultural Insurance Calculator', desc: 'Built-in calculator helping farmers estimate eligible insurance coverage based on field size, crop type, and regional risk factors.' },
                ].map((item, idx, arr) => (
                  <div key={item.title} style={{ paddingBottom: '1.25rem', borderBottom: idx < arr.length - 1 ? '1px solid var(--border)' : 'none' }}>
                    <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.3rem' }}>{item.title}</div>
                    <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '4px', overflow: 'hidden', height: '320px' }}>
              <img src="/alert.jpg" alt="Planning & Awareness" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
            </div>
          </div>

        </div>
      </section>

      {/* M3 DESIGN SYSTEM */}
      <section style={{ ...sec, background: 'var(--warm)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Design System</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Material 3 adapted for agricultural context</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '2rem' }}>
              Yonca is built on Material Design 3 — Google&apos;s latest design system for Android. M3&apos;s dynamic colour, accessible typography scale, and component library provided the foundation. The adaptation work focused on agricultural workflows, Azerbaijani language support, and outdoor usability.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Dynamic colour tokens', 'M3 typography scale', 'Navigation rail', 'Bottom navigation', 'FAB patterns', 'Card variants', 'Dialog & sheets', 'Chip components', 'Progress indicators', 'Custom agricultural icons'].map(tag => (
                <span key={tag} style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: '5px 14px', fontSize: '12px', color: 'var(--muted)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SCREENS SLIDER */}
      <section style={sec}>
        <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Design</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Key screens & interactions</h2>
        </div>
        <AutoSlider items={screens} bgs={bgs} />
      </section>

      {/* IMPACT */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Impact</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Live on Google Play</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
            {[
              { icon: '↑', label: 'Published on Google Play and actively used by farmers across Azerbaijan' },
              { icon: '✦', label: 'First mobile app to combine government agricultural services with AI crop intelligence in the Azerbaijani market' },
              { icon: '→', label: 'Subsidy application process digitized — replacing paper-based workflows for registered users' },
              { icon: '↓', label: 'Reduced the number of Ministry office visits required for routine agricultural administration' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'var(--cream)', padding: '1.5rem' }}>
                <div style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400, marginBottom: '0.75rem', color: 'var(--accent)' }}>{item.icon}</div>
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
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2 }}>Designing for the field, not the office</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300, marginBottom: '1.5rem' }}>
              Yonca was the most contextually demanding project I have worked on. The user is not sitting at a desk — they are outside, under pressure, often with limited connectivity, making decisions that affect their livelihood. Every design choice had to earn its place.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300, marginBottom: '1.5rem' }}>
              Working solo across research, UX architecture, UI design, and design system meant holding the full picture at every stage. The discipline required to maintain consistency across eight distinct feature areas — while keeping each one intuitive for a non-technical audience — was the defining challenge of this project.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300 }}>
              Seeing Yonca live on Google Play, used by real farmers, remains one of the most meaningful outcomes of my design work.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <Link href="/work/data-viz" className="next-link"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 5rem', textDecoration: 'none', color: 'var(--dark)', borderTop: '1px solid var(--border)', background: 'transparent', transition: 'background 0.2s' }}>
        <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next case study</span>
        <span style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>Data Viz & Dashboards →</span>
      </Link>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}