const WA_LINK = 'https://wa.me/6281573635143'

export default function Footer({ navigate }) {
  return (
    <footer style={{
      background: 'rgba(0,0,0,0.9)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '48px 0 24px',
    }}>
      <div className="ws-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 32,
          marginBottom: 40,
        }}>
          {/* Logo & info */}
          <div>
            <div style={{ fontSize: 24, fontWeight: 900, marginBottom: 12, letterSpacing: 2 }}>
              IND<span style={{ color: '#8DC63F' }}>OO</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: 14, lineHeight: 1.6 }}>
              PT Indoo Teknologi<br />
              Yogyakarta, Indonesia
            </p>
          </div>

          {/* Products */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 16, color: 'rgba(255,255,255,0.7)' }}>Products</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FooterLink onClick={() => navigate('food')}>Indoo Food</FooterLink>
              <FooterLink onClick={() => navigate('property')}>Indoo Property</FooterLink>
              <FooterLink onClick={() => navigate('riders')}>Indoo Riders</FooterLink>
            </div>
          </div>

          {/* Company */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 16, color: 'rgba(255,255,255,0.7)' }}>Company</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <FooterLink onClick={() => navigate('about')}>About</FooterLink>
              <FooterLink onClick={() => navigate('contact')}>Contact</FooterLink>
              <FooterLink>Privacy</FooterLink>
              <FooterLink>Terms</FooterLink>
            </div>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontWeight: 800, fontSize: 14, marginBottom: 16, color: 'rgba(255,255,255,0.7)' }}>Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#8DC63F', fontSize: 14, fontWeight: 600 }}
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: 24,
          textAlign: 'center',
          color: 'rgba(255,255,255,0.3)',
          fontSize: 14,
        }}>
          &copy; 2026 PT Indoo Teknologi. All rights reserved.
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
        color: 'rgba(255,255,255,0.5)',
        fontSize: 14,
        textAlign: 'left',
        padding: 0,
        cursor: onClick ? 'pointer' : 'default',
        minHeight: 44,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {children}
    </button>
  )
}
