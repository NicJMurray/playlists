# Spotify Playlists

Static source for Nic Murray's public Spotify playlists page.

Canonical URL: `https://playlists.njmurray.com`.

This repository is the standalone source for the playlists page.

## How The Code Works

This is a plain static HTML page:

- `index.html` contains the layout, CSS, playlist data, and a tiny footer-year script.
- Each playlist is an `<a class="playlist">` card.
- Each card links directly to `https://open.spotify.com/playlist/...`.
- Each card image uses the cover image URL from Spotify's public playlist data.
- There is no build step, server, API call, or client-side playlist fetch.

Because the playlist data is embedded directly in HTML, the page loads quickly and does not depend on Spotify API credentials. Updating the page means editing the playlist cards in `index.html` and committing the changed static output.

## Local Development

Open `index.html` in a browser, or serve the folder locally:

```sh
python -m http.server 5173
```

Then visit:

```txt
http://localhost:5173/
```

## Deployment

```sh
npm install
npm run deploy
```

Pushing to `main` also deploys through GitHub Actions. See [DEPLOYMENT.md](DEPLOYMENT.md) for the Pages project name and required secrets.

## Notes

- Navigation links point to the canonical subdomains.
