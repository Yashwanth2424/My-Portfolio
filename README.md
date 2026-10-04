# Portfolio website

Personal portfolio of Thalka Yashwanth, M.Sc. Web Engineering student at TU Chemnitz, open to Werkstudent and internship roles in Germany.

Live site: https://yashwanth2424.github.io/My-Portfolio/

## What is on the page

A single page with Hero, Projects, Skills, About, Education and Contact, plus separate Impressum and Datenschutz views. The projects section shows three case studies (MockMentor, Road Accidents Explorer, Job Tracker) with live demo and code links.

## Tech

- React 18 and Vite 6
- Plain CSS with custom properties, no UI library
- Plus Jakarta Sans, self-hosted through `@fontsource-variable/plus-jakarta-sans`
- No cookies, no analytics, no third-party requests
- Deployed to GitHub Pages with `gh-pages`

## Run it locally

```bash
npm install
npm run dev
```

Other scripts:

| Command | What it does |
| --- | --- |
| `npm run lint` | Checks the code with ESLint |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally |
| `npm run deploy` | Builds and publishes `dist/` to GitHub Pages |

## Project structure

```
src/
  Components/   one folder per section (Header, Hero, Projects, Skills, About, Education, Contact, Footer, Legal)
  data/         content: projects.js, skills.js, legal.js
  assets/       Hero photo
  index.css     design tokens and shared classes
public/         favicon, social preview image, robots.txt, sitemap.xml
```

To change content, edit the files in `src/data/`. To change the Hero photo, replace `src/assets/HeroPhotos/hero-sample.webp`.

## Notes

- The Vite `base` is `/My-Portfolio/`. If the repository name changes, update `base` in `vite.config.js` and the URLs in `index.html`, `public/sitemap.xml` and `public/robots.txt`.
- A GitHub Actions workflow runs lint and build on every push and pull request.
