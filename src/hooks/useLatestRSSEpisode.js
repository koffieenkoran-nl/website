import { useState, useEffect } from 'react'

// ─────────────────────────────────────────────────────────
// Stel hier je RSS feed URL in.
// Vind je op: podcasters.spotify.com → jouw show → RSS feed
// Voorbeeld: 'https://anchor.fm/s/abc123/podcast/rss'
// ─────────────────────────────────────────────────────────
export const RSS_FEED_URL = 'https://anchor.fm/s/f2f9cdb8/podcast/rss'

// rss2json.com: gratis CORS-veilige RSS → JSON converter
const API_URL = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(RSS_FEED_URL)}`

/**
 * useLatestRSSEpisode
 * Haalt de nieuwste aflevering op uit de Spotify/Anchor RSS feed.
 * Geeft terug: { episode, loading, error }
 *
 * episode = {
 *   title, description, thumbnail, spotifyUrl, pubDate, audioUrl
 * }
 */
export function useLatestRSSEpisode() {
  const [episode, setEpisode] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchLatest() {
      try {
        const res = await fetch(API_URL)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()

        if (data.status !== 'ok') throw new Error('RSS fetch mislukt')
        if (!data.items?.length) throw new Error('Geen afleveringen in feed')

        const item = data.items[0]
        const feedImage = data.feed?.image || null

        if (!cancelled) {
          setEpisode({
            title: item.title || '',
            description: item.description?.replace(/<[^>]+>/g, '').slice(0, 200) || '',
            thumbnail: item.thumbnail || feedImage || 'https://i.scdn.co/image/ab6765630000ba8a1ad6aac836af3e9c5c5d549b',
            spotifyUrl: item.link || item.guid || 'https://open.spotify.com/show/3FJ71fa5mvvvbm06hrtgk6',
            pubDate: item.pubDate || null,
            audioUrl: item.enclosure?.link || null,
          })
        }
      } catch (e) {
        if (!cancelled) setError(e)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchLatest()
    return () => { cancelled = true }
  }, [])

  return { episode, loading, error }
}
