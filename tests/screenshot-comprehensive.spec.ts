import { test, expect } from '@playwright/test';

test.use({
  viewport: { width: 1920, height: 1080 },
});

test.describe('Comprehensive Feature Screenshots', () => {

  test('BI-DOM', async ({ page }) => {
    // Wait for compile
    await page.goto('http://localhost:3003', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(8000);
    await page.screenshot({ path: 'public/projects/bi-dom-home.png', fullPage: true });

    await page.goto('http://localhost:3003/inventory', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/bi-dom-inventory.png', fullPage: true });

    await page.goto('http://localhost:3003/products', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/bi-dom-products.png', fullPage: true });
    
    await page.goto('http://localhost:3003/invoices', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/bi-dom-invoices.png', fullPage: true });
  });

  test('SwapSkill', async ({ page }) => {
    await page.goto('http://localhost:3004', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(8000);
    await page.screenshot({ path: 'public/projects/swapskill-home.png', fullPage: true });

    await page.goto('http://localhost:3004/dashboard', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/swapskill-dashboard.png', fullPage: true });

    await page.goto('http://localhost:3004/barters', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/swapskill-barters.png', fullPage: true });
  });

  test('Warung Mama Fina', async ({ page }) => {
    await page.goto('http://localhost:3005', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(8000);
    await page.screenshot({ path: 'public/projects/warung-mama-fina-home.png', fullPage: true });

    await page.goto('http://localhost:3005/barang', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/warung-mama-fina-barang.png', fullPage: true });

    await page.goto('http://localhost:3005/penjualan', { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(3000);
    await page.screenshot({ path: 'public/projects/warung-mama-fina-penjualan.png', fullPage: true });
  });

});
