const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1400, height: 400 } });
  await page.goto('http://localhost:4300/gallery', { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${process.env.SCRATCH}/gallery-banner.png` });
  await browser.close();
})();
