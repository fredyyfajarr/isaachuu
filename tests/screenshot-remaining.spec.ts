import { test } from '@playwright/test';

test.use({
  viewport: { width: 1920, height: 1080 },
});

async function capturePieces(page, url, baseName) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(4000); // Wait for animations/data
    
    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
    const viewportHeight = 1080;
    const pieces = Math.ceil(scrollHeight / viewportHeight) || 1;
    
    const maxPieces = Math.min(pieces, 3);
    
    for (let i = 0; i < maxPieces; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), i * viewportHeight);
      await page.waitForTimeout(1000);
      
      const partSuffix = maxPieces > 1 ? `-part${i + 1}` : '';
      await page.screenshot({ path: `public/projects/${baseName}${partSuffix}.png`, fullPage: false });
    }
  } catch (e) {
    console.log(`Failed to capture ${url}: ${e.message}`);
  }
}

test.describe('Remaining Local Apps', () => {
  test('Puriva FNB', async ({ page }) => {
    // Puriva Automasi FNB (port 3006)
    await capturePieces(page, 'http://localhost:3006/', 'puriva-fnb-home');
    await capturePieces(page, 'http://localhost:3006/menu', 'puriva-fnb-menu');
    await capturePieces(page, 'http://localhost:3006/admin', 'puriva-fnb-admin');
  });

  test('Warung Mama Fina', async ({ page }) => {
    // Warung Mama Fina (port 3005)
    await capturePieces(page, 'http://localhost:3005/', 'wmf-home');
    await capturePieces(page, 'http://localhost:3005/menu', 'wmf-menu');
    await capturePieces(page, 'http://localhost:3005/about', 'wmf-about');
  });
});
