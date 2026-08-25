import React, { useEffect, useRef } from 'react';

const INK = '#2D2A26';
const INK_SOFT = '#87837A';
const BG = '#F5F4EE';
const CARD = '#FFFFFF';
const LINE = '#E4E1D6';
const RUST = '#D97757';
const RUST_DEEP = '#A56A45';

const products = [
  {
    tag: '01',
    name: 'TagGenerator AI',
    line: 'Turn any post idea into captions and hashtags in seconds.',
    price: '$29',
    stat: '20 languages',
    url: 'https://taggeneratorai.vercel.app/',
    widget: 'https://widget.lava.top/343b1e9f-0ea4-4150-8f54-16bfb8a382a9',
  },
  {
    tag: '02',
    name: 'ReviewReply AI',
    line: 'Paste any customer review, get thoughtful replies in seconds.',
    price: '$39',
    stat: '20 languages',
    url: 'https://reviewreply-ai-one.vercel.app/',
    widget: 'https://widget.lava.top/2467c63d-1256-4fe2-99bf-329a37e5fded',
  },
  {
    tag: '03',
    name: 'Local Signal',
    line: 'Get found on Google Search and Maps -- posts, replies, SEO copy.',
    price: '$89',
    stat: '5 tools',
    url: 'https://local-signal.vercel.app/',
    widget: 'https://widget.lava.top/ee2cb781-d5df-4ab9-9e66-9dcb3285db79',
  },
];

const principles = [
  { n: '1', title: 'One job, done well', body: 'Every tool solves exactly one repetitive task. No dashboards to learn, no features you\u2019ll never open.' },
  { n: '2', title: 'Try before you trust', body: 'You can see what a tool does before you hand over any details. No account required just to look.' },
  { n: '3', title: 'Ships in days, not quarters', body: 'Small enough that one person can build it end to end -- so it goes from idea to live product fast.' },
  { n: '4', title: 'Pay once, keep it', body: 'No subscriptions to track or cancel. You buy access, it\u2019s yours.' },
];

const capabilities = [
  { label: 'AI integration', body: 'Every tool is built around the Claude API -- prompt design, structured output, and multimodal input like photo understanding.' },
  { label: 'Localization', body: '20 languages across all products, including full right-to-left layouts for Arabic and Persian.' },
  { label: 'Payment infrastructure', body: 'Card checkout via an embedded widget, license-code gating, and marketplace-ready redemption systems for platforms like AppSumo.' },
  { label: 'Maps & geolocation', body: 'Interactive maps, live address autocomplete, and geocoding -- built on open data, no vendor lock-in.' },
  { label: 'Fast, focused builds', body: 'React and Vite, deployed the same day an idea is validated. No months-long roadmap before something ships.' },
  { label: 'End-to-end ownership', body: 'Product, backend, infrastructure, and support -- one person, one accountable point of contact. Deployed on Vercel, the same platform behind Next.js sites for Walmart, Apple, Nike, and Netflix.' },
];

