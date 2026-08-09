"use client";
import Link from "next/link";
import { useState } from "react";

export default function ESUPC() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);

  const screens = [
    { label: 'Change Detection Dashboard', sub: 'Map explorer with layered insights — growth, heritage and construction status', img: '/analysis.jpg' },
    { label: 'Before / After Comparison', sub: 'Side-by-side satellite imagery to reveal ground-level change', img: '/results.jpg' },
    { label: 'AI Review & Verification', sub: 'Split-screen: AI-extracted status on the left, live satellite evidence on the right', img: '/polygon.jpg' },
    { label: 'Heritage Protection Layer', sub: 'Dedicated map layer prioritising historical zones with high-priority alerts', img: '/layers.jpg' },
    { label: 'Imagery Selection', sub: 'Filtering captures by area, date, source, resolution and cloud cover', img: '/images.jpg' },
    { label: 'Custom Layer Builder', sub: 'Creating point and polygon layers directly on the map', img: '/notification.jpg' },
    { label: 'Layer Styling', sub: 'Visual customization — colour, symbology and display settings', img: '/intersection-area.jpg' },
    { label: 'Organization Management', sub: 'Configuring institutions, access scopes and permissions', img: '/user management.jpg' },
    { label: 'Team & Roles', sub: 'Managing operators and staff per organization', img: '/history.jpg' },
    { label: 'Enforcement Flow', sub: 'Guarded notification action with mandatory operator confirmation', img: '/notifying mode.jpg' },
  ];

  const bgs = ['#E8E2D9', '#DFD8CE', '#D8D0C4', '#CFC8BC', '#C6BFB3'];

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
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>GovTech · Satellite AI · 0→1 Product</div>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          ESUPC
        </h1>
        <p style={{ fontSize: '18px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6, maxWidth: '640px', marginBottom: '3rem' }}>
          AI-powered satellite surveillance for urban compliance and heritage protection.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '2rem', paddingBottom: '2rem' }}>
          {[
            { label: 'Role', value: 'UX/UI Designer' },
            { label: 'Domain', value: 'GovTech · Urban Compliance' },
            { label: 'Users', value: 'Municipal Operators (40–60)' },
            { label: 'Type', value: '0→1 Concept' },
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
          <img src="/esupc.png" alt="Ingress Academy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* OVERVIEW */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Overview</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Automating urban oversight from space</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              ESUPC is a 0→1 GovTech platform designed to automate the monitoring of urban construction and demolition. Using satellite computer vision, the system detects physical changes on the ground and cross-references them with legal permit databases to identify unauthorized activity.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              It is specifically optimized to protect historical heritage sites from illegal alterations — catching unauthorized demolition in real time, before the damage becomes irreversible.
            </p>
          </div>
        </div>
      </section>

      {/* CHALLENGE */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Challenge</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>A decision support gap in oversight</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Traditional urban monitoring relies on manual inspections — slow, reactive, and easily outpaced by illegal activity. The core problem isn&apos;t a lack of data. It&apos;s a <strong style={{ fontWeight: 500, color: 'var(--dark)' }}>decision support gap</strong>: existing systems show what is happening, but not whether it is legal or what action to take next.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              For historical buildings, this delay often leads to irreversible damage before authorities can intervene.
            </p>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
          {[
            { title: 'Slow, reactive inspections', desc: 'Manual field visits cannot keep pace with the speed of unauthorized construction and demolition.' },
            { title: 'Data without judgment', desc: 'Existing tools surface raw change but leave the legal assessment entirely to the operator.' },
            { title: 'Irreversible heritage loss', desc: 'By the time illegal alterations to historical sites are noticed, the damage is already done.' },
          ].map(item => (
            <div key={item.title} style={{ border: '1px solid var(--border)', borderRadius: '4px', padding: '1.5rem' }}>
              <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RESEARCH & PERSONA */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>User Research</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Designing for the skeptical operator</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The primary users are middle-aged municipal operators, accustomed to paper-based or simple administrative systems. They are often skeptical of &ldquo;black box&rdquo; AI — and rightly so. They don&apos;t want a system that replaces their judgment. They need a tool that confirms what they see and tells them what to do next.
          </p>
        </div>

        <div style={{ background: 'var(--warm)', border: '1px solid var(--border)', borderRadius: '8px', padding: '2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Pain Point</div>
              <p style={{ fontSize: '15px', color: 'var(--dark)', fontWeight: 400, lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
                &ldquo;I&apos;ve done this job for years. I don&apos;t trust a system that just tells me it&apos;s right without showing me why.&rdquo;
              </p>
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>Requirement</div>
              <p style={{ fontSize: '15px', color: 'var(--dark)', fontWeight: 400, lineHeight: 1.7, fontStyle: 'italic', margin: 0 }}>
                &ldquo;Don&apos;t replace my decision. Confirm what I see, show me the evidence, and tell me what to do next.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UX STRATEGY */}
      <section style={{ ...sec, background: 'var(--warm)' }}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>UX Strategy</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Human wisdom meets digital precision</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
          {[
            { step: 'Observe', desc: 'AI monitors satellite feeds and highlights pixels of change across the urban landscape — surfacing what has physically moved on the ground.' },
            { step: 'Assess', desc: 'The system automatically flags each change as Permitted or Unauthorized by syncing with the construction permit registry.' },
            { step: 'Act', desc: 'The operator reviews the AI\'s findings against live evidence, makes the final call, and triggers enforcement notifications.' },
          ].map((item, i) => (
            <div key={item.step} style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '4px', padding: '1.75rem' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400, color: 'var(--accent)', lineHeight: 1, marginBottom: '1rem' }}>0{i + 1}</div>
              <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.3rem', fontWeight: 500, marginBottom: '0.75rem' }}>{item.step}</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHANGE DETECTION */}
      <section style={sec}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Change Detection</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Comparing imagery across time to surface change</h2>
        </div>

        {/* BEFORE/AFTER SLIDER */}
        <div style={{ position: 'relative', width: '100%', height: '460px', borderRadius: '8px', overflow: 'hidden', border: '1px solid var(--border)', userSelect: 'none' }}>
          <div style={{ position: 'absolute', inset: 0 }}>
            <img src="/after.jpg" alt="After" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <span style={{ position: 'absolute', bottom: '1.25rem', right: '1.25rem', fontFamily: 'var(--ff-display)', fontSize: '1rem', color: '#fff', background: 'rgba(0,0,0,0.4)', padding: '4px 12px', borderRadius: '4px' }}>After · 18.04.2026</span>
          </div>
          <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: `${sliderPos}%`, overflow: 'hidden', borderRight: '2px solid #fff' }}>
            <img src="/before.jpg" alt="Before" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: `${100 / (sliderPos / 100)}%`, maxWidth: 'none', objectFit: 'cover', display: 'block' }} />
            <span style={{ position: 'absolute', bottom: '1.25rem', left: '1.25rem', fontFamily: 'var(--ff-display)', fontSize: '1rem', color: '#fff', background: 'rgba(0,0,0,0.4)', padding: '4px 12px', borderRadius: '4px' }}>Before · 22.09.2023</span>
          </div>
          <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${sliderPos}%`, transform: 'translateX(-50%)', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.2)', fontSize: '14px', color: 'var(--dark)' }}>⇄</div>
          </div>
          <input type="range" min="20" max="80" value={sliderPos} onChange={e => setSliderPos(Number(e.target.value))}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0, cursor: 'ew-resize', margin: 0 }} />
        </div>

        {/* WORKFLOW */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '1.5rem' }}>How an analysis is set up</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
            {[
              { num: '01', title: 'Define the area', desc: 'The operator selects the area of interest on the map — drawing a polygon, dropping a pin, or uploading a boundary file.' },
              { num: '02', title: 'Set the time range', desc: 'Two capture dates are chosen to compare the same location across a defined period.' },
              { num: '03', title: 'Choose source & quality', desc: 'Imagery is filtered by source (satellite or drone), resolution, sensor type, and acceptable cloud cover.' },
              { num: '04', title: 'Run detection', desc: 'The AI aligns the two captures, isolates pixels of change, and flags the difference for review.' },
            ].map(item => (
              <div key={item.num} style={{ border: '1px solid var(--border)', borderRadius: '4px', padding: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.75rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border)' }}>{item.num}</div>
                <div style={{ fontSize: '12px', fontWeight: 500, marginBottom: '0.35rem' }}>{item.title}</div>
                <p style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN SOLUTIONS */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Design Solutions</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Four features that close the decision gap</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { title: 'Satellite Change Detection Dashboard', desc: 'A map explorer with layered insights — growth, heritage, and construction status. Operators compare Before vs. After imagery through a side-by-side slider or multi-window view.' },
            { title: 'AI Review & Verification Flow', desc: 'A split-screen layout: the left shows the AI-extracted status (e.g. "Illegal Demolition Detected"), the right shows the live satellite evidence. The operator judges both side by side.' },
            { title: 'Heritage Protection Layer', desc: 'A dedicated map layer that prioritizes historical zones. Any change in these areas triggers a High Priority alert, requiring immediate operator attention.' },
            { title: 'Error Prevention & Security', desc: 'The "Send Notification to Authorities" button stays disabled until the operator manually confirms the violation. A confirmation checkbox adds legal security before any enforcement action.' },
          ].map((item, i, arr) => (
            <div key={i} style={{ display: 'flex', gap: '3rem', padding: '1.75rem 0', borderTop: '1px solid var(--border)', borderBottom: i === arr.length - 1 ? '1px solid var(--border)' : 'none', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '40px', fontSize: '11px', color: 'var(--accent)', fontWeight: 500, paddingTop: '3px' }}>0{i + 1}</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9, margin: 0 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* PLATFORM ADMINISTRATION */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Platform Administration</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>More than a viewer — a managed system</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            ESUPC is not a single-user tool but a multi-organization platform. Beyond monitoring, it needed a full administration layer — managing which institutions have access, how their teams are configured, and what data enters the system. Every entity supports the standard lifecycle: create, edit, and delete.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
          {[
            { title: 'Organizations & access', desc: 'Institutions are added and configured individually — each with its own access scope, permissions, and configuration profile across the platform.' },
            { title: 'Team management', desc: 'Operators and staff are managed per organization, with role assignment controlling who can view, verify, and trigger enforcement.' },
            { title: 'Imagery library', desc: 'Satellite and drone captures are uploaded, catalogued, and maintained in the system — with full metadata and edit control.' },
            { title: 'Base map layers', desc: 'New base map layers can be added and configured, letting each organization tailor the map foundation to its operational needs.' },
          ].map(item => (
            <div key={item.title} style={{ border: '1px solid var(--border)', borderRadius: '4px', padding: '1.5rem' }}>
              <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ADVANCED MAPPING */}
      <section style={{ ...sec, background: 'var(--warm)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem', marginBottom: '3rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Advanced Mapping</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>A GIS toolkit built for the browser</h2>
          </div>
          <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
            The platform supports advanced mapping capabilities comparable to desktop GIS tools like ArcGIS and QGIS — but accessible directly in the browser. Operators can build their own spatial layers, save them, and choose whether to keep them private or share them across the organization.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
          {[
            { title: 'Custom layer creation', desc: 'Users create new point, polygon, and system-type layers directly on the map — for example, pinning every village in a district or outlining zones as polygons.' },
            { title: 'Save, share or keep private', desc: 'Any created layer can be saved for personal use or shared with all platform users at the moment of creation — turning individual work into shared operational knowledge.' },
            { title: 'Visual customization', desc: 'Layers are styled visually — colour selection, symbology, and display settings — so each map communicates its meaning clearly at a glance.' },
          ].map(item => (
            <div key={item.title} style={{ background: 'var(--cream)', border: '1px solid var(--border)', borderRadius: '4px', padding: '1.5rem' }}>
              <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENS SLIDER */}
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

      {/* IMPACT */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Expected Impact</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>What the platform is projected to deliver</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
          {[
            { stat: '35%', label: 'Faster decision-making', desc: 'in identifying illegal constructions through automated compliance checks.' },
            { stat: '50%', label: 'Fewer field trips', desc: 'reduction in redundant inspector visits through remote satellite verification.' },
            { stat: 'Real-time', label: 'Heritage protection', desc: 'instant flagging of unauthorized demolition in protected historical zones.' },
          ].map(item => (
            <div key={item.label} style={{ border: '1px solid var(--border)', borderRadius: '4px', padding: '1.75rem' }}>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', fontWeight: 400, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.75rem' }}>{item.stat}</div>
              <div style={{ fontSize: '13px', fontWeight: 500, marginBottom: '0.4rem' }}>{item.label}</div>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* REFLECTION */}
      <section style={{ ...sec, background: 'var(--dark)', color: 'var(--cream)', borderBottom: 'none' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Key Takeaways</div>
            <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2 }}>Designing around the mental model</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300, marginBottom: '1.5rem' }}>
              In complex GovTech domains, the most important design decision is designing around the user&apos;s mental model. Skeptical operators don&apos;t need a black box — they need transparency, evidence, and control.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300 }}>
              By integrating human intuition with AI speed, ESUPC transforms raw satellite data into a powerful tool for urban law enforcement and cultural preservation — where the AI proposes, but the human always decides.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <Link href="/work/eagro" className="next-link"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 5rem', textDecoration: 'none', color: 'var(--dark)', borderTop: '1px solid var(--border)', background: 'transparent', transition: 'background 0.2s' }}>
        <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next case study</span>
        <span style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>Eagro →</span>
      </Link>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}