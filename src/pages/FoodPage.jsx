const WA_LINK = 'https://wa.me/6281573635143'

export default function FoodPage({ navigate }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '80px 0 60px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(141,198,63,0.08) 0%, transparent 60%)',
      }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🍽️</div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: 16 }}>
            Indoo <span style={{ color: '#8DC63F' }}>Food</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.6 }}>
            Give your restaurant its own branded ordering app. Customers order direct — no commission, no middleman. Self-delivery with zone-based pricing.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* Screenshot placeholder */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="ws-container">
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 20,
            height: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'rgba(255,255,255,0.2)',
            fontSize: 16,
          }}>
            App Screenshot / Mockup
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="ws-container">
          <h2 className="section-title">Features</h2>
          <p className="section-subtitle">Everything you need to run your restaurant digitally</p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {[
              { title: 'Own Branded Page', desc: 'Your restaurant gets its own web app with your name, logo, and branding. No mention of third parties.', icon: '🏪' },
              { title: 'WhatsApp Ordering', desc: 'Orders are sent directly to your WhatsApp. Simple, instant, and reliable — no extra apps needed.', icon: '💬' },
              { title: 'Delivery Zones', desc: 'Set up zone-based delivery pricing. Define areas and fees so customers know delivery cost upfront.', icon: '📍' },
              { title: 'Menu Management', desc: 'Full menu editor with categories, items, pricing, photos, and availability toggles.', icon: '📋' },
              { title: 'Order Notifications', desc: 'Get instant notifications when orders come in so you never miss a sale.', icon: '🔔' },
              { title: 'QR Codes', desc: 'Generate QR codes for dine-in ordering or marketing materials.', icon: '📱' },
              { title: 'No Commission', desc: 'Keep 100% of every order. No commission, no service fees, no hidden charges.', icon: '💰' },
              { title: 'Customer Data', desc: 'Own your customer relationships. Build repeat business with direct contact.', icon: '👥' },
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

      {/* How ordering works */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
        <div className="ws-container">
          <h2 className="section-title">How Ordering Works</h2>
          <p className="section-subtitle">Simple for customers, powerful for you</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { num: '1', title: 'Customer Opens Page', desc: 'Customer scans QR code or opens your branded link' },
              { num: '2', title: 'Browses Menu', desc: 'Full menu with categories, photos, and prices' },
              { num: '3', title: 'Places Order', desc: 'Selects items, chooses delivery or pickup, confirms' },
              { num: '4', title: 'You Receive on WhatsApp', desc: 'Complete order details sent to your WhatsApp instantly' },
            ].map((s) => (
              <div key={s.num} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'rgba(141,198,63,0.1)',
                  border: '2px solid #8DC63F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  fontSize: 22,
                  fontWeight: 900,
                  color: '#8DC63F',
                }}>
                  {s.num}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section">
        <div className="ws-container">
          <h2 className="section-title">Pricing</h2>
          <p className="section-subtitle">Choose the plan that fits your restaurant</p>

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
            ].map((p) => (
              <div
                key={p.name}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  border: p.highlight ? '1px solid rgba(141,198,63,0.3)' : undefined,
                }}
              >
                <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8 }}>{p.name}</h3>
                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: '#8DC63F' }}>{p.price}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>/month</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                  {p.features.map((f) => (
                    <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ color: '#8DC63F' }}>&#10003;</span>
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
      <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>Ready to Launch Your Restaurant App?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 32 }}>
            Contact us on WhatsApp for a free consultation and demo
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 18, padding: '16px 40px' }}>
            Get Started on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
