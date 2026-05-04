const WA_LINK = 'https://wa.me/6281573635143'

export default function RidersPage({ navigate }) {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: '80px 0 60px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(141,198,63,0.08) 0%, transparent 60%)',
      }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 56, marginBottom: 16 }}>🛵</div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 900, marginBottom: 16 }}>
            Indoo <span style={{ color: '#8DC63F' }}>Riders</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 600, margin: '0 auto 32px', lineHeight: 1.6 }}>
            Delivery driver listing platform. Drivers subscribe to be listed, restaurants browse and book directly. No commission, no dispatch — pure job board.
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Sign Up
          </a>
        </div>
      </section>

      {/* How it works for drivers */}
      <section className="section">
        <div className="ws-container">
          <h2 className="section-title">How It Works for Drivers</h2>
          <p className="section-subtitle">Simple subscription, maximum visibility</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              { num: '1', title: 'Create Your Profile', desc: 'Sign up with your details, vehicle info, and service area' },
              { num: '2', title: 'Subscribe', desc: 'Pay Rp 30,000/month to be listed on the platform' },
              { num: '3', title: 'Go Online', desc: 'Toggle your status to show restaurants you are available' },
              { num: '4', title: 'Get Booked', desc: 'Restaurants contact you directly via WhatsApp for deliveries' },
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

      {/* How it works for restaurants */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
        <div className="ws-container">
          <h2 className="section-title">How It Works for Restaurants</h2>
          <p className="section-subtitle">Find delivery drivers instantly</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {[
              { title: 'Browse Drivers', desc: 'Search available drivers in your city. See profiles, ratings, and vehicle types.', icon: '🔍' },
              { title: 'Check Availability', desc: 'See who is online right now and ready to deliver.', icon: '🟢' },
              { title: 'Book Directly', desc: 'Contact drivers via WhatsApp. No middleman, no dispatch system.', icon: '💬' },
              { title: 'Rate & Review', desc: 'Leave ratings to help other restaurants find reliable drivers.', icon: '⭐' },
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

      {/* Features */}
      <section className="section">
        <div className="ws-container">
          <h2 className="section-title">Platform Features</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 20,
          }}>
            {[
              { title: 'Driver Profiles', desc: 'Complete profiles with photo, vehicle, service area, and contact info' },
              { title: 'Online/Offline Status', desc: 'Real-time availability toggle so restaurants know who is ready' },
              { title: 'City-Based Listing', desc: 'Drivers are listed by city for easy local discovery' },
              { title: 'Restaurant Booking', desc: 'Direct booking via WhatsApp — no app needed' },
              { title: 'WhatsApp Contact', desc: 'All communication happens on WhatsApp for simplicity' },
              { title: 'Rating System', desc: 'Build reputation through restaurant ratings and reviews' },
            ].map((f) => (
              <div key={f.title} className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6, color: '#8DC63F' }}>{f.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.5 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section" style={{ background: 'rgba(141,198,63,0.03)' }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-subtitle">One plan, one price, everything included</p>

          <div className="card" style={{
            maxWidth: 400,
            margin: '0 auto',
            padding: 40,
            border: '1px solid rgba(141,198,63,0.3)',
          }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, marginBottom: 8 }}>Driver Subscription</h3>
            <div style={{ marginBottom: 24 }}>
              <span style={{ fontSize: 36, fontWeight: 900, color: '#8DC63F' }}>Rp 30,000</span>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>/month</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left', marginBottom: 32 }}>
              {['Full profile listing', 'Online/offline status', 'City-based visibility', 'WhatsApp direct contact', 'Rating system access', 'Unlimited bookings'].map((f) => (
                <div key={f} style={{ display: 'flex', gap: 10, fontSize: 14, color: 'rgba(255,255,255,0.7)' }}>
                  <span style={{ color: '#8DC63F', fontWeight: 700 }}>&#10003;</span>
                  {f}
                </div>
              ))}
            </div>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Sign Up Now
            </a>
          </div>

          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: 14, marginTop: 24 }}>
            Free for restaurants to browse and book drivers
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 32, fontWeight: 900, marginBottom: 16 }}>Ready to Join?</h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 32 }}>
            Whether you are a driver or a restaurant, sign up today
          </p>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: 18, padding: '16px 40px' }}>
            Sign Up on WhatsApp
          </a>
        </div>
      </section>
    </div>
  )
}
