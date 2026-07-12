# 🏋️ BeFit — BeFit for Health and Wealth

A responsive React (Vite) fitness mini-app built as part of a Full Stack Developer bootcamp assignment on **React Component Rendering** — covering component creation, props, reusable UI, and state management with `useState`.

🔗 **Live Demo (GitHub Pages):** https://ronak861.github.io/BeFit-ReactNative/
🔗 **Live Demo (Netlify):** https://befit-reactnativ.netlify.app/

![BeFit Preview](./befit-preview.png)

## ✨ Features

- **⚖️ Weight Tracker** — increment / decrement / reset counter
- **💡 Light Toggle** — on/off switch that also drives the app's theme
- **👋 Enter Name** — live greeting as you type
- **📝 Registration Form** — name, email, password with live preview
- **💳 Supplement Purchase** — card details + transaction password (show/hide)
- **👁️ Live Preview** — real-time reflection of form input via props

## 🛠️ Tech Stack

- React 18 (Vite)
- Component-based architecture — 6 reusable components rendered in `App.jsx`
- State management with `useState`
- Custom CSS (glassmorphism-inspired dark theme)

## 📂 Project Structure
src/
components/
Header.jsx
WeightCounter.jsx
LightToggle.jsx
NameGreeter.jsx
RegistrationForm.jsx
CardTransaction.jsx
App.jsx
App.css
main.jsx

## 🚀 Run Locally

```bash
git clone https://github.com/Ronak861/BeFit-ReactNative.git
cd BeFit-ReactNative
npm install
npm run dev
```

## 📦 Build & Deploy

```bash
npm run build
npm run deploy
```

---
Built with 💪 by [Ronak](https://github.com/Ronak861)
Save karo (Ctrl+S), phir push:
powershellgit add README.md
git commit -m "Update README with correct repo details and live links"
git push
GitHub repo page refresh karo — clean README with dono working links dikhega ✅create 100 out of 100 read memarkdown# 🏋️ BeFit — BeFit for Health and Wealth

A responsive, fully interactive React (Vite) fitness dashboard built as part of a Full Stack Developer bootcamp assignment on **React Component Rendering**. Demonstrates component creation, props-based data flow, reusable UI patterns, and multi-component state management with `useState`.

🔗 **Live Demo (GitHub Pages):** https://ronak861.github.io/BeFit-ReactNative/
🔗 **Live Demo (Netlify):** https://befit-reactnativ.netlify.app/
📦 **Repository:** https://github.com/Ronak861/BeFit-ReactNative

![BeFit Preview](./befit-preview.png)

---

## 📖 About

**BeFit** is a mini fitness & wellness dashboard that combines everyday health tracking (weight, ambience, personalized greetings) with a mock e-commerce flow (supplement purchase with card + password) and a real-time registration form with live preview — all built using clean, reusable React components.

---

## ✨ Features

| Component | Description |
|---|---|
| ⚖️ **Weight Tracker** | Increment / decrement / reset counter using `useState` |
| 💡 **Light Toggle** | On/off switch that also drives the entire app's light/dark theme |
| 👋 **Enter Name** | Live greeting — updates instantly as you type |
| 📝 **Registration Form** | Name, email, password fields with real-time live preview via props |
| 💳 **Supplement Purchase** | Card number, expiry, CVV + transaction password with show/hide toggle |
| 👁️ **Live Preview** | Reflects registration form input in real time using lifted state |

---

## 🛠️ Tech Stack

- **React 18** — component-based UI
- **Vite** — lightning-fast dev server & build tool
- **Custom CSS** — glassmorphism-inspired dark theme, fully responsive grid layout
- **State Management** — `useState` hooks across 6+ components
- **Props** — parent-to-child and child-to-parent data flow (e.g. `LightToggle`, `RegistrationForm` → `App.jsx`)

---

## 📂 Project Structure

BeFit-ReactNative/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── WeightCounter.jsx
│   │   ├── LightToggle.jsx
│   │   ├── NameGreeter.jsx
│   │   ├── RegistrationForm.jsx
│   │   └── CardTransaction.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/Ronak861/BeFit-ReactNative.git
cd BeFit-ReactNative
npm install
```

### Run Locally

```bash
npm run dev
```

Open the printed local URL (usually `http://localhost:5173/`) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🌐 Deployment

Deployed on **both** GitHub Pages and Netlify.

**GitHub Pages:**
```bash
npm run build
npm run deploy
```
Then enable it under repo **Settings → Pages → Source: `gh-pages` branch**.

**Netlify:** Connected directly to this GitHub repo for continuous auto-deployment on every push to `main`.

---

## 🎯 Learning Objectives Covered

- ✅ Creating multiple functional React components
- ✅ Rendering all components together in `App.jsx`
- ✅ Passing and using props (parent ↔ child communication)
- ✅ Managing component state with `useState`
- ✅ Reusable, consistent component styling
- ✅ Production build & multi-platform deployment (GitHub Pages + Netlify)

---

## 👤 Author

**Ronak**
GitHub: [@Ronak861](https://github.com/Ronak861)

---

## 📄 License

This project is open source and available for educational use.

---

⭐ If you found this project helpful for learning React fundamentals, consider giving it a star!
