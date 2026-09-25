import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  getEpisodeBySlug,
  getAdjacentEpisodes,
  getRelatedEpisodes,
  formatDate,
  TOPICS
} from '../data/episodes'
import ShareButtons from '../components/ShareButtons'
import NextEpisodeCTA from '../components/NextEpisodeCTA'

function EpisodePage() {
  const { slug } = useParams()
  const episode = getEpisodeBySlug(slug)
  const { prev, next } = getAdjacentEpisodes(slug)
  const related = getRelatedEpisodes(slug)

  const h1 = episode?.seoH1 || episode?.title

  useEffect(() => {
    window.scrollTo(0, 0)
    if (episode) {
      document.title = `${h1} — Koffie & Koran`
      // Meta description
      const existingMeta = document.querySelector('meta[name="description"]')
      if (existingMeta) {
        existingMeta.setAttribute('content', episode.description?.slice(0, 155).replace(/\n/g, ' ') || '')
      }
    }
  }, [slug, episode, h1])

  if (!episode) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-24 text-center">
        <h1 className="font-display font-bold text-2xl text-stone-900 mb-3">Aflevering niet gevonden</h1>
        <p className="text-stone-500 text-sm mb-6">Deze aflevering kon helaas niet worden gevonden.</p>
        <Link to="/afleveringen" className="inline-flex items-center gap-2 px-5 py-2.5 bg-coffee-900 text-white text-xs font-bold rounded-xl hover:bg-coffee-800">
          ← Naar alle afleveringen
        </Link>
      </div>
    )
  }

  const topic = TOPICS[episode.topic]

  // Schema.org structured data — VideoObject + BreadcrumbList + PodcastEpisode
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'PodcastEpisode',
      name: h1,
      description: episode.description,
      datePublished: episode.date,
      episodeNumber: episode.episodeNumber,
      image: episode.thumbnail,
      url: `https://koffieenkoran.nl/afleveringen/${episode.slug}`,
      partOfSeries: {
        '@type': 'PodcastSeries',
        name: 'Koffie & Koran',
        url: 'https://koffieenkoran.nl'
      },
      author: [
        { '@type': 'Person', name: 'Muhammed Aydogan' },
        { '@type': 'Person', name: 'Ahmet Kaya', url: 'https://ahmetkaya.nl/' }
      ]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'VideoObject',
      name: h1,
      description: episode.description,
      thumbnailUrl: episode.thumbnail,
      uploadDate: episode.date,
      embedUrl: `https://www.youtube.com/embed/${episode.youtubeId}`,
      url: `https://www.youtube.com/watch?v=${episode.youtubeId}`,
      author: { '@type': 'Organization', name: 'Koffie & Koran' }
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://koffieenkoran.nl' },
        { '@type': 'ListItem', position: 2, name: 'Afleveringen', item: 'https://koffieenkoran.nl/afleveringen' },
        ...(topic ? [{ '@type': 'ListItem', position: 3, name: topic.label, item: `https://koffieenkoran.nl/onderwerpen/${topic.slug}` }] : []),
        { '@type': 'ListItem', position: topic ? 4 : 3, name: h1, item: `https://koffieenkoran.nl/afleveringen/${episode.slug}` }
      ]
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Page header — dark, compact */}
      <div className="bg-coffee-950 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-xs text-coffee-400 mb-5 flex items-center gap-1.5 flex-wrap">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/afleveringen" className="hover:text-white transition-colors">Afleveringen</Link>
            {topic && (
              <>
                <span>/</span>
                <Link to={`/onderwerpen/${topic.slug}`} className="hover:text-white transition-colors">{topic.label}</Link>
              </>
            )}
          </nav>

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {topic && (
              <Link
                to={`/onderwerpen/${topic.slug}`}
                className={`text-[11px] font-bold px-2.5 py-0.5 rounded border hover:opacity-80 transition-opacity ${topic.color}`}
              >
                {topic.label}
              </Link>
            )}
            <span className="text-[11px] text-coffee-300 font-medium">
              Aflevering #{episode.episodeNumber} · {formatDate(episode.date)}
            </span>
            {episode.consumptionTime && (
              <span className="text-[11px] text-amber-300/90 ml-auto bg-black/40 px-2 py-0.5 rounded">
                ⏱ {episode.consumptionTime} luistertijd
              </span>
            )}
          </div>

          {/* SEO-optimized H1 */}
          <h1 className="font-display font-extrabold text-xl sm:text-2xl lg:text-3xl leading-tight mb-3">
            {h1}
          </h1>
          {episode.subtitle && (
            <p className="text-coffee-300 text-sm sm:text-base leading-relaxed max-w-2xl">
              {episode.subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left: players + description */}
          <div className="lg:col-span-2 space-y-8">

            {/* YouTube embed */}
            <div className="rounded-2xl overflow-hidden bg-black aspect-video shadow-md">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${episode.youtubeId}?rel=0`}
                title={episode.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>

            {/* Platform links */}
            <div className="flex flex-wrap gap-3">
              <a
                href={episode.youtubeUrl}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF0000] text-white font-bold rounded-xl text-sm hover:brightness-110 transition-all shadow-xs"
              >
                <YTIcon /> Bekijk op YouTube
              </a>
              <a
                href={episode.spotifyUrl}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] text-white font-bold rounded-xl text-sm hover:brightness-110 transition-all shadow-xs"
              >
                <SpIcon /> Luister op Spotify
              </a>
            </div>

            {/* Spotify embed */}
            <div className="rounded-xl overflow-hidden border border-stone-200 shadow-xs">
              <iframe
                src={`https://open.spotify.com/embed/episode/${episode.spotifyEpisodeId}?utm_source=generator&theme=0`}
                width="100%" height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify: ${episode.title}`}
              />
            </div>

            {/* Wat leer je in deze aflevering */}
            {episode.learnings && (
              <div className="bg-coffee-50/80 rounded-2xl p-5 border border-coffee-100">
                <h2 className="font-display font-bold text-base text-coffee-950 mb-2 flex items-center gap-2">
                  <span>🎯</span> Wat leer je in deze aflevering?
                </h2>
                <p className="text-sm text-stone-700 leading-relaxed">{episode.learnings}</p>
              </div>
            )}

            {/* Key Insights */}
            {episode.keyInsights?.length > 0 && (
              <div>
                <h2 className="font-display font-bold text-lg text-stone-900 mb-4">
                  Belangrijkste inzichten
                </h2>
                <ul className="space-y-2.5">
                  {episode.keyInsights.map((insight, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-stone-700 leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-coffee-100 text-coffee-700 text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      {insight}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Description */}
            <div>
              <h2 className="font-display font-bold text-lg text-stone-900 mb-3">
                Over deze aflevering
              </h2>
              <div className="text-stone-600 text-sm leading-relaxed space-y-3 bg-cream-50/50 p-5 rounded-2xl border border-coffee-100/60">
                {episode.description.split('\n\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>

            {/* Tags — clickable naar onderwerpen */}
            {episode.tags?.length > 0 && (
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block mb-2">
                  Thema tags
                </span>
                <div className="flex flex-wrap gap-2">
                  {episode.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 bg-stone-100 text-stone-600 text-xs rounded-lg font-medium">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Buttons */}
            <ShareButtons episode={episode} />

            {/* Question prompt */}
            <div className="bg-coffee-50/80 rounded-2xl p-5 border border-coffee-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h3 className="font-display font-bold text-sm text-coffee-950 mb-1">
                  Vraag of reactie op deze aflevering?
                </h3>
                <p className="text-xs text-stone-600">
                  Stuur jouw vraag of dilemma in, dan kunnen we er in een volgende opname bij stilstaan.
                </p>
              </div>
              <Link
                to="/#stel-je-vraag"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-coffee-900 hover:bg-coffee-800 text-white rounded-xl text-xs font-bold transition-colors whitespace-nowrap shadow-xs"
              >
                <span>Stel je vraag</span>
                <span>→</span>
              </Link>
            </div>

            {/* Next episode CTA — prominent */}
            {next && (
              <div>
                <h2 className="font-display font-bold text-base text-stone-900 mb-3">
                  Luister hierna →
                </h2>
                <NextEpisodeCTA episode={next} />
              </div>
            )}

            {/* Prev / Next nav */}
            <div className="pt-4 border-t border-stone-100 flex justify-between gap-4">
              {prev ? (
                <Link to={`/afleveringen/${prev.slug}`} className="group flex items-center gap-2.5 text-sm text-stone-600 hover:text-coffee-800 flex-1 p-2 rounded-xl hover:bg-stone-50 transition-colors">
                  <span className="group-hover:-translate-x-0.5 transition-transform text-lg">←</span>
                  <div className="min-w-0">
                    <span className="text-xs text-stone-400 block">Vorige aflevering</span>
                    <span className="font-semibold truncate block text-xs sm:text-sm">#{prev.episodeNumber} {prev.title}</span>
                  </div>
                </Link>
              ) : <div />}
              {next ? (
                <Link to={`/afleveringen/${next.slug}`} className="group flex items-center justify-end gap-2.5 text-sm text-stone-600 hover:text-coffee-800 flex-1 text-right p-2 rounded-xl hover:bg-stone-50 transition-colors">
                  <div className="min-w-0">
                    <span className="text-xs text-stone-400 block">Volgende aflevering</span>
                    <span className="font-semibold truncate block text-xs sm:text-sm">#{next.episodeNumber} {next.title}</span>
                  </div>
                  <span className="group-hover:translate-x-0.5 transition-transform text-lg">→</span>
                </Link>
              ) : <div />}
            </div>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">

            {/* Related episodes */}
            {related.length > 0 && (
              <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
                <h3 className="font-display font-bold text-sm text-stone-900 mb-3 pb-2 border-b border-stone-100">
                  Gerelateerde afleveringen
                </h3>
                <div className="space-y-3">
                  {related.map(rel => (
                    <Link
                      key={rel.id}
                      to={`/afleveringen/${rel.slug}`}
                      className="group flex gap-3 hover:bg-stone-50 rounded-xl p-1.5 -mx-1.5 transition-colors"
                    >
                      <img
                        src={rel.thumbnail}
                        alt={rel.title}
                        className="w-16 h-11 object-cover rounded-lg flex-shrink-0 bg-stone-200"
                      />
                      <div className="min-w-0">
                        <span className="text-[10px] text-coffee-700 font-bold block">
                          #{rel.episodeNumber}
                        </span>
                        <h4 className="text-xs font-semibold text-stone-800 group-hover:text-coffee-700 line-clamp-2 leading-snug">
                          {rel.seoH1 || rel.title}
                        </h4>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Topic nav */}
            {topic && (
              <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
                <h3 className="font-display font-bold text-sm text-stone-900 mb-3 pb-2 border-b border-stone-100">
                  Meer over {topic.label}
                </h3>
                <p className="text-xs text-stone-500 mb-3 leading-relaxed">{topic.description}</p>
                <Link
                  to={`/onderwerpen/${topic.slug}`}
                  className="text-xs font-bold text-coffee-700 hover:underline flex items-center gap-1"
                >
                  Alle afleveringen over {topic.label} →
                </Link>
              </div>
            )}

            {/* Host Cards Mini */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
              <h3 className="font-display font-bold text-sm text-stone-900 mb-3 pb-2 border-b border-stone-100">
                Hosts van Koffie &amp; Koran
              </h3>
              <div className="space-y-3">
                {/* Muhammed */}
                <div className="flex items-center gap-3 p-1.5">
                  <img
                    src="/muhammed-aydogan.jpg"
                    alt="Muhammed Aydogan"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-coffee-200"
                    onError={(e) => { e.target.src = "https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b" }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-stone-900">Muhammed Aydogan</div>
                  </div>
                </div>

                {/* Ahmet */}
                <a
                  href="https://ahmetkaya.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-1.5 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  <img
                    src="/ahmet-kaya.png"
                    alt="Ahmet Kaya"
                    className="w-10 h-10 rounded-full object-cover ring-2 ring-coffee-200 group-hover:ring-coffee-500 transition-all"
                    onError={(e) => { e.target.src = "https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b" }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-bold text-stone-900 group-hover:text-coffee-700">Ahmet Kaya</div>
                    <div className="text-[10px] text-coffee-800 font-semibold flex items-center gap-1">ahmetkaya.nl ↗</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Topics nav */}
            <div className="bg-white rounded-2xl p-4 border border-stone-200/80 shadow-xs">
              <h3 className="font-display font-bold text-sm text-stone-900 mb-3 pb-2 border-b border-stone-100">
                Verken per thema
              </h3>
              <ul className="space-y-1.5">
                {Object.values(TOPICS).map(t => (
                  <li key={t.id}>
                    <Link
                      to={`/onderwerpen/${t.slug}`}
                      className="text-xs text-stone-600 hover:text-coffee-700 flex items-center justify-between group py-1"
                    >
                      <span className="group-hover:underline">{t.label}</span>
                      <span className="text-stone-300 group-hover:text-coffee-500">→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Begin Hier */}
            <div className="bg-coffee-900 rounded-2xl p-4 text-center text-white">
              <div className="text-xl mb-1">☕</div>
              <h3 className="font-display font-bold text-xs mb-1">Nieuw bij Koffie &amp; Koran?</h3>
              <p className="text-coffee-300 text-[11px] mb-3">Ontdek waar je het beste kunt beginnen.</p>
              <Link
                to="/begin-hier"
                className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-coffee-900 font-bold rounded-lg text-xs hover:bg-coffee-100 transition-all"
              >
                Begin hier →
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  )
}

function YTIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  )
}

function SpIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}

export default EpisodePage
