import { Menu, X, Search, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { label: 'About', to: '/about' },
  { label: 'Academics', to: '/academics' },
  { label: 'Admissions', to: '/admissions' },
  { label: 'Campus Life', to: '/campus-life' },
  { label: 'Research & Innovation', to: '/research' },
  { label: 'News & Events', to: '/news' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#580B57] text-white grid place-items-center font-bold">MI</div>
              <div className="leading-tight">
                <div className="text-slate-900 font-semibold">Mysore International School</div>
                <div className="text-xs text-slate-500">Learn • Innovate • Lead</div>
              </div>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm hover:text-[#580B57] transition-colors ${isActive ? 'text-[#580B57]' : 'text-slate-700'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button className="p-2 rounded-lg border border-slate-200 text-slate-600 hover:text-[#580B57] hover:border-[#580B57]/30 transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <Link to="/admissions" className="inline-flex items-center px-4 py-2 rounded-lg text-white bg-[#580B57] hover:opacity-90 transition">Apply Now</Link>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 rounded-lg border border-slate-200" aria-label="Toggle menu">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block py-2 text-slate-700 hover:text-[#580B57]">
                {item.label}
              </Link>
            ))}
            <Link to="/admissions" onClick={() => setOpen(false)} className="inline-flex items-center px-4 py-2 rounded-lg text-white bg-[#580B57]">Apply Now</Link>
          </div>
        </div>
      )}
    </header>
  )
}
