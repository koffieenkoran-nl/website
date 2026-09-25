import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import episodes, { popularEpisodes, TOPICS } from '../data/episodes'
import { formatDate } from '../data/episodes'

function AllEpisodesPage() {
  const [selectedTopic, setSelectedTopic] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = useMemo(() => {
    let result
    if (selectedTopic === 'populair') {
      result = popularEpisodes
    } else if (selectedTopic === 'all') {
      result = episodes
    } else {
      result = episodes.filter(e => e.topic === selectedTopic)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        (e.subtitle && e.subtitle.toLowerCase().includes(q)) ||
        (e.tags && e.tags.some(t => t.toLowerCase().includes(q)))
      )
    }
    return result
  }, [selectedTopic, searchQuery])

  // Group by topic for clustered view (only when "all" selected and no search)
  const groupedByTopic = useMemo(() => {
    if (selectedTopic !== 'all' || searchQuery) return null
    const groups = {}
    Object.values(TOPICS).forEach(t => {
      groups[t.id] = { topic: t, episodes: episodes.filter(e => e.topic === t.id) }
    })
    return groups
  }, [selectedTopic, searchQuery])

  return (
    <div className="bg-stone-50 min-h-screen">
      {/* Page header */}
      <div className="bg-coffee-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          <nav className="text-xs text-coffee-400 mb-5 flex items-center gap-1.5">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Alle Afleveringen</span>
          </nav>
          <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-2">
            Alle Afleveringen
          </h1>
          <p className="text-coffee-300 text-sm sm:text-base">
            Alle {episodes.length} afleveringen van Koffie en Koran — doorzoekbaar en gecategoriseerd
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

        {/* Search + filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="search"
              placeholder="Zoek in alle 30 afleveringen op titel, thema of trefwoord…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-transparent shadow-xs"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedTopic('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedTopic === 'all'
                  ? 'bg-coffee-900 text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              Alle afleveringen ({episodes.length})
            </button>

            <button
              onClick={() => setSelectedTopic('populair')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedTopic === 'populair'
                  ? 'bg-coffee-900 text-white shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
              }`}
            >
              <span>⭐</span> Meest Populair (10)
            </button>

            {Object.values(TOPICS).map(t => {
              const count = episodes.filter(e => e.topic === t.id).length
              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTopic(t.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    selectedTopic === t.id
                      ? 'bg-coffee-900 text-white shadow-xs'
                      : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
                  }`}
                >
                  {t.label} ({count})
                </button>
              )
            })}
          </div>
        </div>

        {/* Clustered view (default: all + no search) */}
        {groupedByTopic ? (
          <div className="space-y-12">
            {Object.values(groupedByTopic).map(({ topic, episodes: topicEps }) => (
              <div key={topic.id}>
                {/* Cluster header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${topic.color}`}>
                    {topic.label}
                  </span>
                  <div className="flex-1 h-px bg-stone-200" />
                  <span className="text-xs text-stone-400 font-medium">{topicEps.length} afleveringen</span>
                </div>
                <p className="text-xs text-stone-500 mb-4 italic">{topic.description}</p>
                <div className="space-y-2.5">
                  {topicEps.map(ep => (
                    <EpisodeRow key={ep.id} episode={ep} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Filtered / search results: flat list
          <div className="space-y-2.5">
            {filtered.length === 0 ? (
              <p className="text-center text-stone-500 py-12 bg-white rounded-xl border border-stone-200">
                Geen afleveringen gevonden.{' '}
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedTopic('all')
                  }}
                  className="text-coffee-700 font-semibold hover:underline"
                >
                  Reset filters
                </button>
              </p>
            ) : (
              filtered.map(ep => (
                <EpisodeRow key={ep.id} episode={ep} />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function EpisodeRow({ episode }) {
  const topic = TOPICS[episode.topic]
  return (
    <Link
      to={`/afleveringen/${episode.slug}`}
      className="group flex items-center gap-4 bg-white rounded-xl border border-stone-200 hover:border-coffee-400 hover:shadow-xs transition-all p-3 sm:p-3.5"
    >
      {/* Thumbnail */}
      <div className="relative flex-shrink-0">
        <img
          src={episode.thumbnail}
          alt={episode.title}
          loading="lazy"
          className="w-20 sm:w-24 h-14 sm:h-16 object-cover rounded-lg bg-stone-200"
          onError={e => {
            e.target.src = 'https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b'
          }}
        />
        {episode.isPopular && episode.popularRank && (
          <div className="absolute -top-1.5 -left-1.5 bg-coffee-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
            #{episode.popularRank}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5 flex-wrap">
          {topic && (
            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border ${topic.color}`}>
              {topic.label}
            </span>
          )}
          <span className="text-[10px] text-stone-400 font-medium">
            Aflevering #{episode.episodeNumber} · {formatDate(episode.date)}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-stone-900 group-hover:text-coffee-700 transition-colors line-clamp-1 leading-snug">
          {episode.title}
        </h3>
        {episode.subtitle && (
          <p className="text-xs text-stone-500 line-clamp-1 mt-0.5 leading-normal">{episode.subtitle}</p>
        )}
      </div>

      {/* Consumption time (if available) */}
      {episode.consumptionTime && (
        <div className="flex-shrink-0 text-right hidden sm:block">
          <div className="text-xs font-bold text-coffee-700">{episode.consumptionTime}</div>
          <div className="text-[10px] text-stone-400">luistertijd</div>
        </div>
      )}

      <svg className="w-4 h-4 text-stone-300 group-hover:text-coffee-600 flex-shrink-0 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
    </Link>
  )
}

export default AllEpisodesPage
