import { test, expect } from '@playwright/test';

test.describe('Screenshot BI-DOM', () => {
  test('BI-DOM', async ({ page }) => {
    await page.goto('http://localhost:3003', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(10000); // Give it plenty of time to compile on first load
    await page.screenshot({ path: 'public/projects/bi-dom-home.png', fullPage: true });
  });
});
