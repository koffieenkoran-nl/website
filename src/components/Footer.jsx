import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-coffee-950 text-coffee-200 border-t border-coffee-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-coffee-700">
                <img
                  src="https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b"
                  alt="Koffie en Koran"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-display font-bold text-lg text-white">
                Koffie en Koran
              </span>
            </div>
            <p className="text-coffee-300 text-xs sm:text-sm leading-relaxed mb-4">
              Grote vragen. Eerlijke gesprekken. Geen poespas.
              <br />
              Een wekelijkse podcast door Mohammed en Ahmet.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-xs text-coffee-400">
                Mohammed
              </span>
              <span className="text-coffee-700">·</span>
              <a
                href="https://ahmetkaya.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-coffee-400 hover:text-white transition-colors"
              >
                Ahmet ↗
              </a>
            </div>
          </div>

          {/* Navigatie */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Navigatie
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-coffee-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#afleveringen" className="text-coffee-300 hover:text-white transition-colors">
                  Meest Populair (Top 10)
                </a>
              </li>
              <li>
                <Link to="/afleveringen" className="text-coffee-300 hover:text-white transition-colors">
                  Alle 30 Afleveringen
                </Link>
              </li>
              <li>
                <a href="/#stel-je-vraag" className="text-coffee-300 hover:text-white transition-colors">
                  Stel je vraag voor de podcast
                </a>
              </li>
            </ul>
          </div>

          {/* Luister & Abonneer */}
          <div>
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Luister &amp; Volg
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="https://open.spotify.com/show/3FJ71fa5mvvvbm06hrtgk6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-coffee-300 hover:text-[#1DB954] transition-colors group"
              >
                <svg className="w-5 h-5 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
                <span className="group-hover:underline">Spotify Podcast</span>
              </a>
              <a
                href="https://www.youtube.com/@KoffieenKoran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs sm:text-sm text-coffee-300 hover:text-[#FF0000] transition-colors group"
              >
                <svg className="w-5 h-5 text-[#FF0000]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="group-hover:underline">YouTube Kanaal</span>
              </a>
            </div>
          </div>

          {/* Contact & Vraag insturen */}
          <div id="contact">
            <h3 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-4">
              Vragen &amp; Contact
            </h3>
            <p className="text-coffee-300 text-xs sm:text-sm leading-relaxed mb-3">
              Heb je een vraag voor een toekomstige aflevering?
            </p>
            <a
              href="/#stel-je-vraag"
              className="inline-block px-3 py-1.5 bg-coffee-800 hover:bg-coffee-700 text-white rounded-lg text-xs font-bold transition-colors mb-4"
            >
              Stuur je vraag in →
            </a>
            <div className="pt-2">
              <a
                href="mailto:koffieenkoran@gmail.com"
                className="inline-flex items-center gap-2 text-xs text-coffee-300 hover:text-white transition-colors group"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span className="group-hover:underline">koffieenkoran@gmail.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-coffee-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-coffee-400">
          <p>
            © 2024–{new Date().getFullYear()} Koffie en Koran (koffieenkoran.nl). Alle rechten voorbehouden.
          </p>
          <p className="flex items-center gap-1.5">
            <span>Met ☕ en passie gemaakt</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
