import { test, expect, type Page } from '@playwright/test';

test.use({
  viewport: { width: 1920, height: 1080 },
});

test.setTimeout(120_000);

async function capturePieces(page: Page, baseName: string, waitMs = 3000) {
  await page.waitForTimeout(waitMs);
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const vh = 1080;
  const totalPieces = Math.ceil(scrollHeight / vh) || 1;
  const maxPieces = Math.min(totalPieces, 5);

  for (let i = 0; i < maxPieces; i++) {
    await page.evaluate((y) => window.scrollTo(0, y), i * vh);
    await page.waitForTimeout(800);
    const suffix = maxPieces > 1 ? `-part${i + 1}` : '';
    await page.screenshot({
      path: `public/projects/${baseName}${suffix}.png`,
      fullPage: false,
    });
    console.log(`  ✓ ${baseName}${suffix}.png`);
  }
}

test.describe('3. BI-DOM', () => {
  test('all pages with login', async ({ page }) => {
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', err => console.log('BROWSER ERROR:', err.message));
    page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure()?.errorText));

    // Login page
    await page.goto('http://localhost:3003/login', { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(3000);

    // Login as manager
    try {
      await page.fill('input[type="email"]', 'manager@dom.com');
      await page.fill('input[type="password"]', 'password123');
      
      // Focus button and press Enter instead of just click
      await page.focus('button[type="submit"]');
      await page.keyboard.press('Enter');
      
      console.log('Login submitted, waiting for URL change...');
      await page.waitForURL('http://localhost:3003/', { timeout: 15000 }).catch(() => console.log('URL did not change to dashboard'));
      await page.waitForTimeout(5000);

      // Verify we are not on login page anymore
      const currentUrl = page.url();
      if (currentUrl.includes('login')) {
          console.log('Login failed, still on login page');
          // take a debug screenshot
          await page.screenshot({ path: 'public/projects/bi-dom-login-failed.png' });
          return;
      }

      await page.screenshot({ path: 'public/projects/bi-dom-login.png' });

      // Main dashboard after login
      await capturePieces(page, 'bi-dom-dashboard');

      // Inventory
      try {
        await page.goto('http://localhost:3003/inventory', { waitUntil: 'load', timeout: 20000 });
        await capturePieces(page, 'bi-dom-inventory');
      } catch (e) { console.log('BI-DOM inventory nav failed'); }

      // Products
      try {
        await page.goto('http://localhost:3003/products', { waitUntil: 'load', timeout: 20000 });
        await capturePieces(page, 'bi-dom-products');
      } catch (e) { console.log('BI-DOM products nav failed'); }

      // Invoices
      try {
        await page.goto('http://localhost:3003/invoices', { waitUntil: 'load', timeout: 20000 });
        await capturePieces(page, 'bi-dom-invoices');
      } catch (e) { console.log('BI-DOM invoices nav failed'); }

      // Import
      try {
        await page.goto('http://localhost:3003/import', { waitUntil: 'load', timeout: 20000 });
        await capturePieces(page, 'bi-dom-import', 2000);
      } catch (e) { console.log('BI-DOM import nav failed'); }

    } catch (e: any) {
      console.log('BI-DOM login failed:', e.message);
    }
  });
});
