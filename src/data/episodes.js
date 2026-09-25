// ============================================================
// Alle 30 afleveringen van Koffie en Koran
// Volgorde: Eerst de 10 Meest Populaire afleveringen, daarna chronologisch
// v2: seoH1 + keyInsights + learnings toegevoegd per aflevering
// ============================================================

export const TOPICS = {
  ramadan: {
    id: 'ramadan',
    slug: 'ramadan',
    label: 'Ramadan & Vasten',
    color: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    description: 'Verdiep je in de essentie van Ramadan, Laylat al-Qadr en spirituele vernieuwing.',
    seoTitle: 'Ramadan & Vasten in de Islam — Koffie & Koran',
    seoDescription: 'Alles over Ramadan, Laylat al-Qadr en islamitisch vasten. Koffie & Koran bespreekt de diepere betekenis van de heilige maand en hoe je er het meeste uithalt.',
    pillarIntro: 'Ramadan is veel meer dan een maand van honger en dorst. Het is een jaarlijkse spirituele reset — een kans om dichter bij Allah te komen, slechte gewoontes te doorbreken en je hart te reinigen. In deze afleveringen duiken Mohammed en Ahmet diep in de betekenis van Ramadan, Laylat al-Qadr en het islamitisch vasten.',
  },
  zingeving: {
    id: 'zingeving',
    slug: 'zingeving',
    label: 'Zingeving & Mentale Rust',
    color: 'bg-amber-100 text-amber-800 border-amber-200',
    description: 'Gesprekken over leegte, purpose, innerlijke vrede en omgaan met moderne druk.',
    seoTitle: 'Zingeving & Mentale Rust vanuit de Islam — Koffie & Koran',
    seoDescription: 'Voel je leegte ondanks alles wat je hebt? Koffie & Koran bespreekt zingeving, purpose en innerlijke rust vanuit een islamitisch perspectief.',
    pillarIntro: 'Steeds meer mensen — ook moslims — kampen met existentiële leegte, stress en het gevoel dat hun leven geen richting heeft. De islam biedt diepgaande antwoorden op deze vragen. In deze afleveringen verkennen Mohammed en Ahmet wat zingeving, purpose en mentale rust betekenen vanuit het geloof.',
  },
  geloof: {
    id: 'geloof',
    slug: 'geloof',
    label: 'Geloofsleer & Theologie',
    color: 'bg-sky-100 text-sky-800 border-sky-200',
    description: 'De fundamenten van de Islam, de Koran, profeten en de betekenis van het geloof.',
    seoTitle: 'Islamitische Geloofsleer & Theologie — Koffie & Koran',
    seoDescription: 'Wat gelooft een moslim? Koffie & Koran legt de fundamenten van de islam uit: Tawheed, de Koran, profeten en de islamitische kijk op God en het hiernamaals.',
    pillarIntro: 'Wat is de islam nu eigenlijk in de kern? Zonder ingewikkeld jargon of dogmatische haarkloverij. In deze afleveringen behandelen Mohammed en Ahmet de fundamenten van het islamitisch geloof: van de eenheid van God (Tawheed) tot de rol van profeten, de Koran en het hiernamaals.',
  },
  maatschappij: {
    id: 'maatschappij',
    slug: 'maatschappij',
    label: 'Maatschappij & Actualiteit',
    color: 'bg-stone-100 text-stone-800 border-stone-200',
    description: 'Hoe navigeer je als moslim in de hedendaagse samenleving?',
    seoTitle: 'Islam & Maatschappij in Nederland — Koffie & Koran',
    seoDescription: 'Hoe leef je als moslim in de Nederlandse samenleving? Koffie & Koran bespreekt integratie, identiteit, actualiteit en de islamitische visie op de wereld om ons heen.',
    pillarIntro: 'Als moslim in Nederland navigeer je voortdurend tussen twee werelden. Hoe blijf je trouw aan je geloof en neem je tegelijkertijd volwaardig deel aan de samenleving? In deze afleveringen bespreken Mohammed en Ahmet actuele thema\'s zoals integratie, identiteit en de islamitische visie op geopolitieke ontwikkelingen.',
  },
}

const SHOW_URL = 'https://open.spotify.com/show/3FJ71fa5mvvvbm06hrtgk6'
const SHOW_EMBED_ID = '3FJ71fa5mvvvbm06hrtgk6'

function ep(episodeId) {
  if (!episodeId) return { spotifyEpisodeId: SHOW_EMBED_ID, spotifyUrl: SHOW_URL }
  return {
    spotifyEpisodeId: episodeId,
    spotifyUrl: `https://open.spotify.com/episode/${episodeId}`
  }
}

