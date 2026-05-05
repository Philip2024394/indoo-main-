import { useState, useEffect } from 'react'
import { detectCurrency, convertPrice, dualPrice } from '../utils/currency'

// Stripe Payment Links (create these in your Stripe dashboard)
const STRIPE_LINKS = {
  basic: 'https://buy.stripe.com/test_basic',      // Replace with real Stripe link
  pro: 'https://buy.stripe.com/test_pro',          // Replace with real Stripe link
  premium: 'https://buy.stripe.com/test_premium',  // Replace with real Stripe link
  buyout: 'https://buy.stripe.com/test_buyout',    // Replace with real Stripe link
}

export default function FoodPage({ onNavigate }) {
  const [curr, setCurr] = useState({ currency: 'IDR', symbol: 'Rp' })

  useEffect(() => { detectCurrency().then(setCurr) }, [])

  const fp = (idr) => dualPrice(idr, curr.currency)
  const cp = (idr) => convertPrice(idr, curr.currency).formatted

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section className="grid-bg" style={{ padding: '100px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(141,198,63,0.1) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="ws-container" style={{ textAlign: 'center', position: 'relative' }}>
          <h1 className="reveal" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, marginBottom: 16 }}>
            Street <span className="gradient-text">Food</span>
          </h1>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 620, margin: '0 auto 20px', lineHeight: 1.7 }}>
            Your own branded food ordering platform. Customers order direct — no commission, no middleman. Self-delivery with zone-based pricing.
          </p>
          <div className="reveal" style={{ fontSize: 14, color: 'rgba(255,255,255,0.3)', marginBottom: 36 }}>
            Prices shown in {curr.currency} based on your location
          </div>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })} style={{ fontSize: 17, padding: '16px 36px' }}>
              View Plans
            </button>
            <button className="btn-secondary" onClick={() => onNavigate('contact')} style={{ fontSize: 17, padding: '16px 36px' }}>
              Book a Demo
            </button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>How It Works</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>From signup to your first order in minutes</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
            {[
              { num: '01', title: 'Sign Up', desc: 'Enter your restaurant name, logo, and WhatsApp number', icon: '📝' },
              { num: '02', title: 'Get Your Link', desc: 'Receive your branded URL: yourname.indootech.com', icon: '🔗' },
              { num: '03', title: 'Add Your Menu', desc: 'Upload menu items, set prices, delivery zones, and promos', icon: '🍽️' },
              { num: '04', title: 'Share & Earn', desc: 'Share your link on WhatsApp, Instagram — customers order direct', icon: '🚀' },
            ].map((s, i) => (
              <div key={s.num} className="glass-card reveal-scale" style={{ padding: 24, textAlign: 'center', transitionDelay: `${i * 0.1}s` }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 800, color: '#8DC63F', marginBottom: 6 }}>Step {s.num}</div>
                <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.02)' }}>
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Features</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { title: 'Own Branded App', desc: 'Your restaurant name, logo, and colours. Customers see YOUR brand — not ours.', icon: '🏪' },
              { title: 'WhatsApp Ordering', desc: 'Orders sent directly to your WhatsApp. No extra apps, no learning curve.', icon: '💬' },
              { title: 'Delivery Zones', desc: 'Set zone-based delivery pricing. Free delivery nearby, fees for further areas.', icon: '📍' },
              { title: 'Menu Management', desc: 'Add items, photos, prices, categories. Toggle availability on/off instantly.', icon: '📋' },
              { title: 'Order Notifications', desc: 'Beep sound + push notification when new orders arrive on your dashboard.', icon: '🔔' },
              { title: 'Zero Commission', desc: 'Keep 100% of every order. No commission, no service fees, no hidden charges.', icon: '💰' },
              { title: 'QR Codes', desc: 'Print QR codes for tables, counters, or marketing. Customers scan and order.', icon: '📱' },
              { title: 'Vendor Dashboard', desc: 'Manage orders, menu, delivery zones, promos, and settings from one panel.', icon: '⚙️' },
            ].map((f, i) => (
              <div key={f.title} className="glass-card reveal-scale" style={{ padding: 24, display: 'flex', gap: 14, alignItems: 'flex-start', transitionDelay: `${i * 0.05}s` }}>
                <div style={{ fontSize: 24, flexShrink: 0, width: 48, height: 48, borderRadius: 12, background: 'rgba(141,198,63,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.icon}</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>{f.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.5 }}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Your Own Menu */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', background: 'linear-gradient(135deg, rgba(141,198,63,0.03), rgba(250,204,21,0.02))' }} />
        <div className="ws-container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 40px)', fontWeight: 900, marginBottom: 16 }}>Why Your <span className="gradient-text">Own Menu</span> Matters</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, maxWidth: 550, margin: '0 auto' }}>Stop competing on crowded platforms. Own your customers.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20, marginBottom: 40 }}>
            {[
              {
                wrong: '"Get your own digital menu"',
                right: '"Turn your TikTok followers into paying customers"',
                desc: 'You already have followers watching your food videos. Give them a link to order — not just like and scroll past.',
                icon: '📱',
              },
              {
                wrong: '"QR code for your stall"',
                right: '"Link di bio — customers order before they come"',
                desc: 'Put your menu link in your TikTok, Instagram, or WhatsApp status. Customers see your menu, order, and come to pick up. No waiting.',
                icon: '🔗',
              },
              {
                wrong: '"Software for Rp 60,000"',
                right: '"One extra order per day pays for it"',
                desc: 'You sell nasi goreng at Rp 15,000. Just 4 extra orders per month = Rp 60,000 back. Everything after that is pure profit.',
                icon: '💰',
              },
            ].map((item, i) => (
              <div key={i} className="glass-card reveal-scale" style={{ padding: 28, transitionDelay: `${i * 0.15}s` }}>
                <div style={{ fontSize: 32, marginBottom: 14 }}>{item.icon}</div>
                <div style={{ marginBottom: 12 }}>
                  <div style={{ fontSize: 14, color: '#EF4444', fontWeight: 700, marginBottom: 4, textDecoration: 'line-through', opacity: 0.6 }}>Don't sell: {item.wrong}</div>
                  <div style={{ fontSize: 16, color: '#8DC63F', fontWeight: 800 }}>Sell: {item.right}</div>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Your Menu, Your Customers */}
          <div className="glass-card reveal" style={{ padding: 32, border: '1px solid rgba(141,198,63,0.15)' }}>
            <div style={{ display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ fontSize: 40, flexShrink: 0 }}>🏆</div>
              <div style={{ flex: 1, minWidth: 260 }}>
                <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 10 }}>Your Customers Save <span style={{ color: '#8DC63F' }}>YOUR</span> Menu — Not Your Competitor's</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                  On GoFood or GrabFood, your restaurant sits next to 1,000 others. The customer searches "nasi goreng" and sees 50 options — including your competitor right above you. They might choose someone else. Every time.
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
                  With your own menu page, the customer bookmarks <strong style={{ color: '#FACC15' }}>YOUR</strong> link. They save <strong style={{ color: '#FACC15' }}>YOUR</strong> page to their home screen. When they're hungry, they open <strong style={{ color: '#FACC15' }}>YOUR</strong> menu — not a marketplace showing your competition.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'No competing vendors on your page — only YOUR food',
                    'Customer saves your link — comes back to YOU every time',
                    'No algorithm deciding who gets seen first',
                    'No commission taken from every order',
                    'YOUR brand, YOUR menu, YOUR customers',
                  ].map(point => (
                    <div key={point} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ color: '#8DC63F', fontWeight: 700 }}>✓</span> {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" id="pricing-section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 16 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Choose Your Plan</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 8 }}>Two ways to get started — subscribe monthly or buy outright</p>
            <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14 }}>Prices auto-detected for your region ({curr.currency})</p>
          </div>

          {/* Plan type label */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{ padding: '8px 20px', borderRadius: 20, background: 'rgba(141,198,63,0.08)', border: '1px solid rgba(141,198,63,0.2)', fontSize: 14, fontWeight: 700, color: '#8DC63F' }}>Monthly Subscription — Hosted on Our Servers</span>
          </div>

          {/* Monthly Plans */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginBottom: 48 }}>
            {[
              {
                name: 'Basic', price: 60000, link: STRIPE_LINKS.basic,
                features: ['Single-page ordering app (yourname.indootech.com)', 'Up to 50 menu items', 'Same card design as Pro', 'WhatsApp ordering + checkout', 'Toggle items on/off', 'Delivery zones set by admin (your city)'],
              },
              {
                name: 'Pro', price: 100000, highlight: true, link: STRIPE_LINKS.pro,
                features: ['Everything in Basic', 'Unlimited menu items', 'Advanced delivery zones', 'QR codes', 'Vendor dashboard', 'Order history', 'Priority support'],
              },
              {
                name: 'Premium', price: 200000, link: STRIPE_LINKS.premium,
                features: ['Everything in Pro', 'Multiple branches', 'Custom domain connection', 'Driver fleet access', 'Advanced analytics', 'API access', 'Dedicated support'],
              },
            ].map((p, i) => (
              <div key={p.name} className="glass-card reveal-scale" style={{
                display: 'flex', flexDirection: 'column', padding: 32,
                border: p.highlight ? '1px solid rgba(141,198,63,0.4)' : undefined,
                animation: p.highlight ? 'borderGlow 3s ease infinite' : 'none',
                transitionDelay: `${i * 0.15}s`,
              }}>
                {p.highlight && (
                  <div style={{ background: 'linear-gradient(135deg, #8DC63F, #6fa830)', color: '#0a0a0a', fontSize: 12, fontWeight: 800, padding: '4px 12px', borderRadius: 20, display: 'inline-block', width: 'fit-content', marginBottom: 16, textTransform: 'uppercase', letterSpacing: 1 }}>Most Popular</div>
                )}
                <h3 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>{p.name}</h3>
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontSize: 28, fontWeight: 900, color: '#8DC63F' }}>{cp(p.price)}</span>
                  <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>/month</span>
                  {curr.currency !== 'IDR' && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>Rp {p.price.toLocaleString('id-ID')}/month</div>}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                      <span style={{ color: '#8DC63F', fontWeight: 700 }}>✓</span> {f}
                    </div>
                  ))}
                </div>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ marginTop: 24, justifyContent: 'center', width: '100%', textAlign: 'center', textDecoration: 'none' }}>
                  Subscribe Now
                </a>
              </div>
            ))}
          </div>

          {/* Buyout Option */}
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
            <span style={{ padding: '8px 20px', borderRadius: 20, background: 'rgba(250,204,21,0.08)', border: '1px solid rgba(250,204,21,0.2)', fontSize: 14, fontWeight: 700, color: '#FACC15' }}>One-Time Purchase — Own Your Software</span>
          </div>

          <div className="glass-card reveal-scale" style={{ padding: 36, maxWidth: 700, margin: '0 auto', border: '1px solid rgba(250,204,21,0.2)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, marginBottom: 24 }}>
              <div>
                <h3 style={{ fontSize: 24, fontWeight: 900, marginBottom: 4 }}>Full Source Code</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14 }}>Own everything — no monthly fees, no dependencies</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: 32, fontWeight: 900, color: '#FACC15' }}>{cp(4900000)}</span>
                <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}> one-time</span>
                {curr.currency !== 'IDR' && <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginTop: 4 }}>Rp 4,900,000</div>}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 24 }}>
              {[
                'Complete source code (GitHub)',
                'Your own domain (e.g., citygrill.com)',
                'Connect your own backend',
                'Full vendor dashboard',
                'No monthly fees to us',
                'Free setup assistance',
              ].map(f => (
                <div key={f} style={{ display: 'flex', gap: 8, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#FACC15', fontWeight: 700 }}>✓</span> {f}
                </div>
              ))}
            </div>

            {/* Backend options */}
            <div style={{ padding: 20, borderRadius: 14, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(255,255,255,0.06)', marginBottom: 24 }}>
              <h4 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, color: '#FACC15' }}>Supported Backend Options</h4>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', marginBottom: 14, lineHeight: 1.6 }}>
                Connect your purchased app to any of these backend services. We provide setup documentation for each.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {['Supabase', 'Firebase', 'PlanetScale', 'Neon', 'AWS (DynamoDB)', 'MongoDB Atlas', 'Custom API'].map(b => (
                  <span key={b} style={{ padding: '6px 14px', borderRadius: 10, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>{b}</span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href={STRIPE_LINKS.buyout} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ flex: 1, justifyContent: 'center', textAlign: 'center', textDecoration: 'none', fontSize: 16, padding: '16px' }}>
                Purchase Now — {cp(4900000)}
              </a>
              <button className="btn-secondary" onClick={() => onNavigate('contact')} style={{ flex: 1, justifyContent: 'center', fontSize: 16, padding: '16px' }}>
                Ask a Question
              </button>
            </div>
          </div>

          {/* Optional maintenance */}
          <div className="reveal" style={{ textAlign: 'center', marginTop: 24, padding: 20 }}>
            <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.7 }}>
              Optional maintenance & support for buyout customers: <strong style={{ color: '#8DC63F' }}>{cp(500000)}/month</strong> — includes bug fixes, updates, and priority support.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.02)' }}>
        <div className="ws-container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 32 }}>
            <h2 style={{ fontSize: 32, fontWeight: 900 }}>Subscription vs Buyout</h2>
          </div>
          <div className="glass-card reveal-scale" style={{ overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr style={{ background: 'rgba(141,198,63,0.08)' }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', fontWeight: 800, color: '#8DC63F' }}>Feature</th>
                  <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 800, color: '#8DC63F' }}>Subscription</th>
                  <th style={{ padding: '14px 20px', textAlign: 'center', fontWeight: 800, color: '#FACC15' }}>Buyout</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Hosting', 'Our servers', 'Your servers'],
                  ['Domain', 'yourname.indootech.com', 'Your own domain'],
                  ['Backend', 'Shared Supabase', 'Your choice (Firebase, etc.)'],
                  ['Source code', 'No access', 'Full access'],
                  ['Monthly cost', `From ${cp(60000)}`, 'None (after purchase)'],
                  ['Customisation', 'Branding only', 'Full code control'],
                  ['Setup', 'Instant', 'We assist (included)'],
                  ['Updates', 'Automatic', 'Manual (or maintenance plan)'],
                ].map(([feature, sub, buy], i) => (
                  <tr key={feature} style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
                    <td style={{ padding: '12px 20px', fontWeight: 700, color: '#fff' }}>{feature}</td>
                    <td style={{ padding: '12px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>{sub}</td>
                    <td style={{ padding: '12px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.6)' }}>{buy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="ws-container reveal" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, marginBottom: 16 }}>Ready to Launch?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 36, maxWidth: 500, margin: '0 auto 36px' }}>
            Get your restaurant's own ordering app today. No commission, no middleman — just your food, your brand, your customers.
          </p>
          <button className="btn-primary" onClick={() => onNavigate('contact')} style={{ fontSize: 18, padding: '18px 48px', animation: 'pulseGlow 2s ease-in-out infinite' }}>
            Get Started
          </button>
        </div>
      </section>
    </div>
  )
}
