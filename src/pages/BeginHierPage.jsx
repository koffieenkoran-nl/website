import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import BEGIN_HIER_ROUTES from '../data/beginHier'
import BeginHierRoute from '../components/BeginHierRoute'

function BeginHierPage() {
  useEffect(() => {
    document.title = 'Nieuw bij Koffie & Koran? Begin hier — De beste startpunten'
    window.scrollTo(0, 0)
  }, [])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Nieuw bij Koffie & Koran? Begin hier.',
    description: 'Kies jouw route en ontdek de beste Koffie & Koran afleveringen voor jouw situatie — of je nu meer wilt leren over islam, rust zoekt of worstelt met geloof.',
    url: 'https://koffieenkoran.nl/begin-hier',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://koffieenkoran.nl' },
        { '@type': 'ListItem', position: 2, name: 'Begin Hier', item: 'https://koffieenkoran.nl/begin-hier' }
      ]
    }
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <div className="bg-gradient-to-br from-coffee-900 to-coffee-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Breadcrumb */}
          <nav className="text-xs text-coffee-400 mb-6 flex items-center gap-1.5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Begin Hier</span>
          </nav>

          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-coffee-200 px-3 py-1.5 rounded-full text-xs font-medium mb-6">
              ☕ Nieuw bij Koffie &amp; Koran?
            </div>
            <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
              Kies jouw route.<br />
              <span className="text-coffee-300">Begin hier.</span>
            </h1>
            <p className="text-coffee-200 text-base sm:text-lg leading-relaxed">
              Koffie &amp; Koran heeft meer dan 30 afleveringen. Hieronder vind je per onderwerp de beste startpunten — op basis van waar jij naar op zoek bent.
            </p>
          </div>
        </div>
      </div>

      {/* Routes grid */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">

        {/* Quick jump */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">Ik ben op zoek naar...</p>
          <div className="flex flex-wrap gap-2">
            {BEGIN_HIER_ROUTES.map(route => (
              <a
                key={route.id}
                href={`#${route.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-stone-200 hover:border-coffee-400 hover:bg-coffee-50 text-xs font-semibold text-stone-700 hover:text-coffee-800 transition-all shadow-xs"
              >
                <span>{route.emoji}</span>
                <span className="line-clamp-1 max-w-[160px]">{route.titel}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Expanded route cards */}
        <div className="space-y-8">
          {BEGIN_HIER_ROUTES.map(route => (
            <BeginHierRoute key={route.id} route={route} expanded={true} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-coffee-900 rounded-2xl p-8 text-center text-white">
          <h2 className="font-display font-bold text-xl mb-2">Meer ontdekken?</h2>
          <p className="text-coffee-200 text-sm mb-6">
            Bekijk alle 30 afleveringen geordend per thema, of zoek op trefwoord.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/afleveringen"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-coffee-900 font-bold rounded-full hover:bg-coffee-100 transition-all text-sm"
            >
              Alle 30 afleveringen →
            </Link>
            <Link
              to="/onderwerpen/zingeving"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all text-sm"
            >
              Verken per thema →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BeginHierPage
