const WA_LINK = 'https://wa.me/6281573635143'

export default function PropertyPage({ onNavigate }) {
  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section className="grid-bg" style={{
        padding: '100px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="ws-container" style={{ textAlign: 'center', position: 'relative' }}>
          <div className="float reveal" style={{
            width: 88,
            height: 88,
            borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(59,130,246,0.03))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 44,
            margin: '0 auto 28px',
          }}>
            &#127970;
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, marginBottom: 16 }}>
            Indoo <span style={{ background: 'linear-gradient(135deg, #3B82F6, #8DC63F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Property</span>
          </h1>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7 }}>
            International property investment platform for Indonesia. Foreign investor guidance, legal structures, PT PMA formation, and property management.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 17, padding: '16px 36px' }}>
              Book Consultation
            </a>
            <button className="btn-secondary" onClick={() => onNavigate('contact')} style={{ fontSize: 17, padding: '16px 36px' }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ width: 48, height: 3, background: '#3B82F6', borderRadius: 2, margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Our Services</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
              Complete property investment support for Indonesia
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {[
              { title: 'Investment Platform', desc: 'Browse and compare property investment opportunities across Indonesia. Area data, ROI estimates, and market insights.', icon: '\uD83D\uDCCA' },
              { title: 'Legal Guide', desc: 'Understand Indonesian property law, foreign ownership rules, and investment structures. Clear, plain-language guidance.', icon: '\u2696\uFE0F' },
              { title: 'PT PMA Formation', desc: 'Set up a foreign-owned company (PT PMA) in Indonesia. Complete setup assistance from registration to bank accounts.', icon: '\uD83C\uDFE2' },
              { title: 'Property Management', desc: 'End-to-end property management for your Indonesian investments. Tenant management, maintenance, and reporting.', icon: '\uD83D\uDD11' },
            ].map((s, i) => (
              <div key={s.title} className="glass-card reveal-scale" style={{
                padding: 32,
                transitionDelay: `${i * 0.1}s`,
              }}>
                <div style={{
                  fontSize: 36,
                  marginBottom: 20,
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: 'rgba(59,130,246,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>{s.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 10 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section className="section" style={{ background: 'rgba(59,130,246,0.02)' }}>
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>For Investors</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Whether you are local or international, we make property investment accessible</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 24,
          }}>
            {[
              { title: 'Foreign Investors', items: ['Understand ownership structures', 'PT PMA setup guidance', 'Legal compliance support', 'Multi-language platform (EN/ID/AR/ZH)', 'Area-by-area investment data', 'Ongoing management support'], icon: '\uD83C\uDF0F' },
              { title: 'Local Investors', items: ['Property listing access', 'Market data and insights', 'Investment comparison tools', 'Legal documentation help', 'Property management services', 'Direct owner connections'], icon: '\uD83C\uDDEE\uD83C\uDDE9' },
            ].map((col, i) => (
              <div key={col.title} className="glass-card reveal-left" style={{
                padding: 36,
                transitionDelay: `${i * 0.2}s`,
              }}>
                <div style={{ fontSize: 40, marginBottom: 16 }}>{col.icon}</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 24 }}>{col.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ color: '#3B82F6', fontWeight: 700 }}>&#10003;</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Property Owners */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>For Property Owners</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>List your property and reach international investors</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {[
              { title: 'List Your Property', desc: 'Reach both local and international investors looking for Indonesian property opportunities.', icon: '\uD83D\uDCDD' },
              { title: 'Professional Presentation', desc: 'We help present your property with professional photos, data, and investment potential analysis.', icon: '\uD83D\uDCF8' },
              { title: 'Investor Matching', desc: 'Connect with qualified investors who are specifically looking for your type of property.', icon: '\uD83E\uDD1D' },
              { title: 'Transaction Support', desc: 'Legal and administrative support throughout the entire transaction process.', icon: '\uD83D\uDCC4' },
            ].map((f, i) => (
              <div key={f.title} className="glass-card reveal-scale" style={{
                padding: 28,
                display: 'flex',
                gap: 18,
                alignItems: 'flex-start',
                transitionDelay: `${i * 0.1}s`,
              }}>
                <div style={{
                  fontSize: 28,
                  flexShrink: 0,
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: 'rgba(59,130,246,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>{f.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'rgba(59,130,246,0.02)' }}>
        <div className="ws-container reveal" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, marginBottom: 16 }}>Ready to Invest in Indonesia?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 36 }}>
            Book a free consultation to discuss your investment goals
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 18, padding: '18px 48px', animation: 'pulseGlow 2s ease-in-out infinite' }}
          >
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
