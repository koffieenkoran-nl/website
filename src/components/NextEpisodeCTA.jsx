import { Link } from 'react-router-dom'

/**
 * NextEpisodeCTA — prominent "Luister hierna" blok
 * Toont de volgende aflevering als sterke CTA onderaan een episode-pagina
 */
function NextEpisodeCTA({ episode }) {
  if (!episode) return null

  return (
    <div className="rounded-2xl overflow-hidden border border-coffee-200 shadow-md bg-gradient-to-br from-coffee-900 to-coffee-950">
      <div className="px-5 pt-4 pb-1">
        <span className="text-[11px] font-bold uppercase tracking-widest text-coffee-300">
          Luister hierna
        </span>
      </div>
      <Link
        to={`/afleveringen/${episode.slug}`}
        className="group flex items-start gap-4 p-5 pt-3 hover:bg-white/5 transition-colors"
      >
        {/* Thumbnail */}
        <div className="relative flex-shrink-0">
          <img
            src={episode.thumbnail}
            alt={episode.title}
            className="w-20 h-14 object-cover rounded-xl shadow-sm bg-coffee-800"
            loading="lazy"
            onError={e => { e.target.src = 'https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b' }}
          />
          {/* Play icon overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-3 h-3 text-coffee-900 ml-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <p className="text-xs text-coffee-400 mb-1">
            Aflevering #{episode.episodeNumber}
          </p>
          <h4 className="text-sm font-bold text-white group-hover:text-coffee-200 transition-colors line-clamp-2 leading-snug mb-1">
            {episode.seoH1 || episode.title}
          </h4>
          {episode.subtitle && (
            <p className="text-xs text-coffee-400 line-clamp-1">{episode.subtitle}</p>
          )}
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 self-center">
          <span className="text-coffee-400 group-hover:text-white group-hover:translate-x-1 transition-all inline-block text-lg">→</span>
        </div>
      </Link>
    </div>
  )
}

export default NextEpisodeCTA
