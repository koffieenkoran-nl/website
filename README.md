# koffieenkoran.nl

De site van de podcast **Koffie & Koran**. Wat op `main` staat, staat binnen een minuut live op
koffieenkoran.nl: Vercel haalt elke push op, bouwt de site en zet hem online.

## Inloggen

Eén gedeeld account voor alles: **koffieenkoran@gmail.com**.

| Waar | Wat je er doet |
|---|---|
| GitHub, account `koffieenkoran-nl` | deze repo: aanpassen, committen, pushen |
| Vercel, team `KOFFIE`, project `koffieenkoran` | zien wat er live staat, voorbeeldlinks, een versie terugzetten, het domein |

Op een nieuwe laptop: log in op github.com met dat account, clone deze repo en push via
GitHub Desktop of `gh auth login`. Vercel hoeft niet op de laptop; dat doe je in de browser.
Staat er tweestapsverificatie op, zorg dan dat jullie allebei bij de code kunnen.

## Lokaal werken

Vite + React + Tailwind. Nodig: Node 20 of nieuwer.

```bash
npm install      # eenmalig
npm run dev      # de site op http://localhost:5173, ververst bij elke wijziging
npm run build    # precies wat Vercel doet; faalt dit, dan faalt de deploy ook
```

## Waar wat staat

| Wat je wilt veranderen | Bestand |
|---|---|
| Een aflevering: titel, tekst, YouTube- en Spotify-link, thema | `src/data/episodes.js` |
| De routes op de Begin hier-pagina | `src/data/beginHier.js` |
| Teksten op de homepage, over ons, het vragenformulier | `src/components/` |
| Titel en beschrijving voor Google en social media | `index.html` |
| Wat Google vindt | `public/sitemap.xml` en `public/video-sitemap.xml` |

**Een nieuwe aflevering is drie plekken, niet één.** De sitemaps worden niet vanzelf gemaakt:
zet de aflevering in `episodes.js` én voeg de URL toe aan `public/sitemap.xml` en
`public/video-sitemap.xml`. De nieuwste aflevering bovenaan de homepage komt wel vanzelf uit de
Spotify-feed.

Het vragenformulier stuurt via FormSubmit naar koffieenkoran@gmail.com.

## Samen werken

1. **Eerst `git pull`**, elke keer voordat je begint. Dan bouw je verder op wat de ander deed.
2. **Push naar `main` is live.** Een tekst, een aflevering erbij: gewoon zo.
3. **Groter werk of twijfel: een branch.** `git switch -c naam` en pushen. Vercel maakt er een
   voorbeeldlink van (Deployments in het dashboard). Klopt het, voeg het dan samen in `main`.
4. **Nooit een `.env` of sleutel in de repo**, want de repo is openbaar. Geheimen gaan in Vercel
   onder Settings, Environment Variables.

Toch iets stuk op de live site? In Vercel onder Deployments zet Instant Rollback de vorige
versie terug. Herstel het daarna gewoon in git.

## Hosting

Alleen Vercel. `vercel.json` zegt hem dat dit een Vite-project is (bouwen met `npm run build`,
serveren uit `dist/`) en stuurt elke URL naar de app, zodat `/afleveringen/...` direct werkt.
Het domein staat bij de hoster op Vercel gericht. GitHub Pages staat uit;
`public/_redirects` en `public/.htaccess` doen alleen iets bij Netlify of Apache.

`v2.md` is de SEO-brief voor de volgende ronde aan de site.
