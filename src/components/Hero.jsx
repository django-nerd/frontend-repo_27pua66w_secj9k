import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[72vh] min-h-[520px] w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#580B57]/10 text-[#580B57] text-xs font-medium mb-3">CBSE Affiliated • K-12</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Nurturing curious minds to learn, innovate, and lead
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Mysore International School blends rigorous academics with a vibrant campus life, empowering students to thrive in a global future.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#highlights" className="inline-flex items-center px-5 py-3 rounded-lg text-white bg-[#580B57] hover:opacity-90 transition">Explore Highlights</a>
            <a href="/admissions" className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:border-[#580B57] hover:text-[#580B57] transition">Admissions</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
    </section>
  )
}
