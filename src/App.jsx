import { useState, useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FoodPage from './pages/FoodPage'
import PropertyPage from './pages/PropertyPage'
import RidersPage from './pages/RidersPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import './index.css'

export default function App() {
  const [page, setPage] = useState('home')

  // Scroll reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => observer.observe(el))

    return () => observer.disconnect()
  })

  // Scroll to top on page change
  useEffect(() => { window.scrollTo(0, 0) }, [page])

  return (
    <>
      <Nav activePage={page} onNavigate={setPage} />
      {page === 'home' && <HomePage onNavigate={setPage} />}
      {page === 'food' && <FoodPage onNavigate={setPage} />}
      {page === 'property' && <PropertyPage onNavigate={setPage} />}
      {page === 'riders' && <RidersPage onNavigate={setPage} />}
      {page === 'about' && <AboutPage onNavigate={setPage} />}
      {page === 'contact' && <ContactPage onNavigate={setPage} />}
      <Footer onNavigate={setPage} />
    </>
  )
}
