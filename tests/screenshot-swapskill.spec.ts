import { test, expect } from '@playwright/test';

test.describe('Screenshot SwapSkill', () => {
  test('SwapSkill', async ({ page }) => {
    await page.goto('http://localhost:3004', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(10000); // Give it plenty of time to compile on first load
    await page.screenshot({ path: 'public/projects/swapskill-home.png', fullPage: true });
  });
});
