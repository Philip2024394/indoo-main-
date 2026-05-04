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
            About <span className="gradient-text">INDOO TECH</span>
          </h1>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Global software company building purpose-driven applications
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
              <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 20 }}>INDOO TECH</h2>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
                INDOO TECH is a global software company building purpose-driven applications for businesses of every size. Based in Southeast Asia, we serve clients worldwide.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.9, marginBottom: 20 }}>
                From food ordering platforms to property investment tools, logistics solutions to custom SaaS products &mdash; we design, build, and maintain the software that powers modern businesses.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, lineHeight: 1.9 }}>
                We believe every restaurant deserves its own ordering platform, every property investor deserves clear guidance, and every business deserves technology that fits like a glove.
              </p>
            </div>
            <div className="reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { label: 'Headquarters', value: 'Southeast Asia', icon: '\uD83D\uDCCD' },
                { label: 'Company', value: 'INDOO TECH', icon: '\uD83C\uDFE2' },
                { label: 'Solutions', value: '3 Products + Custom Dev', icon: '\uD83D\uDCBB' },
                { label: 'Market', value: 'Global — Any Industry', icon: '\uD83C\uDF0D' },
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
            &ldquo;Making powerful technology accessible to businesses of every size, everywhere&rdquo;
          </p>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ width: 48, height: 3, background: '#8DC63F', borderRadius: 2, margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Industries We Serve</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>From startups to enterprises, across every sector</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 20 }}>
            {[
              { icon: '\uD83C\uDF5C', name: 'Food & Beverage' },
              { icon: '\uD83C\uDFE2', name: 'Real Estate' },
              { icon: '\uD83D\uDE9A', name: 'Logistics' },
              { icon: '\uD83D\uDED2', name: 'E-Commerce' },
              { icon: '\uD83C\uDFE5', name: 'Healthcare' },
              { icon: '\uD83C\uDF93', name: 'Education' },
            ].map((ind, i) => (
              <div
                key={ind.name}
                className="glass-card reveal-scale"
                style={{
                  padding: 28,
                  textAlign: 'center',
                  transitionDelay: `${i * 0.1}s`,
                }}
              >
                <div style={{ fontSize: 36, marginBottom: 12 }}>{ind.icon}</div>
                <div style={{ fontSize: 15, fontWeight: 800 }}>{ind.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products overview */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ width: 48, height: 3, background: '#8DC63F', borderRadius: 2, margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Our Solutions</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Purpose-built software across multiple industries</p>
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
