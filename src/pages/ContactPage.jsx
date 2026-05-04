const WA_LINK = 'https://wa.me/6281573635143'

export default function ContactPage({ navigate }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '80px 0 60px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(141,198,63,0.08) 0%, transparent 60%)',
      }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: 16 }}>
            Contact <span style={{ color: '#8DC63F' }}>Us</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.6 }}>
            Get in touch for a free consultation about our products
          </p>
        </div>
      </section>

      {/* Contact info */}
      <section className="section">
        <div className="ws-container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
            maxWidth: 900,
            margin: '0 auto',
          }}>
            {/* WhatsApp */}
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="card"
              style={{
                padding: 32,
                textAlign: 'center',
                textDecoration: 'none',
                border: '1px solid rgba(141,198,63,0.2)',
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>💬</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>WhatsApp</h3>
              <p style={{ color: '#8DC63F', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>+62 815-7363-5143</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>Fastest way to reach us</p>
            </a>

            {/* Email */}
            <div className="card" style={{ padding: 32, textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📧</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Email</h3>
              <p style={{ color: '#8DC63F', fontSize: 16, fontWeight: 700, marginBottom: 8 }}>info@indoo.id</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>We reply within 24 hours</p>
            </div>

            {/* Address */}
            <div className="card" style={{ padding: 32, textAlign: 'center' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>📍</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>Address</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, fontWeight: 600, marginBottom: 8 }}>Yogyakarta, Indonesia</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>PT Indoo Teknologi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business hours */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
        <div className="ws-container" style={{ maxWidth: 600, textAlign: 'center' }}>
          <h2 className="section-title">Business Hours</h2>
          <div style={{ marginTop: 32 }}>
            <div className="card" style={{ padding: 32 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {[
                  { day: 'Monday - Friday', hours: '09:00 - 18:00 WIB' },
                  { day: 'Saturday', hours: '09:00 - 14:00 WIB' },
                  { day: 'Sunday', hours: 'Closed' },
                ].map((row) => (
                  <div key={row.day} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.06)',
                  }}>
                    <span style={{ fontSize: 16, fontWeight: 700 }}>{row.day}</span>
                    <span style={{ fontSize: 16, color: row.hours === 'Closed' ? 'rgba(255,255,255,0.3)' : '#8DC63F', fontWeight: 600 }}>{row.hours}</span>
                  </div>
                ))}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginTop: 20 }}>
                WhatsApp messages are welcome anytime — we respond during business hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>Let's Talk</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 32 }}>
            Free consultation for all our products
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 18, padding: '16px 40px' }}>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
