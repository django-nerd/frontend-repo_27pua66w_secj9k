export default function CTA() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 p-8 md:p-12 bg-white grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Ready to experience MIS?</h3>
            <p className="mt-2 text-slate-600">Apply now, book a campus visit, or speak with our admissions team.</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href="/admissions" className="inline-flex items-center px-5 py-3 rounded-lg text-white bg-[#580B57] hover:opacity-90 transition">Apply Now</a>
              <a href="/contact" className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-300 text-slate-700 hover:border-[#580B57] hover:text-[#580B57] transition">Visit Campus</a>
            </div>
          </div>
          <ul className="space-y-2 text-slate-700">
            <li>• CBSE Curriculum • K-12 • Global Exposure</li>
            <li>• Modern Labs • Sports Complex • Library</li>
            <li>• Clubs, Festivals, and Community Events</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
