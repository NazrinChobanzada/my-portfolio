"use client";
import Link from "next/link";
import { useState } from "react";

const components = [
  { id: 'button', category: 'Actions', title: 'Button', desc: 'A clickable element that triggers an action or navigates the user.', when: ['Use for the primary action on a screen', 'Use for form submissions', 'Use when the action is immediate and clear'], whenNot: ['Do not use for navigation between pages — use links instead', 'Avoid more than one primary button per view', 'Do not disable without explanation'], behavior: ['Must have hover, active, focus, and disabled states', 'Loading state replaces label with spinner', 'Minimum touch target 44x44px on mobile'] },
  { id: 'icon-button', category: 'Actions', title: 'Icon Button', desc: 'A button represented by an icon for compact, recognizable actions.', when: ['Use for actions with universally understood icons (close, edit, delete)', 'Use in toolbars and dense UIs where space is limited', 'Use alongside labels when space allows'], whenNot: ['Do not use for unfamiliar or ambiguous icons without a tooltip', 'Avoid using icon-only buttons as primary actions'], behavior: ['Always include a tooltip or aria-label', 'Same states as regular button apply', 'Icon should be 16–24px inside the button'] },
  { id: 'toggle', category: 'Actions', title: 'Toggle Button', desc: 'A button that switches between two states like on/off.', when: ['Use for binary settings that take effect immediately', 'Use for show/hide, enable/disable scenarios'], whenNot: ['Do not use toggle for form fields that require saving', 'Avoid toggles for multi-step or complex decisions'], behavior: ['State change must be immediate and visible', 'Label should reflect current state, not the action', 'Include visual and text indicator of state'] },
  { id: 'navbar', category: 'Navigation', title: 'Navigation Bar', desc: 'The primary navigation element providing access to main sections.', when: ['Use for top-level navigation with 3–7 destinations', 'Use when all sections are equally important'], whenNot: ['Do not use more than 7 items', 'Avoid hiding critical links in dropdowns'], behavior: ['Active state must be clearly visible', 'Keyboard navigable without mouse', 'Sticky on scroll for long pages'] },
  { id: 'breadcrumb', category: 'Navigation', title: 'Breadcrumb', desc: 'A secondary navigation showing the user\'s location in a hierarchy.', when: ['Use for deep hierarchies with 3+ levels', 'Use when users frequently need to backtrack'], whenNot: ['Do not use on flat single-level navigation', 'Avoid on mobile where space is limited'], behavior: ['Last item (current page) should not be a link', 'Separator must be consistent throughout', 'Truncate middle items on small screens'] },
  { id: 'tabs', category: 'Navigation', title: 'Tabs', desc: 'A control that switches between related views of the same content.', when: ['Use for switching between related sections on the same page', 'Use when content is parallel and comparable'], whenNot: ['Do not use for navigating to different pages', 'Avoid more than 6 tabs — consider a dropdown'], behavior: ['Active tab must be clearly differentiated', 'Content switches without page reload', 'Scrollable on mobile when tabs overflow'] },
  { id: 'input', category: 'Data Entry', title: 'Text Input', desc: 'A field that accepts user-typed text for short open-ended responses.', when: ['Use for short, open-ended text like names, emails, or search', 'Use when the answer cannot be predicted'], whenNot: ['Do not use for long text — use textarea instead', 'Avoid placeholder-only labels'], behavior: ['Validation on blur, not on every keystroke', 'Error message appears directly below field', 'Label always visible above the field'] },
  { id: 'dropdown', category: 'Data Entry', title: 'Dropdown / Select', desc: 'A control for selecting one option from a predefined list.', when: ['Use when there are 5 or more predefined options', 'Use when the full list would clutter the UI'], whenNot: ['Do not use for fewer than 3 options — use radio buttons', 'Avoid for frequently used options — consider chips or radio'], behavior: ['Searchable when list exceeds 10 items', 'Selected value always visible in closed state', 'Keyboard navigable with arrow keys'] },
  { id: 'checkbox', category: 'Data Entry', title: 'Checkbox', desc: 'A control for selecting one or multiple options independently.', when: ['Use for multi-select scenarios', 'Use for binary opt-in choices'], whenNot: ['Do not use for mutually exclusive options — use radio', 'Avoid unchecked-by-default for required confirmations'], behavior: ['Indeterminate state for partial selection of a group', 'Clicking the label should also toggle the checkbox', 'Group checkboxes with a clear group label'] },
  { id: 'table', category: 'Data Display', title: 'Table', desc: 'A structured display for data that users need to compare or act on.', when: ['Use when users need to compare values across attributes', 'Use for data with clear column structure'], whenNot: ['Do not use for simple key-value pairs — use a description list', 'Avoid on mobile without a responsive alternative'], behavior: ['Row hover state clearly visible', 'Sortable columns right-aligned for numbers', 'Empty state explains why there is no data'] },
  { id: 'card', category: 'Data Display', title: 'Card', desc: 'A contained unit for displaying grouped information about a single subject.', when: ['Use for collections of items with equal hierarchy', 'Use when each item needs visual separation'], whenNot: ['Do not use cards inside cards', 'Avoid if the content is better as a list'], behavior: ['Entire card should be clickable if it leads somewhere', 'Consistent card heights in a grid where possible', 'Loading skeleton should match card layout'] },
  { id: 'badge', category: 'Data Display', title: 'Badge', desc: 'A small visual indicator for status, count, or category.', when: ['Use for status labels (active, pending, archived)', 'Use for notification counts', 'Use for category tags'], whenNot: ['Do not use badges as buttons', 'Avoid too many badges in one view — causes visual noise'], behavior: ['Maximum 2–3 words', 'Color must not be the only differentiator', 'Zero count badges should be hidden'] },
  { id: 'toast', category: 'Feedback', title: 'Toast Notification', desc: 'A brief, auto-dismissing message for non-blocking feedback.', when: ['Use for success confirmations after an action', 'Use for non-critical errors that do not require action'], whenNot: ['Do not use for critical errors that need user action', 'Avoid stacking more than 3 toasts at once'], behavior: ['Auto-dismiss after 4–5 seconds', 'Include a manual dismiss option', 'Appear consistently from the same position'] },
  { id: 'modal', category: 'Feedback', title: 'Modal / Dialog', desc: 'An overlay that interrupts the user to focus on a specific task.', when: ['Use for confirmation of destructive actions', 'Use for short focused tasks that keep page context'], whenNot: ['Do not use for complex multi-step flows', 'Do not stack modals'], behavior: ['Escape key always closes the modal', 'Focus trapped inside while open', 'Scroll locked on background content'] },
  { id: 'empty-state', category: 'Feedback', title: 'Empty State', desc: 'A placeholder shown when a list or view has no content to display.', when: ['Show when a list has no items', 'Show when a search returns no results'], whenNot: ['Do not show "No data" without context or next step', 'Avoid error visuals for empty states'], behavior: ['First-time empty: explain what appears here and how to start', 'Zero results: confirm what was searched, suggest alternatives', 'Always include a call to action'] },
  { id: 'skeleton', category: 'Feedback', title: 'Skeleton Screen', desc: 'A placeholder that mimics content layout while data loads.', when: ['Use for content with a predictable layout', 'Use for initial page or section loads'], whenNot: ['Do not use for unpredictable or highly variable content', 'Avoid for very short loads under 300ms'], behavior: ['Match approximate layout of real content', 'Animate with a shimmer or pulse', 'Transition smoothly to real content without layout shift'] },
];

