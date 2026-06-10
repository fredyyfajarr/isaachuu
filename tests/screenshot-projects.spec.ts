import { test } from '@playwright/test';

test('capture live web app screenshots', async ({ page }) => {
  // Capture DiBelajar.in
  try {
    await page.goto('https://di-belajar-in.vercel.app/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'public/projects/dibelajarin-live.png', fullPage: true });
  } catch (e) {
    console.log('Failed to capture DiBelajar.in');
  }

  // Capture Frevan
  try {
    await page.goto('https://frevan.vercel.app/', { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'public/projects/frevan-live.png', fullPage: true });
  } catch (e) {
    console.log('Failed to capture Frevan');
  }
});
