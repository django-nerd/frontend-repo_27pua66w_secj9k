import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const sampleNews = [
  {
    title: 'Students win gold at National Robotics Championship',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'CBSE Board Results: Outstanding performance in 2025',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Annual Science Exhibition showcases innovative projects',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop',
  },
]

export default function NewsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % sampleNews.length), 5000)
    return () => clearInterval(t)
  }, [])

  const prev = () => setIndex((index - 1 + sampleNews.length) % sampleNews.length)
  const next = () => setIndex((index + 1) % sampleNews.length)

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl font-bold text-slate-900">News & Achievements</h2>
          <a href="/news" className="text-sm text-[#580B57] hover:underline">View All</a>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200">
          {sampleNews.map((item, i) => (
            <div
              key={item.title}
              className={`absolute inset-0 transition-opacity duration-700 ${i === index ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={item.image} alt="" className="w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
            </div>
          ))}

          <div className="relative h-72">
            {/* placeholder for height */}
          </div>

          <div className="absolute inset-0 flex items-center justify-between px-2">
            <button onClick={prev} className="p-2 rounded-full bg-white/90 shadow border border-slate-200 hover:bg-white">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={next} className="p-2 rounded-full bg-white/90 shadow border border-slate-200 hover:bg-white">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
