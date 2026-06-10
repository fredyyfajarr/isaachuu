import { test, expect } from '@playwright/test';

test.describe('Screenshot Puriva Automasi FNB Order', () => {
  const baseUrl = 'http://localhost:3002';

  test('Homepage', async ({ page }) => {
    await page.goto(baseUrl, { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/puriva-fnb-home.png', fullPage: true });
  });

  test('Admin Dashboard', async ({ page }) => {
    // Navigate directly, but wait
    await page.goto(`${baseUrl}/admin`, { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/puriva-fnb-admin.png', fullPage: true });
  });

  test('Menu Page', async ({ page }) => {
    await page.goto(`${baseUrl}/menu`, { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(8000); // Give extra time to load menus
    await page.screenshot({ path: 'public/projects/puriva-fnb-menu.png', fullPage: true });
  });
});
