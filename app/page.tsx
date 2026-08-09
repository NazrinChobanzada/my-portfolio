"use client";
import { useEffect, useRef } from "react";

function UnXHero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const U = root.querySelector<HTMLElement>('.unx-U');
    const N = root.querySelector<HTMLElement>('.unx-n');
    const X = root.querySelector<HTMLElement>('.unx-X');
    const LINE = root.querySelector<HTMLElement>('.unx-line');
    const TAG = root.querySelector<HTMLElement>('.unx-tag');
    const HINT = root.querySelector<HTMLElement>('.unx-hint');
    if (!U || !N || !X || !LINE || !TAG || !HINT) return;

    let cancelled = false;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const wait = (ms: number) => new Promise(r => setTimeout(r, ms));
    const tween = (from: number, to: number, dur: number, ease: (t: number) => number, cb: (v: number) => void) =>
      new Promise<void>(res => {
        const s = performance.now();
        function f(n: number) {
          if (cancelled) return res();
          const r = Math.min((n - s) / dur, 1);
          cb(lerp(from, to, ease(r)));
          r < 1 ? requestAnimationFrame(f) : res();
        }
        requestAnimationFrame(f);
      });

    async function run() {
      await wait(300);
      await Promise.all([
        tween(0, 1, 1000, easeOut, v => (U!.style.opacity = String(v))),
        tween(28, -3, 1000, easeOut, v => (U!.style.letterSpacing = v + 'px')),
        tween(0, 1, 1000, easeOut, v => (X!.style.opacity = String(v))),
        tween(28, -3, 1000, easeOut, v => (X!.style.letterSpacing = v + 'px')),
      ]);
      await wait(600);
      await Promise.all([
        tween(0, 0.45, 800, easeOut, v => (N!.style.opacity = String(v))),
        tween(0, 90, 800, easeOut, v => (N!.style.maxWidth = v + 'px')),
      ]);
      await wait(300);
      await Promise.all([
        tween(0, 1, 500, easeOut, v => (LINE!.style.opacity = String(v))),
        tween(0, 32, 500, easeInOut, v => (LINE!.style.width = v + 'px')),
      ]);
      await wait(200);
      await tween(0, 1, 500, easeOut, v => (TAG!.style.opacity = String(v)));
      await wait(100);
      await tween(0, 1, 500, easeOut, v => (HINT!.style.opacity = String(v)));
      await wait(2200);
      await tween(1, 0, 800, easeInOut, v => (HINT!.style.opacity = String(v)));
    }
    run();
    return () => { cancelled = true; };
  }, []);

  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <style>{`
        .unx-wrap { display: flex; flex-direction: column; align-items: center; }
        .unx-wordmark { display: flex; align-items: baseline; line-height: 1; }
        .unx-U { font-family: 'IBM Plex Sans', sans-serif; font-size: 108px; font-weight: 800; color: var(--dark); letter-spacing: -3px; display: inline-block; opacity: 0; }
        .unx-n { font-family: var(--ff-display); font-size: 108px; font-weight: 300; font-style: italic; color: var(--muted); opacity: 0.5; letter-spacing: -3px; display: inline-block; overflow: hidden; white-space: nowrap; max-width: 0; }        .unx-X-wrap { position: relative; display: inline-block; }
        .unx-X { font-family: 'IBM Plex Sans', sans-serif; font-size: 108px; font-weight: 800; color: var(--dark); letter-spacing: -3px; display: inline-block; opacity: 0; }
        .unx-line { position: absolute; bottom: -8px; left: 50%; transform: translateX(-50%); height: 2px; background: var(--dark); border-radius: 2px; width: 0; opacity: 0; }
        .unx-tag { font-family: 'IBM Plex Sans', sans-serif; font-size: 11px; letter-spacing: 5px; color: var(--muted); font-weight: 500; text-transform: uppercase; margin-top: 22px; opacity: 0; }
        .unx-hint { font-family: 'IBM Plex Sans', sans-serif; font-size: 11px; color: var(--border); letter-spacing: 1px; margin-top: 16px; opacity: 0; }
      `}</style>
      <div className="unx-wrap">
        <div className="unx-wordmark">
          <span className="unx-U">U</span>
          <span className="unx-n">n</span>
          <div className="unx-X-wrap">
            <span className="unx-X">X</span>
            <span className="unx-line" />
          </div>
        </div>
        <p className="unx-tag">product &amp; ux design</p>
        <p className="unx-hint">UX — experience &nbsp;·&nbsp; n — Nazrin</p>
      </div>
    </div>
  );
}