export default function App() {
  const mapContainerRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    let cancelled = false;

    function loadLeaflet() {
      return new Promise((resolve) => {
        if (window.L) { resolve(); return; }
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.onload = resolve;
        document.body.appendChild(script);
      });
    }

    loadLeaflet().then(() => {
      if (cancelled || !mapContainerRef.current || mapInstanceRef.current) return;
      const L = window.L;
      const houston = [29.7604, -95.3698];

      const map = L.map(mapContainerRef.current, { zoomControl: false, attributionControl: true, scrollWheelZoom: false })
        .setView(houston, 12);
      map.attributionControl.setPrefix('');

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; OpenStreetMap &copy; CARTO',
        maxZoom: 20,
      }).addTo(map);

      const icon = L.divIcon({
        className: '',
        html: `<div style="position:relative;width:22px;height:22px;">
          <div style="position:absolute;inset:0;border-radius:50%;border:2px solid #A56A45;opacity:0.6;"></div>
          <div style="position:absolute;top:5px;left:5px;width:12px;height:12px;border-radius:50%;background:#D97757;box-shadow:0 0 8px rgba(217,119,87,0.7);"></div>
        </div>`,
        iconSize: [22, 22],
        iconAnchor: [11, 11],
      });
      L.marker(houston, { icon }).addTo(map);
      mapInstanceRef.current = map;
    });

    return () => { cancelled = true; };
  }, []);

  return (
    <div style={{ minHeight: '100vh', background: BG, color: INK, fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@500&display=swap');
        @keyframes runP {
          0%   { transform: translateX(0) translateY(0) rotate(-4deg); }
          25%  { transform: translateX(60px) translateY(-14px) rotate(3deg); }
          50%  { transform: translateX(120px) translateY(0) rotate(-3deg); }
          75%  { transform: translateX(60px) translateY(-10px) rotate(4deg); }
          100% { transform: translateX(0) translateY(0) rotate(-4deg); }
        }
        .running-p {
          position: absolute; font-family: 'Fraunces', serif; font-weight: 700;
          color: rgba(217,119,87,0.14); pointer-events: none; user-select: none;
          animation: runP 6s ease-in-out infinite;
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 24px 80px' }}>
        <span aria-hidden="true" style={{
          position: 'absolute', top: -60, right: -40, fontFamily: "'Fraunces', serif", fontWeight: 700,
          fontSize: 420, color: 'rgba(217,119,87,0.06)', lineHeight: 1, userSelect: 'none', transform: 'rotate(-6deg)',
        }}>#</span>
        <span className="running-p" aria-hidden="true" style={{ bottom: 40, left: 40, fontSize: 90 }}>Р</span>

        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16, marginBottom: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                display: 'inline-block', transform: 'skewX(-12deg)', fontWeight: 800, fontSize: 22,
                background: `linear-gradient(90deg, ${RUST}, ${RUST_DEEP})`, WebkitBackgroundClip: 'text',
                backgroundClip: 'text', color: 'transparent',
              }}>#</span>
              <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.12em', color: RUST_DEEP, textTransform: 'uppercase' }}>
                Plainwork Studio
              </span>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <a href="https://wa.me/79101537910" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: INK_SOFT, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                WhatsApp
              </a>
              <a href="https://t.me/+79101537910" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: INK_SOFT, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Telegram
              </a>
              <a href="mailto:kssw117@gmail.com"
                style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11.5, color: INK_SOFT, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                Email
              </a>
            </div>
          </div>

          <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 'clamp(34px, 5vw, 52px)', lineHeight: 1.1, margin: '0 0 24px', letterSpacing: '-0.01em' }}>
            Small, useful tools for people running a business alone.
          </h1>
          <p style={{ fontSize: 17, color: INK_SOFT, lineHeight: 1.65, maxWidth: 540, margin: '0 0 12px' }}>
            Plainwork builds focused AI tools that solve one repetitive task each --
            writing captions, replying to reviews, staying visible on Google -- so there's
            a little more time left for the parts of the business that actually need a person.
          </p>
          <p style={{ fontSize: 14, color: RUST_DEEP, lineHeight: 1.6, maxWidth: 540, margin: '0 0 32px', fontWeight: 500 }}>
            Three tools live so far. More on the way.
          </p>

          <div style={{ display: 'flex', gap: 28, flexWrap: 'wrap', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12.5, color: INK_SOFT }}>
            <span><strong style={{ color: INK }}>3</strong> products shipped</span>
            <span><strong style={{ color: INK }}>20</strong> languages supported</span>
            <span><strong style={{ color: INK }}>1</strong> person building it</span>
          </div>
        </div>
      </section>

      {/* ---------- THE WORK (ledger-style portfolio) ---------- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 4 }}>
            The Work
          </h2>
          <p style={{ color: INK_SOFT, fontSize: 14, marginBottom: 28 }}>Everything currently live, in order of release.</p>

          <div style={{ border: `1px solid ${LINE}`, borderRadius: 14, overflow: 'hidden', background: CARD }}>
            {products.map((p, i) => (
              <div key={p.tag} style={{ padding: '22px 24px', borderTop: i === 0 ? 'none' : `1px solid ${LINE}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 20, marginBottom: 18 }}>
                  <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 13, color: RUST_DEEP, width: 24, flexShrink: 0, marginTop: 3 }}>{p.tag}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 18, marginBottom: 3 }}>{p.name}</div>
                    <div style={{ fontSize: 13.5, color: INK_SOFT, lineHeight: 1.4 }}>{p.line}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4 }}>
                    <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: INK_SOFT }}>{p.stat}</span>
                    <span style={{ fontWeight: 600, fontSize: 15 }}>{p.price}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-start', paddingLeft: 44 }}>
                  <iframe title={`Buy ${p.name}`} style={{ border: 'none', borderRadius: 10 }} width="250" height="80" src={p.widget}></iframe>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CAPABILITIES ---------- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 4 }}>
            Capabilities
          </h2>
          <p style={{ color: INK_SOFT, fontSize: 14, marginBottom: 28 }}>What's actually running under the three products above.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: LINE, border: `1px solid ${LINE}`, borderRadius: 14, overflow: 'hidden' }}>
            {capabilities.map((c) => (
              <div key={c.label} style={{ background: CARD, padding: '22px 22px' }}>
                <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.04em', color: RUST_DEEP, marginBottom: 8 }}>
                  {c.label}
                </div>
                <p style={{ fontSize: 13.5, color: INK_SOFT, lineHeight: 1.55, margin: 0 }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- APPROACH ---------- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 28 }}>
            How things get built here
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 28 }}>
            {principles.map((pr) => (
              <div key={pr.n}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 28, height: 28,
                  borderRadius: '50%', border: `1px solid ${RUST}`, color: RUST_DEEP,
                  fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, fontWeight: 600, marginBottom: 14,
                }}>{pr.n}</div>
                <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 17, margin: '0 0 8px' }}>{pr.title}</h3>
                <p style={{ fontSize: 14, color: INK_SOFT, lineHeight: 1.55, margin: 0 }}>{pr.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- ABOUT / FOUNDER ---------- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto', background: CARD, border: `1px solid ${LINE}`, borderRadius: 16, padding: '40px 36px' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 20 }}>
            About
          </h2>
          <p style={{ fontFamily: "'Fraunces', serif", fontSize: 21, lineHeight: 1.5, margin: '0 0 20px', color: INK }}>
            I'm Ksenia, and I build every part of Plainwork myself -- the products, the
            infrastructure behind them, and the support inbox.
          </p>
          <p style={{ fontSize: 15, color: INK_SOFT, lineHeight: 1.65, margin: 0 }}>
            I kept noticing the same pattern with small business owners: a handful of small,
            repetitive writing tasks -- a caption, a reply to a review, a Google post -- that
            never got done because there was always something more urgent. Plainwork is my
            answer to that: tools narrow enough to actually finish, built by one person who
            reads every support email personally.
          </p>
        </div>
      </section>

      {/* ---------- LOCATION ---------- */}
      <section style={{ padding: '0 24px 96px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '0.1em', color: RUST_DEEP, textTransform: 'uppercase', marginBottom: 4 }}>
            Based in
          </h2>
          <p style={{ color: INK_SOFT, fontSize: 14, marginBottom: 20 }}>Houston, TX</p>
          <div
            ref={mapContainerRef}
            style={{ width: '100%', height: 260, borderRadius: 14, border: `1px solid ${LINE}`, overflow: 'hidden' }}
          />
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer style={{ padding: '32px 24px 48px', borderTop: `1px solid ${LINE}` }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
            <span style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: INK_SOFT }}>Plainwork &middot; built solo, end to end</span>
            <div style={{ display: 'flex', gap: 16 }}>
              <a href="https://wa.me/79101537910" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: RUST_DEEP }}>WhatsApp</a>
              <a href="https://t.me/+79101537910" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: RUST_DEEP }}>Telegram</a>
              <a href="mailto:kssw117@gmail.com" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, color: RUST_DEEP }}>kssw117@gmail.com</a>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 16, paddingTop: 16, borderTop: `1px solid ${LINE}` }}>
            <a href="/terms.html" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: INK_SOFT }}>Terms of Service</a>
            <a href="/privacy.html" style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, color: INK_SOFT }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
