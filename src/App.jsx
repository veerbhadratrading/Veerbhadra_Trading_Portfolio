import Navbar from './components/layout/Navbar'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import Footer from './components/sections/Footer'
import ServicesSection from './components/sections/ServicesSection'

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070707] text-[#f5f5f5]">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center_top,rgba(255,215,0,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_20%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-16 -z-10 h-px bg-white/10" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] opacity-30" />

      <div className="mx-auto flex min-h-screen w-[min(1280px,calc(100%-24px))] flex-col py-3 sm:w-[min(1280px,calc(100%-48px))] sm:py-5">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}

export default App
