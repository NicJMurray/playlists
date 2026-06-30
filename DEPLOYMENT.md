# Deployment

- Repo: `NicJMurray/playlists`
- Purpose: static showcase of Nic's Spotify playlists
- Canonical URL: `https://playlists.njmurray.com`
- Cloudflare type: Pages
- Cloudflare Pages project: `playlists`
- Deploy command: `npm run deploy`
- Wrangler command: `wrangler pages deploy . --project-name playlists --branch main`

## GitHub Actions

Pushing to `main` deploys through `.github/workflows/deploy.yml`.

Required repository secrets:

```text
CLOUDFLARE_API_TOKEN
CLOUDFLARE_ACCOUNT_ID
```

The Pages project may still show "No Git connection" in Cloudflare. That is fine when GitHub Actions deploys with Wrangler.
