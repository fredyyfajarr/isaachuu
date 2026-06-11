import { test, type Page } from '@playwright/test';

test.use({
  viewport: { width: 1920, height: 1080 },
});

test.setTimeout(120_000);

async function capturePieces(page: Page, baseName: string, waitMs = 3000) {
  await page.waitForTimeout(waitMs);
  const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
  const vh = 1080;
  const totalPieces = Math.ceil(scrollHeight / vh) || 1;
  const maxPieces = Math.min(totalPieces, 5);

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
// 1. SACKET (port 8001)
// ─────────────────────────────────────────────────
test.describe('1. Sacket', () => {
  test('public pages', async ({ page }) => {
    // Home - event listing
    await page.goto('http://localhost:8001/', { waitUntil: 'load', timeout: 30000 });
    await capturePieces(page, 'sacket-home');

    // Login page
    await page.goto('http://localhost:8001/login', { waitUntil: 'load', timeout: 30000 });
    await capturePieces(page, 'sacket-login', 2000);

    // Navigate to event detail
    await page.goto('http://localhost:8001/', { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(2000);
    try {
      const link = page.locator('a[href*="/events/"]').first();
      if (await link.isVisible({ timeout: 5000 })) {
        await link.click();
        await page.waitForTimeout(3000);
        await capturePieces(page, 'sacket-event-detail');
      }
    } catch (e) { console.log('Sacket event detail skipped'); }
  });

  test('admin dashboard', async ({ page }) => {
    // Login as admin
    await page.goto('http://localhost:8001/login', { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(2000);
    try {
      await page.fill('input[name="email"]', 'admin@example.com');
      await page.fill('input[name="password"]', 'password');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(5000);

      // Admin dashboard
      await page.goto('http://localhost:8001/admin/dashboard', { waitUntil: 'load', timeout: 15000 });
      await capturePieces(page, 'sacket-admin-dashboard');

      // Admin scanner
      await page.goto('http://localhost:8001/admin/scanner', { waitUntil: 'load', timeout: 15000 });
      await capturePieces(page, 'sacket-admin-scanner', 2000);
    } catch (e) { console.log('Sacket admin failed:', e.message); }
  });
});

// ─────────────────────────────────────────────────
// 2. DIBELAJARIN LARAVEL (port 8002)
// ─────────────────────────────────────────────────
test.describe('2. Dibelajarin Laravel', () => {
  test('all pages', async ({ page }) => {
    // Home
    await page.goto('http://localhost:8002/', { waitUntil: 'load', timeout: 30000 });
    await capturePieces(page, 'dibelajarin-laravel-home');

    // Login
    await page.goto('http://localhost:8002/login', { waitUntil: 'load', timeout: 30000 });
    await capturePieces(page, 'dibelajarin-laravel-login', 2000);

    // Register
    await page.goto('http://localhost:8002/register', { waitUntil: 'load', timeout: 30000 });
    await capturePieces(page, 'dibelajarin-laravel-register', 2000);
  });
});

// ─────────────────────────────────────────────────
// 3. BI-DOM (frontend 3003, backend 8000) - Login as manager
// ─────────────────────────────────────────────────
test.describe('3. BI-DOM', () => {
  test('all pages with login', async ({ page }) => {
    // Login page
    await page.goto('http://localhost:3003/', { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/bi-dom-login.png' });
    console.log('  ✓ bi-dom-login.png');

    // Login as manager
    try {
      await page.fill('input[type="email"]', 'manager@dom.com');
      await page.fill('input[type="password"]', 'password123');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(8000);

      // Main dashboard after login
      await capturePieces(page, 'bi-dom-dashboard');

      // Inventory
      try {
        await page.goto('http://localhost:3003/inventory', { waitUntil: 'load', timeout: 20000 });
        await capturePieces(page, 'bi-dom-inventory');
      } catch (e) { console.log('BI-DOM inventory nav failed'); }

      // Products
      try {
        await page.goto('http://localhost:3003/products', { waitUntil: 'load', timeout: 20000 });
        await capturePieces(page, 'bi-dom-products');
      } catch (e) { console.log('BI-DOM products nav failed'); }

      // Invoices
      try {
        await page.goto('http://localhost:3003/invoices', { waitUntil: 'load', timeout: 20000 });
        await capturePieces(page, 'bi-dom-invoices');
      } catch (e) { console.log('BI-DOM invoices nav failed'); }

      // Import
      try {
        await page.goto('http://localhost:3003/import', { waitUntil: 'load', timeout: 20000 });
        await capturePieces(page, 'bi-dom-import', 2000);
      } catch (e) { console.log('BI-DOM import nav failed'); }

    } catch (e) {
      console.log('BI-DOM login failed:', e.message);
    }
  });
});

// ─────────────────────────────────────────────────
// 4. SWAPSKILL (frontend 3004, backend 8003)
// ─────────────────────────────────────────────────
test.describe('4. SwapSkill', () => {
  test('all pages with login', async ({ page }) => {
    // Landing page (no auth)
    await page.goto('http://localhost:3004/', { waitUntil: 'load', timeout: 30000 });
    await capturePieces(page, 'swapskill-landing');

    // Login page
    await page.goto('http://localhost:3004/login', { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: 'public/projects/swapskill-login.png' });
    console.log('  ✓ swapskill-login.png');

    // Login as student
    try {
      await page.fill('input[name="email"], input[type="email"]', 'andi.pratama@swapskill.test');
      await page.fill('input[name="password"], input[type="password"]', 'password123');
      await page.click('button[type="submit"]');
      await page.waitForTimeout(8000);

      // Dashboard after login
      await capturePieces(page, 'swapskill-dashboard');

      // Profile
      try {
        await page.goto('http://localhost:3004/profile', { waitUntil: 'load', timeout: 15000 });
        await capturePieces(page, 'swapskill-profile');
      } catch (e) { console.log('SwapSkill profile failed'); }

      // Barters
      try {
        await page.goto('http://localhost:3004/barters', { waitUntil: 'load', timeout: 15000 });
        await capturePieces(page, 'swapskill-barters');
      } catch (e) { console.log('SwapSkill barters failed'); }

      // Messages
      try {
        await page.goto('http://localhost:3004/messages', { waitUntil: 'load', timeout: 15000 });
        await capturePieces(page, 'swapskill-messages', 2000);
      } catch (e) { console.log('SwapSkill messages failed'); }

      // Settings
      try {
        await page.goto('http://localhost:3004/settings', { waitUntil: 'load', timeout: 15000 });
        await capturePieces(page, 'swapskill-settings', 2000);
      } catch (e) { console.log('SwapSkill settings failed'); }

    } catch (e) {
      console.log('SwapSkill login failed:', e.message);
    }
  });
});
