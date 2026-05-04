const WA_LINK = 'https://wa.me/6281573635143'

export default function FoodPage({ onNavigate }) {
  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero — Banner Image Full Screen */}
      <section style={{
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'url(https://ik.imagekit.io/nepgaxllc/ChatGPT%20Image%20May%204,%202026,%2004_17_25%20PM.png)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      </section>

      {/* Content Section */}
      <section style={{ padding: '80px 0', position: 'relative' }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <h1 className="reveal" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, marginBottom: 16 }}>
            Street <span className="gradient-text">Food</span>
          </h1>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Your own branded food ordering platform. Customers order direct — no commission, no middleman. Self-delivery with zone-based pricing.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => onNavigate('contact')} style={{ fontSize: 17, padding: '16px 36px' }}>
              Get Started
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('contact')} style={{ fontSize: 17, padding: '16px 36px' }}>
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* App mockup placeholder */}
      <section style={{ padding: '40px 0 0' }}>
        <div className="ws-container">
          <div className="glass-card reveal-scale" style={{
            height: 320,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.15)',
            fontSize: 18,
            fontWeight: 600,
          }}>
            App Screenshot / Mockup
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ width: 48, height: 3, background: '#8DC63F', borderRadius: 2, margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Features</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
              Everything you need to run your restaurant digitally
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {[
              { title: 'Own Branded Page', desc: 'Your restaurant gets its own web app with your name, logo, and branding. No mention of third parties.', icon: '\uD83C\uDFEA' },
              { title: 'WhatsApp Ordering', desc: 'Orders are sent directly to your WhatsApp. Simple, instant, and reliable \u2014 no extra apps needed.', icon: '\uD83D\uDCAC' },
              { title: 'Delivery Zones', desc: 'Set up zone-based delivery pricing. Define areas and fees so customers know delivery cost upfront.', icon: '\uD83D\uDCCD' },
              { title: 'Menu Management', desc: 'Full menu editor with categories, items, pricing, photos, and availability toggles.', icon: '\uD83D\uDCCB' },
              { title: 'Order Notifications', desc: 'Get instant notifications when orders come in so you never miss a sale.', icon: '\uD83D\uDD14' },
              { title: 'QR Codes', desc: 'Generate QR codes for dine-in ordering or marketing materials.', icon: '\uD83D\uDCF1' },
              { title: 'No Commission', desc: 'Keep 100% of every order. No commission, no service fees, no hidden charges.', icon: '\uD83D\uDCB0' },
              { title: 'Customer Data', desc: 'Own your customer relationships. Build repeat business with direct contact.', icon: '\uD83D\uDC65' },
            ].map((f, i) => (
              <div key={f.title} className="glass-card reveal-scale" style={{
                padding: 28,
                display: 'flex',
                gap: 18,
                alignItems: 'flex-start',
                transitionDelay: `${i * 0.05}s`,
              }}>
                <div style={{
                  fontSize: 28,
                  flexShrink: 0,
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: 'rgba(141,198,63,0.06)',
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

      {/* How ordering works */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.02)' }}>
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>How Ordering Works</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Simple for customers, powerful for you</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {[
              { num: '01', title: 'Customer Opens Page', desc: 'Customer scans QR code or opens your branded link' },
              { num: '02', title: 'Browses Menu', desc: 'Full menu with categories, photos, and prices' },
              { num: '03', title: 'Places Order', desc: 'Selects items, chooses delivery or pickup, confirms' },
              { num: '04', title: 'You Receive on WhatsApp', desc: 'Complete order details sent to your WhatsApp instantly' },
            ].map((s, i) => (
              <div key={s.num} className="reveal" style={{ textAlign: 'center', transitionDelay: `${i * 0.15}s` }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: '#0a0a0a',
                  border: '2px solid #8DC63F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: 18,
                  fontWeight: 900,
                  color: '#8DC63F',
                  boxShadow: '0 0 20px rgba(141,198,63,0.15)',
                }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Pricing</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Choose the plan that fits your restaurant</p>
          </div>

          <div className="grid-3">
            {[
              {
                name: 'Basic',
                price: 'Rp 50,000',
                features: ['Branded ordering page', 'Menu management', 'WhatsApp ordering', 'Up to 50 menu items', 'Basic analytics'],
              },
              {
                name: 'Pro',
                price: 'Rp 100,000',
                highlight: true,
                features: ['Everything in Basic', 'Delivery zones', 'QR codes', 'Unlimited menu items', 'Order history', 'Priority support'],
              },
              {
                name: 'Premium',
                price: 'Rp 200,000',
                features: ['Everything in Pro', 'Multiple branches', 'Custom domain', 'Advanced analytics', 'API access', 'Dedicated support'],
              },
            ].map((p, i) => (
              <div
                key={p.name}
                className="glass-card reveal-scale"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: 32,
                  border: p.highlight ? '1px solid rgba(141,198,63,0.4)' : undefined,
                  animation: p.highlight ? 'borderGlow 3s ease infinite' : 'none',
                  transitionDelay: `${i * 0.15}s`,
                }}
              >
                {p.highlight && (
                  <div style={{
                    background: 'linear-gradient(135deg, #8DC63F, #6fa830)',
                    color: '#0a0a0a',
                    fontSize: 12,
                    fontWeight: 800,
                    padding: '4px 12px',
                    borderRadius: 20,
                    display: 'inline-block',
                    width: 'fit-content',
                    marginBottom: 16,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>{p.name}</h3>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 32, fontWeight: 900, color: '#8DC63F' }}>{p.price}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>/month</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 14, flex: 1 }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ color: '#8DC63F', fontWeight: 700 }}>&#10003;</span>
                      {f}
                    </div>
                  ))}
                </div>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ marginTop: 24, justifyContent: 'center', width: '100%', textAlign: 'center' }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.02)' }}>
        <div className="ws-container reveal" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, marginBottom: 16 }}>Ready to Launch Your Restaurant App?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 36 }}>
            Contact us on WhatsApp for a free consultation and demo
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 18, padding: '18px 48px', animation: 'pulseGlow 2s ease-in-out infinite' }}
          >
            Get Started on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
