# koffieenkoran.nl

De site van de podcast. Wat op `main` staat, staat binnen een minuut live op koffieenkoran.nl:
Vercel haalt elke push op en zet hem online.

## Inloggen

Eén gedeeld account voor alles: **koffieenkoran@gmail.com**.

| Waar | Wat je er doet |
|---|---|
| GitHub, account `koffieenkoran-nl` | deze repo: aanpassen, committen, pushen |
| Vercel, team `KOFFIE`, project `koffieenkoran` | zien wat er live staat, voorbeeldlinks, een versie terugzetten, het domein |

Op een nieuwe laptop: log in op github.com met dat account, clone deze repo en push via
GitHub Desktop of `gh auth login`. Vercel hoeft niet op de laptop; dat doe je in de browser.
Staat er tweestapsverificatie op, zorg dan dat jullie allebei bij de code kunnen.

## Samen werken

1. **Eerst `git pull`**, elke keer voordat je begint. Dan bouw je verder op wat de ander deed.
2. **Push naar `main` is live.** Een tekst, een aflevering erbij: gewoon zo.
3. **Groter werk of twijfel: een branch.** `git switch -c naam` en pushen. Vercel maakt er een
   voorbeeldlink van (Deployments in het dashboard). Klopt het, voeg het dan samen in `main`.
4. **Nooit een `.env` of sleutel in de repo**, want de repo is openbaar. Geheimen gaan in Vercel
   onder Settings, Environment Variables.

Toch iets stuk op de live site? In Vercel onder Deployments zet Instant Rollback de vorige
versie terug. Herstel het daarna gewoon in git.

## Wat er nu in staat

De gebouwde site (React + Vite), geen broncode. Aanpassen kan hier dus nog niet. Een nieuwe
build verwerken wel: vervang alles behalve `vercel.json`, `.gitignore` en dit bestand door de
nieuwe `dist/`, commit en push.

## Als de broncode erin komt

De afleveringen (titels, teksten, YouTube-links) staan in de broncode. Zonder die code kan
alleen wie hem heeft iets aan de site veranderen. Zo zet je hem erin, in één commit:

1. Vervang de gebouwde bestanden door het hele project, zonder `node_modules`, `dist` en `.env`.
2. Zet `"framework": "vite"` in `vercel.json`. Dan bouwt Vercel zelf en serveert hij `dist/`.
   Zonder die regel serveert hij de losse bronbestanden en is de site stuk.
3. Zet `node_modules`, `dist` en `.env*` in `.gitignore`.
4. Eerst naar een branch en de voorbeeldlink bekijken, dan naar `main`. Check daarna dat
   `/sitemap.xml` en `/video-sitemap.xml` nog bestaan; die laatste is al eens zoekgeraakt.
