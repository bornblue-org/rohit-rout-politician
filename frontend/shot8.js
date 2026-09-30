const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 } });
  const errors = [];
  page.on('pageerror', e => errors.push(String(e)));
  await page.goto('http://localhost:4300/news', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${process.env.SCRATCH}/news-list.png`, fullPage: true });
  await page.goto('http://localhost:4300/news/sample-youtube', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${process.env.SCRATCH}/news-detail-yt.png`, fullPage: true });
  await page.goto('http://localhost:4300/news/sample-facebook', { waitUntil: 'networkidle' });
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${process.env.SCRATCH}/news-detail-fb.png`, fullPage: true });
  console.log('ERRORS', JSON.stringify(errors));
  await browser.close();
})();
