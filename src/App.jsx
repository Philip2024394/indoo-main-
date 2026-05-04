import { useState } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FoodPage from './pages/FoodPage'
import PropertyPage from './pages/PropertyPage'
import RidersPage from './pages/RidersPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const [page, setPage] = useState('home')

  const navigate = (p) => {
    setPage(p)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const pages = {
    home: <HomePage navigate={navigate} />,
    food: <FoodPage navigate={navigate} />,
    property: <PropertyPage navigate={navigate} />,
    riders: <RidersPage navigate={navigate} />,
    about: <AboutPage navigate={navigate} />,
    contact: <ContactPage navigate={navigate} />,
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Nav page={page} navigate={navigate} />
      <main style={{ flex: 1, paddingTop: 64 }}>
        {pages[page] || pages.home}
      </main>
      <Footer navigate={navigate} />
    </div>
  )
}
