import React from 'react';

export default function App() {
  const products = [
    {
      name: 'TagGenerator AI',
      tagline: 'Turn any post idea into captions and hashtags in seconds',
      description: 'Caption and hashtag generator for small business social media — 20 languages, batch mode, platform-specific formatting, brand voice, photo & video support.',
      price: '$29',
      url: 'https://taggeneratorai.vercel.app/',
      accent: '#D97757',
    },
    {
      name: 'ReviewReply AI',
      tagline: 'Paste any customer review, get thoughtful replies in seconds',
      description: 'AI review response generator with sentiment detection, social post generation from positive reviews, and private follow-up drafts for negative ones — 20 languages.',
      price: '$39',
      url: 'https://reviewreply-ai-one.vercel.app/',
      accent: '#D97757',
    },
    {
      name: 'Local Signal',
      tagline: 'Get found on Google Search and Maps',
      description: 'Google Business Profile posts with automatic compliance checks, Q&A replies, SEO copy, a monthly content calendar, and competitor gap analysis — with an interactive location map.',
      price: '$89',
      url: 'https://local-signal.vercel.app/',
      accent: '#F2A93B',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', background: '#F5F4EE', fontFamily: "'Inter', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600&family=Inter:wght@400;500;600&display=swap');`}</style>

      <div style={{ maxWidth: 880, margin: '0 auto', padding: '64px 24px' }}>
        {/* Header */}
        <header style={{ marginBottom: 64 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
            <span style={{
              display: 'inline-block', transform: 'skewX(-12deg)', fontWeight: 800, fontSize: 22,
              background: 'linear-gradient(90deg, #D97757, #BD5D3A)', WebkitBackgroundClip: 'text',
              backgroundClip: 'text', color: 'transparent',
            }}>#</span>
            <span style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 22, color: '#2D2A26' }}>
              Plainwork
            </span>
          </div>
          <h1 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 40, color: '#2D2A26', lineHeight: 1.15, marginBottom: 16 }}>
            AI tools for small business owners, built by one person.
          </h1>
          <p style={{ fontSize: 17, color: '#6B6659', lineHeight: 1.6, maxWidth: 560 }}>
            I build, ship, and maintain a small suite of focused tools that solve one specific
            repetitive task each — social captions, review replies, and local SEO — so small
            business owners can spend less time writing and more time running their business.
          </p>
        </header>

        {/* Products */}
        <section>
          <h2 style={{ fontFamily: "'Fraunces', serif", fontSize: 13, letterSpacing: '0.08em', color: '#87837A', textTransform: 'uppercase', marginBottom: 24 }}>
            Products
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {products.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block', textDecoration: 'none', background: '#FFFFFF',
                  border: '1px solid #E4E1D6', borderRadius: 14, padding: '28px 28px',
                  transition: 'transform 0.15s, box-shadow 0.15s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 10 }}>
                  <h3 style={{ fontFamily: "'Fraunces', serif", fontWeight: 600, fontSize: 22, color: '#2D2A26' }}>
                    {p.name}
                  </h3>
                  <span style={{
                    fontSize: 13, fontWeight: 600, color: p.accent, background: `${p.accent}15`,
                    padding: '4px 12px', borderRadius: 999, whiteSpace: 'nowrap', flexShrink: 0,
                  }}>
                    {p.price}
                  </span>
                </div>
                <p style={{ fontSize: 15, fontWeight: 500, color: '#3A362F', marginBottom: 8 }}>
                  {p.tagline}
                </p>
                <p style={{ fontSize: 14, color: '#87837A', lineHeight: 1.55 }}>
                  {p.description}
                </p>
                <span style={{ display: 'inline-block', marginTop: 14, fontSize: 13, fontWeight: 600, color: p.accent }}>
                  Visit product &rarr;
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer style={{ marginTop: 72, paddingTop: 32, borderTop: '1px solid #E4E1D6' }}>
          <p style={{ fontSize: 13, color: '#87837A' }}>
            Built solo, end to end &mdash; product, infrastructure, and everything in between.
          </p>
          <p style={{ fontSize: 13, color: '#87837A', marginTop: 6 }}>
            Support: <a href="mailto:kssw117@gmail.com" style={{ color: '#A56A45' }}>kssw117@gmail.com</a>
          </p>
        </footer>
      </div>
    </div>
  );
}
