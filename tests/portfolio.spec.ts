import { test, expect } from '@playwright/test';

test.describe('Portfolio E2E', () => {
  test('should load the homepage and display the Hero section', async ({ page }) => {
    await page.goto('/');

    // Check if the developer name or main heading is visible
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Tech Stack').first().or(page.locator('text=Fredy').first())).toBeVisible();

    // Take screenshot of the Hero section
    await page.screenshot({ path: 'public/screenshots/portfolio-hero.png', fullPage: true });
  });

  test('should display the Tech Marquee', async ({ page }) => {
    await page.goto('/');

    // Check if the marquee elements are visible
    await expect(page.locator('text=Next.js').first()).toBeVisible();
    await expect(page.locator('text=Tailwind CSS').first()).toBeVisible();

    // Scroll slightly to make sure marquee is in view
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.screenshot({ path: 'public/screenshots/portfolio-marquee.png' });
  });

  test('should navigate to project detail page when clicking a project', async ({ page }) => {
    await page.goto('/');

    // Find the first project link that contains '/project/'
    const projectLink = page.locator('a[href*="/project/"]').first();
    
    // Make sure it exists before clicking
    await expect(projectLink).toBeVisible();
    
    const href = await projectLink.getAttribute('href');
    await projectLink.click();

    // Verify the URL changed to the project detail page
    await expect(page).toHaveURL(new RegExp(href as string));
    
    // Verify the back button exists
    await expect(page.locator('text=Back to Work')).toBeVisible();

    // Take screenshot of the project detail page
    await page.screenshot({ path: 'public/screenshots/portfolio-project-detail.png', fullPage: true });
  });
});
