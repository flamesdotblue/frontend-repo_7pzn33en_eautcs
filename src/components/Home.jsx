import { useEffect } from 'react'

function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <section className="pt-24 pb-16 bg-[#FFD43B]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <img
            src="/nosh-logo.png"
            alt="Nosh Foods"
            className="h-24 w-24 object-contain drop-shadow"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          Homemade Food, Delivered to Your Doorstep
        </h1>
        <p className="mt-4 text-base sm:text-lg max-w-2xl mx-auto font-semibold">
          Healthy, tasty, and hygienic meals for students & working professionals.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
          <a href="#/menu" className="inline-block bg-black text-white rounded-full px-6 py-3 font-bold hover:bg-white hover:text-black border border-black transition-colors">
            View 30-Day Menu
          </a>
          <button onClick={() => scrollTo('pricing')} className="inline-block bg-white text-black rounded-full px-6 py-3 font-bold hover:bg-black hover:text-white border border-black transition-colors">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const items = [
    { title: 'Homemade Taste', icon: '🍲', text: 'Comforting flavors just like home.' },
    { title: 'Time-Saving', icon: '⏱️', text: 'No cooking, no cleaning. Just eat.' },
    { title: 'Affordable', icon: '💰', text: 'Plans that fit student & work budgets.' },
    { title: 'Doorstep Delivery', icon: '🚚', text: 'Fresh meals delivered to you.' },
  ]
  return (
    <section className="py-14 bg-white" id="why">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {items.map((i) => (
            <div key={i.title} className="bg-yellow-50 border border-black/10 rounded-xl p-5 text-center">
              <div className="text-3xl mb-2" aria-hidden>{i.icon}</div>
              <h3 className="font-bold">{i.title}</h3>
              <p className="text-sm mt-1 text-black/70">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { no: '01', title: 'Choose Plan', text: 'Pick daily, weekly or monthly.' },
    { no: '02', title: 'We Cook Fresh', text: 'Wholesome meals, hygienically prepared.' },
    { no: '03', title: 'We Deliver', text: 'Right to your doorstep, on time.' },
  ]
  return (
    <section className="py-14 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.no} className="rounded-xl bg-white text-black p-6 border border-black">
              <div className="text-[#FFD43B] font-extrabold text-xl">{s.no}</div>
              <h3 className="mt-2 font-extrabold text-lg">{s.title}</h3>
              <p className="text-sm mt-1 text-black/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuPreview() {
  const sample = [
    { date: 'Day 1', tiffin: 'Poha + Chutney', lunch: 'Dal Fry, Jeera Rice, Salad', dinner: 'Roti, Paneer Masala, Salad' },
    { date: 'Day 2', tiffin: 'Upma + Coconut Chutney', lunch: 'Rajma Chawal, Curd', dinner: 'Roti, Mix Veg, Jeera Rice' },
    { date: 'Day 3', tiffin: 'Aloo Paratha + Curd', lunch: 'Chole Rice, Salad', dinner: 'Roti, Dal Tadka, Veg Pulao' },
  ]
  return (
    <section className="py-14 bg-white" id="menu-preview">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold">Menu Preview</h2>
          <a href="#/menu" className="text-sm font-bold underline">See Full 30-Day Menu</a>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {sample.map((d) => (
            <div key={d.date} className="rounded-xl border border-black/10 p-5">
              <h3 className="font-extrabold">{d.date}</h3>
              <div className="mt-2 text-sm">
                <p><span className="font-bold">Tiffin:</span> {d.tiffin}</p>
                <p><span className="font-bold">Lunch:</span> {d.lunch}</p>
                <p><span className="font-bold">Dinner:</span> {d.dinner}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pricing() {
  const plans = [
    { name: 'Daily', price: '₹149', desc: 'Pay per day, flexible & simple.', highlight: false },
    { name: 'Weekly', price: '₹899', desc: 'Best for busy weeks.', highlight: false },
    { name: 'Monthly', price: '₹3399', desc: 'Best Value for regulars.', highlight: true },
    { name: 'Student Discount', price: 'Save 10%', desc: 'Valid student ID required.', highlight: false },
  ]
  return (
    <section className="py-14 bg-[#FFF7D0]" id="pricing">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">Pricing & Subscription Plans</h2>
        <div className="grid md:grid-cols-4 gap-4">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl p-6 border ${p.highlight ? 'bg-[#FFD43B] border-black shadow-[4px_4px_0_#000]' : 'bg-white border-black/20'}`}>
              <h3 className="font-extrabold text-lg">{p.name}</h3>
              <p className="mt-2 text-2xl font-extrabold">{p.price}</p>
              <p className="mt-1 text-sm text-black/70">{p.desc}</p>
              <a
                href="https://wa.me/919429693487?text=Hi%2C%20I%20want%20to%20subscribe%20to%20a%20plan%20from%20Nosh%20Foods."
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block w-full text-center bg-black text-white rounded-full px-4 py-2 font-bold hover:bg-white hover:text-black border border-black transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="py-14 bg-white" id="about">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-4">About Us</h2>
        <p className="text-black/80 font-medium">
          Nosh Foods was started to serve healthy, homemade food to students and working professionals who miss the comfort of home meals. Every dish is made with care, hygiene, and love.
        </p>
      </div>
    </section>
  )
}

function Contact() {
  useEffect(() => {
    // expose a simple handler for hash navigation buttons
    window.__nosh_submit = (e) => {
      e.preventDefault()
      const name = document.getElementById('cf-name')?.value || ''
      const phone = document.getElementById('cf-phone')?.value || ''
      const msg = document.getElementById('cf-message')?.value || ''
      const text = encodeURIComponent(`Hi, I am ${name} (${phone}). ${msg}`)
      const url = `https://wa.me/919429693487?text=${text}`
      window.open(url, '_blank')
    }
  }, [])
  return (
    <section className="py-14 bg-black text-white" id="contact">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-10">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3">
            <p className="font-semibold">📞 Call Us: <a href="tel:+919429693487" className="underline hover:text-[#FFD43B]">+91 94296 93487</a></p>
            <p className="font-semibold">💬 WhatsApp Us: <a className="underline hover:text-[#FFD43B]" target="_blank" rel="noreferrer" href="https://wa.me/919429693487?text=Hi%2C%20I%20have%20seen%20your%20website%20and%20I%20am%20interested.%20Can%20I%20get%20more%20information%20about%20it%3F">Chat Now</a></p>
            <p className="text-white/70 text-sm">We usually respond within a few minutes during working hours.</p>
          </div>
          <form className="bg-white text-black rounded-2xl p-6 border border-black/10">
            <div className="grid gap-4">
              <div>
                <label className="text-sm font-bold" htmlFor="cf-name">Name</label>
                <input id="cf-name" type="text" className="mt-1 w-full rounded-xl border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]" required />
              </div>
              <div>
                <label className="text-sm font-bold" htmlFor="cf-phone">Phone</label>
                <input id="cf-phone" type="tel" className="mt-1 w-full rounded-xl border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]" required />
              </div>
              <div>
                <label className="text-sm font-bold" htmlFor="cf-message">Message</label>
                <textarea id="cf-message" rows={4} className="mt-1 w-full rounded-xl border border-black/20 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#FFD43B]"></textarea>
              </div>
              <button onClick={(e) => window.__nosh_submit(e)} className="bg-black text-white rounded-full px-4 py-3 font-bold hover:bg-[#FFD43B] hover:text-black border border-black transition-colors">
                Send on WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChooseUs />
      <HowItWorks />
      <MenuPreview />
      <Pricing />
      <About />
      <Contact />
    </main>
  )
}
