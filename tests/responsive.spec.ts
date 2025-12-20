import { test, expect } from '@playwright/test';

test.describe('Responsive Design - Desktop', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
  });

  test('should display desktop navigation', async ({ page }) => {
    // Desktop nav should be visible
    const desktopNav = page.locator('.hidden.md\\:flex');
    await expect(desktopNav).toBeVisible();

    // Mobile menu button should not be visible
    const mobileMenuBtn = page.locator('.md\\:hidden button');
    await expect(mobileMenuBtn).not.toBeVisible();
  });

  test('should display full hero content', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Senior Software Engineer')).toBeVisible();
  });

  test('should display work experience in full width', async ({ page }) => {
    const experienceSection = page.locator('text=Work Experience');
    await expect(experienceSection).toBeVisible();
  });
});

test.describe('Responsive Design - Tablet', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
  });

  test('should adapt layout for tablet', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should display content properly', async ({ page }) => {
    await expect(page.locator('text=Jawad Amir').first()).toBeVisible();
  });
});

test.describe('Responsive Design - Mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  test('should show mobile menu button', async ({ page }) => {
    const mobileMenuBtn = page.locator('header button');
    await expect(mobileMenuBtn).toBeVisible();
  });

  test('should hide desktop navigation', async ({ page }) => {
    const desktopNav = page.locator('nav .hidden.md\\:flex');
    await expect(desktopNav).not.toBeVisible();
  });

  test('should display hero content on mobile', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Jawad Amir').first()).toBeVisible();
  });

  test('should stack stats vertically on mobile', async ({ page }) => {
    await expect(page.locator('text=6+')).toBeVisible();
    await expect(page.locator('text=50+')).toBeVisible();
    await expect(page.locator('text=100K+')).toBeVisible();
  });

  test('mobile menu should work', async ({ page }) => {
    const menuButton = page.locator('header button');
    await menuButton.click();

    // Mobile menu should appear
    const mobileMenu = page.locator('.md\\:hidden').last();
    await expect(mobileMenu.locator('a:has-text("Articles")')).toBeVisible();
  });

  test('should navigate via mobile menu', async ({ page }) => {
    const menuButton = page.locator('header button');
    await menuButton.click();

    await page.click('.md\\:hidden a:has-text("Portfolio")');
    await expect(page).toHaveURL(/portfolio/);
  });
});

test.describe('Responsive Design - Small Mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 568 });
    await page.goto('/');
  });

  test('should display content on very small screens', async ({ page }) => {
    await expect(page.locator('h1')).toBeVisible();
  });

  test('should not have horizontal overflow', async ({ page }) => {
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    const viewportWidth = await page.evaluate(() => window.innerWidth);

    // Body should not be wider than viewport (no horizontal scroll)
    expect(bodyWidth).toBeLessThanOrEqual(viewportWidth + 10); // 10px tolerance
  });
});
