export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="text-white font-semibold text-lg">Mysore International School</div>
          <p className="text-sm mt-2 text-slate-400">Empowering students to learn, innovate, and lead in a global future.</p>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Quick Links</div>
          <ul className="space-y-2 text-sm">
            <li><a href="/academics" className="hover:text-white">Academics</a></li>
            <li><a href="/admissions" className="hover:text-white">Admissions</a></li>
            <li><a href="/campus-life" className="hover:text-white">Campus Life</a></li>
            <li><a href="/news" className="hover:text-white">News & Events</a></li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Contact</div>
          <ul className="space-y-2 text-sm">
            <li>Mysuru, Karnataka</li>
            <li>info@mis.edu.in</li>
            <li>+91 98765 43210</li>
          </ul>
        </div>
        <div>
          <div className="text-white font-semibold mb-3">Follow Us</div>
          <div className="flex gap-3 text-sm">
            <a href="#" className="hover:text-white">Facebook</a>
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Mysore International School. All rights reserved.
      </div>
    </footer>
  )
}
