import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import MenuPage from './components/MenuPage'
import Footer from './components/Footer'

function useHashRoute() {
  const [route, setRoute] = useState(window.location.hash || '#/')
  useEffect(() => {
    const onHash = () => setRoute(window.location.hash || '#/')
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}

export default function App() {
  const route = useHashRoute()

  useEffect(() => {
    // scroll to anchors within home
    if (route.startsWith('#/') && route.split('#/')[1]) {
      const anchor = route.split('#/')[1]
      const el = document.getElementById(anchor)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [route])

  const Page = () => {
    if (route.startsWith('#/menu')) return <MenuPage />
    return <Home />
  }

  return (
    <div className="min-h-screen text-black bg-white">
      <Navbar />
      <Page />
      <Footer />
    </div>
  )
}
