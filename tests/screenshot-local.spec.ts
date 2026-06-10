import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 1920, height: 1080 },
});

test.describe('Local Laravel Apps Screenshots', () => {

  test('Sacket Ticketing', async ({ page }) => {
    try {
      await page.goto('http://127.0.0.1:8001/', { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: 'public/projects/sacket-home.png', fullPage: true });

      await page.goto('http://127.0.0.1:8001/login', { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'public/projects/sacket-login.png', fullPage: true });
    } catch (e) {
      console.log('Sacket failed or timed out. Ensure database is running.');
    }
  });

  test('Dibelajarin 2.0 Laravel', async ({ page }) => {
    try {
      await page.goto('http://127.0.0.1:8002/', { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: 'public/projects/dibelajarin-laravel-home.png', fullPage: true });

      await page.goto('http://127.0.0.1:8002/login', { waitUntil: 'load', timeout: 30000 });
      await page.waitForTimeout(2000);
      await page.screenshot({ path: 'public/projects/dibelajarin-laravel-login.png', fullPage: true });
    } catch (e) {
      console.log('Dibelajarin failed or timed out. Ensure database is running.');
    }
  });

});
