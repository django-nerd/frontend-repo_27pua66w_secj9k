import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('Thanks! We will get back to you soon.')
  }

  return (
    <div>
      <Navbar />
      <main className="min-h-[60vh] bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Contact Us</h1>
          <form onSubmit={onSubmit} className="grid gap-4 max-w-xl">
            <input required placeholder="Full name" className="border border-slate-300 rounded-lg px-4 py-2" />
            <input type="email" required placeholder="Email" className="border border-slate-300 rounded-lg px-4 py-2" />
            <textarea required placeholder="Message" rows="5" className="border border-slate-300 rounded-lg px-4 py-2" />
            <button className="inline-flex items-center px-5 py-3 rounded-lg text-white bg-[#580B57]">Send Message</button>
            {status && <p className="text-green-600 text-sm">{status}</p>}
          </form>
          <div className="mt-8 text-slate-700 text-sm">
            Location: Mysuru, Karnataka • Follow us on social media
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
