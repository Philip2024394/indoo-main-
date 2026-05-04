const WA_LINK = 'https://wa.me/6281573635143'

export default function RidersPage({ onNavigate }) {
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
          background: 'radial-gradient(ellipse at 50% 0%, rgba(250,204,21,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="ws-container" style={{ textAlign: 'center', position: 'relative' }}>
          <div className="float reveal" style={{
            width: 88,
            height: 88,
            borderRadius: 24,
            background: 'linear-gradient(135deg, rgba(250,204,21,0.15), rgba(250,204,21,0.03))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 44,
            margin: '0 auto 28px',
          }}>
            &#128693;
          </div>
          <h1 className="reveal" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, marginBottom: 16 }}>
            City <span className="gradient-text">Riders</span>
          </h1>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 620, margin: '0 auto 36px', lineHeight: 1.7 }}>
            Driver job board for delivery services. Riders subscribe to be listed. Restaurants browse and book directly &mdash; no dispatch, no commission.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 17, padding: '16px 36px' }}>
              Sign Up as Driver
            </a>
            <button className="btn-secondary" onClick={() => onNavigate('contact')} style={{ fontSize: 17, padding: '16px 36px' }}>
              For Restaurants
            </button>
          </div>
        </div>
      </section>

      {/* How it works - Drivers */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ width: 48, height: 3, background: '#FACC15', borderRadius: 2, margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>How It Works for Drivers</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Simple subscription, maximum visibility</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32 }}>
            {[
              { num: '01', title: 'Create Your Profile', desc: 'Sign up with your details, vehicle info, and service area' },
              { num: '02', title: 'Subscribe', desc: 'Pay Rp 30,000/month to be listed on the platform' },
              { num: '03', title: 'Go Online', desc: 'Toggle your status to show restaurants you are available' },
              { num: '04', title: 'Get Booked', desc: 'Restaurants contact you directly via WhatsApp for deliveries' },
            ].map((s, i) => (
              <div key={s.num} className="reveal" style={{ textAlign: 'center', transitionDelay: `${i * 0.15}s` }}>
                <div style={{
                  width: 64,
                  height: 64,
                  borderRadius: '50%',
                  background: '#0a0a0a',
                  border: '2px solid #FACC15',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: 18,
                  fontWeight: 900,
                  color: '#FACC15',
                  boxShadow: '0 0 20px rgba(250,204,21,0.15)',
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

      {/* How it works - Restaurants */}
      <section className="section" style={{ background: 'rgba(250,204,21,0.02)' }}>
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>How It Works for Restaurants</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>Find delivery drivers instantly</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 20,
          }}>
            {[
              { title: 'Browse Drivers', desc: 'Search available drivers in your city. See profiles, ratings, and vehicle types.', icon: '\uD83D\uDD0D' },
              { title: 'Check Availability', desc: 'See who is online right now and ready to deliver.', icon: '\uD83D\uDFE2' },
              { title: 'Book Directly', desc: 'Contact drivers via WhatsApp. No middleman, no dispatch system.', icon: '\uD83D\uDCAC' },
              { title: 'Rate & Review', desc: 'Leave ratings to help other restaurants find reliable drivers.', icon: '\u2B50' },
            ].map((f, i) => (
              <div key={f.title} className="glass-card reveal-scale" style={{
                padding: 28,
                display: 'flex',
                gap: 18,
                alignItems: 'flex-start',
                transitionDelay: `${i * 0.1}s`,
              }}>
                <div style={{
                  fontSize: 28,
                  flexShrink: 0,
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: 'rgba(250,204,21,0.06)',
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

      {/* Platform Features */}
      <section className="section">
        <div className="ws-container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Platform Features</h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}>
            {[
              { title: 'Driver Profiles', desc: 'Complete profiles with photo, vehicle, service area, and contact info' },
              { title: 'Online/Offline Status', desc: 'Real-time availability toggle so restaurants know who is ready' },
              { title: 'City-Based Listing', desc: 'Drivers are listed by city for easy local discovery' },
              { title: 'Restaurant Booking', desc: 'Direct booking via WhatsApp \u2014 no app needed' },
              { title: 'WhatsApp Contact', desc: 'All communication happens on WhatsApp for simplicity' },
              { title: 'Rating System', desc: 'Build reputation through restaurant ratings and reviews' },
            ].map((f, i) => (
              <div key={f.title} className="glass-card reveal-scale" style={{
                padding: 28,
                transitionDelay: `${i * 0.08}s`,
              }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 8, color: '#FACC15' }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: 'rgba(250,204,21,0.02)' }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <div className="reveal" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 40, fontWeight: 900, marginBottom: 16 }}>Simple Pricing</h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16 }}>One plan, one price, everything included</p>
          </div>

          <div className="glass-card reveal-scale" style={{
            maxWidth: 440,
            margin: '0 auto',
            padding: 40,
            border: '1px solid rgba(250,204,21,0.3)',
            animation: 'borderGlow 3s ease infinite',
          }}>
            <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Driver Subscription</h3>
            <div style={{ marginBottom: 28 }}>
              <span style={{ fontSize: 40, fontWeight: 900, color: '#FACC15' }}>Rp 30,000</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>/month</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14, textAlign: 'left', marginBottom: 32 }}>
              {['Full profile listing', 'Online/offline status', 'City-based visibility', 'WhatsApp direct contact', 'Rating system access', 'Unlimited bookings'].map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: 15, color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#FACC15', fontWeight: 700 }}>&#10003;</span>
                  {f}
                </div>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 17 }}>
              Sign Up Now
            </a>
          </div>

          <p className="reveal" style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14, marginTop: 24 }}>
            Free for restaurants to browse and book drivers
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="ws-container reveal" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 900, marginBottom: 16 }}>Ready to Join?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 36 }}>
            Whether you are a driver or a restaurant, sign up today
          </p>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: 18, padding: '18px 48px', animation: 'pulseGlow 2s ease-in-out infinite' }}
          >
            Sign Up on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
