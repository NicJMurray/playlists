# Working on the playlist gallery

This repository serves https://playlists.njmurray.com/ through the `playlists-git` Cloudflare Pages project. It is the curated gallery with album art; `playlist.njmurray.com` is a separate search app in `NicJMurray/spotify-playlist-finder-v2`.

Read README.md and DEPLOYMENT.md and inspect git status before changing source. Keep each card's title, Spotify URL, cover URL, and alt text aligned. Run `npm run build`, inspect the changed cards and check their image URLs when artwork changes. Push validated changes to `main` when publishing is requested; Cloudflare deploys automatically. Confirm the successful deployment's commit and the actual custom domain before claiming success.

Do not upload manually as the routine publishing path. Never commit generated `dist/`, credentials, or dependencies. The homepage catalog and app cards live in `NicJMurray/homepage`; update them only when this app's name, address, or description changes.
