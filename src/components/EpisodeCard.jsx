import { Link } from 'react-router-dom'
import { TOPICS } from '../data/episodes'

function EpisodeCard({ episode, rank }) {
  const topic = TOPICS[episode.topic]
  const displayRank = rank ?? episode.popularRank
  const medal = displayRank && displayRank <= 3 ? ['🥇', '🥈', '🥉'][displayRank - 1] : null

  return (
    <Link
      to={`/afleveringen/${episode.slug}`}
      className="group flex bg-white rounded-2xl border border-stone-200 hover:border-coffee-400 hover:shadow-sm transition-all duration-200 overflow-hidden items-stretch"
    >
      {/* Thumbnail — flush left, full height */}
      <div className="relative flex-shrink-0 w-28 sm:w-36">
        <img
          src={episode.thumbnail}
          alt={episode.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b'
          }}
        />
        {displayRank && (
          <div className="absolute top-2 left-2 bg-black/65 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md leading-none">
            {medal || `#${displayRank}`}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-center px-4 py-4 sm:py-5 gap-1.5">
        {topic && (
          <span className={`inline-block self-start text-[10px] font-bold px-2 py-0.5 rounded-md border ${topic.color}`}>
            {topic.label}
          </span>
        )}
        <h3 className="font-display font-bold text-sm sm:text-[15px] text-stone-900 group-hover:text-coffee-700 transition-colors leading-snug line-clamp-2">
          {episode.title}
        </h3>
        {episode.subtitle && (
          <p className="text-xs text-stone-400 line-clamp-1 leading-normal">
            {episode.subtitle}
          </p>
        )}
      </div>

      {/* Arrow */}
      <div className="flex-shrink-0 flex items-center pr-4">
        <svg className="w-4 h-4 text-stone-300 group-hover:text-coffee-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </Link>
  )
}

export default EpisodeCard
