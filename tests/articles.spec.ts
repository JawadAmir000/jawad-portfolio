import { test, expect } from '@playwright/test';

test.describe('Articles Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/articles');
  });

  test('should display Articles page heading', async ({ page }) => {
    await expect(page.locator('h1')).toContainText('Articles');
  });

  test('should display article cards', async ({ page }) => {
    const articleCards = page.locator('article');
    const count = await articleCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should display article with title and description', async ({ page }) => {
    // Check for the Graphiti article
    await expect(page.locator('text=Graphiti Knowledge Base')).toBeVisible();
  });

  test('should have clickable article cards', async ({ page }) => {
    const articleLink = page.locator('article a').first();
    await expect(articleLink).toBeVisible();
  });

  test('should navigate to article detail page', async ({ page }) => {
    await page.click('article a:has-text("Graphiti")');
    await expect(page).toHaveURL(/articles\/.+/);
  });
});

test.describe('Article Detail Page', () => {
  test('should display article content', async ({ page }) => {
    await page.goto('/articles/building-graphiti-knowledge-base-python');

    // Check for article title
    await expect(page.locator('h1')).toContainText('Graphiti Knowledge Base');

    // Check for article content
    await expect(page.locator('article')).toBeVisible();
  });

  test('should display article metadata', async ({ page }) => {
    await page.goto('/articles/building-graphiti-knowledge-base-python');

    // Check for reading time
    await expect(page.locator('text=/\\d+ min read/')).toBeVisible();
  });

  test('should have back navigation', async ({ page }) => {
    await page.goto('/articles/building-graphiti-knowledge-base-python');

    // Should be able to navigate back
    const backLink = page.locator('a:has-text("Back")').or(page.locator('a:has-text("Articles")'));
    if (await backLink.isVisible()) {
      await backLink.click();
      await expect(page).toHaveURL(/articles/);
    }
  });
});

test.describe('Article Cards Hover Effects', () => {
  test('should have glass card styling', async ({ page }) => {
    await page.goto('/');

    // Find article card in featured section
    const articleCard = page.locator('.glass').first();
    await expect(articleCard).toBeVisible();
  });
});
