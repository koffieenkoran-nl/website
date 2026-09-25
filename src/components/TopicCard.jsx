import { Link } from 'react-router-dom'

/**
 * TopicCard — Card voor een onderwerp/thema
 * Gebruikt op de homepage en op de /onderwerpen overzichtspagina
 */
function TopicCard({ topic, episodeCount, compact = false }) {
  if (!topic) return null

  const colorMap = {
    ramadan: { bg: 'bg-emerald-50', border: 'border-emerald-200', hover: 'hover:border-emerald-400 hover:bg-emerald-50', icon: '🌙', accent: 'text-emerald-700' },
    zingeving: { bg: 'bg-amber-50', border: 'border-amber-200', hover: 'hover:border-amber-400 hover:bg-amber-50', icon: '🌱', accent: 'text-amber-700' },
    geloof: { bg: 'bg-sky-50', border: 'border-sky-200', hover: 'hover:border-sky-400 hover:bg-sky-50', icon: '📖', accent: 'text-sky-700' },
    maatschappij: { bg: 'bg-stone-50', border: 'border-stone-200', hover: 'hover:border-stone-400 hover:bg-stone-100', icon: '🏙️', accent: 'text-stone-700' },
  }
  const style = colorMap[topic.id] || colorMap.maatschappij

  if (compact) {
    return (
      <Link
        to={`/onderwerpen/${topic.slug}`}
        className={`group flex items-center gap-3 p-3 rounded-xl border ${style.border} ${style.hover} transition-all bg-white`}
      >
        <span className="text-xl">{style.icon}</span>
        <div className="flex-1 min-w-0">
          <div className={`text-sm font-bold ${style.accent} group-hover:underline`}>{topic.label}</div>
          {episodeCount && (
            <div className="text-xs text-stone-400">{episodeCount} afleveringen</div>
          )}
        </div>
        <span className="text-stone-300 group-hover:text-stone-500 transition-colors">→</span>
      </Link>
    )
  }

  return (
    <Link
      to={`/onderwerpen/${topic.slug}`}
      className={`group flex flex-col gap-3 p-5 rounded-2xl border-2 ${style.border} ${style.hover} transition-all bg-white shadow-xs hover:shadow-md`}
    >
      <div className="flex items-start justify-between gap-2">
        <span className="text-3xl">{style.icon}</span>
        {episodeCount && (
          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${style.bg} ${style.accent} border ${style.border}`}>
            {episodeCount}×
          </span>
        )}
      </div>
      <div>
        <h3 className={`font-display font-bold text-base text-stone-900 group-hover:${style.accent} transition-colors mb-1`}>
          {topic.label}
        </h3>
        <p className="text-xs text-stone-500 leading-relaxed line-clamp-2">
          {topic.description}
        </p>
      </div>
      <div className={`text-xs font-bold ${style.accent} flex items-center gap-1 mt-auto`}>
        Bekijk afleveringen <span className="group-hover:translate-x-0.5 transition-transform inline-block">→</span>
      </div>
    </Link>
  )
}

export default TopicCard
