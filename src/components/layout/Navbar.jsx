import logo from '../../data/Logo.png'
import LiveClock from '../ui/LiveClock'

function Navbar() {
  return (
    <header className="border-b border-white/10 bg-[#121212]/95 px-4 py-3 sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <a
          href="#home"
          className="inline-flex h-12 items-center gap-2 rounded-md border border-white/5 bg-[#0f0f0f] px-3 text-sm font-black tracking-[0.03em] text-[#ffd95a] shadow-[0_0_0_1px_rgba(255,212,0,0.08)]"
        >
          <img src={logo} alt="Veerbhadra Trading logo" className="h-10 w-auto object-contain" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/55 md:flex" aria-label="Primary">
          <a className="transition hover:text-white" href="#home">
            Home
          </a>
          <a className="transition hover:text-white" href="#about">
            About
          </a>
            <a className="transition hover:text-white" href="#services">
            Services
          </a>
          <a className="transition hover:text-white" href="#contact">
            Contact
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <LiveClock />
        </div>
      </div>
    </header>
  )
}

export default Navbar
