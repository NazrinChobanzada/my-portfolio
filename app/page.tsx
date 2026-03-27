"use client";

export default function Home() {
  return (
    <div className="page-fade">
      {/* NAV */}
      <nav style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 3rem', borderBottom: '1px solid var(--border)',
        background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100
      }}>
        <div style={{ fontFamily: 'var(--ff-display)', fontSize: '20px' }}>Nazrin. </div>
        <div style={{ display: 'flex', gap: '2rem' }}>
          {['Work', 'About', 'Experience', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: 'var(--muted)', fontSize: '13px', letterSpacing: '0.05em' }}>
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '4.5rem 4rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '3rem' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }} />
          <span style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase' }}>
            Available for work
          </span>
        </div>

        <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2.4rem,7vw,5.5rem)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.02em', maxWidth: '800px', marginBottom: '2.5rem' }}>
          Hello, I&apos;m Nazrin —<br />
          a product designer<br />
          <span style={{ color: 'var(--muted)', fontWeight: 300 }}>crafting experiences</span><br />
          <span style={{ color: 'var(--muted)', fontWeight: 300 }}>people love.</span>
        </h2>

        <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.9, fontWeight: 300, maxWidth: '480px', marginBottom: '2.5rem' }}>
          I turn complex problems into clear, elegant interfaces — currently open to full-time roles and freelance.
        </p>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '4rem' }}>
          <a href="#work" style={{ background: 'var(--dark)', color: 'var(--cream)', padding: '0.75rem 1.75rem', fontSize: '13px', letterSpacing: '0.05em', borderRadius: '4px' }}>
            View work
          </a>
          <a href="#contact" style={{ border: '1px solid var(--border)', padding: '0.75rem 1.75rem', fontSize: '13px', letterSpacing: '0.05em', borderRadius: '4px' }}>
            Contact
          </a>
        </div>

        <div style={{ borderBottom: '1px solid var(--border)' }} />
      </section>

      {/* MARQUEE */}
      <div style={{ overflow: 'hidden', padding: '1.25rem 0', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', gap: '3rem', width: 'max-content', animation: 'marquee 25s linear infinite', whiteSpace: 'nowrap' }}>
          {[...Array(2)].map((_, i) => (
            <div key={i} style={{ display: 'flex', gap: '3rem' }}>
              {['UX Design', '✦', 'Product Strategy', '✦', 'Interaction Design', '✦', 'Figma', '✦', 'Design Systems', '✦', 'User Research', '✦', 'Prototyping', '✦', 'Accessibility'].map((item, j) => (
                <span key={j} style={{ fontSize: '12px', letterSpacing: '0.12em', color: item === '✦' ? 'var(--accent)' : 'var(--muted)', textTransform: 'uppercase' }}>{item}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .work-card {
          filter: blur(2px);
          opacity: 0.6;
          transition: filter 0.4s ease, opacity 0.4s ease, transform 0.3s ease;
        }
        .work-card:hover {
          filter: blur(0);
          opacity: 1;
          transform: translateY(-4px);
        }
      `}</style>
     

      {/* WORK */}
      <section id="work" style={{ padding: '4rem 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400 }}>Selected Work</h2>
          <span style={{ fontSize: '12px', color: 'var(--muted)', letterSpacing: '0.1em' }}>03 Projects</span>
        </div>
        <div id="work-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[
            { num: '01', bg: '#E8E2D9', tag: 'Mobile App', title: 'Yonca app', desc: 'Redesigning personal finance tracking for clarity and calm', link: 'https://yohttps://play.google.com/store/apps/details?id=az.yonca&hl=en' },
            { num: '02', bg: '#DFD8CE', tag: 'SaaS Platform', title: 'Design System', desc: 'Building a scalable component library for an enterprise product' },
            { num: '03', bg: '#D8D0C4', tag: 'E-commerce', title: 'Checkout Flow', desc: 'Reducing drop-off by simplifying the purchase experience' },
            { num: '03', bg: '#D8D0C4', tag: 'E-commerce', title: 'ŞNES', desc: 'Reducing drop-off by simplifying the purchase experience' },
            { num: '03', bg: '#D8D0C4', tag: 'E-commerce', title: 'DeltaLogic', desc: 'Reducing drop-off by simplifying the purchase experience' },
            { num: '03', bg: '#D8D0C4', tag: 'E-commerce', title: 'ArchieveX', desc: 'Reducing drop-off by simplifying the purchase experience' },

          ].map(card => (
            <a key={card.title} href={card.link} target="_blank" className="work-card" rel="noopener noreferrer" style={{ background: 'var(--warm)', border: '1px solid var(--border)', overflow: 'hidden', cursor: 'pointer', display: 'block', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ height: '220px', background: card.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                <span style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', color: 'var(--border)', fontStyle: 'normal' }}>{card.num}</span>
                <span style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'var(--cream)', padding: '4px 10px', fontSize: '11px', letterSpacing: '0.1em', color: 'var(--muted)' }}>{card.tag}</span>
              </div>
              <div style={{ padding: '1.5rem' }}>
                <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 500, marginBottom: '0.4rem' }}>{card.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{card.desc}</p>
                <span style={{ display: 'inline-block', marginTop: '0.8rem', fontSize: '13px', color: 'var(--accent)' }}>View case study →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: '4rem 3rem', background: 'var(--warm)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400 }}>About Me</h2>
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
              <div style={{ fontSize: '12px', letterSpacing: '0.1em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Tools & Skills</div>
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
                <div style={{ fontFamily: 'var(--ff-display)', fontSize: '3rem', fontWeight: 400, lineHeight: 1, marginBottom: '0.3rem' }}>{stat.num}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" style={{ padding: '4rem 3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid var(--border)', paddingBottom: '1rem', marginBottom: '3rem' }}>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2rem', fontWeight: 400 }}>Experience</h2>
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
      <section id="contact" style={{ margin: '0 3rem 3rem', padding: '4rem', background: 'var(--dark)', color: 'var(--cream)' }}>
        <div style={{ maxWidth: '600px' }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '1rem' }}>Get in touch</div>
          <h2 style={{ fontFamily: 'var(--ff-display)', fontSize: '2.5rem', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.2 }}>
            Let&apos;s build something great together
          </h2>
          <p style={{ color: '#9E9690', marginBottom: '2.5rem', fontWeight: 300 }}>
            Open to full-time roles, freelance projects, and creative collaborations.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'Email', value: 'nchobanzada@gmail.com', href: 'mailto:nchobanzada@gmail.com' },
              { label: 'LinkedIn', value: 'linkedin.com/in/nazrinchobanzada', href: '#' },
              
            ].map(link => (
              <a key={link.label} href={link.href} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem 1.25rem', border: '1px solid #3A3630', color: 'var(--cream)', fontSize: '14px', transition: 'all .2s' }}
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
      <footer style={{ padding: '2rem 3rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
      
  
    </div>
  );
}