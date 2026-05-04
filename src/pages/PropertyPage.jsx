const WA_LINK = 'https://wa.me/6281573635143'

export default function PropertyPage({ navigate }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '80px 0 60px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(141,198,63,0.08) 0%, transparent 60%)',
      }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🏡</div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: 16 }}>
            Indoo <span style={{ color: '#8DC63F' }}>Property</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.6 }}>
            International property investment platform for Indonesia. Foreign investor guidance, legal structures, PT PMA formation, and property management.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Book Consultation
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="ws-container">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Complete property investment support for Indonesia</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {[
              { title: 'Investment Platform', desc: 'Browse and compare property investment opportunities across Indonesia. Area data, ROI estimates, and market insights.', icon: '📊' },
              { title: 'Legal Guide', desc: 'Understand Indonesian property law, foreign ownership rules, and investment structures. Clear, plain-language guidance.', icon: '⚖️' },
              { title: 'PT PMA Formation', desc: 'Set up a foreign-owned company (PT PMA) in Indonesia. Complete setup assistance from registration to bank accounts.', icon: '🏢' },
              { title: 'Property Management', desc: 'End-to-end property management for your Indonesian investments. Tenant management, maintenance, and reporting.', icon: '🔑' },
            ].map((s) => (
              <div key={s.title} className="card" style={{ padding: 28 }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
        <div className="ws-container">
          <h2 className="section-title">For Investors</h2>
          <p className="section-subtitle">Whether you are local or international, we make property investment accessible</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 24,
          }}>
            {[
              { title: 'Foreign Investors', items: ['Understand ownership structures', 'PT PMA setup guidance', 'Legal compliance support', 'Multi-language platform (EN/ID/AR/ZH)', 'Area-by-area investment data', 'Ongoing management support'], icon: '🌏' },
              { title: 'Local Investors', items: ['Property listing access', 'Market data and insights', 'Investment comparison tools', 'Legal documentation help', 'Property management services', 'Direct owner connections'], icon: '🇮🇩' },
            ].map((col) => (
              <div key={col.title} className="card" style={{ padding: 32 }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{col.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 20 }}>{col.title}</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {col.items.map((item) => (
                    <div key={item} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ color: '#8DC63F', fontWeight: 700 }}>&#10003;</span>
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
          <h2 className="section-title">For Property Owners</h2>
          <p className="section-subtitle">List your property and reach international investors</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {[
              { title: 'List Your Property', desc: 'Reach both local and international investors looking for Indonesian property opportunities.', icon: '📝' },
              { title: 'Professional Presentation', desc: 'We help present your property with professional photos, data, and investment potential analysis.', icon: '📸' },
              { title: 'Investor Matching', desc: 'Connect with qualified investors who are specifically looking for your type of property.', icon: '🤝' },
              { title: 'Transaction Support', desc: 'Legal and administrative support throughout the entire transaction process.', icon: '📄' },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>{f.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>Ready to Invest in Indonesia?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 32 }}>
            Book a free consultation to discuss your investment goals
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 18, padding: '16px 40px' }}>
            Book Consultation
          </a>
        </div>
      </section>
    </div>
  )
}
