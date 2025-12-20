import { test, expect } from '@playwright/test';

test.describe('Footer Design & Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('should display copyright text', async ({ page }) => {
    const currentYear = new Date().getFullYear();
    await expect(page.locator(`text=${currentYear}`)).toBeVisible();
    await expect(page.locator('text=Jawad Amir')).toBeVisible();
  });

  test('should display brand logo in footer', async ({ page }) => {
    const footerLogo = page.locator('footer').locator('text=Jawad').first();
    await expect(footerLogo).toBeVisible();
  });

  test('should have navigation links in footer', async ({ page }) => {
    const footer = page.locator('footer');

    await expect(footer.locator('a:has-text("Home")')).toBeVisible();
    await expect(footer.locator('a:has-text("Articles")')).toBeVisible();
    await expect(footer.locator('a:has-text("Portfolio")')).toBeVisible();
    await expect(footer.locator('a:has-text("About")')).toBeVisible();
  });

  test('should have social links in footer', async ({ page }) => {
    const footer = page.locator('footer');

    // Check for social icons
    const githubLink = footer.locator('a[href*="github"]');
    const linkedinLink = footer.locator('a[href*="linkedin"]');
    const emailLink = footer.locator('a[href*="mailto"]');

    await expect(githubLink).toBeVisible();
    await expect(linkedinLink).toBeVisible();
    await expect(emailLink).toBeVisible();
  });

  test('should have scroll to top button', async ({ page }) => {
    // Scroll down first
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Find scroll to top button
    const scrollButton = page.locator('button[aria-label="Scroll to top"]');
    await expect(scrollButton).toBeVisible();
  });

  test('scroll to top button should work', async ({ page }) => {
    // Scroll down
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    // Click scroll to top
    const scrollButton = page.locator('button[aria-label="Scroll to top"]');
    await scrollButton.click();

    // Wait for scroll animation
    await page.waitForTimeout(1000);

    // Verify scrolled to top
    const scrollPosition = await page.evaluate(() => window.scrollY);
    expect(scrollPosition).toBeLessThan(100);
  });

  test('footer links should be clickable', async ({ page }) => {
    const footer = page.locator('footer');
    const articlesLink = footer.locator('a:has-text("Articles")');

    await articlesLink.click();
    await expect(page).toHaveURL(/articles/);
  });

  test('should have glassmorphism social buttons', async ({ page }) => {
    const footer = page.locator('footer');
    const socialButton = footer.locator('.glass').first();
    await expect(socialButton).toBeVisible();
  });
});