const allCategories = ['All', ...Array.from(new Set(components.map(c => c.category)))];

export default function Guidelines() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState<string | null>(null);

  const filtered = components.filter(c => {
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || c.category === activeCategory;
    return matchSearch && matchCat;
  });

  const selectedComponent = components.find(c => c.id === selected);

  return (
    <>
      <style>{`
        .cat-btn { transition: all 0.2s; cursor: pointer; }
        .comp-card { transition: all 0.2s; cursor: pointer; }
        .comp-card:hover { border-color: var(--accent) !important; transform: translateY(-2px); }
        .back-link:hover { color: var(--dark) !important; }
        .close-btn:hover { background: var(--warm) !important; }
      `}</style>

      {/* NAV */}
      <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem 5rem', borderBottom: '1px solid var(--border)', background: 'var(--cream)', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ width: 'var(--ff-display)', fontSize: '20px', textDecoration: 'none', color: 'var(--dark)' }}>Nazrin.</Link>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <Link href="/#work" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}>Work</Link>
          <Link href="/#about" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}>About</Link>
          <Link href="/#experience" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}>Experience</Link>
          <Link href="/#contact" style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none', letterSpacing: '0.05em', transition: 'color 0.2s' }}>Contact</Link>
          <span style={{ fontSize: '13px', color: 'var(--dark)', letterSpacing: '0.05em', fontWeight: 500, borderBottom: '1px solid var(--dark)', paddingBottom: '2px' }}>Guidelines</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ padding: '5rem 5rem 4rem', textAlign: 'center', borderBottom: '1px solid var(--border)', background: 'var(--warm)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.15em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: '1rem' }}>A living reference for design decisions</div>
        <h1 style={{ fontFamily: 'var(--ff-display)', fontSize: 'clamp(2.5rem,5vw,4rem)', fontWeight: 500, lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Component guidelines,<br />
          <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>documented.</span>
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8, maxWidth: '520px', margin: '0 auto 2.5rem' }}>
          When to use, when not to, and how each component should behave — written from a UX perspective.
        </p>

        {/* SEARCH */}
        <div style={{ maxWidth: '520px', margin: '0 auto', position: 'relative' }}>
          <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', fontSize: '14px' }}>⌕</span>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search components... e.g. button, modal, table"
            style={{ fontFamily: '100%', padding: '0.9rem 1rem 0.9rem 2.5rem', border: '1px solid var(--border)', background: 'var(--cream)', fontSize: '14px', color: 'var(--dark)', width: 'var(--ff-body)', outline: 'none', borderRadius: '4px', boxSizing: 'border-box' }}
          />
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ padding: '3rem 5rem' }}>

        {/* CATEGORY FILTERS */}
        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {allCategories.map(cat => (
            <button key={cat} className="cat-btn"
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '0.5rem 1.25rem', border: '1px solid var(--border)', fontSize: '13px',
                background: activeCategory === cat ? 'var(--dark)' : 'var(--cream)',
                color: activeCategory === cat ? 'var(--cream)' : 'var(--muted)',
                cursor: 'pointer', fontFamily: 'var(--ff-body)', borderRadius: '4px',                 fontWeight: activeCategory === cat ? 500 : 300,
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* COUNT */}
        <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '1.5rem', letterSpacing: '0.05em' }}>
          {filtered.length} component{filtered.length !== 1 ? 's' : ''}
        </div>

        {/* GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
          {filtered.map(comp => (
            <div key={comp.id} className="comp-card"
              onClick={() => setSelected(comp.id)}
              style={{ border: '1px solid var(--border)', padding: '1.5rem', background: 'var(--cream)', cursor: 'pointer', transition: 'all 0.2s' }}>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>{comp.category}</div>
              <h3 style={{ fontFamily: 'var(--ff-display)', fontSize: '1.2rem', fontWeight: 500, marginBottom: '0.5rem' }}>{comp.title}</h3>
              <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{comp.desc}</p>
              <div style={{ marginTop: '1rem', fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.05em' }}>View guidelines →</div>
            </div>
          ))}
        </div>
      </section>

      {/* DETAIL PANEL */}
      {selected && selectedComponent && (
        <div style={{ position: 'fixed', top: 0, right: 0, width: '480px', height: '100vh', background: 'var(--cream)', borderLeft: '1px solid var(--border)', zIndex: 200, overflowY: 'auto', boxShadow: '-8px 0 32px rgba(0,0,0,0.08)' }}>
          <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, background: 'var(--cream)', zIndex: 1 }}>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>{selectedComponent.category}</div>
              <div style={{ fontFamily: 'var(--ff-display)', fontSize: '1.4rem', fontWeight: 500 }}>{selectedComponent.title}</div>
            </div>
            <button className="close-btn" onClick={() => setSelected(null)}
              style={{ background: 'transparent', border: '1px solid var(--border)', width: '36px', height: '36px', cursor: 'pointer', fontSize: '16px', color: 'var(--muted)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}>
              ✕
            </button>
          </div>

          <div style={{ padding: '2rem' }}>
            <p style={{ fontSize: '15px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.8, marginBottom: '2rem' }}>{selectedComponent.desc}</p>

            {/* WHEN TO USE */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#5a8a5a', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dark)' }}>When to use</span>
              </div>
              {selectedComponent.when.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem 1rem', background: 'var(--warm)', border: '1px solid var(--border)', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#5a8a5a', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>✓</span>
                  <p style={{ fontSize: '13px', color: 'var(--dark)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            {/* WHEN NOT */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#c0796a', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dark)' }}>When not to use</span>
              </div>
              {selectedComponent.whenNot.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem 1rem', background: 'var(--cream)', border: '1px solid var(--border)', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#c0796a', fontSize: '12px', marginTop: '2px', flexShrink: 0 }}>✗</span>
                  <p style={{ fontSize: '13px', color: 'var(--dark)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>

            {/* BEHAVIOR */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '11px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dark)' }}>Behavior & rules</span>
              </div>
              {selectedComponent.behavior.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', padding: '0.75rem 0', borderBottom: '1px solid var(--border)' }}>
                  <span style={{ color: 'var(--accent)', fontSize: '11px', marginTop: '3px', flexShrink: 0 }}>✦</span>
                  <p style={{ fontSize: '13px', color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7, margin: 0 }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ padding: '2rem 5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>© 2026 Nazrin Chobanzada. All rights reserved.</p>
        <p style={{ fontSize: '12px', color: 'var(--muted)' }}>Designed with care.</p>
      </footer>
    </>
  );
}