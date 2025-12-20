import { test, expect } from '@playwright/test';

test.describe('Navigation Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display header with logo', async ({ page }) => {
    const logo = page.locator('header').locator('text=Jawad').first();
    await expect(logo).toBeVisible();
  });

  test('should have all navigation links on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });

    await expect(page.locator('nav a:has-text("Home")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Articles")')).toBeVisible();
    await expect(page.locator('nav a:has-text("Portfolio")')).toBeVisible();
    await expect(page.locator('nav a:has-text("About")')).toBeVisible();
  });

  test('should navigate to Articles page', async ({ page }) => {
    await page.click('nav a:has-text("Articles")');
    await expect(page).toHaveURL(/articles/);
    await expect(page.locator('h1')).toContainText('Articles');
  });

  test('should navigate to Portfolio page', async ({ page }) => {
    await page.click('nav a:has-text("Portfolio")');
    await expect(page).toHaveURL(/portfolio/);
    await expect(page.locator('h1')).toContainText('Portfolio');
  });

  test('should navigate to About page', async ({ page }) => {
    await page.click('nav a:has-text("About")');
    await expect(page).toHaveURL(/about/);
  });

  test('should navigate back to Home via logo', async ({ page }) => {
    await page.click('nav a:has-text("Articles")');
    await expect(page).toHaveURL(/articles/);

    await page.click('header a:has-text("Jawad")');
    await expect(page).toHaveURL('/');
  });

  test('should highlight active navigation item', async ({ page }) => {
    await page.click('nav a:has-text("Articles")');

    const activeNav = page.locator('nav a:has-text("Articles")');
    await expect(activeNav).toHaveClass(/text-teal-400/);
  });
});

test.describe('Mobile Navigation', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
  });

  test('should show mobile menu button on small screens', async ({ page }) => {
    const menuButton = page.locator('button').filter({ has: page.locator('svg') }).first();
    await expect(menuButton).toBeVisible();
  });

  test('should toggle mobile menu', async ({ page }) => {
    // Find and click the menu button
    const menuButton = page.locator('header button');
    await menuButton.click();

    // Check if mobile menu appears
    await expect(page.locator('.md\\:hidden').locator('a:has-text("Articles")')).toBeVisible();
  });

  test('should navigate via mobile menu', async ({ page }) => {
    const menuButton = page.locator('header button');
    await menuButton.click();

    await page.click('.md\\:hidden a:has-text("About")');
    await expect(page).toHaveURL(/about/);
  });
});
