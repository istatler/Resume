# Jake Statler — Resume Website

A static resume site (`index.html` + `style.css`) with a cyberpunk theme and expandable job cards. No build step; fonts load from Google Fonts.

- Open `index.html` in a browser to preview.
- `resume-print.html` is the compact 2-page layout behind the PDFs. Edit it alongside `index.html`, then rebuild with
  `node scripts/build-pdf.js` (needs Playwright). Outputs `Jake-Statler-Resume.pdf` (light, linked from the site)
  and `Jake-Statler-Resume-Dark.pdf`.
- To publish: in the GitHub repo go to **Settings → Pages**, set the source to this branch and `/ (root)`.

Placeholders are marked with `TODO` comments in `index.html`.
