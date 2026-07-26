import profileImage from '../../data/Profile image.jpeg'

function HeroSection() {
  return (
    <section
      id="home"
      className="grid items-center gap-10 px-4 py-14 md:min-h-[calc(100vh-88px)] md:grid-cols-[minmax(0,1.12fr)_minmax(360px,0.88fr)] md:px-8 md:py-20"
      aria-labelledby="hero-title"
    >
      <div className="relative">
        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-[#ffd400]/25 bg-[#1a1a1a] px-4 py-2 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-[#ffd95a] shadow-[0_0_0_1px_rgba(255,212,0,0.05)]">
          <span className="h-2 w-2 rounded-full bg-[#ffd400] shadow-[0_0_16px_rgba(255,212,0,0.8)]" />
          Dedicated to market mastery
        </div>

        <div
          className="absolute -left-6 top-14 hidden h-[360px] w-[540px] opacity-25 md:block"
          aria-hidden="true"
        >
          <div className="absolute left-0 right-0 top-1/2 h-px bg-white/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_40%,rgba(255,212,0,0.12),transparent_20%),radial-gradient(circle_at_55%_60%,rgba(255,255,255,0.12),transparent_18%),radial-gradient(circle_at_80%_30%,rgba(255,212,0,0.08),transparent_16%)]" />
          <div className="absolute inset-x-4 top-16 flex items-end gap-3">
            {[42, 68, 54, 90, 48, 76, 60, 82, 44, 72, 50, 92].map((height, index) => (
              <div key={height} className="relative flex-1">
                <span
                  className="mx-auto block w-[2px] rounded-full bg-white/30"
                  style={{ height: `${height + 20}px` }}
                />
                <span
                  className="absolute left-1/2 top-1/2 w-[14px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-[#ffd400]/55"
                  style={{
                    height: `${Math.max(10, height / 2)}px`,
                    marginTop: `${index % 2 ? 8 : -4}px`,
                  }}
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-x-5 bottom-14 h-24 rounded-full bg-[linear-gradient(90deg,transparent,rgba(255,212,0,0.16),transparent)] blur-2xl" />
        </div>

        <h1
          id="hero-title"
          className="max-w-[10ch] text-[clamp(3.3rem,7vw,6.4rem)] font-black leading-[0.9] tracking-[-0.06em] text-white"
        >
          Veerbhadra
          <span className="block text-[#ffd400]">Trading</span>
        </h1>

        <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
          <span className=" block text-[#ffec9b] drop-shadow-sm">
            Dedicated to mastering financial markets through strategic thinking,
            disciplined execution, and continuous learning-helping turn opportunities
            into long-term success.
          </span>
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#ffd400] px-6 text-sm font-semibold text-[#111111] transition hover:bg-[#ffe04a]"
            href="https://chat.whatsapp.com/JrkzCrDuaMu2KbajYFvXmo?s=sh&p=i&mlu=4&amv=2"
            target="_blank"
            rel="noreferrer"
          >
            Join Community
          </a>
        </div>
      </div>

      <aside className="relative flex items-center justify-center md:justify-end">
        <div
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(255,212,0,0.12),transparent_55%)]"
          aria-hidden="true"
        />

        <div className="relative h-[360px] w-[360px] sm:h-[420px] sm:w-[420px]">
          <div className="absolute inset-0 rounded-full border border-white/10 bg-[#ffd400] shadow-[0_0_0_16px_rgba(255,212,0,0.05)]" />
          <div
            className="absolute inset-[-10px] rounded-full border border-dashed border-[#ffd400]/20"
            aria-hidden="true"
          />
          <img
            src={profileImage}
            alt="Ayush Raj profile"
            className="absolute inset-0 h-full w-full rounded-full object-cover"
          />

          <div className="absolute bottom-6 right-6 rounded-[16px] border border-white/10 bg-[#121212]/95 px-4 py-3 text-left shadow-[0_10px_30px_rgba(0,0,0,0.34)]">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#ffd400]">
              8+ Years
            </p>
            <p className="text-sm font-semibold text-white">Experience</p>
          </div>
        </div>
      </aside>
    </section>
  )
}

export default HeroSection
