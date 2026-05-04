import { useState, useEffect, useRef } from 'react'

const WA_LINK = 'https://wa.me/6281573635143'

export default function HomePage({ onNavigate }) {
  return (
    <div style={{ paddingTop: 64 }}>
      <HeroSection onNavigate={onNavigate} />
      <ProductsSection onNavigate={onNavigate} />
      <HowItWorksSection />
      <WhyIndooSection />
      <PricingSection />
      <CTASection />
    </div>
  )
}

/* ─── HERO ─── */
function HeroSection({ onNavigate }) {
  return (
    <section style={{
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '80px 0',
    }}>
      {/* Background image — full page */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'url(https://ik.imagekit.io/nepgaxllc/ChatGPT%20Image%20May%204,%202026,%2005_14_36%20PM.png)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      {/* Dark overlay for text readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.6) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div className="ws-container" style={{ textAlign: 'center', position: 'relative', zIndex: 2, padding: '0 20px' }}>
        {/* Logo badge */}
        <div className="reveal" style={{ marginBottom: 20 }}>
          <span style={{ fontSize: 14, fontWeight: 800, color: '#8DC63F', letterSpacing: '4px', textTransform: 'uppercase' }}>INDOO TECH</span>
        </div>

        <h1 className="reveal" style={{
          fontSize: 'clamp(32px, 7vw, 64px)',
          fontWeight: 900,
          lineHeight: 1.08,
          marginBottom: 20,
          letterSpacing: '-1px',
        }}>
          Software Solutions<br />
          <span className="gradient-text">For Every Industry</span>
        </h1>

        <p className="reveal" style={{
          fontSize: 'clamp(14px, 3.5vw, 18px)',
          color: 'rgba(255,255,255,0.6)',
          maxWidth: 520,
          margin: '0 auto 32px',
          lineHeight: 1.7,
        }}>
          Custom-built applications for restaurants, property, logistics, and beyond. From concept to launch — we build the technology your business needs.
        </p>

        <div className="reveal" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
          <button
            className="btn-primary"
            onClick={() => {
              document.getElementById('products-section')?.scrollIntoView({ behavior: 'smooth' })
            }}
            style={{ fontSize: 'clamp(14px, 3.5vw, 17px)', padding: '14px 28px' }}
          >
            Explore Products
          </button>
          <button
            className="btn-secondary"
            onClick={() => onNavigate('contact')}
            style={{ fontSize: 'clamp(14px, 3.5vw, 17px)', padding: '14px 28px' }}
          >
            Contact Us
          </button>
        </div>

        {/* Stats */}
        <div className="reveal" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'clamp(20px, 5vw, 60px)',
          flexWrap: 'wrap',
        }}>
          <StatItem value="Global Reach" label="Clients Worldwide" />
          <StatItem value="Custom Built" label="Tailored Solutions" />
          <StatItem value="Any Industry" label="Unlimited Possibilities" />
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div className="glow-text" style={{ fontSize: 22, fontWeight: 900, color: '#8DC63F', marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.35)' }}>{label}</div>
    </div>
  )
}

