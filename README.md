# Rock Solid TV — Website

Single-page site built with **Vite + React + Tailwind**. Bold, gritty, and fast. Includes:
- Episodes grid (embedded YouTube)
- Playlists section (links to full series)
- Merch (PayPal-ready buttons)
- Uncensored Vault (downloads)
- Blog cards
- Email box (demo only)
- Public Guestbook (localStorage)

## Local Development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. Create a new repo named `rock-solid-tv` (or any name).
2. Commit this project, push to `main`.
3. In GitHub: Settings → Pages → Build and deployment → Source: **GitHub Actions**.
4. Add this workflow file at `.github/workflows/deploy.yml` (included here). It will build & publish automatically to Pages on push to `main`.
5. Add your custom domain under Pages settings: **rock-solid-tv.com**. The `public/CNAME` file is included to pin it.
6. Point your domain’s DNS A/AAAA or ALIAS/CNAME records to GitHub Pages per their docs.

## Customization
- Update YouTube IDs in `src/App.jsx` → `EPISODES` and playlists in `PLAYLISTS`.
- Connect PayPal links on the Merch buttons.
- Replace `/public/og-image.png` and `/public/favicon.ico` with real assets.
- Add real blog content and vault files.
