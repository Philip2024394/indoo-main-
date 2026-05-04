import { useState } from 'react'

const SERVICES = [
  'Custom Software Development',
  'Website & E-commerce Development',
  'UI/UX & Product Design',
  'Digital Marketing Services',
  'Content Creation & Media',
  'Cloud & Infrastructure Services',
  'SaaS Products',
  'AI & Automation Solutions',
  'Mobile & Emerging Tech',
  'Business Tools & Internal Systems',
  'Consulting & Strategy',
  'Support & Maintenance',
  'Training & Education',
  'Niche Industry Solutions',
  'Marketplace & Platform Development',
  'White-Label Solutions',
  'Data & Analytics',
  'Game Development',
  'Localization & Regional Services',
  'Security & Compliance',
  'Other',
]

const inp = {
  width: '100%', padding: '14px 16px', borderRadius: 12,
  background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
  color: '#fff', fontSize: 14, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box',
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', service: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const update = (key, val) => setForm(f => ({ ...f, [key]: val }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.service || !form.message) return
    setSending(true)

    // Build mailto link as fallback
    const subject = encodeURIComponent(`Project Enquiry: ${form.service}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'N/A'}\nAddress: ${form.address || 'N/A'}\n\nService: ${form.service}\n\nProject Details:\n${form.message}`
    )
    window.open(`mailto:indootechteam@gmail.com?subject=${subject}&body=${body}`, '_self')

    setTimeout(() => {
      setSending(false)
      setSent(true)
      setForm({ name: '', email: '', phone: '', address: '', service: '', message: '' })
    }, 1000)
  }

  return (
    <div style={{ paddingTop: 64 }}>
      {/* Hero */}
      <section className="grid-bg" style={{ padding: '100px 0 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(141,198,63,0.08) 0%, transparent 60%)', pointerEvents: 'none' }} />
        <div className="ws-container" style={{ textAlign: 'center', position: 'relative' }}>
          <h1 className="reveal" style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 900, marginBottom: 16 }}>
            Contact <span className="gradient-text">Us</span>
          </h1>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Tell us about your project — we'll get back to you within 24 hours
          </p>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section">
        <div className="ws-container" style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40, maxWidth: 1000, margin: '0 auto' }}>

          {/* Form */}
          <div className="glass-card reveal" style={{ padding: 36 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(141,198,63,0.1)', border: '2px solid #8DC63F', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 28 }}>✓</div>
                <h3 style={{ fontSize: 22, fontWeight: 900, marginBottom: 8 }}>Message Sent!</h3>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, marginBottom: 24 }}>We'll review your project and respond within 24 hours.</p>
                <button onClick={() => setSent(false)} style={{ padding: '12px 28px', borderRadius: 12, border: '1px solid rgba(141,198,63,0.3)', background: 'rgba(141,198,63,0.08)', color: '#8DC63F', fontSize: 14, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>Send Another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 24 }}>Project Enquiry</h2>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Full Name *</label>
                    <input value={form.name} onChange={e => update('name', e.target.value)} placeholder="Your name" required style={inp} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Email *</label>
                    <input value={form.email} onChange={e => update('email', e.target.value)} type="email" placeholder="you@example.com" required style={inp} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Phone / WhatsApp</label>
                    <input value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="+62 xxx-xxxx-xxxx" style={inp} />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Address / Location</label>
                    <input value={form.address} onChange={e => update('address', e.target.value)} placeholder="City, Country" style={inp} />
                  </div>
                </div>

                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Service Required *</label>
                  <select value={form.service} onChange={e => update('service', e.target.value)} required style={{ ...inp, appearance: 'auto' }}>
                    <option value="" style={{ background: '#1a1a1a' }}>Select a service</option>
                    {SERVICES.map(s => <option key={s} value={s} style={{ background: '#1a1a1a' }}>{s}</option>)}
                  </select>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.6)', marginBottom: 6 }}>Project Details *</label>
                  <textarea value={form.message} onChange={e => update('message', e.target.value)} placeholder="Brief description of your project, requirements, timeline, and budget..." required rows={5} style={{ ...inp, resize: 'vertical', minHeight: 120 }} />
                </div>

                <button type="submit" disabled={sending} className="btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '16px', opacity: sending ? 0.6 : 1 }}>
                  {sending ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Email */}
            <div className="glass-card reveal-right" style={{ padding: 24 }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>📧</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>Email</h3>
              <a href="mailto:indootechteam@gmail.com" style={{ color: '#8DC63F', fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>indootechteam@gmail.com</a>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginTop: 6 }}>We reply within 24 hours</p>
            </div>

            {/* Office */}
            <div className="glass-card reveal-right" style={{ padding: 24, transitionDelay: '0.15s' }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>📍</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>Offices</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14 }}>Ireland & Indonesia</p>
              <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, marginTop: 4 }}>Serving clients globally</p>
            </div>

            {/* Hours */}
            <div className="glass-card reveal-right" style={{ padding: 24, transitionDelay: '0.3s' }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>🕐</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>Business Hours</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 8 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>Mon – Fri</span>
                  <span style={{ color: '#8DC63F', fontWeight: 700 }}>09:00 – 18:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>Saturday</span>
                  <span style={{ color: '#8DC63F', fontWeight: 700 }}>09:00 – 14:00</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14 }}>
                  <span style={{ color: 'rgba(255,255,255,0.6)' }}>Sunday</span>
                  <span style={{ color: 'rgba(255,255,255,0.3)', fontWeight: 700 }}>Closed</span>
                </div>
              </div>
            </div>

            {/* Response guarantee */}
            <div className="glass-card reveal-right" style={{ padding: 24, transitionDelay: '0.45s', border: '1px solid rgba(141,198,63,0.15)' }}>
              <div style={{ fontSize: 24, marginBottom: 10 }}>⚡</div>
              <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 6 }}>Fast Response</h3>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>All enquiries receive a response within 24 hours. Urgent projects? Mark your message as priority.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
