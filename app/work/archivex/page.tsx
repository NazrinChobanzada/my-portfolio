"use client";
import Link from "next/link";
import { useState } from "react";

export default function ArchiveX() {
  const [activeSlide, setActiveSlide] = useState(0);

  const screens = [
    { label: 'Main Dashboard', sub: 'Centralized visibility into pending approvals, uploads, and archive activity', img: '/Ümumi axtarış nəticələrinin təsvir olunması.jpg' },
    { label: 'Digital Archive System', sub: 'Structured repositories with smart categories, tags, and metadata', img: '/Sənəd növünə bağlı kataloq bölməsi üzrə axtarış nəticələrinin təsvir olunması (Qaimə nümunəsində).png' },
    { label: 'Smart Search & Retrieval', sub: 'Keyword, filter, and metadata-based document search', img: '/Təhlükəsizlik səviyyəsinin seçimi.jpg' },
    { label: 'Approval & Workflow', sub: 'Digitized approval routing with status tracking and ownership visibility', img: '/user qeydə alınmayıb.png' },
    { label: 'Permissions & Security', sub: 'Role-based access control for view, edit, approve, and download', img: '/view.jpg' },
    { label: 'Analytics & Reporting', sub: 'Department usage trends, bottlenecks, and archive growth over time', img: '/archive-screen-6.png' },
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
        <Link href="/" style={{ width: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>Nazrin.</Link>
        <Link href="/#work" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em' }}>← Back to work</Link>
      </nav>

      {/* HEADER */}
      <section style={{ padding: '5rem 5rem 0', borderBottom: '1px solid var(--border)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>SaaS · Document Management · Web Application</div>
        <h1 style={{ width: 'var(--ff-display)', fontSize: 'clamp(3rem,6vw,5rem)', fontWeight: 500, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: '3rem' }}>
          ArchiveX
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '0', borderTop: '1px solid var(--border)', paddingTop: '2rem', paddingBottom: '2rem' }}>
          {[
            { label: 'Role', value: 'Product Designer' },
            { label: 'Platform', value: 'SaaS Web App + Marketing Site' },
            { label: 'Scope', value: 'Brand · UX · UI · End-to-End' },
            { label: 'Type', value: 'Digital Transformation' },
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
          <img src="/photo_alternative-2.jpg" alt="ArchiveX Platform" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>

      {/* OVERVIEW */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            {/* left column (visual or summary) - kept intentionally blank for layout */}
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              This project focused on designing a complete SaaS product that helps organizations transform physical paper archives into a searchable, secure, and scalable digital document management system.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              My role covered the full product experience — from brand identity and landing page to the platform&apos;s UX architecture, interface system, and user workflows. The objective was to replace slow, manual, paper-based processes with a modern digital workspace built for efficiency, traceability, and long-term scalability.
            </p>
          </div>
        </div>
      </section>

     {/* CONTEXT */}
      <section style={sec}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', padding: '1rem 0' }}>Context</div>
        <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '2rem', marginBottom: '3rem', alignItems: 'start' }}>
          <div>
            <div style={{ overflow: 'hidden', borderRadius: '8px', width: '100px', height: '100px', opacity: 0.7, marginBottom: '0.75rem' }}>
              <img src="/ChatGPT Image Jun 12, 2026, 07_53_11 PM.png" alt="Before" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', filter: 'grayscale(20%)' }} />
            </div>
            
          </div>
          <div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, marginBottom: '1rem' }}>The hidden cost of paper</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              Many organizations still rely on physical folders, cabinets, and paper-based approval processes to manage critical records. As document volumes grow, traditional systems create operational friction that compounds over time.
            </p>
          </div>
        </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1rem' }}>
          {[
            { num: '01', title: 'Time lost searching', desc: 'Files buried in physical systems take hours to locate — if they can be found at all.' },
            { num: '02', title: 'Risk of loss', desc: 'Damaged, misfiled, or missing records create operational and compliance risk.' },
            { num: '03', title: 'Manual bottlenecks', desc: 'Approval processes relying on physical signatures slow down every department.' },
            { num: '04', title: 'Limited visibility', desc: 'No real-time view into document status, ownership, or workflow progress.' },
            { num: '05', title: 'Compliance exposure', desc: 'Difficulty enforcing access control and maintaining audit trails.' },
            { num: '06', title: 'Adoption resistance', desc: 'Existing digital tools were rigid and too complex for non-technical teams to adopt.' },
          ].map(item => (
          <div key={item.num} style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: '1.25rem' }}>              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '10px', color: 'var(--border)', letterSpacing: '0.08em' }}>{item.num}</span>
                <span style={{ fontSize: '13px', fontWeight: 500, color: 'var(--dark)' }}>{item.title}</span>
              </div>
              <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
            </div>
          ))}
          </div>
      </section>
      
      {/* PROBLEM */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '6rem' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Problem</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Storage was solved. Usability was not.</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Paper archives are familiar, but inefficient. Users were dependent on physical locations, memory-based filing habits, and manual coordination between departments. Important information could exist, yet remain inaccessible when needed most.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300 }}>
              Existing digital tools often solved storage, but not usability. Many systems were rigid, outdated, and difficult for non-technical teams to adopt. The challenge was to create a platform that feels powerful for enterprise use, while remaining intuitive for everyday users.
            </p>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Approach</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Designed around how people access information — not how files are stored</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '2rem' }}>
          {[
            { num: '01', title: 'Find information instantly', desc: 'Search, filters, metadata, and structured categories replaced manual browsing. Every document becomes immediately retrievable.' },
            { num: '02', title: 'Make workflows visible', desc: 'Document movement, approvals, ownership, and status became transparent. No more chasing signatures or wondering where things stand.' },
            { num: '03', title: 'Build confidence through simplicity', desc: 'A clean interface, familiar interactions, and clear hierarchy reduced resistance to adoption — especially for non-technical users.' },
          ].map(item => (
            <div key={item.num} style={{ borderTop: '2px solid var(--accent)', paddingTop: '1.25rem' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', marginBottom: '0.6rem' }}>{item.num}</div>
              <h3 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '0.6rem' }}>{item.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section style={{ ...sec, background: 'var(--warm)' }}>
        <blockquote style={{ width: 'var(--ff-display)', fontSize: 'clamp(1.3rem,2.5vw,2rem)', fontWeight: 400, lineHeight: 1.5, color: 'var(--dark)', borderLeft: '2px solid var(--accent)', paddingLeft: '1.5rem' }}>
          &ldquo;The best document systems do not simply store files — they make information usable.&rdquo;
        </blockquote>
      </section>

      {/* BRAND */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Brand Identity</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, marginBottom: '1.5rem' }}>Built to communicate reliability and intelligence</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '2rem' }}>
              The brand was designed to communicate reliability, intelligence, and modern efficiency — creating trust from the first touchpoint through to daily product use.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Logo design', 'Colour system', 'Typography direction', 'Visual language', 'Product-to-marketing identity', 'Icon style', 'Brand voice'].map(tag => (
                <span key={tag} style={{ background: 'var(--warm)', border: '1px solid var(--border)', padding: '5px 14px', fontSize: '12px', color: 'var(--muted)' }}>{tag}</span>
              ))}
            </div>
          </div>
          <div style={{ background: '#e8e4dc', borderRadius: '4px', overflow: 'hidden', height: '400px' }}>
            <img src="/BRAND.jpg" alt="ArchiveX Brand Identity" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
      </section>

      {/* LANDING PAGE */}
      <section style={sec}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Landing Page</div>
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, marginBottom: '1.5rem' }}>Designed to convert, not just inform</h2>
            <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              The goal was not to explain every feature, but to create enough clarity and trust for a visitor to take the next step. Each section answered one question and moved toward a single action.
            </p>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, marginBottom: '1.5rem' }}>
              Visual continuity between the website and the product was intentional — users who signed up should feel like they had already seen the product before opening it for the first time.
          </p>
            <a href="https://archivex.az/" target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.5rem', fontSize: '13px', color: 'var(--dark)', border: '1px solid var(--border)', padding: '6px 14px', textDecoration: 'none', transition: 'border-color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--dark)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
              View live site ↗
            </a>
          </div>
          <div style={{ background: '#e8e4dc', borderRadius: '16px', overflow: 'hidden', height: '400px' }}>
            <img src="/arcieve-responsive.jpg" alt="ArchiveX Landing Page" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
          </div>
        </div>
      </section>
      
      

      {/* CORE PRODUCT */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Core Product Experience</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, maxWidth: '560px' }}>Five systems that replace the physical archive</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {[
            { num: '01', title: 'Digital Archive System', desc: 'Users can upload, scan, categorize, and store documents in a centralized environment. Structured repositories, smart categories, tags, metadata, version history, and instant retrieval turn static storage into an active knowledge system.' },
            { num: '02', title: 'Smart Search & Retrieval', desc: 'Search was treated as a primary product feature. Users can locate documents through keywords, file type filters, date ranges, department filters, and metadata fields — dramatically reducing the time spent locating critical records.' },
            { num: '03', title: 'Approval & Workflow Management', desc: 'Paper-based approval flows were digitized through routing, status tracking, ownership visibility, notifications, and action history. This replaced uncertainty with accountability and speed.' },
            { num: '04', title: 'Permissions & Security', desc: 'Structured permission controls allow organizations to manage who can view, edit, approve, or download files — supporting both operational efficiency and compliance requirements.' },
            { num: '05', title: 'Dashboard & Reporting', desc: 'A centralized dashboard gives teams visibility into pending approvals, recently uploaded files, workflow bottlenecks, department usage trends, and archive growth over time.' },
          ].map(item => (
            <div key={item.num} style={{ display: 'flex', gap: '3rem', padding: '2rem 0', borderTop: '1px solid var(--border)', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '40px', fontSize: '11px', color: 'var(--accent)', fontWeight: 500, paddingTop: '3px' }}>{item.num}</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '0.5rem' }}>{item.title}</div>
                <p style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SCREENS SLIDER */}
      <section style={sec}>
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>The Design</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>Key screens & interactions</h2>
        </div>

        {/* CAROUSEL */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'transform 0.4s ease', transform: `translateX(calc(-${activeSlide * 100}% / 1.4))` }}>
            {screens.map((screen, i) => (
              <div key={i} onClick={() => setActiveSlide(i)}
                style={{ flexShrink: 0, width: 'calc(71.4% - 1rem)', cursor: i !== activeSlide ? 'pointer' : 'default', transition: 'all 0.4s ease', opacity: i === activeSlide ? 1 : 0.45, transform: i === activeSlide ? 'scale(1)' : 'scale(0.95)' }}>
                <div style={{ background: '#e8e4dc', borderRadius: '16px', padding: '1.25rem' }}>
                  <div style={{ borderRadius: '10px', width: '100%', height: '480px', overflow: 'hidden' }}>
                    <img src={screen.img} alt={screen.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block' }} />
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

      {/* DESIGN SYSTEM */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Design System</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2, marginBottom: '1.5rem' }}>Built for long-term scalability</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--muted)', fontWeight: 300, maxWidth: '600px' }}>
            A consistent design system was established to ensure coherence across every surface of the platform — from the smallest interactive element to the most complex workflow. Components were built to be reusable, predictable, and easy to extend as the product grows.
          </p>
        </div>

        <div style={{ background: '#e8e4dc', borderRadius: '12px', overflow: 'hidden' }}>
          <img src="/components.png" alt="Design System Components" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
        </div>
        

        {/* COMPONENTS PREVIEW */}
         <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ background: '#e8e4dc', borderRadius: '12px', overflow: 'hidden', width: '60%' }}>
            <img src="/components.png" alt="Design System Components" style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }} />
          </div>
        </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>Some of the components</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {['Modal & Dialog', 'Drawer / Side panel', 'Custom inputs', 'Data tables', 'Form validation', 'Empty states', 'Toast notifications', 'Permission controls', 'Approval flow', 'File upload', 'Search & filters', 'Navigation'].map(tag => (
                <span key={tag} style={{ background: 'var(--warm)', border: '1px solid var(--border)', padding: '5px 12px', fontSize: '12px', color: 'var(--muted)' }}>{tag}</span>
              ))}
              </div>
            </div>
        </section>

        
      {/* BEFORE VS AFTER */}
      <section style={sec}>
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Before vs After</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 500, lineHeight: 1.2 }}>What the transformation looked like</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border)' }}>
          <div style={{ background: 'var(--warm)', padding: '2rem' }}>
            <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Before</div>
            {['Paper folders and cabinets', 'Manual approvals and signatures', 'Slow, memory-based file retrieval', 'Limited visibility into status', 'Compliance gaps and access risk'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ color: '#c0b8b0', fontSize: '12px', marginTop: '3px' }}>✗</span>
                <span style={{ fontSize: '14px', color: 'var(--muted)', fontWeight: 300 }}>{item}</span>
              </div>
            ))}
          </div>
          <div style={{ background: 'var(--cream)', padding: '2rem' }}>
            <div style={{ fontSize: '11px', color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>After</div>
            {['Centralized digital archive', 'Automated workflows and routing', 'Instant searchability by any field', 'Transparent ownership and status', 'Structured permissions and audit trail'].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ color: '#5a8a5a', fontSize: '12px', marginTop: '3px' }}>✓</span>
                <span style={{ fontSize: '14px', color: 'var(--dark)', fontWeight: 400 }}>{item}</span>
              </div>
            ))}
          </div>
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
              { icon: '↓', label: 'Reduced time spent searching for documents across departments' },
              { icon: '↑', label: 'Faster approval cycles through automated routing and visibility' },
              { icon: '✦', label: 'Improved operational transparency and team accountability' },
              { icon: '→', label: 'Stronger readiness for compliance, audit, and organizational growth' },
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
            <h2 style={{ width: 'var(--ff-display)', fontSize: '1.8rem', fontWeight: 400, lineHeight: 1.2 }}>Digital transformation is about people, not files</h2>
          </div>
          <div>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300, marginBottom: '1.5rem' }}>
              This project demonstrated that digital transformation is not about moving paper into software. It is about redesigning the relationship between people, information, and process.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.9, color: '#9E9690', fontWeight: 300 }}>
              The most valuable outcome was not just storage efficiency, but creating a system where knowledge becomes accessible, traceable, and actionable — regardless of where it originated.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT */}
      <Link href="/work/eagro" className="next-link"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '3rem 5rem', textDecoration: 'none', color: 'var(--dark)', borderTop: '1px solid var(--border)', background: 'transparent', transition: 'background 0.2s' }}>
        <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Next case study</span>
        <span style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 500, letterSpacing: '-0.02em' }}>Eagro →</span>
      </Link>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}