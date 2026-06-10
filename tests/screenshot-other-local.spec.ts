import { test, expect } from '@playwright/test';

test.describe('Screenshot Other Local Projects', () => {
  test('BI-DOM', async ({ page }) => {
    await page.goto('http://localhost:3003', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/bi-dom-home.png', fullPage: true });
  });

  test('SwapSkill', async ({ page }) => {
    await page.goto('http://localhost:3004', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/swapskill-home.png', fullPage: true });
  });

  test('Warung Mama Fina', async ({ page }) => {
    await page.goto('http://localhost:3005', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/warung-mama-fina-home.png', fullPage: true });
  });
});
