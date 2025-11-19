export default function Placeholder({ title, paragraphs = [] }) {
  return (
    <main className="min-h-[60vh] bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{title}</h1>
        <div className="space-y-4 text-slate-700">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </main>
  )
}