const PAD = '4rem 5rem';

export default function Home() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .work-card {
          transition: transform 0.3s ease;
        }
        .work-card:hover {
          transform: translateY(-4px);
        }
        .nav-link:hover { color: var(--dark) !important; }
        .guidelines-banner:hover { opacity: 0.7; }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 5rem', borderBottom: '1px solid var(--border)', background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ width: 'var(--ff-display)', fontSize: '20px' }}>Nazrin.</div>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {['Work', 'About', 'Experience', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link" style={{ color: 'var(--muted)', fontSize: '13px', letterSpacing: '0.05em', textDecoration: 'none', transition: 'color 0.2s' }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '3.5rem 5rem 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '4rem', alignItems: 'center' }}>
          {/* LEFT */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
              <span style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase' }}>Available for work</span>
            </div>

            <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2rem,5vw,4rem)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '800px', marginBottom: '2rem' }}>
              Hello, I&apos;m Nazrin —<br />
              a product designer<br />
              <span style={{ color: 'var(--muted)', fontWeight: 300, fontStyle: 'italic' }}>crafting experiences</span><br />
              <span style={{ color: 'var(--muted)', fontWeight: 300 }}>people love.</span>
            </h1>

            <p style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '480px', lineHeight: 1.9, marginBottom: '2.5rem', fontWeight: 300 }}>
              I turn complex problems into clear, elegant interfaces — currently open to full-time roles and freelance.
            </p>

            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#work" style={{ background: 'var(--dark)', color: 'var(--cream)', padding: '0.75rem 1.75rem', fontSize: '13px', letterSpacing: '0.05em', borderRadius: '4px', textDecoration: 'none' }}>
                View work
              </a>
              <a href="#contact" style={{ border: '1px solid var(--border)', padding: '0.75rem 1.75rem', fontSize: '13px', letterSpacing: '0.05em', borderRadius: '4px', textDecoration: 'none', color: 'var(--dark)' }}>
                Contact
              </a>
            </div>
          </div>

          {/* RIGHT — logo */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <UnXHero />
          </div>
        </div>

        <div style={{ borderBottom: '1px solid var(--border)', marginTop: '4rem' }} />
      </section>


      {/* MARQUEE */}
      <div style={{ overflow: 'hidden', padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '3rem', width: 'max-content', animation: 'marquee 25s linear infinite', whiteSpace: 'nowrap' }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '3rem' }}>
              {['UX Design', '✦', 'Product Strategy', '✦', 'Interaction Design', '✦', 'Figma', '✦', 'Design Systems', '✦', 'User Research', '✦', 'Prototyping', '✦', 'Accessibility', '✦' ].map((item, j) => (
                <span key={j} style={{ fontSize: '12px', letterSpacing: '0.12em', color: item === '✦' ? 'var(--accent)' : 'var(--muted)', textTransform: 'uppercase' }}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work" style={{ padding: PAD }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400 }}>Selected Works</h2>
          <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em' }}>04 Projects</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
  
           {[
            { num: '01', bg: '#E3DDD6', tag: 'SaaS · Document Management', title: 'ArchiveX', desc: 'Designing a complete SaaS platform for digital archiving and intelligent document management', link: '/work/archivex', img: '/thumb.jpg' },
            { num: '02', bg: '#D8E8D0', tag: 'Mobile · AgTech · Android', title: 'Yonca', desc: 'AI-driven agricultural mobile app for farmers — subsidies, satellite monitoring and crop intelligence', link: '/work/yonca', img: '/home-yonca-cover.png' },
            { num: '03', bg: '#E8E2D9', tag: 'AgTech · B2B SaaS', title: 'Eagro', desc: 'Redesigning an AI-driven agricultural platform for farmers, operators and inspectors', link: '/work/eagro', img: '/soil-map.png' },
            { num: '04', bg: '#DFD8CE', tag: 'EdTech · UX Redesign', title: 'Ingress Academy', desc: 'Redesigning a learning platform for clarity, accessibility and conversion', link: '/work/ingress-academy', img: '/Thumbnail-ingress.jpg' },
            { num: '05', bg: '#D8D0C4', tag: 'HFE · Conversational AI', title: 'AgroSupport', desc: 'Applying Human Factors Engineering principles to a chatbot for smallholder farmers', link: '/work/agrosupport', img: '/chatbot-main.png' },
            { num: '06', bg: '#C6BFB3', tag: 'GovTech · Satellite AI', title: 'ESUPC', desc: 'Satellite surveillance platform for urban compliance and heritage protection', link: '/work/urbanguard', img: '/thumb-esupc.jpg' },
            { num: '07', bg: '#CFC8BC', tag: 'Data Visualization · Tableau', title: 'Data Viz & Dashboards', desc: 'UX decisions behind Tableau dashboards — layout, chart selection and technical constraints', link: '/work/data-viz', img: '' },
          ].map(card => (
            <a key={card.title} href={card.link} className="work-card" style={{ border: '1px solid var(--border)', overflow: 'hidden', cursor: 'pointer', display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                {card.img ? (
                  <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ width: 'var(--ff-display)', fontSize: '3rem', color: 'var(--border)', fontStyle: 'normal' }}>{card.num}</span>
                  </div>
                )}
                <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--cream)', padding: '1px 6px', borderRadius: '4px', fontSize: '10px', letterSpacing: '0.1em', color: 'var(--muted)' }}>{card.tag}</span>
              </div>
              <div style={{ padding: '1.5rem', background: 'var(--warm)' }}>
                <h3 style={{ width: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 500, marginBottom: '0.4rem' }}>{card.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{card.desc}</p>
                <span style={{ display: 'inline-block', marginTop: '0.8rem', fontSize: '13px', color: 'var(--accent)' }}>View case study →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* GUIDELINES BANNER */}
      
      <section style={{ padding: '2.5rem 5rem', borderBottom: '1px solid var(--border)', borderTop: '1px solid var(--border)' }}>
        <a href="/guidelines" target="_blank" rel="noopener noreferrer" className="guidelines-banner"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', textDecoration: 'none', color: 'inherit', transition: 'opacity 0.2s' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.5rem' }}>How I think about components</div>
            <div style={{ width: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--dark)', marginBottom: '0.4rem' }}>Component & UX Guidelines</div>
            <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>A reference I wrote and maintained with my team — when to use each component, when not to, and how they should behave. Built to align decisions, speed up reviews, and reduce inconsistency across products.</div>
          </div>
          <span style={{ fontSize: '12px', color: 'var(--dark)', letterSpacing: '0.05em', flexShrink: 0, border: '1px solid var(--dark)', padding: '8px 16px', fontWeight: 400, whiteSpace: 'nowrap' }}>View guidelines ↗</span>
        </a>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: PAD, background: 'var(--warm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400 }}>About Me</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
          <div>
            <p style={{ color: 'var(--muted)', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.9 }}>
              I&apos;m a <strong style={{ color: 'var(--dark)', fontWeight: 500 }}>Product Designer</strong> with a passion for creating interfaces that are both beautiful and deeply functional.
            </p>
            <p style={{ color: 'var(--muted)', fontWeight: 300, marginBottom: '1rem', lineHeight: 1.9 }}>
              My process is rooted in <strong style={{ color: 'var(--dark)', fontWeight: 500 }}>empathy and curiosity</strong>. I spend time understanding users before touching Figma.
            </p>
            <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.9 }}>
              Currently open to full-time roles and freelance projects.
            </p>
            <div style={{ marginTop: '2rem' }}>
              <div style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Tools &amp; Skills</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['Figma', 'FigJam', 'Miro', 'Prototyping', 'User Research', 'Wireframing', 'Design Systems', 'Usability Testing', 'HTML & CSS'].map(skill => (
                  <span key={skill} style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: '4px 12px', fontSize: '12px', color: 'var(--muted)' }}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { num: '5+', label: 'Years of experience' },
              { num: '20+', label: 'Projects delivered' },
              { num: '8', label: 'Happy clients & companies' }
            ].map(stat => (
              <div key={stat.label} style={{ borderTop: '1px solid var(--border)', paddingTop: '1.5rem' }}>
                <div style={{ width: 'var(--ff-display)', fontSize: '3rem', fontWeight: 400, lineHeight: 1, marginBottom: '0.3rem' }}>{stat.num}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: PAD }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400 }}>Experience</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          <div>
            <div style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Work History</div>
            {[
              { year: '2023 — Present', role: 'Head of UX/UI Design', company: 'Digital Umbrella · Full-time', desc: 'Led end-to-end design for a SaaS analytics platform used by 50,000+ teams globally.' },
              { year: '2022 — 2023', role: 'UX/UI Designer', company: 'International Bank of Azerbaijan · Full-time', desc: 'Designed the mobile onboarding experience, improving activation rate by 34%.' },
              { year: '2018 — 2020', role: 'UI/UX Designer', company: 'Design Studio · Full-time', desc: 'Worked across brand identity, web design, and interactive prototypes for agency clients.' },
            ].map(item => (
              <div key={item.year} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.25rem', marginBottom: '1.75rem', position: 'relative' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', position: 'absolute', left: '-4px', top: '5px' }} />
                <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>{item.year}</div>
                <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '0.2rem' }}>{item.role}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, marginBottom: '0.4rem' }}>{item.company}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '12px', letterSpacing: '0.12em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Education</div>
            {[
              { year: '2014 — 2018', role: 'BA Visual Communication', company: 'University of Design', desc: 'Graduated with honours. Thesis on cognitive load in mobile interfaces.' },
              { year: '2023', role: 'Google UX Design Certificate', company: 'Google · Coursera', desc: '' },
              { year: '2022', role: 'Interaction Design Foundation', company: 'Advanced UX Course', desc: '' },
            ].map(item => (
              <div key={item.year} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.25rem', marginBottom: '1.75rem', position: 'relative' }}>
                <div style={{ width: '6px', height: '6px', background: 'var(--accent)', borderRadius: '50%', position: 'absolute', left: '-4px', top: '5px' }} />
                <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.08em', marginBottom: '0.3rem' }}>{item.year}</div>
                <div style={{ fontWeight: 500, fontSize: '14px', marginBottom: '0.2rem' }}>{item.role}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{item.company}</div>
                {item.desc && <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, marginTop: '0.4rem' }}>{item.desc}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ margin: '0 5rem 5rem', padding: '4rem', background: 'var(--dark)', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Get in touch</div>
          <h2 style={{ width: 'var(--ff-display)', fontSize: '2.5rem', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.2 }}>
            Let&apos;s build something great together
          </h2>
          <p style={{ color: '#9E9690', marginBottom: '2.5rem', fontWeight: 300 }}>
            Open to full-time roles, freelance projects, and creative collaborations.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Email', value: 'nchobanzada@gmail.com', href: 'mailto:nchobanzada@gmail.com' },
              { label: 'LinkedIn', value: 'linkedin.com/in/nazrinchobanzada', href: 'https://linkedin.com/in/nazrinchobanzada' },
            ].map(link => (
              <a key={link.label} href={link.href}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', border: '1px solid #3A3630', color: 'var(--cream)', fontSize: '14px', transition: 'all .2s', textDecoration: 'none' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#3A3630'; e.currentTarget.style.color = 'var(--cream)'; }}>
                <span style={{ fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{link.label}</span>
                <span>{link.value} →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}