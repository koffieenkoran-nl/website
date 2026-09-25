import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-stone-700 hover:text-coffee-700 font-semibold text-sm transition-colors ${isActive ? 'text-coffee-700' : ''}`

  return (
    <header className="sticky top-0 z-50 bg-cream-50/95 backdrop-blur-md border-b border-coffee-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden ring-2 ring-coffee-300 group-hover:ring-coffee-500 transition-all shadow-xs">
              <img
                src="https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b"
                alt="Koffie en Koran Podcast Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-display font-extrabold text-lg sm:text-xl text-coffee-950 group-hover:text-coffee-700 transition-colors">
                Koffie en Koran
              </span>
              <span className="block text-[11px] text-coffee-700 font-medium">De Podcast</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-5">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/begin-hier" className={navLinkClass}>
              Begin hier
            </NavLink>
            <NavLink to="/afleveringen" className={navLinkClass}>
              Alle afleveringen
            </NavLink>

            {/* Onderwerpen dropdown */}
            <div className="relative group">
              <button className="text-stone-700 hover:text-coffee-700 font-semibold text-sm transition-colors flex items-center gap-1">
                Onderwerpen
                <svg className="w-3.5 h-3.5 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl border border-stone-200 shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all py-1.5 z-50">
                <Link to="/onderwerpen/geloof" className="flex items-center gap-2.5 px-4 py-2 text-sm text-stone-700 hover:text-coffee-700 hover:bg-stone-50 transition-colors">
                  <span>📖</span> Geloofsleer &amp; theologie
                </Link>
                <Link to="/onderwerpen/zingeving" className="flex items-center gap-2.5 px-4 py-2 text-sm text-stone-700 hover:text-coffee-700 hover:bg-stone-50 transition-colors">
                  <span>🌱</span> Zingeving &amp; mentale rust
                </Link>
                <Link to="/onderwerpen/ramadan" className="flex items-center gap-2.5 px-4 py-2 text-sm text-stone-700 hover:text-coffee-700 hover:bg-stone-50 transition-colors">
                  <span>🌙</span> Ramadan &amp; vasten
                </Link>
                <Link to="/onderwerpen/maatschappij" className="flex items-center gap-2.5 px-4 py-2 text-sm text-stone-700 hover:text-coffee-700 hover:bg-stone-50 transition-colors">
                  <span>🏙️</span> Maatschappij &amp; actualiteit
                </Link>
              </div>
            </div>

            <a href="/#stel-je-vraag" className="text-stone-700 hover:text-coffee-700 font-semibold text-sm transition-colors">
              Stel een vraag
            </a>

            <div className="flex items-center gap-2 pl-2 border-l border-coffee-200">
              <a
                href="https://www.youtube.com/@KoffieenKoran"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-red-50 text-[#FF0000] transition-colors"
                title="YouTube Kanaal"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/show/3FJ71fa5mvvvbm06hrtgk6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spotify !py-2 !px-4 text-xs"
              >
                <SpotifyIcon />
                Spotify
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-stone-700 hover:text-coffee-700"
            aria-label="Menu openen"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <nav className="md:hidden pb-4 border-t border-coffee-100 pt-3 flex flex-col gap-1">
            <Link
              to="/"
              onClick={() => setMobileOpen(false)}
              className="text-stone-700 hover:text-coffee-700 font-semibold py-2 px-2 rounded-lg hover:bg-stone-50"
            >
              Home
            </Link>
            <Link
              to="/begin-hier"
              onClick={() => setMobileOpen(false)}
              className="text-stone-700 hover:text-coffee-700 font-semibold py-2 px-2 rounded-lg hover:bg-stone-50 flex items-center gap-2"
            >
              ☕ Begin hier
            </Link>
            <Link
              to="/afleveringen"
              onClick={() => setMobileOpen(false)}
              className="text-stone-700 hover:text-coffee-700 font-semibold py-2 px-2 rounded-lg hover:bg-stone-50"
            >
              Alle afleveringen (30)
            </Link>
            {/* Onderwerpen sub-links */}
            <div className="ml-2 mt-1 mb-1 space-y-0.5">
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 px-2 mb-1">Onderwerpen</p>
              {[
                { to: '/onderwerpen/geloof', label: '📖 Geloofsleer & theologie', onClick: () => setMobileOpen(false) },
              { to: '/onderwerpen/zingeving', label: '🌱 Zingeving & mentale rust', onClick: () => setMobileOpen(false) },
              { to: '/onderwerpen/ramadan', label: '🌙 Ramadan & vasten', onClick: () => setMobileOpen(false) },
              { to: '/onderwerpen/maatschappij', label: '🏙️ Maatschappij & actualiteit', onClick: () => setMobileOpen(false) },
              ].map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={item.onClick}
                  className="text-stone-600 hover:text-coffee-700 text-sm py-1.5 px-3 rounded-lg hover:bg-stone-50 block"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <a
              href="/#stel-je-vraag"
              onClick={() => setMobileOpen(false)}
              className="text-stone-700 hover:text-coffee-700 font-semibold py-2 px-2 rounded-lg hover:bg-stone-50"
            >
              Stel een vraag
            </a>
            <div className="flex gap-2 pt-2">
              <a
                href="https://open.spotify.com/show/3FJ71fa5mvvvbm06hrtgk6"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-spotify flex-1 justify-center text-xs"
              >
                <SpotifyIcon />
                Spotify
              </a>
              <a
                href="https://www.youtube.com/@KoffieenKoran"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#FF0000] text-white font-bold rounded-xl text-xs hover:bg-[#cc0000] flex-1"
              >
                YouTube
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

function SpotifyIcon() {
  return (
    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

export default Header
