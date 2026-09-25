import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import episodes, { TOPICS, getEpisodesByTopic } from '../data/episodes'
import { formatDate } from '../data/episodes'

function TopicPage() {
  const { slug } = useParams()
  const topic = Object.values(TOPICS).find(t => t.slug === slug)
  const topicEpisodes = topic ? getEpisodesByTopic(topic.id) : []

  useEffect(() => {
    window.scrollTo(0, 0)
    if (topic) {
      document.title = `${topic.seoTitle || topic.label} — Koffie & Koran`
    }
  }, [slug, topic])

  if (!topic) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display font-bold text-2xl text-stone-900 mb-3">Onderwerp niet gevonden</h1>
        <p className="text-stone-500 text-sm mb-6">Dit onderwerp kon helaas niet worden gevonden.</p>
        <Link to="/afleveringen" className="inline-flex items-center gap-2 px-5 py-2.5 bg-coffee-900 text-white text-xs font-bold rounded-xl hover:bg-coffee-800">
          ← Naar alle afleveringen
        </Link>
      </div>
    )
  }

  const colorMap = {
    ramadan: { icon: '🌙', accent: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    zingeving: { icon: '🌱', accent: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-200' },
    geloof: { icon: '📖', accent: 'text-sky-700', bg: 'bg-sky-50', border: 'border-sky-200' },
    maatschappij: { icon: '🏙️', accent: 'text-stone-700', bg: 'bg-stone-100', border: 'border-stone-200' },
  }
  const style = colorMap[topic.id] || colorMap.maatschappij

  const otherTopics = Object.values(TOPICS).filter(t => t.id !== topic.id)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: topic.seoTitle || topic.label,
    description: topic.seoDescription || topic.description,
    url: `https://koffieenkoran.nl/onderwerpen/${topic.slug}`,
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://koffieenkoran.nl' },
        { '@type': 'ListItem', position: 2, name: 'Afleveringen', item: 'https://koffieenkoran.nl/afleveringen' },
        { '@type': 'ListItem', position: 3, name: topic.label, item: `https://koffieenkoran.nl/onderwerpen/${topic.slug}` }
      ]
    }
  }

  return (
    <div className="bg-stone-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Page header */}
      <div className="bg-coffee-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
          {/* Breadcrumb */}
          <nav className="text-xs text-coffee-400 mb-5 flex items-center gap-1.5 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/afleveringen" className="hover:text-white transition-colors">Afleveringen</Link>
            <span>/</span>
            <span className="text-white">{topic.label}</span>
          </nav>

          <div className="flex items-start gap-4">
            <span className="text-5xl">{style.icon}</span>
            <div>
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white mb-3 leading-tight">
                {topic.seoTitle || topic.label}
              </h1>
              <p className="text-coffee-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                {topic.seoDescription || topic.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main content */}
          <div className="lg:col-span-2">

            {/* Pillar intro */}
            {topic.pillarIntro && (
              <div className={`rounded-2xl p-5 mb-8 border ${style.border} ${style.bg}`}>
                <p className={`text-sm leading-relaxed ${style.accent} font-medium`}>
                  {topic.pillarIntro}
                </p>
              </div>
            )}

            {/* Episode count */}
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display font-bold text-lg text-stone-900">
                {topicEpisodes.length} afleveringen over {topic.label}
              </h2>
              <Link
                to={`/afleveringen?topic=${topic.id}`}
                className="text-xs text-coffee-700 font-semibold hover:underline"
              >
                Zoek & filter →
              </Link>
            </div>

            {/* Episode list */}
            <div className="space-y-3">
              {topicEpisodes.map(ep => (
                <TopicEpisodeRow key={ep.id} episode={ep} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Gerelateerde onderwerpen */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
              <h3 className="font-display font-bold text-sm text-stone-900 mb-3 pb-2 border-b border-stone-100">
                Andere onderwerpen
              </h3>
              <ul className="space-y-2">
                {otherTopics.map(t => {
                  const s = colorMap[t.id] || colorMap.maatschappij
                  const count = episodes.filter(e => e.topic === t.id).length
                  return (
                    <li key={t.id}>
                      <Link
                        to={`/onderwerpen/${t.slug}`}
                        className="flex items-center gap-2 py-1.5 text-xs text-stone-600 hover:text-coffee-700 group"
                      >
                        <span>{s.icon}</span>
                        <span className="group-hover:underline flex-1">{t.label}</span>
                        <span className="text-stone-300 text-[10px]">{count}×</span>
                        <span className="text-stone-300 group-hover:text-coffee-500">→</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            {/* Begin Hier CTA */}
            <div className="bg-coffee-900 rounded-2xl p-5 text-center text-white">
              <div className="text-2xl mb-2">☕</div>
              <h3 className="font-display font-bold text-sm mb-2">Nieuw bij Koffie &amp; Koran?</h3>
              <p className="text-coffee-200 text-xs mb-4 leading-relaxed">
                Weet je niet waar je moet beginnen? We helpen je op weg.
              </p>
              <Link
                to="/begin-hier"
                className="inline-flex items-center gap-1 px-4 py-2 bg-white text-coffee-900 font-bold rounded-xl text-xs hover:bg-coffee-100 transition-all"
              >
                Begin hier →
              </Link>
            </div>

            {/* Alle afleveringen link */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs">
              <h3 className="font-display font-bold text-sm text-stone-900 mb-3 pb-2 border-b border-stone-100">
                Alle afleveringen
              </h3>
              <Link
                to="/afleveringen"
                className="flex items-center justify-between text-xs text-stone-600 hover:text-coffee-700 group py-1"
              >
                <span className="group-hover:underline">Bekijk alle {episodes.length} afleveringen</span>
                <span className="text-stone-300 group-hover:text-coffee-500">→</span>
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}

function TopicEpisodeRow({ episode }) {
  const popularBadge = episode.isPopular && episode.popularRank

  return (
    <Link
      to={`/afleveringen/${episode.slug}`}
      className="group flex items-start gap-4 bg-white rounded-xl border border-stone-200 hover:border-coffee-400 hover:shadow-xs transition-all p-3.5"
    >
      {/* Thumbnail */}
      <div className="relative flex-shrink-0">
        <img
          src={episode.thumbnail}
          alt={episode.title}
          loading="lazy"
          className="w-20 h-14 object-cover rounded-lg bg-stone-200"
          onError={e => {
            e.target.src = 'https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b'
          }}
        />
        {popularBadge && (
          <div className="absolute -top-1.5 -left-1.5 bg-coffee-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded shadow">
            ⭐ #{episode.popularRank}
          </div>
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <span className="text-[10px] text-stone-400 font-medium block mb-0.5">
          Aflevering #{episode.episodeNumber} · {formatDate(episode.date)}
        </span>
        <h3 className="text-sm font-semibold text-stone-900 group-hover:text-coffee-700 transition-colors line-clamp-2 leading-snug">
          {episode.seoH1 || episode.title}
        </h3>
        {episode.subtitle && (
          <p className="text-xs text-stone-500 line-clamp-1 mt-0.5">{episode.subtitle}</p>
        )}
      </div>

      <svg className="w-4 h-4 text-stone-300 group-hover:text-coffee-600 flex-shrink-0 transition-colors self-center" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
      </svg>
    </Link>
  )
}

export default TopicPage
