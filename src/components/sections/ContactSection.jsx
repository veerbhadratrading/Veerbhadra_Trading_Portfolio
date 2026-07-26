import { useState } from 'react'
import candleImage from '../../data/Yellow Candle.jpeg'

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/lust_remains/',
    icon: (
      <path d="M8.75 3h6.5A5.75 5.75 0 0 1 21 8.75v6.5A5.75 5.75 0 0 1 15.25 21h-6.5A5.75 5.75 0 0 1 3 15.25v-6.5A5.75 5.75 0 0 1 8.75 3Zm0 1.5A4.25 4.25 0 0 0 4.5 8.75v6.5a4.25 4.25 0 0 0 4.25 4.25h6.5a4.25 4.25 0 0 0 4.25-4.25v-6.5a4.25 4.25 0 0 0-4.25-4.25h-6.5Zm8.62 1.38a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-5.37 1.12a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z" />
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://chat.whatsapp.com/JrkzCrDuaMu2KbajYFvXmo?s=sh&p=i&mlu=4&amv=2',
    icon: (
      <path d="M12 3a9 9 0 0 0-7.78 13.52L3 21l4.62-1.21A9 9 0 1 0 12 3Zm0 1.5a7.5 7.5 0 0 1 6.52 11.25l-.22.38a7.5 7.5 0 0 1-9.44 2.97l-.35-.16-2.74.72.73-2.67-.17-.35A7.5 7.5 0 0 1 12 4.5Zm-3.35 3.82c-.18.01-.42.08-.64.33-.22.24-.84.82-.84 2s.86 2.33.98 2.49c.12.17 1.6 2.61 3.95 3.55 1.96.78 2.36.62 2.78.58.42-.04 1.34-.55 1.53-1.08.19-.53.19-.98.13-1.08-.05-.1-.21-.16-.44-.28s-1.34-.66-1.54-.73-.35-.12-.5.12-.58.73-.7.88-.26.17-.48.06a5.72 5.72 0 0 1-1.7-1.05 6.58 6.58 0 0 1-1.18-1.46c-.13-.22-.01-.34.1-.45.1-.1.23-.26.35-.39.12-.13.16-.22.24-.37.08-.16.04-.29-.02-.41s-.51-1.23-.71-1.68c-.19-.45-.38-.39-.56-.4Z" />
    ),
  },
  {
    label: 'X',
    href: 'https://x.com/drayush_raj?s=11&t=ktgVK4_svqRtCjogvjKcgg',
    icon: (
      <path d="M18.8 4.2h2.7l-5.9 6.7L22 20.8h-5.5l-4.3-5.2-4.6 5.2H5l6.3-7.2L2.2 4.2H8l3.8 4.6 4-4.6Zm-.9 15h1.5L7.2 5.8H5.6l12.3 13.4Z" />
    ),
  },
  {
    label: 'Email',
    href: 'mailto:industriesveerbhadra@gmail.com',
    icon: (
      <path d="M4.5 5.5h15A2.5 2.5 0 0 1 22 8v8a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16V8a2.5 2.5 0 0 1 2.5-2.5Zm0 1.5c-.17 0-.33.03-.48.08L12 11.73l7.98-4.65a1.5 1.5 0 0 0-.48-.08h-15ZM20.5 9l-8.04 4.68a1 1 0 0 1-1.02 0L3.5 9V16c0 .55.45 1 1 1h15a1 1 0 0 0 1-1V9Z" />
    ),
  },
]

const contactEmail = 'industriesveerbhadra@gmail.com'

