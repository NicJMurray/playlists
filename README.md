# Spotify Playlists

`playlists.njmurray.com` is a deliberately simple public index of Nic’s Spotify playlists. It is a static page rather than a Spotify integration.

## How it works

`index.html` contains the whole site:

- Each playlist is one `<a class="playlist">` card with a direct `open.spotify.com/playlist/...` link, a Spotify-hosted cover image, and a display title.
- Cover images are loaded lazily by the browser; there is no runtime request to the Spotify API and no access token.
- The embedded CSS creates the responsive card grid. The `:nth-child()` rules rotate accent colours across cards.
- The inline script only updates the footer year.
- The analytics snippet in the `<head>` is the only third-party script.

This makes the page fast and robust, but it also means the playlist list is manually curated. Editing a Spotify playlist’s title or image inside Spotify will not automatically alter this page.

## Updating a playlist

Duplicate or edit a playlist card in `index.html` and change:

1. the card `href` to the playlist’s canonical Spotify URL;
2. the `<img src>` to the playlist cover image URL;
3. the image `alt` text; and
4. the `<h3>` title.

Keep `target="_blank" rel="noopener"` on external Spotify links. There is no separate data file or generated output to update.

`wrangler.toml` only describes the Cloudflare Pages route; it is not part of the page’s runtime behaviour. `DEPLOYMENT.md` is retained for operational reference.
