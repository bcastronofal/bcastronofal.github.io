# Bastián Castro Nofal — personal website

A modular static site for GitHub Pages, with a minimal editorial style inspired by Moira Weigel's archived personal website.

## File structure

```text
index.html              # Main skeleton: metadata, header, navigation, footer, section loaders
sections/home.html      # Home / biography content
sections/research.html  # Publications and working papers
assets/css/styles.css   # Typography, spacing, layout, and responsive design
assets/js/main.js       # Loads sections and updates active navigation
assets/img/profile.jpg  # Your local profile photo
robots.txt              # Search engine crawling instructions
sitemap.xml             # Search engine sitemap
```

## How to edit

- Edit your bio and profile links in `sections/home.html`.
- Edit publications and working papers in `sections/research.html`.
- Edit typography, spacing, colors, or the photo size in `assets/css/styles.css`.
- If your uploaded photo has another name, either rename it to `assets/img/profile.jpg` or change the `src` in `sections/home.html`.
- Replace `TU_ID` in the Google Scholar link with your actual Scholar ID.

## GitHub Pages

This version is configured for:

```text
https://bcastronofal.github.io/
```

If you later use a custom domain, update `index.html`, `robots.txt`, and `sitemap.xml` with that domain.

## Preview note

Because the site uses JavaScript `fetch()` to load sections, opening `index.html` directly by double-clicking may not show the sections. It works once published on GitHub Pages. For local preview, use VS Code Live Server or run:

```bash
python -m http.server
```
