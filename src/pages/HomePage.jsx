import { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import Hero from '../components/Hero'
import AskQuestionSection from '../components/AskQuestionSection'
import EpisodeCard from '../components/EpisodeCard'
import TopicCard from '../components/TopicCard'
import episodes, { popularEpisodes, TOPICS } from '../data/episodes'
import { useLatestRSSEpisode } from '../hooks/useLatestRSSEpisode'

// Fallback: meest recente hardcoded aflevering (als RSS mislukt)
const fallbackLatest = [...episodes].sort((a, b) => new Date(b.date) - new Date(a.date))[0]

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const topicParam = searchParams.get('topic')
  const [selectedTopic, setSelectedTopic] = useState(topicParam || 'populair')
  const [searchQuery, setSearchQuery] = useState('')

  // Live RSS feed — nieuwste aflevering
  const { episode: rssEpisode, loading: rssLoading, error: rssError } = useLatestRSSEpisode()

  useEffect(() => {
    if (topicParam) {
      if (TOPICS[topicParam] || topicParam === 'all' || topicParam === 'populair') {
        setSelectedTopic(topicParam)
      }
    }
  }, [topicParam])

  const handleSelectTopic = (id) => {
    setSelectedTopic(id)
    if (id === 'populair') {
      setSearchParams({})
    } else {
      setSearchParams({ topic: id })
    }
  }

  const filtered = useMemo(() => {
    let list
    if (selectedTopic === 'populair') {
      list = popularEpisodes
    } else if (selectedTopic === 'all') {
      list = episodes
    } else {
      list = episodes.filter(e => e.topic === selectedTopic)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      const currentFiltered = list.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        (e.subtitle && e.subtitle.toLowerCase().includes(q)) ||
        (e.tags && e.tags.some(t => t.toLowerCase().includes(q)))
      )
      if (currentFiltered.length > 0) return currentFiltered
      return episodes.filter(e =>
        e.title.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q) ||
        (e.subtitle && e.subtitle.toLowerCase().includes(q)) ||
        (e.tags && e.tags.some(t => t.toLowerCase().includes(q)))
      )
    }
    return list
  }, [selectedTopic, searchQuery])

  return (
    <>
      <Hero />

      {/* ═══════════════════════════════════════════════
          SECTIE 1 — Nieuwste aflevering highlight (live via RSS)
      ═══════════════════════════════════════════════ */}
      <section className="py-10 sm:py-14 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-stone-500">Nieuwste aflevering</span>
          </div>

          {/* Skeleton loader */}
          {rssLoading && (
            <div className="flex flex-col sm:flex-row items-start gap-5 bg-gradient-to-br from-coffee-900 to-coffee-950 rounded-2xl overflow-hidden shadow-md animate-pulse">
              <div className="w-full sm:w-44 h-40 bg-coffee-800 flex-shrink-0" />
              <div className="p-5 sm:py-6 sm:pr-6 flex-1 space-y-3">
                <div className="h-3 bg-coffee-800 rounded w-1/4" />
                <div className="h-5 bg-coffee-800 rounded w-3/4" />
                <div className="h-4 bg-coffee-800 rounded w-full" />
                <div className="h-4 bg-coffee-800 rounded w-2/3" />
              </div>
            </div>
          )}

          {/* Live RSS aflevering */}
          {!rssLoading && rssEpisode && (
            <a
              href={rssEpisode.spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row items-start gap-5 bg-gradient-to-br from-coffee-900 to-coffee-950 rounded-2xl overflow-hidden hover:shadow-xl transition-all shadow-md"
            >
              <img
                src={rssEpisode.thumbnail}
                alt={rssEpisode.title}
                className="w-full sm:w-44 h-40 sm:h-auto object-cover flex-shrink-0"
                loading="eager"
                onError={e => { e.target.src = 'https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b' }}
              />
              <div className="p-5 sm:py-6 sm:pr-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-coffee-300 font-medium">Spotify</span>
                  {rssEpisode.pubDate && (
                    <span className="text-[11px] text-coffee-400">
                      · {new Date(rssEpisode.pubDate).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  )}
                </div>
                <h2 className="font-display font-bold text-lg text-white group-hover:text-coffee-200 transition-colors leading-snug">
                  {rssEpisode.title}
                </h2>
                {rssEpisode.description && (
                  <p className="text-sm text-coffee-300 line-clamp-2 leading-relaxed">{rssEpisode.description}</p>
                )}
                <div className="flex items-center gap-2 text-xs font-bold text-coffee-300 mt-auto group-hover:text-white transition-colors">
                  <span>Luister op Spotify</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            </a>
          )}

          {/* Fallback als RSS mislukt — hardcoded nieuwste aflevering */}
          {!rssLoading && (rssError || !rssEpisode) && fallbackLatest && (
            <Link
              to={`/afleveringen/${fallbackLatest.slug}`}
              className="group flex flex-col sm:flex-row items-start gap-5 bg-gradient-to-br from-coffee-900 to-coffee-950 rounded-2xl overflow-hidden hover:shadow-xl transition-all shadow-md"
            >
              <img
                src={fallbackLatest.thumbnail}
                alt={fallbackLatest.title}
                className="w-full sm:w-44 h-40 sm:h-auto object-cover flex-shrink-0"
                loading="eager"
              />
              <div className="p-5 sm:py-6 sm:pr-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                  {TOPICS[fallbackLatest.topic] && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${TOPICS[fallbackLatest.topic].color}`}>
                      {TOPICS[fallbackLatest.topic].label}
                    </span>
                  )}
                  <span className="text-[11px] text-coffee-300">#{fallbackLatest.episodeNumber}</span>
                </div>
                <h2 className="font-display font-bold text-lg text-white group-hover:text-coffee-200 transition-colors leading-snug">
                  {fallbackLatest.seoH1 || fallbackLatest.title}
                </h2>
                {fallbackLatest.subtitle && (
                  <p className="text-sm text-coffee-300 line-clamp-2 leading-relaxed">{fallbackLatest.subtitle}</p>
                )}
                <div className="flex items-center gap-2 text-xs font-bold text-coffee-300 mt-auto group-hover:text-white transition-colors">
                  <span>Luister nu</span>
                  <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            </Link>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTIE 2 — Waar ben jij naar op zoek? (Begin Hier funnel)
      ═══════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 bg-cream-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-900 mb-3">
              Waar ben jij naar op zoek?
            </h2>
            <p className="text-stone-500 text-sm sm:text-base max-w-xl mx-auto">
              Kies jouw route en ontdek de beste afleveringen voor jouw situatie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {[
              { emoji: '📖', label: 'Meer leren over de islam', slug: 'meer-leren-over-islam' },
              { emoji: '🕊️', label: 'Meer rust en kalmte vinden', slug: 'innerlijke-rust' },
              { emoji: '🌱', label: 'Zingeving en purpose zoeken', slug: 'zingeving' },
              { emoji: '💭', label: 'Worstelen met geloof en twijfels', slug: 'worstelen-met-geloof' },
              { emoji: '☕', label: 'Gewoon goede gesprekken', slug: 'goede-gesprekken' },
              { emoji: '🏙️', label: 'Islam en het dagelijks leven', slug: 'islam-en-het-dagelijks-leven' },
            ].map(route => (
              <Link
                key={route.slug}
                to={`/begin-hier#${route.slug}`}
                className="group flex items-center gap-3 p-4 bg-white rounded-xl border border-stone-200 hover:border-coffee-400 hover:shadow-xs transition-all"
              >
                <span className="text-2xl">{route.emoji}</span>
                <span className="text-sm font-semibold text-stone-700 group-hover:text-coffee-700 transition-colors flex-1">
                  {route.label}
                </span>
                <span className="text-stone-300 group-hover:text-coffee-500 transition-colors">→</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/begin-hier"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coffee-900 text-white font-bold rounded-full hover:bg-coffee-800 transition-all text-sm shadow-md"
            >
              ☕ Ik weet niet waar ik moet beginnen — help me
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTIE 3 — Onderwerpen grid
      ═══════════════════════════════════════════════ */}
      <section className="py-12 sm:py-16 bg-white border-t border-stone-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-7">
            <div>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-900 mb-1">
                Verken per onderwerp
              </h2>
              <p className="text-stone-500 text-sm">
                Alle content geordend op thema.
              </p>
            </div>
            <Link to="/afleveringen" className="text-xs font-bold text-coffee-700 hover:underline whitespace-nowrap">
              Alle afleveringen →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {Object.values(TOPICS).map(topic => {
              const count = episodes.filter(e => e.topic === topic.id).length
              return (
                <TopicCard key={topic.id} topic={topic} episodeCount={count} />
              )
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          SECTIE 4 — Populaire afleveringen
      ═══════════════════════════════════════════════ */}
      <section id="afleveringen" className="py-14 sm:py-20 scroll-mt-20 bg-stone-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-1">
              {selectedTopic === 'populair' && (
                <span className="text-amber-500 text-sm">⭐</span>
              )}
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-stone-900">
                {selectedTopic === 'populair'
                  ? 'Meest populaire afleveringen'
                  : selectedTopic === 'all'
                  ? 'Alle afleveringen'
                  : TOPICS[selectedTopic]?.label || 'Afleveringen'}
              </h2>
            </div>
            <p className="text-stone-500 text-sm">
              {selectedTopic === 'populair'
                ? 'De 10 meest beluisterde en bekeken gesprekken van Koffie & Koran.'
                : 'Klik op een aflevering voor de video, audio en gerelateerde onderwerpen.'}
            </p>
          </div>

          {/* Search bar */}
          <div className="relative mb-5">
            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
            </svg>
            <input
              type="search"
              placeholder="Zoek in alle 30 afleveringen op titel, onderwerp of tag…"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 bg-white text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-coffee-400 focus:border-transparent shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                aria-label="Zoekopdracht wissen"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            )}
          </div>

          {/* Topic filter pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <button
              onClick={() => handleSelectTopic('populair')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedTopic === 'populair'
                  ? 'bg-coffee-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              <span>⭐</span> Meest Populair (10)
            </button>

            <button
              onClick={() => handleSelectTopic('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedTopic === 'all'
                  ? 'bg-coffee-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
              }`}
            >
              Alle ({episodes.length})
            </button>

            {Object.values(TOPICS).map(t => (
              <button
                key={t.id}
                onClick={() => handleSelectTopic(t.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedTopic === t.id
                    ? 'bg-coffee-900 text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Episode list */}
          <div className="flex flex-col gap-3.5">
            {filtered.map((ep, idx) => (
              <EpisodeCard
                key={ep.id}
                episode={ep}
                rank={selectedTopic === 'populair' ? (ep.popularRank || idx + 1) : null}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-stone-500 py-12 bg-white rounded-xl border border-stone-200">
              Geen afleveringen gevonden voor deze zoekopdracht.{' '}
              <button
                onClick={() => {
                  setSearchQuery('')
                  handleSelectTopic('populair')
                }}
                className="text-coffee-700 font-semibold hover:underline"
              >
                Herstel weergave
              </button>
            </p>
          )}

          {/* Direct link to all episodes archive */}
          <div className="mt-8 text-center pt-6 border-t border-stone-200">
            <Link
              to="/afleveringen"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-100 hover:bg-coffee-100 text-coffee-900 text-sm font-bold transition-all border border-stone-200 hover:border-coffee-300"
            >
              <span>Bekijk alle 30 afleveringen geclusterd per thema</span>
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* Community / Ask a Question Section */}
      <AskQuestionSection />

      {/* CTA — minimal */}
      <section className="py-14 bg-coffee-900 text-white text-center">
        <div className="max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="font-display font-bold text-2xl mb-2">Nooit een aflevering missen?</h2>
          <p className="text-coffee-200 text-sm mb-6">
            Volg ons op Spotify of abonneer op YouTube.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://open.spotify.com/show/3FJ71fa5mvvvbm06hrtgk6"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#1DB954] text-white font-bold rounded-full text-sm hover:brightness-110 transition-all shadow"
            >
              <SpotifyIcon /> Volg op Spotify
            </a>
            <a
              href="https://www.youtube.com/@KoffieenKoran?sub_confirmation=1"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white/10 border border-white/20 text-white font-bold rounded-full text-sm hover:bg-white/20 transition-all"
            >
              <YouTubeIcon /> Abonneer op YouTube
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

function SpotifyIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

export default HomePage
