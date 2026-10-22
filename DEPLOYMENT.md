# Deployment

- Repo: `NicJMurray/playlists`
- Purpose: static showcase of Nic's Spotify playlists
- Canonical URL: `https://playlists.njmurray.com`
- Cloudflare type: Pages
- Cloudflare Pages project: `playlists-git`
- Deploy method: Cloudflare Pages Git integration

## Cloudflare settings

- Repository: `NicJMurray/playlists`
- Production branch: `main`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `.`
- Custom domain: `playlists.njmurray.com`
- DNS: proxied CNAME to `playlists-git.pages.dev`

## Editing workflow

Edit the repo, commit to `main`, and Cloudflare deploys automatically.

The original `playlists` Pages project used Direct Upload and is retained as a fallback. Production uses `playlists-git` because Direct Upload projects cannot be converted to Git integration.

This repo does not use a GitHub Actions Wrangler deploy workflow. No `CLOUDFLARE_API_TOKEN` or `CLOUDFLARE_ACCOUNT_ID` GitHub secrets are needed for Pages deployment.
