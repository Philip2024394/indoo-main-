import { useState } from 'react'

const navStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: 64,
  background: 'rgba(10,10,10,0.85)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(255,255,255,0.06)',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const innerStyle = {
  maxWidth: 1200,
  width: '100%',
  padding: '0 24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}

export default function Nav({ page, navigate }) {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navItems = [
    { label: 'Home', key: 'home' },
    { label: 'Products', key: 'products', dropdown: true },
    { label: 'About', key: 'about' },
    { label: 'Contact', key: 'contact' },
  ]

  const products = [
    { label: 'Indoo Food', key: 'food', icon: '🍽️' },
    { label: 'Indoo Property', key: 'property', icon: '🏡' },
    { label: 'Indoo Riders', key: 'riders', icon: '🛵' },
  ]

  const handleNav = (key) => {
    navigate(key)
    setMobileOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav style={navStyle}>
      {/* Green running light */}
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
      `}</style>

      <div style={innerStyle}>
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          style={{
            background: 'none',
            border: 'none',
            fontSize: 24,
            fontWeight: 900,
            color: '#fff',
            letterSpacing: 2,
          }}
        >
          IND<span style={{ color: '#8DC63F' }}>OO</span>
        </button>

        {/* Desktop Nav */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 32,
        }}
          className="desktop-nav"
        >
          {navItems.map((item) =>
            item.dropdown ? (
              <div
                key={item.key}
                style={{ position: 'relative' }}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'rgba(255,255,255,0.7)',
                    fontSize: 14,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                    minHeight: 44,
                  }}
                >
                  Products
                  <span style={{ fontSize: 10 }}>▼</span>
                </button>
                {dropdownOpen && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: -16,
                    background: 'rgba(10,10,10,0.95)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 12,
                    padding: 8,
                    minWidth: 200,
                  }}>
                    {products.map((p) => (
                      <button
                        key={p.key}
                        onClick={() => handleNav(p.key)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 10,
                          width: '100%',
                          padding: '10px 16px',
                          background: page === p.key ? 'rgba(141,198,63,0.1)' : 'none',
                          border: 'none',
                          borderRadius: 8,
                          color: page === p.key ? '#8DC63F' : 'rgba(255,255,255,0.7)',
                          fontSize: 14,
                          fontWeight: 600,
                          textAlign: 'left',
                          minHeight: 44,
                        }}
                      >
                        <span>{p.icon}</span>
                        {p.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <button
                key={item.key}
                onClick={() => handleNav(item.key)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: page === item.key ? '#8DC63F' : 'rgba(255,255,255,0.7)',
                  fontSize: 14,
                  fontWeight: 700,
                  minHeight: 44,
                }}
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="mobile-menu-btn"
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
          {mobileOpen ? '✕' : '☰'}
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
          backdropFilter: 'blur(20px)',
          padding: 24,
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          zIndex: 999,
        }}>
          <button onClick={() => handleNav('home')} style={mobileItemStyle(page === 'home')}>Home</button>
          <div style={{ padding: '8px 16px', color: 'rgba(255,255,255,0.3)', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>Products</div>
          {products.map((p) => (
            <button key={p.key} onClick={() => handleNav(p.key)} style={mobileItemStyle(page === p.key)}>
              <span>{p.icon}</span> {p.label}
            </button>
          ))}
          <button onClick={() => handleNav('about')} style={mobileItemStyle(page === 'about')}>About</button>
          <button onClick={() => handleNav('contact')} style={mobileItemStyle(page === 'contact')}>Contact</button>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}

function mobileItemStyle(active) {
  return {
    background: active ? 'rgba(141,198,63,0.1)' : 'none',
    border: 'none',
    color: active ? '#8DC63F' : 'rgba(255,255,255,0.8)',
    fontSize: 16,
    fontWeight: 700,
    padding: '14px 16px',
    borderRadius: 12,
    textAlign: 'left',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    minHeight: 44,
  }
}
