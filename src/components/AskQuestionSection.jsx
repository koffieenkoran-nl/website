import { useState } from 'react'

export default function AskQuestionSection() {
  const [question, setQuestion] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!question.trim()) return

    setLoading(true)
    setError(null)

    try {
      // Direct AJAX verzending naar koffieenkoran@gmail.com via FormSubmit API
      const res = await fetch('https://formsubmit.co/ajax/koffieenkoran@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          vraag: question,
          _subject: 'Nieuwe luisteraarsvraag via koffieenkoran.nl',
          _template: 'table'
        })
      })

      if (res.ok) {
        setSubmitted(true)
      } else {
        throw new Error('Verzenden mislukt')
      }
    } catch (err) {
      // Fallback: probeer mailto als netwerk/adblocker blokkeert
      const subject = encodeURIComponent('Vraag voor Koffie & Koran')
      const body = encodeURIComponent(`Vraag:\n${question}`)
      window.location.href = `mailto:koffieenkoran@gmail.com?subject=${subject}&body=${body}`
      setSubmitted(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="stel-je-vraag" className="py-20 sm:py-28 bg-coffee-950 text-white scroll-mt-20">
      <div className="max-w-xl mx-auto px-6 text-center">

        {/* Icon */}
        <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-7 text-xl">
          🎙️
        </div>

        <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
          Zit je ergens mee?
        </h2>
        <p className="text-coffee-300 text-base sm:text-lg leading-relaxed mb-10">
          Stuur je vraag of dilemma in. Muhammed en Ahmet bespreken het in een volgende aflevering.
        </p>

        {submitted ? (
          <div className="py-10 text-center">
            <div className="text-4xl mb-4">🙏</div>
            <p className="text-white font-semibold text-lg mb-1">Dankjewel!</p>
            <p className="text-coffee-400 text-sm">We hebben je vraag ontvangen en nemen hem mee in de volgende opname.</p>
            <button
              onClick={() => { setSubmitted(false); setQuestion('') }}
              className="mt-6 text-xs text-coffee-500 hover:text-coffee-300 transition-colors underline"
            >
              Nog een vraag insturen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <textarea
              rows={4}
              required
              disabled={loading}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Jouw vraag of onderwerp voor de podcast…"
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white text-sm placeholder-coffee-500 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-transparent resize-none leading-relaxed disabled:opacity-50"
            />

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-1">
              <p className="text-xs text-coffee-500 text-center sm:text-left">
                Of mail direct:{' '}
                <a href="mailto:koffieenkoran@gmail.com" className="text-coffee-300 hover:text-white transition-colors">
                  koffieenkoran@gmail.com
                </a>
              </p>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-coffee-950 font-bold rounded-xl text-sm hover:bg-coffee-100 transition-colors shadow-lg whitespace-nowrap disabled:opacity-60 cursor-pointer"
              >
                {loading ? 'Versturen…' : 'Verstuur vraag →'}
              </button>
            </div>
          </form>
        )}

      </div>
    </section>
  )
}
