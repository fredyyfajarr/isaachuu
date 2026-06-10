import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 1920, height: 1080 },
});

test.describe('Live Vercel Apps Screenshots', () => {

  test('UnpamCare', async ({ page }) => {
    await page.goto('https://unpamcare.vercel.app/', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/unpamcare-home.png', fullPage: true });

    await page.goto('https://unpamcare.vercel.app/login', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/unpamcare-login.png', fullPage: true });

    await page.goto('https://unpamcare.vercel.app/dashboard', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/unpamcare-dashboard.png', fullPage: true });
  });

  test('CvKu AI Resume', async ({ page }) => {
    await page.goto('https://cvku.vercel.app/', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/cvku-home.png', fullPage: true });

    await page.goto('https://cvku.vercel.app/dashboard', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/cvku-dashboard.png', fullPage: true });

    await page.goto('https://cvku.vercel.app/editor/example', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/cvku-editor.png', fullPage: true });
  });

  test('SPK All-in-One', async ({ page }) => {
    await page.goto('https://spk-all-in-one.vercel.app/', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/spk-aio-home.png', fullPage: true });

    await page.goto('https://spk-all-in-one.vercel.app/dashboard', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/spk-aio-dashboard.png', fullPage: true });

    await page.goto('https://spk-all-in-one.vercel.app/criteria', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/spk-aio-criteria.png', fullPage: true });
  });

  test('DiBelajar.in MERN', async ({ page }) => {
    await page.goto('https://di-belajar-in.vercel.app/', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/dibelajarin-home.png', fullPage: true });

    await page.goto('https://di-belajar-in.vercel.app/courses', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/dibelajarin-courses.png', fullPage: true });

    await page.goto('https://di-belajar-in.vercel.app/login', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/dibelajarin-login.png', fullPage: true });
  });

  test('Frevan E-commerce', async ({ page }) => {
    await page.goto('https://frevan.vercel.app/', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/frevan-home.png', fullPage: true });

    await page.goto('https://frevan.vercel.app/products', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/frevan-products.png', fullPage: true });

    await page.goto('https://frevan.vercel.app/cart', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/frevan-cart.png', fullPage: true });
  });

  test('Virtual Photobooth', async ({ page }) => {
    await page.goto('https://virtual-photobooth-freedayz.vercel.app/', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(5000);
    await page.screenshot({ path: 'public/projects/photobooth-home.png', fullPage: true });

    await page.goto('https://virtual-photobooth-freedayz.vercel.app/gallery', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/photobooth-gallery.png', fullPage: true });
    
    // We cannot easily test camera permissions via playwright without configs, so we'll stick to static pages
  });

});
