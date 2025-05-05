import Footer from './layout/Footer.tsx'
import Navbar from './layout/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Committees from './components/Committee.tsx'
import Events from './components/Events.tsx'
import About from './components/About.tsx'
import Testimonials from './components/Testimonials.tsx'
import Contact from './components/Contact.tsx'
function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Committees />
      <Events />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
