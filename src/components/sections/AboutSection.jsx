const milestones = [
  { label: 'Market Experience', value: '8+ Years' },
  { label: 'Managed Trading Accounts', value: '200+' },
  { label: 'Managed Investment Portfolios', value: '500+' },
  { label: 'Aggregate Trading Volume', value: '$100M+' },
  { label: 'Total Market Exposure', value: '$250M+' },
  { label: 'NISM Certification', value: 'Series VIII - Equity Derivatives' },
  { label: 'Global Volumes Executed', value: 'Millions' },
]

function AboutSection() {
  return (
    <section
      id="about"
      className="grid gap-8 px-4 pb-8 pt-4 md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)] md:px-8 md:pt-6"
      aria-labelledby="about-title"
    >
      <div>
        <p className="mb-4 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#ffd95a]">
          <span className="h-px w-8 bg-[#ffd95a]/60" />
          Performance & Biography
        </p>
        <h2
          id="about-title"
          className="max-w-[12ch] text-[clamp(2.2rem,5vw,4.5rem)] font-black leading-[0.95] tracking-[-0.05em] text-white"
        >
          Turning Market Experience Into Measurable Results
        </h2>

        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-7 text-white/70 sm:text-base">
          <p>
            With 8+ years of hands-on experience in financial markets, I have successfully worked with over 200 trading accounts and helped manage 500+ investment portfolios, gaining practical experience across equities, derivatives, commodities, and global financial markets.
          </p>
          <p>
            My approach is dedicated to understanding market behavior and developing precise risk-management and trading strategies. Our trading philosophy is built on discipline, consistency, and data-driven decision making.
          </p>
          <p>
            Rather than chasing quick profits, we focus on protecting capital, identifying high-quality opportunities, and delivering sustainable long-term performance.
          </p>
        </div>

<div className="mt-8 flex flex-wrap gap-4">
  <a
    className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#ffd400] px-6 text-sm font-semibold text-[#111111] transition hover:bg-[#ffe04a]"
    href="mailto:industriesveerbhadra@gmail.com?subject=Request%20Portfolio%20Review"
  >
    Request Portfolio Review
  </a>
</div>
      </div>

      <aside className="rounded-[22px] border border-white/10 bg-[#171717] shadow-[0_16px_50px_rgba(0,0,0,0.35)]">
        <div className="rounded-t-[22px] bg-[#ffd400] px-5 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#111111]">
          Certifications & Milestones
        </div>
        <div className="divide-y divide-white/10">
          {milestones.map((item) => (
            <div key={item.label} className="px-5 py-4">
              <p className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-white/35">
                {item.label}
              </p>
              <p className="mt-2 text-lg text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </aside>
    </section>
  )
}

export default AboutSection