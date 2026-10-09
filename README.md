# julian075.github.io

Personal academic website of Julian D. Santamaria, written in plain HTML and CSS.

## Structure

```
site/
  index.html          Home
  research.html       Research topics and projects
  publications.html   Full publication list
  cv.html             CV
  awards.html         Grants, awards and reviewing
  assets/css/style.css
  assets/js/data.js   Publications and news (edit this to add papers or news)
  assets/js/main.js   Renders publications and news
  assets/img/         Profile photo, favicon
  assets/pdf/         CV PDF
```

## Common edits

- **New paper:** add an entry at the top of `PUBLICATIONS` in `site/assets/js/data.js`. Set `selected: true` to show it on the home page.
- **News:** add an entry at the top of `NEWS` in the same file.
- **CV PDF:** replace `site/assets/pdf/CV_Long.pdf`.

## Preview locally

```bash
python3 -m http.server -d site 8000
```

Then open http://localhost:8000.

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which publishes the `site/` folder to the `gh-pages` branch.
