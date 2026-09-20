# Akshith Thaduka — Portfolio

## Folder structure
```
portfolio/
├── index.html          → main page
├── css/style.css        → all styling, light + dark theme
├── js/script.js         → theme toggle, mobile nav, footer year
├── assets/               → put your photo + resume here
└── README.md
```

## How to run it (any time, on your laptop)
No build step, no install needed — it's plain HTML/CSS/JS.

**Easiest:** double-click `index.html` → opens in your default browser.

**Better (avoids some browser quirks):** run a tiny local server from inside the `portfolio` folder:
```bash
# Python (already on most machines)
python -m http.server 5500
# then open http://localhost:5500 in your browser
```
or, if you use VS Code, install the "Live Server" extension and click "Go Live".

## Things you still need to add
1. **Your photo** — save it as `assets/profile.jpg`, then in `index.html` find:
   ```html
   <div class="hero__photo">
     <span class="hero__initials">AT</span>
   </div>
   ```
   and replace the inner `<span>` with:
   ```html
   <img src="assets/profile.jpg" alt="Akshith Thaduka" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">
   ```

2. **Your résumé** — save the PDF as exactly `assets/Akshith_Thaduka_Resume.pdf` (or update the `href` in the two "Download résumé" buttons in `index.html` to match your filename).

## Deploying it online later (optional)
When you're ready to put this on a real link, the two easiest free options:
- **GitHub Pages**: push this folder to a GitHub repo, enable Pages in repo settings.
- **Netlify / Vercel**: drag-and-drop the `portfolio` folder in their dashboard.

## What's still placeholder content
- The **Autonomous Indoor Service Robot** and **StudyMate** / **Remote Sensing VQA** cards are marked "In progress" / "Experimenting" intentionally — update the status badges as those projects mature.
- SIH frontend project wasn't included yet — say the word and I'll add a card for it once you tell me what to say about status/link.
