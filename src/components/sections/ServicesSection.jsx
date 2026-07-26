import React from 'react'

const services = [
  {
    icon: '📈',
    title: 'Profit Split Trading',
    badge: 'Trade from Your Own Demat Account',
    description:
      'Keep complete ownership of your capital while I execute high-conviction trades directly in your demat account under a transparent profit-sharing model. You earn from realized profits without transferring your funds.',
    highlights: [
      'Trade in your own account',
      'No upfront capital transfer',
      'Transparent profit sharing',
      'Professional risk management',
    ],
  },
  {
    icon: '💼',
    title: 'Portfolio Management',
    badge: 'Professional Capital Management',
    description:
      'For investors seeking long-term wealth creation, I offer personalized portfolio and fund management services. Capital is managed with a disciplined investment approach focused on consistency, capital preservation, and sustainable returns.',
    highlights: [
      'Customized investment strategies',
      'Active portfolio monitoring',
      'Risk-adjusted returns',
      'Performance-based profit sharing',
    ],
  },
  {
    icon: '📊',
    title: 'Market Research & Premium Signals',
    badge: 'Institutional-Quality Market Intelligence',
    description:
      'Receive daily high-quality research, trade setups, and actionable signals covering NIFTY, SENSEX, Stocks, Stock Derivatives, and Gold. Every recommendation is backed by technical analysis, market structure, and disciplined risk management.',
    highlights: [
      'Daily Market Outlook',
      'NIFTY & SENSEX Analysis',
      'Equity & F&O Signals',
      'Gold (XAUUSD/MCX) Analysis',
      'Entry, Target & Stop Loss Levels',
    ],
  },
]

function ServicesSection() {
  return (
    <section
      id="services"
      className="relative mx-4 mb-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] px-5 py-10 sm:px-8 md:px-10"
      aria-labelledby="services-title"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-3 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#ffd95a]">
          <span className="h-px w-8 bg-[#ffd95a]/70" />
          Services
          <span className="h-px w-8 bg-[#ffd95a]/70" />
        </p>
        <h2
          id="services-title"
          className="text-[clamp(2rem,4vw,3.2rem)] font-black leading-[1.1] tracking-[-0.03em] text-white"
        >
          Professional Trading &amp; Investment Services
        </h2>
        <p className="mt-4 text-xs leading-relaxed text-white/60 sm:text-sm md:text-base">
          Helping investors and traders achieve their financial goals through disciplined execution, strategic portfolio management, and institutional-grade market research.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#151515] p-6 transition-all duration-300 hover:border-[#ffd95a]/40 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          >
            <div>
              {/* Header Icon + Title */}
              <div className="flex items-center gap-3">
                <span className="text-3xl">{service.icon}</span>
                <h3 className="text-lg font-bold text-white sm:text-xl">
                  {service.title}
                </h3>
              </div>

              {/* Tag / Badge */}
              <div className="mt-3">
                <span className="inline-block rounded-full border border-[#ffd95a]/25 bg-[#ffd95a]/10 px-3 py-1 text-[0.7rem] font-semibold tracking-wider text-[#ffd95a]">
                  {service.badge}
                </span>
              </div>

              {/* Description */}
              <p className="mt-4 text-xs leading-relaxed text-white/60 sm:text-sm">
                {service.description}
              </p>

              {/* Highlights */}
              <div className="mt-6 border-t border-white/10 pt-4">
                <h4 className="mb-3 text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/40">
                  Highlights
                </h4>
                <ul className="space-y-2 text-xs text-white/80 sm:text-sm">
                  {service.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#ffd95a] font-bold">✔</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Premium Tagline */}
      <div className="mt-10 rounded-2xl border border-[#ffd95a]/20 bg-[#ffd95a]/5 p-5 text-center sm:p-6">
        <p className="text-sm font-medium italic leading-relaxed text-[#ffd95a] sm:text-base">
          “More than trading—delivering disciplined strategies, professional execution, and research-driven decisions for serious market participants.”
        </p>
      </div>

      {/* Bottom Premium CTA */}
      <div className="mt-10 rounded-[24px] border border-white/10 bg-gradient-to-r from-[#171717] via-[#1c1c1c] to-[#171717] p-8 text-center sm:p-10">
        <h3 className="text-2xl font-black text-white sm:text-3xl">
          Ready to Grow Your Capital?
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-white/60 sm:text-sm">
          Whether you’re looking for professional portfolio management, profit-sharing trading, or institutional-grade market research, let’s discuss how we can work together.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="mailto:industriesveerbhadra@gmail.com?subject=Book%20a%20Consultation"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-[#ffd400] px-8 text-sm font-semibold text-[#111111] transition hover:bg-[#ffe04a]"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection