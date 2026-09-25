import episodes from '../data/episodes'
import { useLatestRSSEpisode } from '../hooks/useLatestRSSEpisode'

// Fallback: hardcoded nieuwste aflevering
const fallbackEpisode = [...episodes].sort((a, b) => new Date(b.date) - new Date(a.date))[0]

function Hero() {
  const { episode: rssEpisode, loading } = useLatestRSSEpisode()

  // Gebruik RSS als die geladen is, anders fallback
  const latest = rssEpisode
    ? { title: rssEpisode.title, href: rssEpisode.spotifyUrl, external: true }
    : { title: fallbackEpisode?.seoH1 || fallbackEpisode?.title, href: `/afleveringen/${fallbackEpisode?.slug}`, external: false }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-coffee-900 via-coffee-800 to-coffee-950">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 lg:py-24">

        {/* Nieuwste aflevering pill — live via RSS */}
        {!loading && latest.title && (
          latest.external ? (
            <a
              href={latest.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-coffee-100 px-4 py-1.5 rounded-full text-xs font-medium mb-8 transition-colors group"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Nieuwste aflevering:
              <span className="font-bold text-white group-hover:underline line-clamp-1 max-w-[200px] sm:max-w-xs">
                {latest.title}
              </span>
              <span className="text-coffee-400">→</span>
            </a>
          ) : (
            <a
              href={latest.href}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-coffee-100 px-4 py-1.5 rounded-full text-xs font-medium mb-8 transition-colors group"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Nieuwste aflevering:
              <span className="font-bold text-white group-hover:underline line-clamp-1 max-w-[200px] sm:max-w-xs">
                {latest.title}
              </span>
              <span className="text-coffee-400">→</span>
            </a>
          )
        )}

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
              Koffie &amp; <span className="text-coffee-300">Koran</span>
            </h1>

            <p className="text-lg sm:text-xl text-coffee-200 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
              Grote vragen. Eerlijke gesprekken.<br />
              <span className="text-coffee-300">Over islam, zingeving, identiteit en het dagelijks leven.</span>
            </p>

            {/* USPs */}
            <ul className="flex flex-col gap-3 mb-8 text-left max-w-xl mx-auto lg:mx-0">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white mt-0.5">1</span>
                <span className="text-sm text-coffee-100 leading-relaxed">
                  <strong className="text-white font-semibold">Begrijpelijk:</strong> Islam besproken in heldere, laagdrempelige taal.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white mt-0.5">2</span>
                <span className="text-sm text-coffee-100 leading-relaxed">
                  <strong className="text-white font-semibold">Spirituele rust:</strong> voor innerlijke vrede in een snel veranderende wereld.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white mt-0.5">3</span>
                <span className="text-sm text-coffee-100 leading-relaxed">
                  <strong className="text-white font-semibold">Openhartig:</strong> bespreken moderne levensvragen en worstelingen.
                </span>
              </li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="https://open.spotify.com/show/3FJ71fa5mvvvbm06hrtgk6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-[#1DB954] text-white font-bold rounded-full hover:brightness-110 transition-all shadow-lg text-sm"
              >
                <SpotifyIcon />
                Luister op Spotify
              </a>
              <a
                href="#afleveringen"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3 bg-white/10 text-white font-bold rounded-full hover:bg-white/20 transition-all border border-white/20 text-sm"
              >
                Bekijk alle afleveringen ↓
              </a>
            </div>
          </div>

          {/* Artwork */}
          <div className="flex-shrink-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden shadow-2xl ring-4 ring-coffee-600/30 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b"
                alt="Koffie en Koran podcast artwork"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SpotifyIcon() {
  return (
    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  )
}

export default Hero
