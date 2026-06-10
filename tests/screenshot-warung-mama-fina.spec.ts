import { test, expect } from '@playwright/test';

test.describe('Screenshot Warung Mama Fina', () => {
  test('Warung Mama Fina', async ({ page }) => {
    await page.goto('http://localhost:3005', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(10000); // Give it plenty of time to compile on first load
    await page.screenshot({ path: 'public/projects/warung-mama-fina-home.png', fullPage: true });
  });
});
