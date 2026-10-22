![Spotify Playlists](.github/readme-banner.svg)

# Spotify Playlists

Static playlist index at `playlists.njmurray.com`. It presents a manually selected set of Spotify playlists as cover cards linking to Spotify.

This is not a Spotify client. There is no Spotify API request, OAuth flow, server function, build-generated data, or live metadata refresh.

## Request and render path

```text
Browser request
→ Cloudflare Pages
→ index.html
→ browser renders embedded playlist cards
→ cover images load from Spotify's image CDN
```

The playlist collection exists entirely in HTML. The repository remains usable without credentials because the only Spotify interactions are ordinary links and public image requests.

## Page structure

`index.html` contains:

1. metadata and Google Analytics;
2. the complete inline stylesheet;
3. shared project navigation;
4. a responsive `.playlist-grid`;
5. one anchor card per playlist;
6. a footer with a JavaScript-generated year.

Each card follows this shape:

```html
<a
  class="playlist"
  href="https://open.spotify.com/playlist/PLAYLIST_ID"
  target="_blank"
  rel="noopener"
>
  <img
    src="https://image-cdn-...spotifycdn.com/image/COVER_ID"
    alt="Playlist title playlist cover"
    loading="lazy"
  />
  <span class="playlist__body">
    <span>
      <h3>Playlist title</h3>
      <p>Open in Spotify</p>
    </span>
    <span class="playlist__arrow" aria-hidden="true">&#8594;</span>
  </span>
</a>
```

There is no separate playlist ID list or data model. The anchor, cover URL, accessible image text, and displayed title are four fields of the same manually maintained record.

## Browser behaviour

The cards are functional without JavaScript. Each opens the canonical Spotify URL in a new tab.

`rel="noopener"` prevents the newly opened page from receiving a reference to the source window. Cover images use native `loading="lazy"`, allowing the browser to defer off-screen requests.

The only page-specific JavaScript writes the current year into `#year`. Google Analytics runs separately and does not affect playlist rendering or navigation.

## Layout system

The site uses the same visual tokens as the other static project pages:

```css
--paper
--surface
--ink
--muted
--line
--green
--blue
--red
--gold
--shadow
```

The main grid is:

```css
grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
```

This creates as many equal-width columns as fit while preventing cards from becoming narrower than approximately 210 pixels.

Cover images use:

```css
aspect-ratio: 1;
object-fit: cover;
```

They remain square and crop safely if an upstream image has unexpected dimensions.

Accent colours rotate by DOM position:

- first card in each group of four: green;
- second: blue;
- third: red;
- fourth: gold.

This is implemented with `:nth-child()` rather than stored card metadata. Reordering or inserting cards automatically changes the following colour sequence.

Cards lift by two pixels on hover and strengthen their border. At smaller breakpoints, navigation and footer content wrap while the auto-fit grid continues choosing an appropriate column count.

## Data maintenance

Spotify changes are not pulled into the site. If a playlist is renamed, receives a new cover, becomes private, or is deleted, the HTML remains unchanged until manually edited.

For each update, keep these values aligned:

| Field | Purpose |
| --- | --- |
| Anchor `href` | Destination playlist. |
| Image `src` | Cover displayed before navigation. |
| Image `alt` | Accessible identification of the cover. |
| `<h3>` | Visible playlist title. |

Card order is source order. Moving an anchor block changes its display position and accent colour.

## External dependencies

The page can render from the repository alone, but two external services affect the final result:

- Spotify’s image CDN supplies covers.
- Google Analytics receives page measurement when not blocked.

If a cover request fails, the card structure and Spotify link remain, but there is no custom image fallback. If Spotify itself is unavailable, the page still renders and the outbound link fails only after selection.

## File map

| File | Responsibility |
| --- | --- |
| `index.html` | Playlist records, complete page structure, inline CSS, analytics, and footer script. |
| `wrangler.toml` | Cloudflare Pages project and static-output configuration. |
| `package.json` | Wrangler development and static build commands. |
| `DEPLOYMENT.md` | Hosting and domain reference. |

## Change map

| Change | Main location |
| --- | --- |
| Add, remove, reorder, or rename a playlist | `.playlist-grid` in `index.html` |
| Update a cover | Matching card’s `<img src>` and `alt` |
| Change grid density | `.playlist-grid` minimum column width |
| Change cover treatment | `.playlist img` |
| Change accent rotation | `.playlist:nth-child()` rules |
| Change navigation | Header `<nav>` |
| Change metadata or analytics | `<head>` |

## Design constraints

- The page is a curated snapshot, not a synchronised Spotify view.
- Playlist metadata is duplicated between Spotify and this HTML.
- Public CDN image URLs may change independently of playlist URLs.
- There is no client-side search, sorting, grouping, or filtering.
- Inline CSS keeps the page self-contained but concentrates structure, data, and presentation in one file.


## Publishing

Run `npm run build`, then commit and push to `main`. Cloudflare Pages builds and publishes the gallery automatically; see [DEPLOYMENT.md](DEPLOYMENT.md).
