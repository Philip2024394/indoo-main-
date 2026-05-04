const WA_LINK = 'https://wa.me/6281573635143'

export default function HomePage({ navigate }) {
  return (
    <div>
      <HeroSection navigate={navigate} />
      <ProductsSection navigate={navigate} />
      <HowItWorksSection />
      <WhyIndooSection />
      <PricingSection />
      <CTASection navigate={navigate} />
    </div>
  )
}

/* ─── HERO ─── */
function HeroSection({ navigate }) {
  return (
    <section style={{
      padding: '100px 0 80px',
      background: 'radial-gradient(ellipse at 50% 0%, rgba(141,198,63,0.08) 0%, transparent 60%)',
    }}>
      <div className="ws-container" style={{ textAlign: 'center' }}>
        <h1 style={{
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: 20,
        }}>
          Build Your Digital Business<br />
          with <span style={{ color: '#8DC63F' }}>INDOO</span>
        </h1>
        <p style={{
          fontSize: 18,
          color: 'rgba(255,255,255,0.5)',
          maxWidth: 640,
          margin: '0 auto 36px',
          lineHeight: 1.6,
        }}>
          Software solutions for restaurants, property investors, and delivery services across Indonesia
        </p>

        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          <button className="btn-primary" onClick={() => {
            document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })
          }}>
            View Products
          </button>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Contact Us
          </a>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 48,
          flexWrap: 'wrap',
        }}>
          {[
            { value: '3 Products', label: 'Software Suite' },
            { value: 'Yogyakarta', label: 'Based' },
            { value: 'Indonesian', label: 'Market' },
          ].map((s) => (
            <div key={s.value} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: '#8DC63F' }}>{s.value}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PRODUCTS ─── */
function ProductsSection({ navigate }) {
  const products = [
    {
      icon: '🍽️',
      title: 'Indoo Food',
      subtitle: 'Restaurant Ordering System',
      desc: 'Give your restaurant its own branded ordering app. Customers order direct — no commission, no middleman. Self-delivery with zone-based pricing.',
      price: 'From Rp 50,000/month',
      features: ['Own branded page', 'WhatsApp ordering', 'Delivery zones', 'Menu management', 'Order notifications', 'QR codes'],
      page: 'food',
    },
    {
      icon: '🏡',
      title: 'Indoo Property',
      subtitle: 'Investment Platform',
      desc: 'International property investment platform for Indonesia. Foreign investor guidance, legal structures, PT PMA formation, property management.',
      price: 'Service-based fees',
      features: ['Foreign investor tools', 'Legal guide', 'Area investment data', 'PT PMA setup', 'Property management', 'Multi-language (EN/ID/AR/ZH)'],
      page: 'property',
    },
    {
      icon: '🛵',
      title: 'Indoo Riders',
      subtitle: 'Driver Job Board',
      desc: 'Delivery driver listing platform. Drivers subscribe to be listed, restaurants browse and book directly. No commission, no dispatch — pure job board.',
      price: 'Rp 30,000/month per driver',
      features: ['Driver profiles', 'Online/offline status', 'City-based listing', 'Restaurant booking', 'WhatsApp contact', 'Rating system'],
      page: 'riders',
    },
  ]

  return (
    <section className="section" id="products-section">
      <div className="ws-container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">Three software solutions designed for Indonesian businesses</p>

        <div className="grid-3">
          {products.map((p) => (
            <div key={p.page} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{p.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 4 }}>
                {p.title} <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 600, fontSize: 16 }}>— {p.subtitle}</span>
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 16, lineHeight: 1.6 }}>
                {p.desc}
              </p>
              <div style={{
                color: '#8DC63F',
                fontWeight: 800,
                fontSize: 16,
                marginBottom: 16,
              }}>
                {p.price}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {p.features.map((f) => (
                  <span key={f} style={{
                    background: 'rgba(141,198,63,0.08)',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 14,
                    padding: '6px 12px',
                    borderRadius: 8,
                    border: '1px solid rgba(141,198,63,0.15)',
                  }}>
                    {f}
                  </span>
                ))}
              </div>
              <button
                className="btn-primary"
                onClick={() => navigate(p.page)}
                style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── HOW IT WORKS ─── */
function HowItWorksSection() {
  const steps = [
    { num: '1', title: 'Choose Your Product', desc: 'Select the software that fits your business' },
    { num: '2', title: 'Set Up in Minutes', desc: 'We help you configure and launch' },
    { num: '3', title: 'Start Earning', desc: 'Your business runs on your own platform' },
  ]

  return (
    <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
      <div className="ws-container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Get started in three simple steps</p>

        <div className="grid-3">
          {steps.map((s) => (
            <div key={s.num} style={{ textAlign: 'center' }}>
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(141,198,63,0.1)',
                border: '2px solid #8DC63F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: 24,
                fontWeight: 900,
                color: '#8DC63F',
              }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── WHY INDOO ─── */
function WhyIndooSection() {
  const features = [
    { title: 'No Commission', desc: 'Keep 100% of your revenue', icon: '💰' },
    { title: 'Your Own Brand', desc: 'Your name, your app, your customers', icon: '🏷️' },
    { title: 'WhatsApp Integration', desc: 'Orders and communication via WhatsApp', icon: '💬' },
    { title: 'Indonesian Market', desc: 'Built for Indonesia, by Indonesia', icon: '🇮🇩' },
    { title: 'Affordable', desc: 'Starting from Rp 30,000/month', icon: '✨' },
    { title: 'Full Support', desc: 'Setup assistance and ongoing help', icon: '🤝' },
  ]

  return (
    <section className="section">
      <div className="ws-container">
        <h2 className="section-title">Why Choose INDOO</h2>
        <p className="section-subtitle">Built for Indonesian businesses that want to own their digital presence</p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 20,
        }}>
          {features.map((f) => (
            <div key={f.title} className="card" style={{ padding: 24, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 28, flexShrink: 0 }}>{f.icon}</div>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── PRICING ─── */
function PricingSection() {
  const plans = [
    {
      icon: '🍽️',
      name: 'Indoo Food',
      price: 'From Rp 50,000',
      period: '/month',
      features: ['Own branded page', 'Menu management', 'WhatsApp ordering', 'Delivery zones', 'QR codes', 'Order notifications'],
    },
    {
      icon: '🏡',
      name: 'Indoo Property',
      price: 'Service-based',
      period: 'fees',
      features: ['Investment platform', 'Legal guidance', 'PT PMA formation', 'Property management', 'Multi-language support', 'Investor tools'],
      highlight: true,
    },
    {
      icon: '🛵',
      name: 'Indoo Riders',
      price: 'Rp 30,000',
      period: '/month per driver',
      features: ['Driver profile', 'Online/offline status', 'City-based listing', 'Restaurant booking', 'WhatsApp contact', 'Rating system'],
    },
  ]

  return (
    <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
      <div className="ws-container">
        <h2 className="section-title">Simple Pricing</h2>
        <p className="section-subtitle">Transparent pricing with no hidden fees</p>

        <div className="grid-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: p.highlight ? '1px solid rgba(141,198,63,0.3)' : undefined,
              }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{p.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 16 }}>{p.name}</h3>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontSize: 28, fontWeight: 900, color: '#8DC63F' }}>{p.price}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginLeft: 4 }}>{p.period}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {p.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                    <span style={{ color: '#8DC63F', fontWeight: 700 }}>&#10003;</span>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection({ navigate }) {
  return (
    <section className="section">
      <div className="ws-container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, fontWeight: 900, marginBottom: 16 }}>Ready to Start?</h2>
        <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 32 }}>
          Contact us for a free consultation
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 24 }}>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            WhatsApp Us
          </a>
        </div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>
          Or visit our products directly:{' '}
          <button onClick={() => navigate('food')} style={{ background: 'none', border: 'none', color: '#8DC63F', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Food</button>
          {' | '}
          <button onClick={() => navigate('property')} style={{ background: 'none', border: 'none', color: '#8DC63F', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Property</button>
          {' | '}
          <button onClick={() => navigate('riders')} style={{ background: 'none', border: 'none', color: '#8DC63F', fontWeight: 700, fontSize: 14, cursor: 'pointer' }}>Riders</button>
        </p>
      </div>
    </section>
  )
}
