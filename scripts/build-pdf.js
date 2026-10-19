// Builds the PDF resumes from resume-print.html.
// Usage: node scripts/build-pdf.js   (requires the playwright package)
const path = require('path');
const { chromium } = require('playwright');

(async () => {
  const root = path.resolve(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('file://' + path.join(root, 'resume-print.html'), { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  const opts = { format: 'Letter', printBackground: true, preferCSSPageSize: true };
  await page.pdf({ ...opts, path: path.join(root, 'Jake-Statler-Resume.pdf') });

  await page.evaluate(() => document.documentElement.classList.add('dark'));
  await page.pdf({ ...opts, path: path.join(root, 'Jake-Statler-Resume-Dark.pdf') });

  await browser.close();
})();
