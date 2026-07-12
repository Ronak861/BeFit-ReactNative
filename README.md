# 🏋️ BeFit — BeFit for Health and Wealth

React (Vite) mini-app built for the FSD component-rendering assignment.

![BeFit Preview](./befit-preview.png)

## Features / Components
- **Header** — title + tagline
- **WeightCounter** — increment / decrement / reset
- **LightToggle** — light on/off toggle (also drives app theme)
- **NameGreeter** — enter name → live "Hello, {name}!"
- **RegistrationForm** — name/email/password + live preview via props
- **CardTransaction** — card number/expiry/cvv + transaction password (show/hide) for supplement purchase
- **Live Preview** — reflects registration form input in real time

Covers: component creation, props usage, reusable styling (`.box` pattern), and state (`useState`) across 6 components rendered from `App.jsx`.

## Run locally
```bash
npm install
npm run dev
```
Open the printed localhost URL.

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages
1. Push this project to a repo named `befit` under your GitHub account.
2. `vite.config.js` already sets `base: '/befit/'` and `package.json` sets `homepage`.
3. Deploy:
```bash
npm install
npm run build
npm run deploy
```
4. Enable GitHub Pages (Settings → Pages → source: `gh-pages` branch) if not automatic.

Live at: `https://<your-username>.github.io/befit/`
