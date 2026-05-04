const WA_LINK = 'https://wa.me/6281573635143'

export default function ContactPage({ onNavigate }) {
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
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Get in touch for a free consultation — serving clients globally
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="section">
        <div className="ws-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            maxWidth: 960,
            margin: '0 auto',
          }}>
            {/* WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card reveal-scale"
              style={{
                padding: 36,
                textAlign: 'center',
                textDecoration: 'none',
                border: '1px solid rgba(141,198,63,0.2)',
              }}
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
                margin: '0 auto 16px',
              }}>&#128172;</div>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>WhatsApp</h3>
              <p style={{ color: '#8DC63F', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>+62 815-7363-5143</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Fastest way to reach us</p>
            </a>

            {/* Email */}
            <div className="glass-card reveal-scale" style={{ padding: 36, textAlign: 'center', transitionDelay: '0.15s' }}>
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
                margin: '0 auto 16px',
              }}>&#128231;</div>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>Email</h3>
              <p style={{ color: '#8DC63F', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>hello@indootech.com</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>We reply within 24 hours</p>
            </div>

            {/* Address */}
            <div className="glass-card reveal-scale" style={{ padding: 36, textAlign: 'center', transitionDelay: '0.3s' }}>
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
                margin: '0 auto 16px',
              }}>&#128205;</div>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>Address</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>Southeast Asia</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Serving clients globally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business hours */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.02)' }}>
        <div className="ws-container" style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900 }}>Business Hours</h2>
          </div>

          <div className="glass-card reveal-scale" style={{ padding: 36 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { day: 'Monday \u2013 Friday', hours: '09:00 \u2013 18:00 GMT+7' },
                { day: 'Saturday', hours: '09:00 \u2013 14:00 GMT+7' },
                { day: 'Sunday', hours: 'Closed' },
              ].map((row, i) => (
                <div key={row.day} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '16px 0',
                  borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                }}>
                  <span style={{ fontSize: 16, fontWeight: 700 }}>{row.day}</span>
                  <span style={{
                    fontSize: 16,
                    color: row.hours === 'Closed' ? 'rgba(255,255,255,0.3)' : '#8DC63F',
                    fontWeight: 700,
                  }}>{row.hours}</span>
                </div>
              ))}
            </div>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: 14, marginTop: 24, textAlign: 'center' }}>
              WhatsApp messages are welcome anytime &mdash; we respond during business hours
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="ws-container reveal" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, marginBottom: 16 }}>Let's Talk</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 36 }}>
            Free consultation for all our products
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 18, padding: '18px 48px', animation: 'pulseGlow 2s ease-in-out infinite' }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
