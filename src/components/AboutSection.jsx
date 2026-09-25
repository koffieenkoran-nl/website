function AboutSection() {
  return (
    <section id="over-ons" className="py-20 sm:py-28 bg-white scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">

        {/* Section label */}
        <p className="text-center text-xs font-bold uppercase tracking-widest text-coffee-600 mb-10">
          De podcast
        </p>

        {/* Two hosts side by side */}
        <div className="grid grid-cols-2 gap-8 sm:gap-16 max-w-sm mx-auto mb-14">

          {/* Muhammed */}
          <div className="flex flex-col items-center text-center">
            <a
              href="https://nl.linkedin.com/in/muhammedaydogan"
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-4 block"
            >
              <img
                src="/muhammed-aydogan.jpg"
                alt="Muhammed Aydogan"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-2 ring-stone-200 group-hover:ring-coffee-400 transition-all shadow-sm"
                onError={(e) => {
                  e.target.src = 'https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b'
                }}
              />
            </a>
            <h3 className="font-display font-bold text-sm sm:text-base text-stone-900 mb-1">
              Muhammed
            </h3>
            <a
              href="https://nl.linkedin.com/in/muhammedaydogan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-400 hover:text-coffee-600 transition-colors"
            >
              LinkedIn ↗
            </a>
          </div>

          {/* Ahmet */}
          <div className="flex flex-col items-center text-center">
            <a
              href="https://ahmetkaya.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="group mb-4 block"
            >
              <img
                src="/ahmet-kaya.png"
                alt="Ahmet Kaya"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover ring-2 ring-stone-200 group-hover:ring-coffee-400 transition-all shadow-sm"
                onError={(e) => {
                  e.target.src = 'https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b'
                }}
              />
            </a>
            <h3 className="font-display font-bold text-sm sm:text-base text-stone-900 mb-1">
              Ahmet
            </h3>
            <a
              href="https://ahmetkaya.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-stone-400 hover:text-coffee-600 transition-colors"
            >
              ahmetkaya.nl ↗
            </a>
          </div>

        </div>

        {/* Short mission statement */}
        <div className="text-center max-w-lg mx-auto">
          <p className="text-stone-500 text-sm sm:text-base leading-relaxed">
            Twee Nederlandse moslims die eerlijk praten over geloof, zingeving en het leven van vandaag.
            Geen preek — gewoon een goed gesprek.
          </p>
        </div>

      </div>
    </section>
  )
}

export default AboutSection
