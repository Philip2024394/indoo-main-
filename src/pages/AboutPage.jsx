export default function AboutPage({ navigate }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '80px 0 60px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(141,198,63,0.08) 0%, transparent 60%)',
      }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: 16 }}>
            About <span style={{ color: '#8DC63F' }}>INDOO</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Making technology accessible for Indonesian businesses
          </p>
        </div>
      </section>

      {/* Company */}
      <section className="section">
        <div className="ws-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 32,
          }}>
            <div>
              <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>PT Indoo Teknologi</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                INDOO Technologies is a software company based in Yogyakarta, Indonesia. We build digital tools that help Indonesian businesses compete in the modern economy.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                Our mission is simple: make technology accessible for Indonesian businesses. No complicated setup, no expensive consulting — just tools that work.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.8 }}>
                We believe every restaurant deserves its own ordering platform, every property investor deserves clear guidance, and every delivery driver deserves fair opportunities.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { label: 'Location', value: 'Yogyakarta, Indonesia', icon: '📍' },
                { label: 'Company', value: 'PT Indoo Teknologi', icon: '🏢' },
                { label: 'Products', value: '3 Software Solutions', icon: '💻' },
                { label: 'Market', value: 'Indonesian Businesses', icon: '🇮🇩' },
              ].map((item) => (
                <div key={item.label} className="card" style={{ padding: 20, display: 'flex', gap: 16, alignItems: 'center' }}>
                  <div style={{ fontSize: 28 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', fontWeight: 700 }}>{item.label}</div>
                    <div style={{ fontSize: 16, fontWeight: 800 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Our Mission</h2>
          <p style={{
            fontSize: 20,
            color: 'rgba(255,255,255,0.7)',
            maxWidth: 700,
            margin: '24px auto 0',
            lineHeight: 1.8,
            fontWeight: 600,
          }}>
            "Making technology accessible for Indonesian businesses"
          </p>
        </div>
      </section>

      {/* Products overview */}
      <section className="section">
        <div className="ws-container">
          <h2 className="section-title">Our Products</h2>
          <p className="section-subtitle">Three solutions for three different markets</p>

          <div className="grid-3">
            {[
              { icon: '🍽️', name: 'Indoo Food', desc: 'Restaurant ordering system with branded pages, WhatsApp ordering, and delivery zones.', page: 'food' },
              { icon: '🏡', name: 'Indoo Property', desc: 'Property investment platform with legal guidance, PT PMA formation, and management.', page: 'property' },
              { icon: '🛵', name: 'Indoo Riders', desc: 'Delivery driver job board connecting drivers with restaurants directly.', page: 'riders' },
            ].map((p) => (
              <div key={p.name} className="card" style={{ padding: 28, cursor: 'pointer' }} onClick={() => navigate(p.page)}>
                <div style={{ fontSize: 40, marginBottom: 12 }}>{p.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{p.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{p.desc}</p>
                <span style={{ color: '#8DC63F', fontWeight: 700, fontSize: 14 }}>Learn more &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
