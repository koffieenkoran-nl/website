import { Link } from 'react-router-dom'
import { getEpisodeBySlug } from '../data/episodes'

/**
 * BeginHierRoute — Card voor een "Begin Hier" route
 * Toont de route-titel, beschrijving en geselecteerde afleveringen
 */
function BeginHierRoute({ route, expanded = false }) {
  const episodes = route.slugs
    .map(slug => getEpisodeBySlug(slug))
    .filter(Boolean)

  if (expanded) {
    return (
      <div id={route.id} className="bg-white rounded-2xl border border-stone-200 shadow-xs overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-coffee-900 to-coffee-800 px-6 py-5">
          <div className="flex items-start gap-3">
            <span className="text-3xl">{route.emoji}</span>
            <div>
              <h2 className="font-display font-bold text-lg text-white leading-tight mb-1">
                {route.titel}
              </h2>
              <p className="text-sm text-coffee-200">{route.beschrijving}</p>
            </div>
          </div>
        </div>

        {/* Episodes */}
        <div className="divide-y divide-stone-100">
          {episodes.map((ep, idx) => (
            <Link
              key={ep.id}
              to={`/afleveringen/${ep.slug}`}
              className="group flex items-start gap-4 p-4 hover:bg-stone-50 transition-colors"
            >
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-coffee-100 text-coffee-700 text-xs font-bold flex items-center justify-center mt-1">
                {idx + 1}
              </span>
              <img
                src={ep.thumbnail}
                alt={ep.title}
                className="w-16 h-11 object-cover rounded-lg flex-shrink-0 bg-stone-200"
                loading="lazy"
                onError={e => { e.target.src = 'https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b' }}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-stone-900 group-hover:text-coffee-700 transition-colors line-clamp-2 leading-snug">
                  {ep.seoH1 || ep.title}
                </h3>
                {ep.subtitle && (
                  <p className="text-xs text-stone-400 mt-0.5 line-clamp-1">{ep.subtitle}</p>
                )}
              </div>
              <span className="text-stone-300 group-hover:text-coffee-600 flex-shrink-0 transition-colors self-center">→</span>
            </Link>
          ))}
        </div>
      </div>
    )
  }

  // Compact card (for grid on begin-hier page)
  return (
    <Link
      to={`/begin-hier#${route.id}`}
      className="group flex flex-col gap-3 bg-white rounded-2xl border border-stone-200 hover:border-coffee-400 hover:shadow-md transition-all p-5 shadow-xs"
    >
      <div className="flex items-center gap-3">
        <span className="text-3xl">{route.emoji}</span>
        <h3 className="font-display font-bold text-sm text-stone-900 group-hover:text-coffee-700 transition-colors leading-snug">
          {route.titel}
        </h3>
      </div>
      <p className="text-xs text-stone-500 leading-relaxed">{route.beschrijving}</p>
      <div className="mt-auto flex items-center gap-1 text-xs font-bold text-coffee-700">
        Bekijk selectie <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
      </div>
    </Link>
  )
}

export default BeginHierRoute
