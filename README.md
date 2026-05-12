# Spotify Playlists

Static source for Nic Murray's public Spotify playlists page.

The production page is currently linked from `https://njmurray.com/playlists/`. This repository keeps the playlists page as its own small project so it can be deployed or reused independently from the main homepage repo.

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

Any static host can serve this repo from the root directory. If deploying with Cloudflare Pages, the build command can be left blank and the output directory should be `/`.

## Notes

- Navigation links point back to the canonical `njmurray.com` pages.
- The main homepage repo may also contain a copy of this page at `homepage/playlists/index.html` for the `/playlists/` route.
