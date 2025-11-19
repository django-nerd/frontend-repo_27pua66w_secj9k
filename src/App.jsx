import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'
import NewsCarousel from './components/NewsCarousel'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Highlights />
      <NewsCarousel />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
