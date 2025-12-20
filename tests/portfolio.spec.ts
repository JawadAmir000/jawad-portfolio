import { test, expect } from '@playwright/test';

test.describe('Portfolio Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/portfolio');
  });

  test('should display Portfolio page heading', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Portfolio');
  });

  test('should display project cards', async ({ page }) => {
    // Check for project titles
    await expect(page.locator('text=IQVIA Healthcare Platform').or(page.locator('text=Donna AI Platform'))).toBeVisible();
  });

  test('should have project descriptions', async ({ page }) => {
    const descriptions = page.locator('p');
    const count = await descriptions.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should navigate to project detail page', async ({ page }) => {
    const projectLink = page.locator('a[href*="/portfolio/"]').first();
    if (await projectLink.isVisible()) {
      await projectLink.click();
      await expect(page).toHaveURL(/portfolio\/.+/);
    }
  });
});

test.describe('Portfolio Project Detail', () => {
  test('should display project details for Donna AI Platform', async ({ page }) => {
    await page.goto('/portfolio/donna-ai-platform');

    await expect(page.locator('h1')).toBeVisible();
  });

  test('should display project details for IQVIA', async ({ page }) => {
    await page.goto('/portfolio/iqvia-healthcare-platform');

    await expect(page.locator('h1')).toBeVisible();
  });

  test('should display technology tags', async ({ page }) => {
    await page.goto('/portfolio/donna-ai-platform');

    // Look for tech tags or badges
    const techSection = page.locator('text=/Python|React|AI|Machine Learning/i');
    await expect(techSection.first()).toBeVisible();
  });
});
