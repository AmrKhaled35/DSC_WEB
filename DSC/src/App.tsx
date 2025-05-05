import Footer from './layout/Footer.tsx'
import Navbar from './layout/Navbar.tsx'
import Hero from './components/Hero.tsx'
import Committees from './components/Committee.tsx'
function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Committees />
      <Footer />
    </div>
  )
}

export default App
