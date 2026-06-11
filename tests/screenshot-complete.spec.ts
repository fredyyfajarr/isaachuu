import { test, type Page } from '@playwright/test';

test.use({
  viewport: { width: 1920, height: 1080 },
});

// Increase timeout for all tests
test.setTimeout(120_000);

/**
 * Captures a page in 1920x1080 pieces by scrolling.
 * If the page is short enough, just one screenshot is taken (no "-part1" suffix).
 */
async function capturePieces(page: Page, baseName: string, waitMs = 3000) {
  await page.waitForTimeout(waitMs);

  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const vh = 1080;
  const totalPieces = Math.ceil(scrollHeight / vh) || 1;
  const maxPieces = Math.min(totalPieces, 5); // cap at 5 parts

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

// ─────────────────────────────────────────────────
// 1. DIBELAJARIN MERN (Live)
// ─────────────────────────────────────────────────
test.describe('1. Dibelajarin MERN', () => {
  test('all pages', async ({ page }) => {
    // Home
    await page.goto('https://di-belajar-in.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'dibelajarin-home');

    // Courses 
    await page.goto('https://di-belajar-in.vercel.app/courses', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'dibelajarin-courses');

    // Login
    await page.goto('https://di-belajar-in.vercel.app/login', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'dibelajarin-login', 2000);

    // Register
    await page.goto('https://di-belajar-in.vercel.app/register', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'dibelajarin-register', 2000);
  });
});

// ─────────────────────────────────────────────────
// 2. FREVAN E-COMMERCE (Live)
// ─────────────────────────────────────────────────
test.describe('2. Frevan', () => {
  test('all pages', async ({ page }) => {
    // Home
    await page.goto('https://frevan.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'frevan-home');

    // Products
    await page.goto('https://frevan.vercel.app/products', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'frevan-products');

    // Cart
    await page.goto('https://frevan.vercel.app/cart', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'frevan-cart', 2000);

    // Login
    await page.goto('https://frevan.vercel.app/login', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'frevan-login', 2000);
  });
});

// ─────────────────────────────────────────────────
// 3. VIRTUAL PHOTOBOOTH (Live)
// ─────────────────────────────────────────────────
test.describe('3. Photobooth', () => {
  test('all pages', async ({ page }) => {
    // Home
    await page.goto('https://virtual-photobooth-freedayz.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'photobooth-home');

    // Gallery
    await page.goto('https://virtual-photobooth-freedayz.vercel.app/gallery', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'photobooth-gallery');

    // Booth (camera page)
    await page.goto('https://virtual-photobooth-freedayz.vercel.app/booth', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'photobooth-booth', 2000);
  });
});

// ─────────────────────────────────────────────────
// 4. UNPAMCARE (Live)
// ─────────────────────────────────────────────────
test.describe('4. UnpamCare', () => {
  test('all pages', async ({ page }) => {
    // Home/Landing
    await page.goto('https://unpamcare.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'unpamcare-home');

    // Login
    await page.goto('https://unpamcare.vercel.app/login', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'unpamcare-login', 2000);

    // Try to login and capture dashboard
    try {
      await page.fill('input[type="text"], input[name="nim"], input[placeholder*="NIM"]', '2255201020');
      await page.fill('input[type="password"]', 'password');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(5000);
      await capturePieces(page, 'unpamcare-dashboard');
    } catch (e) {
      console.log('UnpamCare login failed, capturing login page only');
      await page.screenshot({ path: 'public/projects/unpamcare-dashboard.png' });
    }
  });
});

// ─────────────────────────────────────────────────
// 5. CVKU (Live)
// ─────────────────────────────────────────────────
test.describe('5. CvKu', () => {
  test('all pages', async ({ page }) => {
    // Landing
    await page.goto('https://cvku.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'cvku-home');

    // Login
    await page.goto('https://cvku.vercel.app/login', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'cvku-login', 2000);

    // Register
    await page.goto('https://cvku.vercel.app/register', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'cvku-register', 2000);
  });
});

// ─────────────────────────────────────────────────
// 6. SPK ALL-IN-ONE (Live) 
// ─────────────────────────────────────────────────
test.describe('6. SPK All-in-One', () => {
  test('all pages', async ({ page }) => {
    // Home
    await page.goto('https://spk-all-in-one.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
    await capturePieces(page, 'spk-aio-home');

    // Click "Buka" on the example project to open details
    try {
      await page.click('text=Buka', { timeout: 5000 });
      await page.waitForTimeout(3000);
      await capturePieces(page, 'spk-aio-project');

      // Navigate to criteria tab
      const url = page.url();
      await page.goto(url.replace(/\/[^/]*$/, '') + '/criteria', { waitUntil: 'networkidle', timeout: 30000 });
      await capturePieces(page, 'spk-aio-criteria');

      // Navigate to alternatives tab
      await page.goto(url.replace(/\/[^/]*$/, '') + '/alternatives', { waitUntil: 'networkidle', timeout: 30000 });
      await capturePieces(page, 'spk-aio-alternatives');

      // Navigate to calculate tab
      await page.goto(url.replace(/\/[^/]*$/, '') + '/calculate', { waitUntil: 'networkidle', timeout: 30000 });
      await capturePieces(page, 'spk-aio-calculate');

      // Navigate to result tab
      await page.goto(url.replace(/\/[^/]*$/, '') + '/result', { waitUntil: 'networkidle', timeout: 30000 });
      await capturePieces(page, 'spk-aio-result');
    } catch (e) {
      console.log('SPK navigation failed:', e.message);
    }
  });
});
