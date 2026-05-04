const serviceCategories = [
  {
    icon: '\u{1F5A5}\uFE0F',
    title: 'Custom Software Development',
    services: ['Web applications', 'Mobile applications', 'Desktop software', 'Enterprise systems', 'API development'],
  },
  {
    icon: '\u{1F310}',
    title: 'Website & E-commerce',
    services: ['Business websites', 'E-commerce stores', 'Landing pages', 'CMS development', 'Maintenance'],
  },
  {
    icon: '\u{1F3A8}',
    title: 'UI/UX & Product Design',
    services: ['UI design', 'UX research', 'Wireframing', 'Branding', 'Conversion rate optimization'],
  },
  {
    icon: '\u{1F4C8}',
    title: 'Digital Marketing',
    services: ['SEO', 'Paid ads', 'Social media', 'Email marketing', 'Affiliate systems'],
  },
  {
    icon: '\u{1F3AC}',
    title: 'Content Creation & Media',
    services: ['Video production', 'Graphic design', 'Copywriting', 'Animation'],
  },
  {
    icon: '\u2601\uFE0F',
    title: 'Cloud & Infrastructure',
    services: ['AWS / Google / Azure', 'DevOps', 'Hosting', 'Security', 'Performance'],
  },
  {
    icon: '\u{1F48E}',
    title: 'SaaS Products',
    services: ['Subscription platforms', 'Industry tools', 'CRM / Accounting', 'White-label solutions'],
  },
  {
    icon: '\u{1F916}',
    title: 'AI & Automation',
    services: ['AI chatbots', 'Process automation', 'Machine learning', 'Voice / image recognition'],
  },
  {
    icon: '\u{1F4F1}',
    title: 'Mobile & Emerging Tech',
    services: ['PWAs', 'AR / VR', 'IoT', 'Wearable apps', 'Smart devices'],
  },
  {
    icon: '\u{1F3E2}',
    title: 'Business Tools',
    services: ['POS systems', 'Inventory', 'Booking systems', 'Payroll', 'Project management'],
  },
  {
    icon: '\u{1F4A1}',
    title: 'Consulting & Strategy',
    services: ['Digital transformation', 'Tech advisory', 'MVP planning', 'Architecture'],
  },
  {
    icon: '\u{1F527}',
    title: 'Support & Maintenance',
    services: ['Bug fixes', 'Security patches', 'Monitoring', 'Feature development'],
  },
  {
    icon: '\u{1F4DA}',
    title: 'Training & Education',
    services: ['Software training', 'Workshops', 'Documentation', 'Corporate training'],
  },
  {
    icon: '\u{1F3C6}',
    title: 'Niche Industry Solutions',
    services: ['Real estate', 'Food delivery', 'Healthcare', 'Fintech', 'Travel & Education'],
  },
  {
    icon: '\u{1F3EA}',
    title: 'Marketplace Development',
    services: ['Multi-vendor platforms', 'Property listings', 'Job portals', 'Service booking'],
  },
  {
    icon: '\u{1F3F7}\uFE0F',
    title: 'White-Label Solutions',
    services: ['Pre-built apps', 'SaaS resale', 'Agency partnerships'],
  },
  {
    icon: '\u{1F4CA}',
    title: 'Data & Analytics',
    services: ['BI dashboards', 'Data warehousing', 'Customer analytics', 'Reporting'],
  },
  {
    icon: '\u{1F3AE}',
    title: 'Game Development',
    services: ['Mobile games', 'Web games', 'Gamification systems'],
  },
  {
    icon: '\u{1F30D}',
    title: 'Localization & Regional',
    services: ['Multi-language', 'Local payments', 'Regional UX', 'Compliance'],
  },
  {
    icon: '\u{1F512}',
    title: 'Security & Compliance',
    services: ['Penetration testing', 'GDPR', 'Authentication', 'Fraud detection'],
  },
]

export default function ServicesPage({ onNavigate }) {
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
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="reveal" style={{ color: 'rgba(255,255,255,0.5)', fontSize: 18, maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
            End-to-end technology solutions for every business need
          </p>
        </div>
      </section>

      {/* Service Cards Grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="ws-container">
          <style>{`
            .services-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 24px;
            }
            @media (max-width: 1024px) {
              .services-grid { grid-template-columns: repeat(2, 1fr); }
            }
            @media (max-width: 640px) {
              .services-grid { grid-template-columns: 1fr; }
            }
            .service-card {
              background: rgba(0,0,0,0.8);
              border: 1px solid rgba(255,255,255,0.06);
              border-radius: 16px;
              padding: 28px;
              transition: transform 0.3s ease, box-shadow 0.3s ease;
              cursor: default;
            }
            .service-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 12px 40px rgba(141,198,63,0.12);
            }
          `}</style>

          <div className="services-grid">
            {serviceCategories.map((cat, i) => (
              <div key={i} className="service-card reveal" style={{ animationDelay: `${i * 40}ms` }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>{cat.icon}</div>
                <h3 style={{ fontSize: 18, fontWeight: 800, color: '#fff', marginBottom: 14 }}>
                  {cat.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {cat.services.map((s, j) => (
                    <li key={j} style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#8DC63F', flexShrink: 0 }} />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 0' }}>
        <div className="ws-container" style={{ textAlign: 'center' }}>
          <div className="reveal" style={{
            background: 'rgba(0,0,0,0.8)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 24,
            padding: '60px 32px',
            maxWidth: 640,
            margin: '0 auto',
          }}>
            <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 900, marginBottom: 12 }}>
              Need a custom solution?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 16, marginBottom: 28, lineHeight: 1.7 }}>
              Let's talk about what we can build for your business.
            </p>
            <a
              href="https://wa.me/353899860510"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '14px 32px',
                background: '#25D366',
                color: '#fff',
                fontSize: 16,
                fontWeight: 800,
                borderRadius: 12,
                textDecoration: 'none',
                minHeight: 48,
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
