export default function AboutPage({ onNavigate }) {
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
          background: 'radial-gradient(ellipse at 50% 0%, rgba(141,198,63,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="ws-container" style={{ textAlign: 'center', position: 'relative' }}>
          <h1 className="reveal" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, marginBottom: 16 }}>
            About <span className="gradient-text">INDOO</span>
          </h1>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Making technology accessible for Indonesian businesses
          </p>
        </div>
      </section>

      {/* Company */}
      <section className="section">
        <div className="ws-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: 40,
          }}>
            <div className="reveal-left">
              <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 20 }}>PT Indoo Teknologi</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
                INDOO Technologies is a software company based in Yogyakarta, Indonesia. We build digital tools that help Indonesian businesses compete in the modern economy.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
                Our mission is simple: make technology accessible for Indonesian businesses. No complicated setup, no expensive consulting &mdash; just tools that work.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.9 }}>
                We believe every restaurant deserves its own ordering platform, every property investor deserves clear guidance, and every delivery driver deserves fair opportunities.
              </p>
            </div>
            <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Location', value: 'Yogyakarta, Indonesia', icon: '\uD83D\uDCCD' },
                { label: 'Company', value: 'PT Indoo Teknologi', icon: '\uD83C\uDFE2' },
                { label: 'Products', value: '3 Software Solutions', icon: '\uD83D\uDCBB' },
                { label: 'Market', value: 'Indonesian Businesses', icon: '\uD83C\uDDEE\uD83C\uDDE9' },
              ].map((item, i) => (
                <div key={item.label} className="glass-card" style={{
                  padding: 24,
                  display: 'flex',
                  gap: 18,
                  alignItems: 'center',
                }}>
                  <div style={{
                    fontSize: 28,
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: 'rgba(141,198,63,0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.35)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>{item.label}</div>
                    <div style={{ fontSize: 17, fontWeight: 800 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.02)' }}>
        <div className="ws-container reveal" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 24 }}>Our Mission</h2>
          <p className="glow-text" style={{
            fontSize: 'clamp(20px, 3vw, 28px)',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: 700,
            margin: '0 auto',
            lineHeight: 1.8,
            fontWeight: 700,
            fontStyle: 'italic',
          }}>
            &ldquo;Making technology accessible for Indonesian businesses&rdquo;
          </p>
        </div>
      </section>

      {/* Products overview */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ width: 48, height: 3, background: '#8DC63F', borderRadius: 2, margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Our Products</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Three solutions for three different markets</p>
          </div>

          <div className="grid-3">
            {[
              { icon: '\uD83C\uDF5C', name: 'Street Food', desc: 'Restaurant ordering system with branded pages, WhatsApp ordering, and delivery zones.', page: 'food' },
              { icon: '\uD83D\uDEB5', name: 'City Riders', desc: 'Delivery driver job board connecting drivers with restaurants directly.', page: 'riders' },
              { icon: '\uD83C\uDFE2', name: 'Indoo Property', desc: 'Property investment platform with legal guidance, PT PMA formation, and management.', page: 'property' },
            ].map((p, i) => (
              <div
                key={p.name}
                className="glass-card reveal-scale"
                style={{
                  padding: 32,
                  cursor: 'pointer',
                  transitionDelay: `${i * 0.15}s`,
                }}
                onClick={() => onNavigate(p.page)}
              >
                <div style={{
                  fontSize: 40,
                  marginBottom: 16,
                  width: 72,
                  height: 72,
                  borderRadius: 20,
                  background: 'rgba(141,198,63,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>{p.icon}</div>
                <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>{p.name}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>{p.desc}</p>
                <span style={{ color: '#8DC63F', fontWeight: 700, fontSize: 14 }}>Learn more &rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
