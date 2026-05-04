import { useState } from 'react'

export default function Nav({ activePage, onNavigate }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const products = [
    { label: 'Street Food', key: 'food', desc: 'Restaurant ordering platform' },
    { label: 'City Riders', key: 'riders', desc: 'Driver job board' },
    { label: 'Indoo Property', key: 'property', desc: 'Investment platform' },
  ]

  const handleNav = (key) => {
    onNavigate(key)
    setMobileOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: 64,
      background: 'rgba(10,10,10,0.8)',
      backdropFilter: 'blur(24px)',
      WebkitBackdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(255,255,255,0.06)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Green running light at bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 2,
        background: 'linear-gradient(90deg, transparent, #8DC63F, transparent)',
        animation: 'runLight 3s ease-in-out infinite',
      }} />
      <style>{`
        @keyframes runLight {
          0%, 100% { opacity: 0.3; transform: scaleX(0.5); }
          50% { opacity: 1; transform: scaleX(1); }
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>

      <div style={{
        maxWidth: 1200,
        width: '100%',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: 26,
            fontWeight: 900,
            color: '#fff',
            letterSpacing: 3,
          }}
        >
          IND<span style={{ color: '#8DC63F' }}>OO</span><span style={{ fontWeight: 400, fontSize: 18, marginLeft: 6, letterSpacing: 1, color: 'rgba(255,255,255,0.6)' }}>TECH</span>
        </button>

        {/* Desktop Nav */}
        <div className="nav-desktop" style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <NavButton active={activePage === 'home'} onClick={() => handleNav('home')}>Home</NavButton>

          {/* Products dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button style={{
              background: ['food', 'riders', 'property'].includes(activePage) ? 'rgba(141,198,63,0.08)' : 'none',
              border: 'none',
              color: ['food', 'riders', 'property'].includes(activePage) ? '#8DC63F' : 'rgba(255,255,255,0.7)',
              fontSize: 14,
              fontWeight: 700,
              padding: '8px 16px',
              borderRadius: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 6,
              minHeight: 44,
              transition: 'all 0.2s ease',
            }}>
              Products
              <span style={{ fontSize: 10, transition: 'transform 0.2s', transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }}>&#9660;</span>
            </button>

            {dropdownOpen && (
              <div style={{
                position: 'absolute',
                top: 'calc(100% + 4px)',
                left: -20,
                background: 'rgba(15,15,15,0.98)',
                backdropFilter: 'blur(24px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: 8,
                minWidth: 260,
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}>
                {products.map((p) => (
                  <button
                    key={p.key}
                    onClick={() => handleNav(p.key)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '100%',
                      padding: '12px 16px',
                      background: activePage === p.key ? 'rgba(141,198,63,0.1)' : 'transparent',
                      border: 'none',
                      borderRadius: 10,
                      color: activePage === p.key ? '#8DC63F' : '#fff',
                      textAlign: 'left',
                      minHeight: 44,
                      transition: 'background 0.2s ease',
                    }}
                    onMouseEnter={(e) => { if (activePage !== p.key) e.currentTarget.style.background = 'rgba(255,255,255,0.04)' }}
                    onMouseLeave={(e) => { if (activePage !== p.key) e.currentTarget.style.background = 'transparent' }}
                  >
                    <span style={{ fontSize: 14, fontWeight: 700 }}>{p.label}</span>
                    <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>{p.desc}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <NavButton active={activePage === 'about'} onClick={() => handleNav('about')}>About</NavButton>
          <NavButton active={activePage === 'contact'} onClick={() => handleNav('contact')}>Contact</NavButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            fontSize: 24,
            minHeight: 44,
            minWidth: 44,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {mobileOpen ? '\u2715' : '\u2630'}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div style={{
          position: 'fixed',
          top: 64,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(10,10,10,0.98)',
          backdropFilter: 'blur(24px)',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          zIndex: 999,
          overflowY: 'auto',
        }}>
          <MobileItem active={activePage === 'home'} onClick={() => handleNav('home')}>Home</MobileItem>
          <div style={{ padding: '12px 16px 4px', color: 'rgba(255,255,255,0.3)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Products</div>
          {products.map((p) => (
            <MobileItem key={p.key} active={activePage === p.key} onClick={() => handleNav(p.key)}>
              {p.label}
              <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', marginLeft: 8 }}>{p.desc}</span>
            </MobileItem>
          ))}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '8px 0' }} />
          <MobileItem active={activePage === 'about'} onClick={() => handleNav('about')}>About</MobileItem>
          <MobileItem active={activePage === 'contact'} onClick={() => handleNav('contact')}>Contact</MobileItem>
        </div>
      )}
    </nav>
  )
}

function NavButton({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? 'rgba(141,198,63,0.08)' : 'none',
        border: 'none',
        color: active ? '#8DC63F' : 'rgba(255,255,255,0.7)',
        fontSize: 14,
        fontWeight: 700,
        padding: '8px 16px',
        borderRadius: 8,
        minHeight: 44,
        transition: 'all 0.2s ease',
      }}
    >
      {children}
    </button>
  )
}

function MobileItem({ active, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: active ? 'rgba(141,198,63,0.1)' : 'transparent',
        border: 'none',
        color: active ? '#8DC63F' : 'rgba(255,255,255,0.8)',
        fontSize: 16,
        fontWeight: 700,
        padding: '14px 16px',
        borderRadius: 12,
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        minHeight: 44,
        transition: 'background 0.2s ease',
      }}
    >
      {children}
    </button>
  )
}
