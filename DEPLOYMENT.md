# Deployment

- Repo: `NicJMurray/playlists`
- Purpose: static showcase of Nic's Spotify playlists
- Canonical URL: `https://playlists.njmurray.com`
- Cloudflare type: Pages
- Cloudflare Pages project: `playlists`
- Deploy method: Cloudflare Pages Git integration

## Cloudflare settings

- Repository: `NicJMurray/playlists`
- Production branch: `main`
- Framework preset: `None`
- Build command: leave blank
- Build output directory: `/`
- Custom domain: `playlists.njmurray.com`

## Editing workflow

Edit the repo, commit to `main`, and Cloudflare deploys automatically.

This repo no longer uses a GitHub Actions Wrangler deploy workflow. No `CLOUDFLARE_API_TOKEN` or `CLOUDFLARE_ACCOUNT_ID` GitHub secrets are needed for Pages deployment.