const episodes = [
  // ==========================================
  // TOP 10 MEEST POPULAIRE AFLEVERINGEN
  // ==========================================
  
  // 1. #29
  {
    id: 29, episodeNumber: 29,
    popularRank: 1, isPopular: true,
    slug: 'moderne-problemen-4-islamitische-oplossingen-innerlijke-vrede-29',
    title: 'Moderne PROBLEMEN? 4 islamitische OPLOSSINGEN voor INNERLIJKE VREDE #29',
    seoH1: 'Innerlijke rust vinden bij moderne stress — 4 islamitische oplossingen',
    subtitle: 'Vind rust in een wereld vol stress, prikkels en angst',
    date: '2025-03-29', consumptionTime: '261 uur',
    topic: 'zingeving',
    tags: ['Innerlijke Rust', 'Stress', 'Dhikr', 'Tawakkul'],
    youtubeId: 'Xi4TkbHKLgw',
    youtubeUrl: 'https://www.youtube.com/watch?v=Xi4TkbHKLgw',
    thumbnail: 'https://i.ytimg.com/vi/Xi4TkbHKLgw/hqdefault.jpg',
    ...ep('1QfH8WkcWRs0dnypE4HOmz'),
    learnings: 'Ontdek vier concrete islamitische remedies tegen de stress en angst van het moderne leven — van Dhikr als dagelijks anker tot Tawakkul als manier van loslaten.',
    keyInsights: [
      'Consumptiedrang temmen is de eerste stap naar echte innerlijke rust',
      'Dhikr (het gedenken van Allah) is een bewezen anker in chaotische tijden',
      'Tawakkul betekent niet passiviteit, maar vertrouwen na maximale inspanning',
      'Oprechte verbinding — met Allah én met medemens — vult de leegte die materiele zaken laten',
      'Stress is deels een gevolg van het vergeten van onze werkelijke prioriteiten',
    ],
    description: `We leven in een tijd van overvloed, maar tegelijkertijd ervaren steeds meer mensen stress, burn-out en existentiële angst. Hoe blijf je mentaal en spiritueel overeind?\n\n4 tijdloze islamitische remedies: het temmen van consumptiedrang, Dhikr als dagelijks anker, Tawakkul (vertrouwen op Allah) in plaats van overbezorgdheid, en het herstel van oprechte verbinding met God en medemens.`,
    relatedSlugs: ['voel-je-leegte-ondanks-alles-wat-je-hebt-zingeving-islam-22', 'geluk-als-doel-hebben-fout-de-islam-over-blijvend-geluk-24']
  },

  // 2. #10
  {
    id: 10, episodeNumber: 10,
    popularRank: 2, isPopular: true,
    slug: 'wat-geloven-moslims-en-wat-is-islam-3-dingen-10',
    title: '#10 Wat geloven moslims en wat is Islam? 3 dingen',
    seoH1: 'Wat is de islam en wat geloven moslims? De 3 kernprincipes uitgelegd',
    subtitle: 'De absolute essentie van het islamitisch geloof',
    date: '2024-09-20', consumptionTime: '202 uur',
    topic: 'geloof',
    tags: ['Tawheed', 'Islam Basics', 'Koran', 'Geloof'],
    youtubeId: 'VkqxW7P-_ZE',
    youtubeUrl: 'https://www.youtube.com/watch?v=VkqxW7P-_ZE',
    thumbnail: 'https://i.ytimg.com/vi/VkqxW7P-_ZE/hqdefault.jpg',
    ...ep('0zYpimFjoXdZ4rr0v5kT3u'),
    learnings: 'Begrijp de drie pijlers van het islamitisch geloof op een toegankelijke manier — zonder moeilijk jargon of theologische haarkloverij.',
    keyInsights: [
      'Tawheed — de eenheid van God — is het fundament van alles in de islam',
      'Geloof in Allah heeft directe gevolgen voor dagelijkse keuzes en prioriteiten',
      'De relatie tussen Schepper en mensheid verloopt via profeten en openbaring',
      'Geloven is een werkwoord: innerlijke overtuiging gekoppeld aan rechtvaardig handelen',
      'De islam is geen cultuur, maar een levenswijze die ieder mens kan aannemen',
    ],
    description: `Wat is de Islam nu echt in de kern? Zonder moeilijk jargon of theologische haarkloverij.\n\nDrie kernprincipes: de eenheid van God (Tawheed) en wat dat betekent voor dagelijkse keuzes, de relatie tussen de Schepper en de mensheid via profeten en openbaring, en waarom geloven een werkwoord is: innerlijke overtuiging gekoppeld aan rechtvaardig handelen.`,
    relatedSlugs: ['waarom-je-leegte-voelt-hoe-je-jouw-purpose-kunt-vinden-23', 'profeten-in-de-islam-brug-tussen-hemel-en-aarde-11']
  },

  // 3. #25
  {
    id: 25, episodeNumber: 25,
    popularRank: 3, isPopular: true,
    slug: 'de-verborgen-strijd-die-je-elke-dag-voert-de-grote-jihad-25',
    title: 'De verborgen strijd die je elke dag voert: de grote Jihad #25',
    seoH1: 'Jihad an-Nafs: de innerlijke strijd die je elke dag voert — wat zegt de islam?',
    subtitle: 'Hoe je de strijd in je hoofd en ego wint',
    date: '2025-02-09', consumptionTime: '165 uur',
    topic: 'zingeving',
    tags: ['Jihad an-Nafs', 'Zelfbeheersing', 'Discipline', 'Ego'],
    youtubeId: 'mIrviH0dED4',
    youtubeUrl: 'https://www.youtube.com/watch?v=mIrviH0dED4',
    thumbnail: 'https://i.ytimg.com/vi/mIrviH0dED4/hqdefault.jpg',
    ...ep('5PxdFv0C21DFhXxmjQUcOv'),
    learnings: 'Ontdek waarom de Profeet de innerlijke strijd de "grote Jihad" noemde — en hoe je je ego en lusten overwint met islamitische discipline.',
    keyInsights: [
      'Jihad an-Nafs — de strijd tegen je eigen ego — is de moeilijkste strijd',
      'Uitstelgedrag, jaloezie en trots zijn de meest voorkomende vijanden van de nafs',
      'Wilskracht is een spier die je kunt trainen met bewuste, kleine keuzes',
      'Niet je emoties laten regeren, maar bewust de leiding nemen is het doel',
      'De Profeet noemde de innerlijke strijd groter dan de uiterlijke strijd',
    ],
    description: `Het woord 'Jihad' is een van de meest misbegrepen begrippen van onze tijd. Maar de Profeet noemde de strijd tegen je eigen ego en lusten: de grote strijd — Jihad an-Nafs.\n\nHoe overwin je uitstelgedrag, jaloezie, trots en verleidingen? Hoe train je je wilskracht zodat niet je emoties jou regeren, maar jij bewust de leiding neemt?`,
    relatedSlugs: ['moderne-problemen-4-islamitische-oplossingen-innerlijke-vrede-29', 'geluk-als-doel-hebben-fout-de-islam-over-blijvend-geluk-24']
  },

  // 4. #24
  {
    id: 24, episodeNumber: 24,
    popularRank: 4, isPopular: true,
    slug: 'geluk-als-doel-hebben-fout-de-islam-over-blijvend-geluk-24',
    title: '24# Geluk als doel hebben = fout? De Islam over blijvend geluk',
    seoH1: 'Waarom geluk najagen je ongelukkig maakt — wat zegt de islam over blijvend geluk?',
    subtitle: 'Waarom geluk najagen jou ongelukkig maakt',
    date: '2025-01-31', consumptionTime: '135 uur',
    topic: 'zingeving',
    tags: ['Geluk', 'Tevredenheid', 'Rida', 'Psychologie'],
    youtubeId: 'ap3xF8Ez174',
    youtubeUrl: 'https://www.youtube.com/watch?v=ap3xF8Ez174',
    thumbnail: 'https://i.ytimg.com/vi/ap3xF8Ez174/hqdefault.jpg',
    ...ep('75M8sFpzWkiTdpF0u4foEq'),
    learnings: 'Begrijp waarom het najagen van geluk als primair levensdoel averechts werkt — en wat de islam zegt over diepe, duurzame voldoening.',
    keyInsights: [
      "Sa'adah (islamitisch geluk) is een bijproduct van betekenis, niet het einddoel zelf",
      'Toxische positiviteit van de zelfhulpwereld staat haaks op islamitische levenswijsheid',
      'Rida (tevredenheid met Allah\'s bestemming) is de sleutel tot duurzame rust',
      'Geluk zoeken in tijdelijke materie is zoals dorstige te zeewater drinken',
      'De islam verbindt geluk aan dienstverlening aan Allah én aan medemensen',
    ],
    description: `Iedereen streeft naar "gelukkig zijn". Maar hoe meer we geluk als primair doel stellen, hoe vluchtiger en teleurstellender het lijkt.\n\nDe Islam leert dat Sa'adah (geluk) een bijproduct is van betekenis en vrede met God — niet het einddoel op zich. Over de toxische positiviteit van de moderne zelfhulpwereld en wat er nodig is voor diepe, blijvende voldoening.`,
    relatedSlugs: ['voel-je-leegte-ondanks-alles-wat-je-hebt-zingeving-islam-22', 'waarom-je-leegte-voelt-hoe-je-jouw-purpose-kunt-vinden-23']
  },

  // 5. #22
  {
    id: 22, episodeNumber: 22,
    popularRank: 5, isPopular: true,
    slug: 'voel-je-leegte-ondanks-alles-wat-je-hebt-zingeving-islam-22',
    title: '#22 Voel je leegte ondanks alles wat je hebt? Zingeving & islam',
    seoH1: 'Leegte voelen ondanks succes — hoe de islam de innerlijke leegte uitlegt',
    subtitle: 'Wanneer succes, geld en status de leegte niet vullen',
    date: '2025-01-17', consumptionTime: '126 uur',
    topic: 'zingeving',
    tags: ['Zingeving', 'Leegte', 'Fitrah', 'Identiteit'],
    youtubeId: '2MxFlKnSAbU',
    youtubeUrl: 'https://www.youtube.com/watch?v=2MxFlKnSAbU',
    thumbnail: 'https://i.ytimg.com/vi/2MxFlKnSAbU/hqdefault.jpg',
    ...ep('043GS8AcXAn9C48Wa8qSpb'),
    learnings: 'Ontdek waarom innerlijke leegte geen zwakte is maar een signaal — en hoe de islamitische notie van Fitrah dit verklaart.',
    keyInsights: [
      'Innerlijke leegte is geen psychische stoornis, maar een signaal van de Fitrah',
      'De ziel kan niet duurzaam verzadigd worden door tijdelijke materie',
      'Succes, geld en status vullen de leegte niet — verbinding met Allah wel',
      'De Fitrah is het aangeboren godsbewustzijn dat in ieder mens aanwezig is',
      'Echte zingeving vereist verticale verbinding (met God) én horizontale verbinding (met mensen)',
    ],
    description: `Je hebt je studie, een goede baan, familie. En toch overvalt je 's avonds dat knagende gevoel: "Is dit het nou?"\n\nDie innerlijke leegte is geen zwakte — het is een signaal van de Fitrah, je aangeboren godsbewustzijn. De ziel kan niet verzadigd worden door tijdelijke materie. Een intiem gesprek over echte zingeving.`,
    relatedSlugs: ['waarom-je-leegte-voelt-hoe-je-jouw-purpose-kunt-vinden-23', 'geluk-als-doel-hebben-fout-de-islam-over-blijvend-geluk-24']
  },

  // 6. #19
  {
    id: 19, episodeNumber: 19,
    popularRank: 6, isPopular: true,
    slug: 'islam-en-integratie-praktische-tips-19',
    title: '#19 Islam en integratie: Praktische tips uit het leven van de Profeet',
    seoH1: 'Moslim zijn in Nederland — praktische lessen uit het leven van de Profeet over integratie',
    subtitle: 'Hoe de Profeet omging met andere culturen en gemeenschappen',
    date: '2024-11-29', consumptionTime: '115 uur',
    topic: 'maatschappij',
    tags: ['Integratie', 'Profeet', 'Nederland', 'Identiteit'],
    youtubeId: '9EOSowcsAnA',
    youtubeUrl: 'https://www.youtube.com/watch?v=9EOSowcsAnA',
    thumbnail: 'https://i.ytimg.com/vi/9EOSowcsAnA/hqdefault.jpg',
    ...ep('47HYe490HkcXN0sHM6kNe1'),
    learnings: 'Leer hoe het leven van de Profeet verrassend praktische lessen biedt voor moslims die vandaag balanceren tussen geloof en Nederlandse samenleving.',
    keyInsights: [
      'De Profeet navigeerde zelf tussen verschillende culturen en samenlevingen',
      'Integratie en geloofstrouw sluiten elkaar niet uit — ze versterken elkaar',
      'Het leven van de Profeet in Mekka en Medina biedt concrete lessen voor vandaag',
      'Meedenken met de samenleving is een islamitische plicht, geen toegeving',
      'Balans vinden is geen compromis maar een kunstzinnige levenshouding',
    ],
    description: `Hoe leef je als moslim in een seculiere maatschappij zonder je identiteit te verliezen? Het leven van de Profeet (vrede zij met hem) in Mekka en Medina biedt verrassend praktische lessen.\n\nOver het vinden van balans tussen trouw aan je geloof en volwaardig deelnemen aan de samenleving.`,
    relatedSlugs: ['ook-moe-van-integratie-identiteit-islam-acceptatie-18', 'voorbereiden-op-oorlog-wat-je-moet-weten-en-de-islamitische-kijk-hierop-20']
  },

  // 7. #2
  {
    id: 2, episodeNumber: 2,
    popularRank: 7, isPopular: true,
    slug: 'ramadan-dichter-bij-god-spirituele-groei-2',
    title: '#2 Ramadan: dichter bij God & spirituele groei',
    seoH1: 'Ramadan gebruiken voor spirituele groei — hoe kom je dichter bij Allah?',
    subtitle: 'Hoe je de heilige maand gebruikt voor een blijvende doorbraak',
    date: '2024-03-11', consumptionTime: '110 uur',
    topic: 'ramadan',
    tags: ['Ramadan', 'Spiritualiteit', 'Gebed', 'Koran'],
    youtubeId: '6koKRwdazM4',
    youtubeUrl: 'https://www.youtube.com/watch?v=6koKRwdazM4',
    thumbnail: 'https://i.ytimg.com/vi/6koKRwdazM4/hqdefault.jpg',
    ...ep('4sUDfKWTEXcOvrjKNtb0ah'),
    learnings: 'Concrete tips voor hoe je Ramadan gebruikt als springplank naar een blijvende, verdiepte relatie met Allah — en niet instort in week twee.',
    keyInsights: [
      'Ramadan is de uitgelezen kans voor spirituele herstart en relatieverdieping met Allah',
      'Structuur in je dagen en nachten is essentieel om niet op te branden',
      'Khushu (concentratie in gebed) is een vaardigheid die je kunt ontwikkelen',
      'Spirituele groei is meetbaar — track je gewoonten en reflecteer elke week',
      'Kleine consistente daden zijn meer waard dan grote eenmalige inspanningen',
    ],
    description: `De Ramadan is dé uitgelezen kans om je relatie met Allah te herstellen en verdiepen. Maar hoe zorg je ervoor dat je niet al na week twee instort door vermoeidheid?\n\nPraktische tips voor het indelen van je dagen en nachten, het vasthouden van focus tijdens het gebed (Khushu) en hoe je spirituele groei meetbaar en voelbaar maakt.`,
    relatedSlugs: ['bekijk-dit-voordat-ramadan-is-afgelopen-28', 'bekijk-dit-voordat-de-ramadan-voorbij-is-27']
  },

  // 8. #23
  {
    id: 23, episodeNumber: 23,
    popularRank: 8, isPopular: true,
    slug: 'waarom-je-leegte-voelt-hoe-je-jouw-purpose-kunt-vinden-23',
    title: 'Waarom je leegte voelt (En hoe je jouw purpose kunt vinden) #23',
    seoH1: 'Hoe vind je jouw levensdoel volgens de islam? Over purpose en leegte',
    subtitle: 'Betekenis in de Islam — ontdek je ware roeping',
    date: '2025-01-24', consumptionTime: '100 uur',
    topic: 'zingeving',
    tags: ['Purpose', 'Zingeving', 'Intentie', 'Niyyah'],
    youtubeId: '8tOe8JP2qXo',
    youtubeUrl: 'https://www.youtube.com/watch?v=8tOe8JP2qXo',
    thumbnail: 'https://i.ytimg.com/vi/8tOe8JP2qXo/hqdefault.jpg',
    ...ep('7cmwCkoAhVNXi5HXRQ3Baj'),
    learnings: 'Leer hoe de islam naar purpose kijkt — niet als één grote roeping maar als de kwaliteit van intentie waarmee je elke dagelijkse verplichting vervult.',
    keyInsights: [
      'Purpose is niet één grote roeping maar verborgen in hoe je dagelijkse plichten vervult',
      'Niyyah (intentie) transformeert gewone handelingen in daden van aanbidding',
      'Ihsan (uitmuntendheid in alles wat je doet) is de islamitische maatstaf voor succes',
      'Je bent al bezig met je purpose als dienaar, ouder, vriend en burger',
      'Leegte verdwijnt niet door meer te doen, maar door bewuster te zijn',
    ],
    description: `Hoe vind je wél je doel in het leven? Wat zegt de Koran over het doel van ons bestaan?\n\nIs het één grote roeping, of zit jouw missie verborgen in hoe je je dagelijkse verplichtingen vervult als dienaar, ouder, vriend en burger? Over Niyyah (intentie), Ihsan (uitmuntendheid) en hoe elke handeling een daad van aanbidding kan worden.`,
    relatedSlugs: ['voel-je-leegte-ondanks-alles-wat-je-hebt-zingeving-islam-22', 'geluk-als-doel-hebben-fout-de-islam-over-blijvend-geluk-24']
  },

  // 9. #20
  {
    id: 20, episodeNumber: 20,
    popularRank: 9, isPopular: true,
    slug: 'voorbereiden-op-oorlog-wat-je-moet-weten-en-de-islamitische-kijk-hierop-20',
    title: '#20 Voorbereiden op oorlog? Wat je moet weten & de islamitische kijk hierop',
    seoH1: 'Moslims over oorlog en geopolitieke onzekerheid — islamitische visie op veerkracht en Tawakkul',
    subtitle: 'Geopolitieke onzekerheid, weerbaarheid en Tawakkul',
    date: '2024-12-13', consumptionTime: '95u 44m',
    topic: 'maatschappij',
    tags: ['Oorlog', 'Actualiteit', 'Veerkracht', 'Tawakkul'],
    youtubeId: 'kJMNx0NDxac',
    youtubeUrl: 'https://www.youtube.com/watch?v=kJMNx0NDxac',
    thumbnail: 'https://i.ytimg.com/vi/kJMNx0NDxac/hqdefault.jpg',
    ...ep('43dludcp2Zf0FO82StAK87'),
    learnings: 'Leer hoe de islamitische geschiedenis lessen biedt voor tijden van beproeving — en hoe je praktische voorzorgsmaatregelen combineert met onwankelbaar Tawakkul.',
    keyInsights: [
      'Angst voor de toekomst is een signaal om te handelen én te vertrouwen',
      'Tawakkul is geen passiviteit maar een actieve keuze voor vertrouwen na inspanning',
      'De islamitische geschiedenis kent vele voorbeelden van veerkracht in moeilijke tijden',
      'Praktische voorbereiding en spiritueel vertrouwen sluiten elkaar niet uit',
      'Als moslim in Nederland sta je niet alleen — de Ummah is een netwerk van steun',
    ],
    description: `Met escalerende conflicten in Europa en het Midden-Oosten groeit de onzekerheid. Hoe kijken we als moslims in Nederland naar deze ontwikkelingen?\n\nWat leert de islamitische geschiedenis ons over tijden van beproeving? Hoe balanceer je praktische voorzorgsmaatregelen met onwankelbaar vertrouwen in Allah?`,
    relatedSlugs: ['de-verborgen-strijd-die-je-elke-dag-voert-de-grote-jihad-25', 'islam-en-integratie-praktische-tips-19']
  },

  // 10. #30
  {
    id: 30, episodeNumber: 30,
    popularRank: 10, isPopular: true,
    slug: 'bewijs-gevonden-voor-leven-na-de-dood-30',
    title: 'BREAKING: Bewijs gevonden voor leven na de dood? #30',
    seoH1: 'Bestaat er leven na de dood? Wetenschap en de islamitische visie op het hiernamaals',
    subtitle: 'Wetenschap en de islamitische kijk op het hiernamaals',
    date: '2025-04-11', consumptionTime: '90 uur',
    topic: 'geloof',
    tags: ['Hiernamaals', 'Wetenschap', 'NDE', 'Akhirah'],
    youtubeId: '0qK7eZrlmDQ',
    youtubeUrl: 'https://www.youtube.com/watch?v=0qK7eZrlmDQ',
    thumbnail: 'https://i.ytimg.com/vi/0qK7eZrlmDQ/hqdefault.jpg',
    ...ep('7iisjbf8SpDVwR9ZXUnuZe'),
    learnings: 'Ontdek hoe recente wetenschappelijke bevindingen over bewustzijn na de dood zich verhouden tot de islamitische leer over Akhirah.',
    keyInsights: [
      'Bijna-dood ervaringen (NDE\'s) worden steeds serieuzer genomen door wetenschappers',
      'Kwantumfysica suggereert dat bewustzijn de hersenen kan overleven',
      'De islamitische leer over Akhirah is gedetailleerd en coherent — niet vaag',
      'Wetenschappelijke bevindingen versterken het geloof — ze vervangen het niet',
      'Het geloof in het hiernamaals beïnvloedt direct je keuzes in dit leven',
    ],
    description: `Bijna-dood ervaringen (NDE's), kwantumfysica en nieuwe wetenschappelijke bevindingen over bewustzijn na de dood. Wat moeten we ermee?\n\nMohammed en Ahmet bespreken de laatste onderzoeken en leggen ze naast de islamitische leer over Akhirah (het hiernamaals). Versterken deze bevindingen het geloof, of gaan we te snel?`,
    relatedSlugs: ['leven-na-de-dood-islam-moslims-hiernamaals-12', 'wat-geloven-moslims-en-wat-is-islam-3-dingen-10']
  },

  // ==========================================
  // OVERIGE AFLEVERINGEN (Nieuw naar Oud)
  // ==========================================

  {
    id: 28, episodeNumber: 28,
    popularRank: null, isPopular: false,
    slug: 'bekijk-dit-voordat-ramadan-is-afgelopen-28',
    title: 'Bekijk dit voordat ramadan is afgelopen #28',
    seoH1: 'Laylat ul Qadr — de nacht waarop je vergeven kunt worden van al je zonden',
    subtitle: 'Laylat ul Qadr = vergeven worden van AL je zondes',
    date: '2025-03-29', consumptionTime: '655 uur',
    topic: 'ramadan',
    tags: ['Ramadan', 'Laylat al-Qadr', 'Vergiffenis', 'Spiritualiteit'],
    youtubeId: '0Ny5Q7dKqCA',
    youtubeUrl: 'https://www.youtube.com/watch?v=0Ny5Q7dKqCA',
    thumbnail: 'https://i.ytimg.com/vi/0Ny5Q7dKqCA/hqdefault.jpg',
    ...ep('5v8g2wxxGwiTATxT3aCwaV'),
    learnings: 'Begrijp hoe je de laatste nachten van Ramadan maximaal benut — en waarom Laylat ul Qadr de meest waardevolle nacht van het islamitisch jaar is.',
    keyInsights: [
      'Laylat ul Qadr is beter dan duizend maanden — meer dan 83 jaar aanbidding',
      'De tekenen van Laylat ul Qadr zijn subtiel maar te herkennen',
      'De smeekbede "Allahumma innaka Afuwwun" is de meest krachtige deze nacht',
      'Veel mensen laten deze kans onbenut door vermoeidheid of onwetendheid',
      'De nacht begint bij zonsondergang — bereid je de dag ervoor al voor',
    ],
    description: `De laatste nachten van de Ramadan zijn de meest waardevolle nachten van het hele jaar. Laylat ul Qadr — de Nacht der Macht — is beter dan duizend maanden. Wie deze nacht in aanbidding doorbrengt, kan vergeven worden van al zijn voorgaande zonden.\n\nIn deze aflevering bespreken Mohammed en Ahmet hoe je deze heilige nacht optimaal benut, wat de tekenen zijn, welke smeekbedes het meest krachtig zijn en waarom zoveel mensen deze kans laten liggen.`,
    relatedSlugs: ['bekijk-dit-voordat-de-ramadan-voorbij-is-27', 'ramadan-dichter-bij-god-spirituele-groei-2']
  },
  {
    id: 27, episodeNumber: 27,
    popularRank: null, isPopular: false,
    slug: 'bekijk-dit-voordat-de-ramadan-voorbij-is-27',
    title: 'Bekijk dit voordat de Ramadan voorbij is. #27',
    seoH1: 'Hoe maak je Ramadan meer dan alleen honger — 3 manieren voor echte transformatie',
    subtitle: 'Ramadan = honger? Niet met deze 3 dingen',
    date: '2025-03-21', consumptionTime: '111 uur',
    topic: 'ramadan',
    tags: ['Ramadan', 'Vasten', 'Transformatie', 'Geduld'],
    youtubeId: 'sijTJAyBfcg',
    youtubeUrl: 'https://www.youtube.com/watch?v=sijTJAyBfcg',
    thumbnail: 'https://i.ytimg.com/vi/sijTJAyBfcg/hqdefault.jpg',
    ...ep('6bfo0IKorLKtJiKvOChsyC'),
    learnings: 'Ontdek hoe je Ramadan omzet van een maand van onthouding naar een periode van echte, blijvende transformatie.',
    keyInsights: [
      'Wie alleen zijn maag laat vasten, mist de volledige essentie van Ramadan',
      'Het vasten van de tong en de ogen is minstens zo belangrijk als het vasten van het lichaam',
      'Mentale helderheid door soberheid is een bijproduct van goed vasten',
      'Gewoontes die ná Ramadan standhouden begint je nu op te bouwen',
      'Transformatie vereist bewuste keuzes, niet alleen het vermijden van eten',
    ],
    description: `Veel mensen reduceren Ramadan tot een maand van niet eten en drinken. Maar wie alleen zijn maag laat vasten, mist de volledige essentie.\n\n3 handvatten voor echte transformatie: het vasten van de tong en de ogen, mentale helderheid door soberheid, en het opbouwen van gewoontes die standhouden ná Ramadan.`,
    relatedSlugs: ['bekijk-dit-voordat-ramadan-is-afgelopen-28', 'ramadan-dichter-bij-god-spirituele-groei-2']
  },
  {
    id: 26, episodeNumber: 26,
    popularRank: null, isPopular: false,
    slug: 'ramadan-de-hemelse-reset-voor-je-hart-en-ziel-26',
    title: 'Ramadan: de hemelse reset voor je hart en ziel #26',
    seoH1: 'Ramadan als spirituele reset — hoe reinig je je hart en bouw je nieuwe gewoontes?',
    subtitle: 'Gebruik Ramadan als spirituele doorstart',
    date: '2025-03-07', consumptionTime: null,
    topic: 'ramadan',
    tags: ['Ramadan', 'Tawbah', 'Spiritualiteit', 'Reset'],
    youtubeId: 'bhW_A47yNCM',
    youtubeUrl: 'https://www.youtube.com/watch?v=bhW_A47yNCM',
    thumbnail: 'https://i.ytimg.com/vi/bhW_A47yNCM/hqdefault.jpg',
    ...ep('5FFp69QvRcrYVGrgyQcoiw'),
    learnings: 'Leer hoe je Ramadan gebruikt als jaarlijkse reset om slechte patronen te doorbreken en duurzame spirituele gewoontes op te bouwen.',
    keyInsights: [
      'Ramadan is een jaarlijkse reset die Allah heeft ingebouwd in het islamitisch jaar',
      'Tawbah (berouw) is effectiever als je het koppelt aan concrete gedragsverandering',
      'Collectieve aanbidding versterkt de individuele spiritualiteit',
      'Slechte patronen doorbreken kost 30 dagen — precies de lengte van Ramadan',
      'Intentie aan het begin van de maand bepaalt de kwaliteit van je Ramadan',
    ],
    description: `Ramadan is meer dan een religieuze verplichting — het is een jaarlijkse reset die je hart, gedachten en gewoontes transformeert.\n\nHoe gebruik je deze maand om slechte patronen te doorbreken en nieuwe, duurzame spirituele gewoontes op te bouwen? Over Tawbah (berouw), intentie en de kracht van collectieve aanbidding.`,
    relatedSlugs: ['bekijk-dit-voordat-ramadan-is-afgelopen-28', 'bekijk-dit-voordat-de-ramadan-voorbij-is-27']
  },
  {
    id: 21, episodeNumber: 21,
    popularRank: null, isPopular: false,
    slug: 'gestopt-met-voornemens-zo-stel-je-doelen-en-behaal-je-ze-21',
    title: '#21 Al gestopt met je voornemens? Zo stel je doelen én behaal je ze',
    seoH1: 'Hoe stel je doelen die wél standhouden? De islamitische aanpak van discipline en intentie',
    subtitle: 'Over stoppen met de podcast en doelen stellen',
    date: '2024-12-27', consumptionTime: null,
    topic: 'zingeving',
    tags: ['Doelen', 'Discipline', 'Gewoontes', 'Groei'],
    youtubeId: 'iXDtT_Kc9Ro',
    youtubeUrl: 'https://www.youtube.com/watch?v=iXDtT_Kc9Ro',
    thumbnail: 'https://i.ytimg.com/vi/iXDtT_Kc9Ro/hqdefault.jpg',
    ...ep('6G4ZfRacBfujfJrKJLXv9F'),
    learnings: 'Ontdek de islamitische benadering van doelen stellen — gebaseerd op intentie en consistentie in plaats van willpower en hype.',
    keyInsights: [
      'Voornemens falen omdat ze gebaseerd zijn op motivatie in plaats van systemen',
      'Islamitische intentie (Niyyah) geeft doelen een diepere fundering',
      'Klein beginnen en consistent zijn werkt beter dan grote sprongen',
      'Gewoontevorming is een islamitisch principe: de Profeet deed elke goede daad consistent',
      'Eerlijk zijn over je capaciteiten is een vorm van bescheidenheid voor Allah',
    ],
    description: `Januari is nog niet voorbij of de meeste voornemens zijn al gesneuveld. Hoe stel je doelen die wél standhouden?\n\nEen eerlijk gesprek over discipline, gewoontevorming en ook: moeten ze eigenlijk doorgaan met de podcast? De islamitische benadering van intentie en consistentie als fundament voor echt succes.`,
    relatedSlugs: ['de-verborgen-strijd-die-je-elke-dag-voert-de-grote-jihad-25', 'waarom-consistentie-de-sleutel-tot-succes-is-16']
  },
  {
    id: 18, episodeNumber: 18,
    popularRank: null, isPopular: false,
    slug: 'ook-moe-van-integratie-identiteit-islam-acceptatie-18',
    title: '#18 Ook moe van integratie? Tijd voor een nieuw perspectief',
    seoH1: 'Moe van integreren als moslim in Nederland? Een nieuw perspectief op identiteit en acceptatie',
    subtitle: 'Over identiteit, islam & acceptatie',
    date: '2024-11-15', consumptionTime: null,
    topic: 'maatschappij',
    tags: ['Integratie', 'Identiteit', 'Acceptatie', 'Moslim in Nederland'],
    youtubeId: 'o3yxd06fqyA',
    youtubeUrl: 'https://www.youtube.com/watch?v=o3yxd06fqyA',
    thumbnail: 'https://i.ytimg.com/vi/o3yxd06fqyA/hqdefault.jpg',
    ...ep(null),
    learnings: 'Vind een perspectief op integratie dat je bevrijdt van de voortdurende druk om je te verantwoorden — met de islam als stevige basis.',
    keyInsights: [
      'Integratiemoeheid is een reëel fenomeen dat veel Nederlandse moslims kennen',
      'De islam geeft een identiteitsfundament dat onafhankelijk is van sociale erkenning',
      'Je hoeft niet te kiezen tussen moslim zijn EN Nederlander zijn',
      'Acceptatie zoeken bij anderen leidt tot verlies van jezelf',
      'Trots zijn op je identiteit zonder defensief te zijn is mogelijk',
    ],
    description: `Ben je het beu om je voortdurend te moeten verantwoorden? Over de moeheid van integreren en het zoeken naar een perspectief dat je bevrijdt van die last.\n\nEen open gesprek over identiteit als moslim in Nederland, de druk van twee werelden en hoe de Islam je juist een stevige basis geeft.`,
    relatedSlugs: ['islam-en-integratie-praktische-tips-19', 'voorbereiden-op-oorlog-wat-je-moet-weten-en-de-islamitische-kijk-hierop-20']
  },
  {
    id: 17, episodeNumber: 17,
    popularRank: null, isPopular: false,
    slug: 'in-deze-wereld-vol-chaos-terugtrekken-of-impact-maken-17',
    title: '#17 In deze wereld vol chaos: tijd om terug te trekken of impact maken?',
    seoH1: 'Terugtrekken of impact maken als moslim — de islamitische visie op engagement met de wereld',
    subtitle: 'De islamitische visie op engagement met de wereld',
    date: '2024-11-01', consumptionTime: null,
    topic: 'maatschappij',
    tags: ['Impact', 'Actie', 'Verantwoordelijkheid', 'Ummah'],
    youtubeId: 'LtlFhSkgkRc',
    youtubeUrl: 'https://www.youtube.com/watch?v=LtlFhSkgkRc',
    thumbnail: 'https://i.ytimg.com/vi/LtlFhSkgkRc/hqdefault.jpg',
    ...ep(null),
    learnings: 'Ontdek hoe de Koran en de Profeet richting geven aan de vraag: ga je de wereld in of trek je je terug?',
    keyInsights: [
      'De Koran vraagt om betrokkenheid bij de wereld, niet isolatie',
      'Innerlijke rust is een voorwaarde voor effectieve maatschappelijke impact',
      'De Profeet combineerde diepe spiritualiteit met actieve maatschappelijke betrokkenheid',
      'Terugtrekken kan tijdelijk nodig zijn om je krachten te hergroeperen',
      'De Ummah is pas sterk als individuen hun verantwoordelijkheid nemen',
    ],
    description: `Met oorlog, onrecht en politieke chaos om ons heen rijst de vraag: trekt de gelovige zich terug in zijn eigen bubbel, of gaat hij de wereld in om impact te maken?\n\nDe Koran en de Profeet geven een genuanceerd antwoord dat zowel innerlijke rust als maatschappelijke betrokkenheid combineert.`,
    relatedSlugs: ['ook-moe-van-integratie-identiteit-islam-acceptatie-18', 'islam-en-integratie-praktische-tips-19']
  },
  {
    id: 16, episodeNumber: 16,
    popularRank: null, isPopular: false,
    slug: 'waarom-consistentie-de-sleutel-tot-succes-is-16',
    title: '#16 Waarom consistentie dé sleutel tot succes is in beide werelden?',
    seoH1: 'Consistentie als islamitisch principe — hoe kleine dagelijkse daden groot verschil maken',
    subtitle: 'Hoe kleine, dagelijkse daden groot verschil maken',
    date: '2024-10-18', consumptionTime: null,
    topic: 'zingeving',
    tags: ['Consistentie', 'Succes', 'Gewoontes', 'Amal'],
    youtubeId: 'qbcskrbZPX0',
    youtubeUrl: 'https://www.youtube.com/watch?v=qbcskrbZPX0',
    thumbnail: 'https://i.ytimg.com/vi/qbcskrbZPX0/hqdefault.jpg',
    ...ep(null),
    learnings: 'Begrijp waarom consistentie in de islam een spiritueel principe is — en hoe je duurzame routines opbouwt die je dichter bij Allah én je aardse doelen brengen.',
    keyInsights: [
      'De meest geliefde daden bij Allah zijn de meest consistente, ook al zijn ze klein',
      'Consistentie is niet een productiviteitsterm — het is een spiritueel principe',
      'Kleine dagelijkse daden stapelen zich op tot enorme langetermijnresultaten',
      'Duurzame routines beginnen met eerlijk inzicht in je eigen capaciteit',
      'Zowel aardse doelen als spirituele groei vereisen dezelfde aanpak: consistentie',
    ],
    description: `De Profeet zei: "De meest geliefde daden bij Allah zijn de meest consistente, ook al zijn ze klein." Consistentie is niet alleen een productiviteitsterm — het is een spiritueel principe.\n\nHoe bouw je duurzame routines op die je dichter bij Allah brengen én je aardse doelen helpen bereiken?`,
    relatedSlugs: ['gestopt-met-voornemens-zo-stel-je-doelen-en-behaal-je-ze-21', 'de-verborgen-strijd-die-je-elke-dag-voert-de-grote-jihad-25']
  },
  {
    id: 15, episodeNumber: 15,
    popularRank: null, isPopular: false,
    slug: 'hoe-vind-ik-balans-tussen-werk-familie-en-innerlijke-rust-15',
    title: '#15 Hoe vind ik balans tussen werk, familie en innerlijke rust?',
    seoH1: 'Balans vinden tussen werk, gezin en geloof — islamitische gids voor een evenwichtig leven',
    subtitle: 'Praktische islamitische gids voor een evenwichtig leven',
    date: '2024-10-04', consumptionTime: null,
    topic: 'zingeving',
    tags: ['Balans', 'Familie', 'Werk', 'Rust'],
    youtubeId: 'XpJv8CJFv8c',
    youtubeUrl: 'https://www.youtube.com/watch?v=XpJv8CJFv8c',
    thumbnail: 'https://i.ytimg.com/vi/XpJv8CJFv8c/hqdefault.jpg',
    ...ep(null),
    learnings: 'Leer hoe de Profeet balans hield tussen zijn plichten — en hoe jij dat kunt toepassen in het moderne leven.',
    keyInsights: [
      'Balans is niet een statische toestand maar een dynamisch evenwicht dat je steeds hervindt',
      'De Profeet had recht voor zijn gezin, gemeenschap, en zichzelf — allemaal',
      'Tijdmanagement is een islamitische deugd: elke minuut is een amanah (aandeel)',
      'Grenzen stellen is geen egoïsme maar een vorm van rechtvaardigheid voor alle betrokkenen',
      'Innerlijke rust vereist fysieke, sociale en spirituele balans tegelijk',
    ],
    description: `Werk, gezin, religie, sociale verplichtingen — het lijkt soms onmogelijk om alles in balans te houden. Hoe deed de Profeet dat, en wat kunnen wij daarvan leren?\n\nConcrete tips voor tijdmanagement, het stellen van grenzen en het vinden van innerlijke rust temidden van alle drukte.`,
    relatedSlugs: ['waarom-consistentie-de-sleutel-tot-succes-is-16', 'moderne-problemen-4-islamitische-oplossingen-innerlijke-vrede-29']
  },
  {
    id: 14, episodeNumber: 14,
    popularRank: null, isPopular: false,
    slug: 'waarom-islam-oplossing-voor-grote-problemen-14',
    title: '#14 Waarom Islam: oplossing voor alle grote problemen op de wereld',
    seoH1: 'Is de islam de oplossing voor de grote problemen van onze tijd? Een eerlijk gesprek',
    subtitle: 'Is Islam een religie voor de moderne wereld?',
    date: '2024-09-06', consumptionTime: null,
    topic: 'geloof',
    tags: ['Dawah', 'Islam', 'Moderne Wereld', 'Filosofie'],
    youtubeId: 'eWNk3PAZbZE',
    youtubeUrl: 'https://www.youtube.com/watch?v=eWNk3PAZbZE',
    thumbnail: 'https://i.ytimg.com/vi/eWNk3PAZbZE/hqdefault.jpg',
    ...ep(null),
    learnings: 'Onderzoek de claim dat islamitische principes antwoord geven op de grootste problemen van onze tijd — eerlijk en zonder oversimplificatie.',
    keyInsights: [
      'De islam biedt een coherente visie op rechtvaardigheid, zingeving en gemeenschap',
      'Moderne problemen zoals ongelijkheid en zinloos geweld hebben islamitische antwoorden',
      'De islam is niet achterhaald — het is een blauwdruk die zijn relevantie bewees door de eeuwen heen',
      'Islamitische principes kunnen naast moderniteit bestaan zonder tegenstrijdheid',
      'De vraag is niet of de islam relevant is, maar of moslims het goed uitleggen',
    ],
    description: `Is Islam achterhaald of juist de meest complete blauwdruk voor een rechtvaardig en zinvol leven? Mohammed en Ahmet bespreken hoe islamitische principes antwoord geven op de grootste problemen van onze tijd: ongelijkheid, zinloos geweld, mentale gezondheidsproblemen en moreel verval.`,
    relatedSlugs: ['wat-geloven-moslims-en-wat-is-islam-3-dingen-10', 'slaaf-zijn-van-god-vrijheid-vinden-door-overgave-9']
  },
  {
    id: 13, episodeNumber: 13,
    popularRank: null, isPopular: false,
    slug: 'staat-je-lot-vast-vrije-wil-en-voorbeschikking-in-de-islam-13',
    title: '#13 Staat je lot vast? Vrije wil en voorbeschikking in de Islam',
    seoH1: 'Staat je lot vast? Vrije wil en voorbeschikking (Qadar) in de islam uitgelegd',
    subtitle: 'Qadar: het grote islamitische debat over bestemming en keuze',
    date: '2024-08-23', consumptionTime: null,
    topic: 'geloof',
    tags: ['Qadar', 'Vrije Wil', 'Lot', 'Filosofie'],
    youtubeId: 'jghzsdrWZX8',
    youtubeUrl: 'https://www.youtube.com/watch?v=jghzsdrWZX8',
    thumbnail: 'https://i.ytimg.com/vi/jghzsdrWZX8/hqdefault.jpg',
    ...ep(null),
    learnings: 'Begrijp hoe Qadar (goddelijke voorbeschikking) samengaat met menselijke verantwoordelijkheid en vrije wil — een van de meest gestelde vragen over de islam.',
    keyInsights: [
      'Qadar en vrije wil zijn geen tegenstelling — ze opereren op verschillende niveaus',
      'Als Allah alles al weet, is jouw inspanning nog steeds essentieel en vereist',
      'Geloof in Qadar geeft rust bij tegenspoed, geen excuus voor luiheid',
      'De islamitische filosofie heeft dit debat duizend jaar lang verfijnd',
      'Menselijke verantwoordelijkheid en goddelijke almacht bestaan naast elkaar',
    ],
    description: `Als Allah alles al heeft vastgelegd, waarom zou je dan nog moeite doen? Dit is een van de meest gestelde vragen over de Islam.\n\nEen heldere uitleg van Qadar (de goddelijke voorbeschikking) en hoe dit samengaat met de menselijke verantwoordelijkheid en vrije wil.`,
    relatedSlugs: ['wat-geloven-moslims-en-wat-is-islam-3-dingen-10', 'slaaf-zijn-van-god-vrijheid-vinden-door-overgave-9']
  },
  {
    id: 12, episodeNumber: 12,
    popularRank: null, isPopular: false,
    slug: 'leven-na-de-dood-islam-moslims-hiernamaals-12',
    title: '#12 Er is leven na de dood: Islam & moslims over het hiernamaals',
    seoH1: 'Het islamitische hiernamaals — van het graf tot de Dag des Oordeels',
    subtitle: 'Akhirah: de islamitische visie op het leven na dit leven',
    date: '2024-08-09', consumptionTime: null,
    topic: 'geloof',
    tags: ['Hiernamaals', 'Akhirah', 'Paradijs', 'Hel'],
    youtubeId: 'pGcDPA2YACk',
    youtubeUrl: 'https://www.youtube.com/watch?v=pGcDPA2YACk',
    thumbnail: 'https://i.ytimg.com/vi/pGcDPA2YACk/hqdefault.jpg',
    ...ep(null),
    learnings: 'Ontdek de islamitische visie op het hiernamaals — van het graf tot Jannah en Jahannam — en hoe geloof in Akhirah je dagelijks leven beïnvloedt.',
    keyInsights: [
      'De islam beschrijft het hiernamaals gedetailleerd: het graf, de Dag des Oordeels, Jannah en Jahannam',
      'Geloof in Akhirah is een van de zes geloofspijlers van de islam',
      'Het hiernamaals is geen bijzaak maar het uiteindelijke doel van het menselijk bestaan',
      'Hoe je in dit leven handelt, bepaalt direct je positie in het hiernamaals',
      'Het denken aan de dood is in de islam een aanbevolen vorm van spirituele zelfreflectie',
    ],
    description: `Wat gebeurt er echt na de dood? De Islam geeft een gedetailleerd en diepgaand beeld van het leven na dit leven. Van het graf tot de Dag des Oordeels, van Jannah tot Jahannam.\n\nHoe beïnvloedt het geloof in het hiernamaals jouw keuzes en prioriteiten in dit leven?`,
    relatedSlugs: ['bewijs-gevonden-voor-leven-na-de-dood-30', 'profeten-in-de-islam-brug-tussen-hemel-en-aarde-11']
  },
  {
    id: 11, episodeNumber: 11,
    popularRank: null, isPopular: false,
    slug: 'profeten-in-de-islam-brug-tussen-hemel-en-aarde-11',
    title: '#11 Profeten in de islam: Brug tussen hemel en aarde',
    seoH1: 'Profeten in de islam — waarom zijn ze essentieel en wat kunnen wij van hen leren?',
    subtitle: 'Waarom profeten essentieel zijn in het islamitische wereldbeeld',
    date: '2024-07-26', consumptionTime: null,
    topic: 'geloof',
    tags: ['Profeten', 'Nabi', 'Openbaring', 'Islamitisch geloof'],
    youtubeId: '7MZ4U7YVSBU',
    youtubeUrl: 'https://www.youtube.com/watch?v=7MZ4U7YVSBU',
    thumbnail: 'https://i.ytimg.com/vi/7MZ4U7YVSBU/hqdefault.jpg',
    ...ep(null),
    learnings: 'Begrijp de rol van profeten in de islamitische wereldvisie — van Ibrahim tot Muhammed — en wat hun levens ons leren over geloof in de praktijk.',
    keyInsights: [
      'Allah stuurde profeten als brug tussen het goddelijke en het menselijke',
      'Muhammed (vzmh) is de Zegel der Profeten — de definitieve boodschapper',
      'Eerdere profeten zoals Ibrahim, Mousa en Isa zijn ook islamitische figuren',
      'Het leven van de profeten is een praktische handleiding voor het geloof',
      'Geloof in alle profeten is een pijler van de islamitische geloofsleer',
    ],
    description: `Waarom heeft Allah profeten gestuurd? Wat maakt Muhammed de Zegel der Profeten? En wat kunnen wij leren van de levens van eerdere profeten zoals Ibrahim, Mousa en Isa?\n\nEen verrijkende aflevering over de rol van profeten als gids en lichtbaken.`,
    relatedSlugs: ['wat-geloven-moslims-en-wat-is-islam-3-dingen-10', 'leven-na-de-dood-islam-moslims-hiernamaals-12']
  },
  {
    id: 9, episodeNumber: 9,
    popularRank: null, isPopular: false,
    slug: 'slaaf-zijn-van-god-vrijheid-vinden-door-overgave-9',
    title: '#9 Slaaf zijn van God: Vrijheid vinden door overgave',
    seoH1: 'Vrijheid door overgave aan Allah — hoe "slaaf van God" zijn je bevrijdt',
    subtitle: 'Islam betekent overgave — maar is dat niet een zwaktebod?',
    date: '2024-07-12', consumptionTime: null,
    topic: 'geloof',
    tags: ['Abd', 'Overgave', 'Vrijheid', 'Islam'],
    youtubeId: 'T4EqeqM6iK8',
    youtubeUrl: 'https://www.youtube.com/watch?v=T4EqeqM6iK8',
    thumbnail: 'https://i.ytimg.com/vi/T4EqeqM6iK8/hqdefault.jpg',
    ...ep(null),
    learnings: 'Verken de paradox: hoe totale overgave aan Allah de ultieme vorm van vrijheid is — niet van zwakheid maar van bewuste keuze.',
    keyInsights: [
      '"Abd Allah" (dienaar van God) is de meest eervolle titel in de islam',
      'Overgave aan Allah bevrijdt je van slaafse dienst aan je ego, status en bezit',
      'Vrijheid in de islam betekent niet: doen wat je wilt, maar: vrij zijn van je nafs',
      'De paradox van overgave en vrijheid is centraal in het islamitisch zelfbegrip',
      'Wie niet dient aan Allah, dient automatisch aan iets anders',
    ],
    description: `"Abd Allah" — slaaf van God. Hoe kan iemand vrijheid vinden door zichzelf te beschouwen als dienaar? Een diepgaande verkenning van een paradox die centraal staat in het islamitische zelfbegrip.\n\nOver waarom totale overgave aan Allah de ultieme vrijheid geeft.`,
    relatedSlugs: ['wat-geloven-moslims-en-wat-is-islam-3-dingen-10', 'waarom-geloven-mensen-in-god-bestaat-god-7']
  },
  {
    id: 8, episodeNumber: 8,
    popularRank: null, isPopular: false,
    slug: 'wetenschap-vs-geloof-waarom-geloven-in-een-god-die-je-niet-kunt-zien-8',
    title: '#8 Wetenschap vs geloof: Waarom geloven in een God die je niet kunt zien?',
    seoH1: 'Wetenschap en geloof — zijn ze tegenstrijdig of vullen ze elkaar aan?',
    subtitle: 'Zijn wetenschap en geloof tegenstrijdig?',
    date: '2024-06-28', consumptionTime: null,
    topic: 'geloof',
    tags: ['Wetenschap', 'Geloof', 'Atheïsme', 'Bewijs'],
    youtubeId: '0b4ujbkYGw4',
    youtubeUrl: 'https://www.youtube.com/watch?v=0b4ujbkYGw4',
    thumbnail: 'https://i.ytimg.com/vi/0b4ujbkYGw4/hqdefault.jpg',
    ...ep(null),
    learnings: 'Verken de grenzen van wetenschap en de rationele basis voor geloof — en waarom de meest briljante wetenschappers door hun vakgebied tot geloof kwamen.',
    keyInsights: [
      'Wetenschap beschrijft hoe — het geloof beantwoordt waarom',
      'De grenzen van wetenschap zijn erkend door de meest serieuze wetenschappers zelf',
      'Een rationele basis voor geloof bestaat — geloof is niet blinde irrationale sprong',
      'Veel van de grootste wetenschappers uit de islamitische gouden eeuw waren gelovigen',
      'Het grootste argument van de scepticus ("je kunt God niet bewijzen") kan worden beantwoord',
    ],
    description: `"Je kunt God niet bewijzen, dus waarom zou ik geloven?" Het grootste argument van de moderne scepticus. Mohammed en Ahmet gaan de uitdaging aan.\n\nOver de grenzen van wetenschap, de rationele basis voor geloof en waarom de meest briljante wetenschappers door hun vakgebied tot geloof kwamen.`,
    relatedSlugs: ['waarom-geloven-mensen-in-god-bestaat-god-7', 'bewijs-gevonden-voor-leven-na-de-dood-30']
  },
  {
    id: 7, episodeNumber: 7,
    popularRank: null, isPopular: false,
    slug: 'waarom-geloven-mensen-in-god-bestaat-god-7',
    title: '#7 Waarom geloven mensen in God? Bestaat God wel of niet?',
    seoH1: 'Bestaat God? De sterkste argumenten voor het bestaan van een Schepper',
    subtitle: 'De rationele en spirituele argumenten voor het bestaan van God',
    date: '2024-06-14', consumptionTime: null,
    topic: 'geloof',
    tags: ['Godsbestaan', 'Filosofie', 'Kalam', 'Atheïsme'],
    youtubeId: '0kDd1IYoCeY',
    youtubeUrl: 'https://www.youtube.com/watch?v=0kDd1IYoCeY',
    thumbnail: 'https://i.ytimg.com/vi/0kDd1IYoCeY/hqdefault.jpg',
    ...ep(null),
    learnings: 'Verken de rationele en spirituele argumenten voor het bestaan van God — van het kosmologisch argument tot de Fitrah.',
    keyInsights: [
      'Het kosmologisch argument vraagt: waarom bestaat er iets in plaats van niets?',
      'De Fitrah is het aangeboren godsbewustzijn dat in ieder mens aanwezig is',
      'Atheïsme is een geloofsysteem — geen neutrale positie',
      'De complexiteit van het universum wijst op een intelligente Schepper',
      'Geloof en rede sluiten elkaar niet uit — ze vullen elkaar aan',
    ],
    description: `Bestaat God? Een eeuwenoude vraag die mensen blijft bezighouden. Van het kosmologisch argument tot de Fitrah — de aangeboren neiging om te geloven.\n\nEen toegankelijk gesprek over de sterkste argumenten voor het bestaan van een Schepper.`,
    relatedSlugs: ['wetenschap-vs-geloof-waarom-geloven-in-een-god-die-je-niet-kunt-zien-8', 'wat-geloven-moslims-en-wat-is-islam-3-dingen-10']
  },
  {
    id: 6, episodeNumber: 6,
    popularRank: null, isPopular: false,
    slug: 'introductie-tot-de-koran-een-gids-voor-ons-leven-6',
    title: '#6 Introductie tot de Koran: een gids voor ons leven',
    seoH1: 'Introductie tot de Koran — wat is het en hoe gebruik je het in je dagelijks leven?',
    subtitle: 'Wat is de Koran en waarom is het meer dan een heilig boek?',
    date: '2024-05-31', consumptionTime: null,
    topic: 'geloof',
    tags: ['Koran', 'Openbaring', 'Recitatie', 'Tafsir'],
    youtubeId: '4flLXTGsiGc',
    youtubeUrl: 'https://www.youtube.com/watch?v=4flLXTGsiGc',
    thumbnail: 'https://i.ytimg.com/vi/4flLXTGsiGc/hqdefault.jpg',
    ...ep(null),
    learnings: 'Ontdek hoe de Koran in elkaar zit, hoe je hem leest en begrijpt, en hoe je hem kunt toepassen in je dagelijks leven als moslim of nieuwsgierige.',
    keyInsights: [
      'De Koran is meer dan 1400 jaar onveranderd gebleven — uniek in de wereldgeschiedenis',
      'Recitatie van de Koran heeft bewezen kalmerend effect op hart en geest',
      'Tafsir (koranuitleg) helpt je de diepere betekenis te begrijpen',
      'De Koran spreekt direct tot de individuele lezer — het is een persoonlijke gids',
      'Je hoeft geen Arabisch te kennen om van de Koran te kunnen profiteren',
    ],
    description: `De Koran: het letterlijke Woord van God, meer dan 1400 jaar onveranderd. Maar hoe lees je het, hoe begrijp je het en hoe pas je het toe in je dagelijks leven?\n\nEen introductie voor de nieuwsgierige: van de openbaring aan de Profeet tot de structuur, de thema's en de kracht van Koranrecitatie.`,
    relatedSlugs: ['essentie-van-ramadan-de-koran-een-openbaring-die-levens-verandert-4', 'wat-geloven-moslims-en-wat-is-islam-3-dingen-10']
  },
  {
    id: 5, episodeNumber: 5,
    popularRank: null, isPopular: false,
    slug: 'de-nacht-waardevoller-dan-1000-maanden-laylat-al-qadr-5',
    title: '#5 De nacht waardevoller dan 1000 maanden: Laylat al-Qadr',
    seoH1: 'Laylat al-Qadr — de nacht die meer waard is dan duizend maanden, uitgelegd',
    subtitle: 'Alles over de meest bijzondere nacht van het islamitisch jaar',
    date: '2024-04-05', consumptionTime: null,
    topic: 'ramadan',
    tags: ['Laylat al-Qadr', 'Ramadan', 'Gebed', 'Nacht'],
    youtubeId: 'nVa2riQUzXE',
    youtubeUrl: 'https://www.youtube.com/watch?v=nVa2riQUzXE',
    thumbnail: 'https://i.ytimg.com/vi/nVa2riQUzXE/hqdefault.jpg',
    ...ep(null),
    learnings: 'Alles wat je moet weten over de Nacht der Macht: wanneer is het, welke tekenen zijn er en welke aanbidding is het meest gewaardeerd?',
    keyInsights: [
      'Laylat al-Qadr is beter dan duizend maanden — meer dan 83 jaar aan aanbidding',
      'De nacht valt in de laatste 10 nachten van Ramadan, waarschijnlijk in een oneven nacht',
      'De tekenen van de Nacht der Macht zijn beschreven in de Hadith',
      'De beste smeekbede deze nacht is: Allahumma innaka Afuwwun tuhibbul-afwa fa\'fu-anni',
      'Wie deze nacht wakker is en aanbidt kan vergeven worden van al zijn voorgaande zonden',
    ],
    description: `"Laylat al-Qadr is beter dan duizend maanden." Eén nacht van aanbidding die meer waard is dan 83 jaar. Hoe zoek je haar op en wat doe je als je haar hebt gevonden?\n\nAlles wat je moet weten over de Nacht der Macht: wanneer is het, welke tekenen zijn er en welke aanbidding is het meest gewaardeerd?`,
    relatedSlugs: ['bekijk-dit-voordat-ramadan-is-afgelopen-28', 'essentie-van-ramadan-de-koran-een-openbaring-die-levens-verandert-4']
  },
  {
    id: 4, episodeNumber: 4,
    popularRank: null, isPopular: false,
    slug: 'essentie-van-ramadan-de-koran-een-openbaring-die-levens-verandert-4',
    title: '#4 De essentie van Ramadan: de Koran, een openbaring die levens verandert',
    seoH1: 'De essentie van Ramadan — waarom de Koran centraal staat in de heilige maand',
    subtitle: 'Ramadan en de Koran: twee onlosmakelijk verbonden fenomenen',
    date: '2024-03-22', consumptionTime: null,
    topic: 'ramadan',
    tags: ['Ramadan', 'Koran', 'Openbaring', 'Spiritualiteit'],
    youtubeId: 'ZKVy3GwVMyc',
    youtubeUrl: 'https://www.youtube.com/watch?v=ZKVy3GwVMyc',
    thumbnail: 'https://i.ytimg.com/vi/ZKVy3GwVMyc/hqdefault.jpg',
    ...ep(null),
    learnings: 'Begrijp waarom de band tussen Ramadan en de Koran dieper is dan de meeste moslims beseffen — en hoe je de Koran centraal maakt in je Ramadan.',
    keyInsights: [
      'De Koran werd geopenbaard in de maand Ramadan — dit is geen toeval',
      'De band tussen Ramadan en de Koran is onlosmakelijk en wederzijds versterkend',
      'De Koran als levende gids tijdens Ramadan is fundamenteel anders dan ritueel reciteren',
      'Begrijpen wat je reciteert verhoogt de spirituele waarde enorm',
      'Ramadan zonder Koran is als een reis zonder kompas',
    ],
    description: `De Koran werd geopenbaard in de maand Ramadan. Dit is geen toeval. De band tussen deze twee fenomenen is dieper dan de meeste moslims beseffen.\n\nHoe maak je de Koran centraal in je Ramadan — niet alleen als ritueel, maar als levende gids?`,
    relatedSlugs: ['ramadan-dichter-bij-god-spirituele-groei-2', 'introductie-tot-de-koran-een-gids-voor-ons-leven-6']
  },
  {
    id: 3, episodeNumber: 3,
    popularRank: null, isPopular: false,
    slug: 'levensveranderend-vasten-ramadan-meer-dan-alleen-honger-3',
    title: '#3 Levensveranderend vasten: Ramadan meer dan alleen honger?',
    seoH1: 'Islamitisch vasten — de diepere dimensies van Siyam in de Ramadan',
    subtitle: 'De diepere dimensies van vasten in de Islam',
    date: '2024-03-15', consumptionTime: null,
    topic: 'ramadan',
    tags: ['Vasten', 'Siyam', 'Ramadan', 'Zelfdiscipline'],
    youtubeId: 'hukjd_XBHRI',
    youtubeUrl: 'https://www.youtube.com/watch?v=hukjd_XBHRI',
    thumbnail: 'https://i.ytimg.com/vi/hukjd_XBHRI/hqdefault.jpg',
    ...ep(null),
    learnings: 'Ontdek de diepere dimensies van islamitisch vasten — als training van de ziel, spiegel voor je karakter en kans voor spirituele doorbraak.',
    keyInsights: [
      'Vasten is meer dan hongerdragen — het is een training van de ziel',
      'Siyam (vasten) heeft lichamelijke, mentale én spirituele dimensies',
      'Het vasten leert je beheersing van basisinstincten — de Jihad an-Nafs in praktijk',
      'Ramadan is de enige maand die Allah direct noemt als reden voor dankbaarheid',
      'Een persoonlijke revolutie begint met het beheersen van wat in je mond gaat',
    ],
    description: `Vasten is meer dan honger en dorst verdragen. Het is een training van de ziel, een spiegel voor je karakter en een kans voor spirituele doorbraak.\n\nWat zijn de diepere dimensies van Siyam (vasten) en hoe transformeer je deze maand van een rituele verplichting naar een persoonlijke revolutie?`,
    relatedSlugs: ['ramadan-dichter-bij-god-spirituele-groei-2', 'essentie-van-ramadan-de-koran-een-openbaring-die-levens-verandert-4']
  },
  {
    id: 1, episodeNumber: 1,
    popularRank: null, isPopular: false,
    slug: 'nieuwe-podcast-koffie-en-koran-kick-off-gesprek-over-geloof-het-leven-en-vragen-1',
    title: '#1 Nieuwe podcast Koffie & Koran: Kick-off gesprek over geloof, het leven en vragen',
    seoH1: 'Wat is Koffie & Koran? De eerste aflevering van de podcast over islam en zingeving',
    subtitle: 'Wie zijn Mohammed en Ahmet en waarom deze podcast?',
    date: '2024-03-01', consumptionTime: null,
    topic: 'geloof',
    tags: ['Introductie', 'Geloof', 'Podcast', 'Begin'],
    youtubeId: 'kY23wxvWHTU',
    youtubeUrl: 'https://www.youtube.com/watch?v=kY23wxvWHTU',
    thumbnail: 'https://i.ytimg.com/vi/kY23wxvWHTU/hqdefault.jpg',
    ...ep('0sPSOBi9mklyc6UA7t08lK'),
    learnings: 'Maak kennis met Mohammed en Ahmet — wie ze zijn, waarom ze Koffie & Koran begonnen en wat je kunt verwachten.',
    keyInsights: [
      'Koffie & Koran is geboren uit de behoefte aan eerlijke, diepgaande islamitische gesprekken',
      'Mohammed en Ahmet zijn gewone moslims die grote vragen stellen',
      'De podcast richt zich op Nederlandse moslims die nadenken over geloof en identiteit',
      'Geen prediken, geen dogma — wel eerlijke gesprekken over wat je echt bezighoudt',
      'Dit is de perfecte startplek als je nieuw bent met Koffie & Koran',
    ],
    description: `De eerste aflevering! Mohammed en Ahmet stellen zich voor, vertellen over hun achtergrond en leggen uit waarom ze Koffie en Koran zijn begonnen.\n\nWat drijft hen? Welke vragen hopen ze te beantwoorden? En wat kun je verwachten van deze podcast? De perfecte startplek als je nieuw bent.`,
    relatedSlugs: ['wat-geloven-moslims-en-wat-is-islam-3-dingen-10', 'ramadan-dichter-bij-god-spirituele-groei-2']
  }
]

export default episodes

// ---- Helper functions ----

export const popularEpisodes = episodes.filter(e => e.isPopular)
export const allEpisodes = episodes

export function getEpisodeBySlug(slug) {
  return episodes.find(e => e.slug === slug)
}

export function getEpisodesByTopic(topicId) {
  return episodes.filter(e => e.topic === topicId)
}

export function getRelatedEpisodes(slug) {
  const ep = getEpisodeBySlug(slug)
  if (!ep?.relatedSlugs) return []
  return ep.relatedSlugs.map(s => getEpisodeBySlug(s)).filter(Boolean)
}

export function getAdjacentEpisodes(slug) {
  // Adjacent by episodeNumber (chronological)
  const sorted = [...episodes].sort((a, b) => a.episodeNumber - b.episodeNumber)
  const idx = sorted.findIndex(e => e.slug === slug)
  return {
    prev: idx > 0 ? sorted[idx - 1] : null,
    next: idx < sorted.length - 1 ? sorted[idx + 1] : null
  }
}

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('nl-NL', {
    day: 'numeric', month: 'long', year: 'numeric'
  })
}
