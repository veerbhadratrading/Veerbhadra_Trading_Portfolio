import logo from '../../data/Logo.png'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0c0c0c] px-5 py-12 text-white/60 sm:px-8 md:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Top Grid Section */}
        <div className="grid gap-10 pb-10 border-b border-white/10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <a href="#home" className="inline-block">
              <img src={logo} alt="Veerbhadra Trading logo" className="h-8 w-auto object-contain" />
            </a>
            <p className="text-xs leading-relaxed text-white/45">
              Disciplined execution, strategic thinking, and continuous learning in global financial markets.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffd95a]">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="transition hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="transition hover:text-white">About</a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Channels */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffd95a]">
              Connect
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://chat.whatsapp.com/JrkzCrDuaMu2KbajYFvXmo?s=sh&p=i&mlu=4&amv=2"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  WhatsApp Channel
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/lust_remains/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/drayush_raj?s=11&t=ktgVK4_svqRtCjogvjKcgg"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Financial Risk Disclaimer */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#ffd95a]">
              Risk Disclaimer
            </h3>
            <p className="text-xs leading-relaxed text-white/40">
              Trading in equities, derivatives, and commodities involves substantial risk of loss. All information provided is strictly for educational and analytical purposes and should not be construed as financial advice.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {currentYear} Veerbhadra Trading. All rights reserved.</p>
          <a href="#home" className="transition hover:text-[#ffd95a]">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer