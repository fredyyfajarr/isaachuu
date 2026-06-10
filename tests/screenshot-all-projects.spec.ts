import { test, expect } from '@playwright/test';

test.setTimeout(120000); // 2 minutes per test

test.describe('Screenshot All Live Projects', () => {
  // ═══════════════════════════════════════════════════
  // 1. VIRTUAL PHOTOBOOTH - Complex (ML, PWA, GIF)
  // ═══════════════════════════════════════════════════
  test('Virtual Photobooth - Homepage', async ({ page }) => {
    await page.goto('https://virtual-photobooth-freedayz.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/photobooth-home.png', fullPage: true });
  });

  // ═══════════════════════════════════════════════════
  // 2. UNPAMCARE - Complex (AI Chatbot, Auth, Push)
  // ═══════════════════════════════════════════════════
  test('UnpamCare - Homepage', async ({ page }) => {
    await page.goto('https://unpamcare.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/unpamcare-home.png', fullPage: true });
  });

  test('UnpamCare - Login Page', async ({ page }) => {
    await page.goto('https://unpamcare.vercel.app/login', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'public/projects/unpamcare-login.png', fullPage: true });
  });

  // ═══════════════════════════════════════════════════
  // 3. CVKU - Complex (AI Resume Builder, PDF)
  // ═══════════════════════════════════════════════════
  test('CvKu - Homepage', async ({ page }) => {
    await page.goto('https://cvku.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/cvku-home.png', fullPage: true });
  });

  // ═══════════════════════════════════════════════════
  // 4. SPK ALL-IN-ONE - Medium-Complex (DSS, Charts)
  // ═══════════════════════════════════════════════════
  test('SPK All-in-One - Homepage', async ({ page }) => {
    await page.goto('https://spk-all-in-one.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/spk-aio-home.png', fullPage: true });
  });

  // ═══════════════════════════════════════════════════
  // 5. DIBELAJAR.IN (MERN) - Complex (LMS)
  // ═══════════════════════════════════════════════════
  test('DiBelajar.in - Homepage', async ({ page }) => {
    await page.goto('https://di-belajar-in.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/dibelajarin-home.png', fullPage: true });
  });

  test('DiBelajar.in - Courses Page', async ({ page }) => {
    await page.goto('https://di-belajar-in.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);
    // Try to navigate to courses or explore
    const coursesLink = page.locator('a:has-text("Course"), a:has-text("Kursus"), a:has-text("Explore")').first();
    if (await coursesLink.isVisible({ timeout: 3000 }).catch(() => false)) {
      await coursesLink.click();
      await page.waitForTimeout(3000);
    }
    await page.screenshot({ path: 'public/projects/dibelajarin-courses.png', fullPage: true });
  });

  // ═══════════════════════════════════════════════════
  // 6. FREVAN (E-Commerce) - Complex (MERN)
  // ═══════════════════════════════════════════════════
  test('Frevan Shop - Homepage', async ({ page }) => {
    await page.goto('https://frevan.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/frevan-home.png', fullPage: true });
  });

  test('Frevan Shop - Products Page', async ({ page }) => {
    await page.goto('https://frevan.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(2000);
    const productsLink = page.locator('a:has-text("Product"), a:has-text("Shop"), a:has-text("Produk")').first();
    if (await productsLink.isVisible({ timeout: 3000 }).catch(() => false)) {
      await productsLink.click();
      await page.waitForTimeout(3000);
    }
    await page.screenshot({ path: 'public/projects/frevan-products.png', fullPage: true });
  });

  // ═══════════════════════════════════════════════════
  // 7. ISAACHUU PORTFOLIO - Full page screenshot
  // ═══════════════════════════════════════════════════
  test('Portfolio - Full Homepage', async ({ page }) => {
    await page.goto('https://isaachuu.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(4000);
    await page.screenshot({ path: 'public/screenshots/portfolio-full.png', fullPage: true });
  });
});
