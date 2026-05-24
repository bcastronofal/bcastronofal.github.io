# Bastián Castro Nofal — personal website

This is a simple modular static site for GitHub Pages.

## File structure

```text
index.html              # Main skeleton: header, navigation, footer, section loaders
sections/home.html      # Home content
sections/research.html  # Research content
assets/css/styles.css   # Visual style
assets/js/main.js       # Loads sections and updates navigation
assets/img/profile.jpg  # Your local photo
robots.txt              # Search engine crawling instructions
sitemap.xml             # Search engine sitemap
```

## How to edit

- To edit your bio: change `sections/home.html`.
- To edit papers: change `sections/research.html`.
- To change colors, spacing, fonts, or layout: change `assets/css/styles.css`.
- To change the photo: upload your image to `assets/img/` and either name it `profile.jpg` or edit the `src` in `sections/home.html`.

## Important

Because the site uses JavaScript `fetch()` to load sections, opening `index.html` directly from your computer may not show the sections. It works once published on GitHub Pages. For local preview, use VS Code Live Server or run a small local server.
