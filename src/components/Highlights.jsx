import { GraduationCap, Award, FlaskConical, Library, Trophy, CalendarDays } from 'lucide-react'

const items = [
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    desc: 'Strong CBSE curriculum with proven results and holistic development.',
  },
  {
    icon: FlaskConical,
    title: 'Innovation Programs',
    desc: 'STEM labs, robotics, and project-based learning to build real-world skills.',
  },
  {
    icon: Trophy,
    title: 'Awards & Achievements',
    desc: 'Consistent recognition in academics, sports, and co-curriculars.',
  },
  {
    icon: Library,
    title: 'World-class Facilities',
    desc: 'Modern classrooms, labs, sports arenas, and a vibrant library space.',
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-900">Key Highlights</h2>
          <a href="/academics" className="text-sm text-[#580B57] hover:underline">See Academics</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition bg-white">
              <div className="w-12 h-12 rounded-xl bg-[#580B57]/10 text-[#580B57] grid place-items-center mb-4">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{title}</h3>
              <p className="text-slate-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