const fieldIcons = {
  name: (
    <path d="M12 12.75A4.75 4.75 0 1 0 12 3.25a4.75 4.75 0 0 0 0 9.5Zm0 1.5c-4.1 0-7.5 2.62-7.5 5.85 0 .38.31.65.69.65h13.62c.38 0 .69-.27.69-.65 0-3.23-3.4-5.85-7.5-5.85Z" />
  ),
  email: (
    <path d="M4.5 5.5h15A2.5 2.5 0 0 1 22 8v8a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 2 16V8a2.5 2.5 0 0 1 2.5-2.5Zm0 1.5c-.17 0-.33.03-.48.08L12 11.73l7.98-4.65a1.5 1.5 0 0 0-.48-.08h-15ZM20.5 9l-8.04 4.68a1 1 0 0 1-1.02 0L3.5 9V16c0 .55.45 1 1 1h15a1 1 0 0 0 1-1V9Z" />
  ),
  message: (
    <path d="M4.5 4.75h15A2.25 2.25 0 0 1 21.75 7v8A2.25 2.25 0 0 1 19.5 17.25H10l-4.75 4v-4.25H4.5A2.25 2.25 0 0 1 2.25 14V7A2.25 2.25 0 0 1 4.5 4.75Zm0 1.5a.75.75 0 0 0-.75.75v7a.75.75 0 0 0 .75.75h1.75v2.41l2.87-2.41H19.5a.75.75 0 0 0 .75-.75V7a.75.75 0 0 0-.75-.75h-15Z" />
  ),
}

function ContactSection() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent(`Portfolio inquiry from ${formValues.name || 'Website visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formValues.name || '-'}\nEmail: ${formValues.email || '-'}\n\nMessage:\n${formValues.message || '-'}`,
    )

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`
  }

  return (
    <section
      id="contact"
      className="relative mx-4 mb-10 overflow-hidden rounded-[28px] border border-white/10 bg-[#101010] px-5 py-10 sm:px-8 md:px-10"
      aria-labelledby="contact-title"
    >
      {/* 1. Background Image using <img> with left/right inset margins */}
      <div className="pointer-events-none absolute inset-y-0 left-6 right-6 -z-20 overflow-hidden rounded-2xl sm:left-10 sm:right-10">
        <img
          src={candleImage}
          alt=""
          className="h-full w-full object-cover object-center opacity-30"
        />
      </div>

      {/* 2. Soft Tint Overlay to blend the image gently with the dark theme */}
      <div 
        className="pointer-events-none absolute inset-0 -z-10 bg-[#101010]/70" 
        aria-hidden="true" 
      />

      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-start">
        {/* Left Side: Logos and Labels */}
        <div>
          <p className="mb-4 inline-flex items-center gap-3 text-[0.72rem] font-bold uppercase tracking-[0.22em] text-[#ffd95a]">
            <span className="h-px w-8 bg-[#ffd95a]/70" />
            Contact
          </p>
          <h2
            id="contact-title"
            className="text-[clamp(2.6rem,5vw,4.8rem)] font-black leading-[0.95] tracking-[-0.05em] text-white"
          >
            Get in Touch
          </h2>

          <div className="mt-8 grid gap-5 text-sm sm:text-base">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex items-center gap-4 text-white/80 transition hover:text-[#ffd95a]"
                aria-label={item.label}
                title={item.label}
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#171717] text-[#ffd95a]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    {item.icon}
                  </svg>
                </span>
                <span className="font-medium tracking-wide">{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Contact Form Card */}
        <form
          className="rounded-[24px] border border-white/10 bg-[#151515]/90 p-5 shadow-[0_16px_50px_rgba(0,0,0,0.35)] sm:p-6 backdrop-blur-md"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <label className="grid gap-2">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#ffd95a]" aria-hidden="true">
                  {fieldIcons.name}
                </svg>
                Name
              </span>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Your name"
                className="h-12 rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#ffd95a]/50"
              />
            </label>

            <label className="grid gap-2">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#ffd95a]" aria-hidden="true">
                  {fieldIcons.email}
                </svg>
                Email
              </span>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="h-12 rounded-xl border border-white/10 bg-[#111111] px-4 text-white outline-none transition placeholder:text-white/30 focus:border-[#ffd95a]/50"
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2">
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-[#ffd95a]" aria-hidden="true">
                {fieldIcons.message}
              </svg>
              Message
            </span>
            <textarea
              name="message"
              value={formValues.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={7}
              className="rounded-xl border border-white/10 bg-[#111111] px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-[#ffd95a]/50"
            />
          </label>

          <button
            type="submit"
            className="mt-5 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-[#ffd400] px-6 text-sm font-semibold text-[#111111] transition hover:bg-[#ffe04a]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactSection