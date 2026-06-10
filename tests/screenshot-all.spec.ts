import { test } from '@playwright/test';
import * as fs from 'fs';

test.use({
  viewport: { width: 1920, height: 1080 },
});

async function capturePieces(page, url, baseName) {
  try {
    await page.goto(url, { waitUntil: 'load', timeout: 30000 });
    await page.waitForTimeout(4000); // Wait for animations/data
    
    const scrollHeight = await page.evaluate(() => document.body.scrollHeight);
    const viewportHeight = 1080;
    const pieces = Math.ceil(scrollHeight / viewportHeight) || 1;
    
    // Only capture up to 3 pieces per page to avoid gallery bloat
    const maxPieces = Math.min(pieces, 3);
    
    for (let i = 0; i < maxPieces; i++) {
      await page.evaluate((y) => window.scrollTo(0, y), i * viewportHeight);
      await page.waitForTimeout(1000);
      
      const partSuffix = maxPieces > 1 ? `-part${i + 1}` : '';
      await page.screenshot({ path: `public/projects/${baseName}${partSuffix}.png`, fullPage: false });
    }
  } catch (e) {
    console.log(`Failed to capture ${url}: ${e.message}`);
  }
}

test.describe('Comprehensive 16:9 Screenshots', () => {

  test('Local Sacket', async ({ page }) => {
    await capturePieces(page, 'http://127.0.0.1:8001/', 'sacket-home');
    await capturePieces(page, 'http://127.0.0.1:8001/login', 'sacket-login');
  });

  test('Local Dibelajarin', async ({ page }) => {
    await capturePieces(page, 'http://127.0.0.1:8002/', 'dibelajarin-laravel-home');
    await capturePieces(page, 'http://127.0.0.1:8002/login', 'dibelajarin-laravel-login');
  });

  test('Live UnpamCare', async ({ page }) => {
    await capturePieces(page, 'https://unpamcare.vercel.app/', 'unpamcare-home');
    await capturePieces(page, 'https://unpamcare.vercel.app/login', 'unpamcare-login');
    await capturePieces(page, 'https://unpamcare.vercel.app/dashboard', 'unpamcare-dashboard');
  });

  test('Live CvKu', async ({ page }) => {
    await capturePieces(page, 'https://cvku.vercel.app/', 'cvku-home');
    await capturePieces(page, 'https://cvku.vercel.app/dashboard', 'cvku-dashboard');
  });

  test('Live SPK', async ({ page }) => {
    await capturePieces(page, 'https://spk-all-in-one.vercel.app/', 'spk-aio-home');
    await capturePieces(page, 'https://spk-all-in-one.vercel.app/dashboard', 'spk-aio-dashboard');
  });

  test('Live Dibelajarin MERN', async ({ page }) => {
    await capturePieces(page, 'https://di-belajar-in.vercel.app/', 'dibelajarin-home');
    await capturePieces(page, 'https://di-belajar-in.vercel.app/courses', 'dibelajarin-courses');
  });

  test('Live Frevan', async ({ page }) => {
    await capturePieces(page, 'https://frevan.vercel.app/', 'frevan-home');
    await capturePieces(page, 'https://frevan.vercel.app/products', 'frevan-products');
  });

  test('Live Photobooth', async ({ page }) => {
    await capturePieces(page, 'https://virtual-photobooth-freedayz.vercel.app/', 'photobooth-home');
    await capturePieces(page, 'https://virtual-photobooth-freedayz.vercel.app/gallery', 'photobooth-gallery');
  });

  test('Local SwapSkill', async ({ page }) => {
    await capturePieces(page, 'http://localhost:3004/', 'swapskill-home');
    await capturePieces(page, 'http://localhost:3004/barters', 'swapskill-barters');
  });

  test('Local BI-DOM', async ({ page }) => {
    await capturePieces(page, 'http://localhost:3003/', 'bi-dom-home');
    await capturePieces(page, 'http://localhost:3003/inventory', 'bi-dom-inventory');
  });

  test('Local Puriva FNB', async ({ page }) => {
    await capturePieces(page, 'http://localhost:3000/', 'puriva-fnb-home');
    await capturePieces(page, 'http://localhost:3000/admin', 'puriva-fnb-admin');
  });

  test('Local Warung Mama Fina', async ({ page }) => {
    await capturePieces(page, 'http://localhost:3005/', 'warung-mama-fina-home');
    await capturePieces(page, 'http://localhost:3005/dashboard/barang', 'warung-mama-fina-barang');
  });
});