/* ─── PRODUCTS ─── */
function ProductsSection({ onNavigate }) {
  const products = [
    {
      title: 'Street Food',
      desc: 'Your own branded food ordering platform. Zero commission. Customers order direct via your link \u2014 you keep 100% of revenue.',
      pills: ['Own Brand', 'WhatsApp Orders', 'Delivery Zones', 'Vendor Dashboard'],
      price: 'From Rp 50,000/month',
      page: 'food',
      iconBg: 'linear-gradient(135deg, #8DC63F20, #8DC63F05)',
      iconChar: '\uD83C\uDF5C',
    },
    {
      title: 'City Riders',
      desc: 'Driver job board for delivery services. Riders subscribe to be listed. Restaurants browse and book directly \u2014 no dispatch, no commission.',
      pills: ['Driver Profiles', 'City-Based', 'Direct Booking', 'Job Board'],
      price: 'Rp 30,000/month',
      page: 'riders',
      iconBg: 'linear-gradient(135deg, #FACC1520, #FACC1505)',
      iconChar: '\uD83D\uDEB5',
    },
    {
      title: 'Indoo Property',
      desc: 'International property investment platform. Legal guides, area data, PT PMA formation, and property management for foreign investors.',
      pills: ['Foreign Investors', 'Legal Guide', 'Multi-Language', 'Management'],
      price: 'Service-based',
      page: 'property',
      iconBg: 'linear-gradient(135deg, #3B82F620, #3B82F605)',
      iconChar: '\uD83C\uDFE2',
    },
    {
      title: 'Custom Software',
      desc: 'Need something unique? We design and build custom applications for any industry. Web apps, mobile apps, SaaS platforms — tailored to your business.',
      pills: ['Web & Mobile', 'SaaS Platforms', 'API Integration', 'Full Support'],
      price: 'Custom Quote',
      page: 'contact',
      iconBg: 'linear-gradient(135deg, #A855F720, #A855F705)',
      iconChar: '\uD83D\uDCBB',
    },
  ]

  return (
    <section className="section" id="products-section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'url(https://ik.imagekit.io/nepgaxllc/ChatGPT%20Image%20May%204,%202026,%2005_08_55%20PM.png)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <div className="ws-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ width: 48, height: 3, background: '#8DC63F', borderRadius: 2, margin: '0 auto 20px' }} />
          <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Our Solutions</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 500, margin: '0 auto' }}>
            Purpose-built software for growing businesses
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {products.map((p, i) => (
            <div
              key={p.page}
              className="glass-card reveal-scale"
              style={{
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                transitionDelay: `${i * 0.15}s`,
              }}
            >
              {/* Icon area */}
              <div className="float" style={{
                width: 72,
                height: 72,
                borderRadius: 20,
                background: p.iconBg,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 36,
                marginBottom: 24,
                animationDelay: `${i * 0.5}s`,
              }}>
                {p.iconChar}
              </div>

              <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>{p.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15, lineHeight: 1.7, marginBottom: 20 }}>
                {p.desc}
              </p>

              {/* Feature pills */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
                {p.pills.map((pill) => (
                  <span key={pill} style={{
                    background: 'rgba(141,198,63,0.08)',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 13,
                    padding: '6px 14px',
                    borderRadius: 20,
                    border: '1px solid rgba(141,198,63,0.12)',
                    fontWeight: 600,
                  }}>
                    {pill}
                  </span>
                ))}
              </div>

              <div style={{ color: '#8DC63F', fontWeight: 800, fontSize: 16, marginBottom: 20 }}>
                {p.price}
              </div>

              <button
                className="btn-primary"
                onClick={() => onNavigate(p.page)}
                style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}
              >
                {p.title === 'Custom Software' ? 'Contact Us \u2192' : 'Learn More \u2192'}
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
    { num: '01', title: 'Download', desc: 'Get your own branded application in minutes' },
    { num: '02', title: 'Set Up', desc: 'Add your products, menu, or listings — make it yours' },
    { num: '03', title: 'Share & Earn', desc: 'Share your app with customers and start earning' },
  ]

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'url(https://ik.imagekit.io/nepgaxllc/ChatGPT%20Image%20May%204,%202026,%2005_23_42%20PM.png)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <div className="ws-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 64 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>How It Works</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Get started in three simple steps</p>
        </div>

        {/* Vertical timeline */}
        <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative' }}>
          {/* Animated line */}
          <div style={{
            position: 'absolute',
            left: 31,
            top: 0,
            bottom: 0,
            width: 2,
            background: 'linear-gradient(to bottom, #8DC63F, rgba(141,198,63,0.1))',
          }} />

          {steps.map((s, i) => (
            <div
              key={s.num}
              className="reveal-left"
              style={{
                display: 'flex',
                gap: 28,
                marginBottom: i < steps.length - 1 ? 48 : 0,
                position: 'relative',
                transitionDelay: `${i * 0.2}s`,
              }}
            >
              <div style={{
                width: 64,
                height: 64,
                borderRadius: '50%',
                background: 'rgba(0,0,0,0.8)',
                border: '2px solid #8DC63F',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 900,
                color: '#8DC63F',
                flexShrink: 0,
                zIndex: 1,
                boxShadow: '0 0 20px rgba(141,198,63,0.3)',
                backdropFilter: 'blur(8px)',
              }}>
                {s.num}
              </div>
              <div style={{ paddingTop: 12, background: 'rgba(0,0,0,0.6)', borderRadius: 12, padding: '12px 16px', backdropFilter: 'blur(8px)' }}>
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 6, color: '#fff', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>{s.desc}</p>
              </div>
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
    { title: 'Zero Commission', desc: 'Keep all your revenue', icon: '\uD83D\uDCB0' },
    { title: 'Your Brand', desc: 'Your name, your platform, your customers', icon: '\uD83C\uDFF7\uFE0F' },
    { title: 'Multi-Platform', desc: 'Web, mobile, and messaging integrations', icon: '\uD83D\uDCAC' },
    { title: 'Affordable', desc: 'Starting from Rp 30,000/month', icon: '\u2728' },
    { title: 'Full Support', desc: 'Setup assistance and ongoing help', icon: '\uD83E\uDD1D' },
    { title: 'Global Ready', desc: 'Built for businesses worldwide', icon: '\uD83C\uDF0D' },
  ]

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'url(https://ik.imagekit.io/nepgaxllc/ChatGPT%20Image%20May%204,%202026,%2005_28_27%20PM.png)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <div className="ws-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Why INDOO TECH</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 550, margin: '0 auto' }}>
            Built for businesses that want to own their digital presence
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 20,
        }}>
          {features.map((f, i) => (
            <div
              key={f.title}
              className="glass-card reveal-scale"
              style={{
                padding: 28,
                display: 'flex',
                gap: 18,
                alignItems: 'flex-start',
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div style={{
                fontSize: 32,
                flexShrink: 0,
                width: 56,
                height: 56,
                borderRadius: 14,
                background: 'rgba(141,198,63,0.06)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 6 }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
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
      name: 'Street Food',
      tiers: [
        { label: 'Basic', price: 'Rp 50K', period: '/month' },
        { label: 'Pro', price: 'Rp 100K', period: '/month', popular: true },
        { label: 'Premium', price: 'Rp 200K', period: '/month' },
      ],
    },
    {
      name: 'City Riders',
      price: 'Rp 30,000',
      period: '/month per driver',
      features: ['Full profile listing', 'Online/offline status', 'City-based visibility', 'WhatsApp direct contact', 'Rating system', 'Unlimited bookings'],
    },
    {
      name: 'Indoo Property',
      price: 'Custom',
      period: 'service-based',
      features: ['Investment platform access', 'Legal guidance', 'PT PMA formation', 'Property management', 'Multi-language support', 'Dedicated advisor'],
    },
  ]

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'url(https://ik.imagekit.io/nepgaxllc/ChatGPT%20Image%20May%204,%202026,%2005_35_30%20PM.png)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <div className="ws-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
          <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Simple Pricing</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Transparent pricing with no hidden fees</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {/* Street Food tiers */}
          <div className="glass-card reveal-scale" style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 24 }}>Street Food</h3>
            {plans[0].tiers.map((t) => (
              <div key={t.label} style={{
                padding: '16px 20px',
                borderRadius: 12,
                border: t.popular ? '1px solid rgba(141,198,63,0.4)' : '1px solid rgba(255,255,255,0.06)',
                marginBottom: 12,
                background: t.popular ? 'rgba(141,198,63,0.06)' : 'transparent',
                animation: t.popular ? 'borderGlow 3s ease infinite' : 'none',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontWeight: 700, fontSize: 15 }}>
                    {t.label}
                    {t.popular && <span style={{ color: '#8DC63F', fontSize: 12, marginLeft: 8, fontWeight: 800 }}>POPULAR</span>}
                  </span>
                  <span style={{ color: '#8DC63F', fontWeight: 900, fontSize: 16 }}>{t.price}<span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 12, fontWeight: 500 }}>{t.period}</span></span>
                </div>
              </div>
            ))}
          </div>

          {/* City Riders */}
          <div className="glass-card reveal-scale" style={{ padding: 32, display: 'flex', flexDirection: 'column', transitionDelay: '0.15s' }}>
            <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>City Riders</h3>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 32, fontWeight: 900, color: '#8DC63F' }}>{plans[1].price}</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginLeft: 4 }}>{plans[1].period}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {plans[1].features.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#8DC63F', fontWeight: 700 }}>&#10003;</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Indoo Property */}
          <div className="glass-card reveal-scale" style={{ padding: 32, display: 'flex', flexDirection: 'column', transitionDelay: '0.3s' }}>
            <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>Indoo Property</h3>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 32, fontWeight: 900, color: '#8DC63F' }}>{plans[2].price}</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginLeft: 4 }}>{plans[2].period}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {plans[2].features.map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#8DC63F', fontWeight: 700 }}>&#10003;</span>
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Custom Software */}
          <div className="glass-card reveal-scale" style={{ padding: 32, display: 'flex', flexDirection: 'column', transitionDelay: '0.45s' }}>
            <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>Custom Software</h3>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 32, fontWeight: 900, color: '#8DC63F' }}>Contact</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginLeft: 4 }}>for quote</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {['Web & mobile applications', 'SaaS platform development', 'API design & integration', 'UI/UX design', 'Ongoing maintenance', 'Dedicated project manager'].map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#8DC63F', fontWeight: 700 }}>&#10003;</span>
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── CTA ─── */
function CTASection() {
  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'url(https://ik.imagekit.io/nepgaxllc/ChatGPT%20Image%20May%204,%202026,%2006_16_29%20PM.png)', backgroundSize: '100% 100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
      <div className="ws-container" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="reveal">
          <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 900, marginBottom: 16 }}>
            Ready to Build Your Vision?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, marginBottom: 40, maxWidth: 600, margin: '0 auto 40px' }}>
            Whether you need a food platform, property portal, or something entirely new — we'll build it.
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{
              fontSize: 18,
              padding: '18px 48px',
              animation: 'pulseGlow 2s ease-in-out infinite',
              borderRadius: 16,
            }}
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
