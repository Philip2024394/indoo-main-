const WA_LINK = 'https://wa.me/6281573635143'

export default function Footer({ onNavigate }) {
  return (
    <footer style={{
      background: 'rgba(0,0,0,0.9)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '60px 0 32px',
    }}>
      <div className="ws-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 40,
          marginBottom: 48,
        }}>
          {/* Logo & info */}
          <div>
            <div style={{ fontSize: 26, fontWeight: 900, marginBottom: 16, letterSpacing: 3 }}>
              IND<span style={{ color: '#8DC63F' }}>OO</span><span style={{ fontWeight: 400, fontSize: 18, marginLeft: 6, letterSpacing: 1, color: 'rgba(255,255,255,0.6)' }}>TECH</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.8 }}>
              INDOO TECH — Software for Every Industry<br />
              indootech.com
            </p>
          </div>

          {/* Products */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 20, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1 }}>Products</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <FooterLink onClick={() => onNavigate('food')}>Street Food</FooterLink>
              <FooterLink onClick={() => onNavigate('riders')}>City Riders</FooterLink>
              <FooterLink onClick={() => onNavigate('property')}>Indoo Property</FooterLink>
              <FooterLink onClick={() => onNavigate('contact')}>Custom Development</FooterLink>
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 20, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1 }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <FooterLink onClick={() => onNavigate('about')}>About</FooterLink>
              <FooterLink onClick={() => onNavigate('contact')}>Contact</FooterLink>
              <FooterLink>Privacy</FooterLink>
              <FooterLink>Terms</FooterLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 20, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1 }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#8DC63F', fontSize: 14, fontWeight: 700, transition: 'opacity 0.2s' }}
              >
                WhatsApp
              </a>
              <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14 }}>hello@indootech.com</span>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.25)',
          fontSize: 14,
        }}>
          &copy; 2026 INDOO TECH. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

function FooterLink({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        color: 'rgba(255,255,255,0.45)',
        fontSize: 14,
        textAlign: 'left',
        padding: 0,
        cursor: onClick ? 'pointer' : 'default',
        minHeight: 44,
        display: 'flex',
        alignItems: 'center',
        transition: 'color 0.2s ease',
      }}
      onMouseEnter={(e) => { if (onClick) e.currentTarget.style.color = '#fff' }}
      onMouseLeave={(e) => { if (onClick) e.currentTarget.style.color = 'rgba(255,255,255,0.45)' }}
    >
      {children}
    </button>
  )
}
