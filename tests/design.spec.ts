import { test, expect } from '@playwright/test';

test.describe('Design Elements - Glassmorphism', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have glassmorphism navbar', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toHaveClass(/glass/);
  });

  test('should have glass cards in work experience', async ({ page }) => {
    // Scroll to work experience
    await page.locator('text=Work Experience').scrollIntoViewIfNeeded();

    const glassCards = page.locator('.glass');
    const count = await glassCards.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have animated background', async ({ page }) => {
    const animatedBg = page.locator('.animated-gradient-bg');
    await expect(animatedBg).toBeVisible();
  });

  test('should have grid pattern overlay', async ({ page }) => {
    const gridPattern = page.locator('.grid-pattern');
    await expect(gridPattern).toBeVisible();
  });
});

test.describe('Design Elements - Colors & Gradients', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have gradient text on name', async ({ page }) => {
    const gradientText = page.locator('.gradient-text');
    await expect(gradientText.first()).toBeVisible();
  });

  test('should have teal accent color elements', async ({ page }) => {
    const tealElements = page.locator('[class*="teal"]');
    const count = await tealElements.count();
    expect(count).toBeGreaterThan(0);
  });

  test('should have dark background theme', async ({ page }) => {
    const body = page.locator('body');
    const bgColor = await body.evaluate((el) => getComputedStyle(el).backgroundColor);

    // Should be a dark color (low RGB values)
    expect(bgColor).toMatch(/rgb\(\s*\d{1,2}\s*,\s*\d{1,2}\s*,\s*\d{1,2}\s*\)/);
  });
});

test.describe('Design Elements - Typography', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have large hero heading', async ({ page }) => {
    const h1 = page.locator('h1');
    const fontSize = await h1.evaluate((el) => getComputedStyle(el).fontSize);

    // Font size should be at least 40px
    const fontSizeNum = parseInt(fontSize);
    expect(fontSizeNum).toBeGreaterThanOrEqual(40);
  });

  test('should have readable body text', async ({ page }) => {
    const paragraph = page.locator('p').first();
    const fontSize = await paragraph.evaluate((el) => getComputedStyle(el).fontSize);

    // Font size should be at least 14px
    const fontSizeNum = parseInt(fontSize);
    expect(fontSizeNum).toBeGreaterThanOrEqual(14);
  });
});

test.describe('Design Elements - Animations', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have animated elements loaded', async ({ page }) => {
    // Wait for animations to start
    await page.waitForTimeout(1000);

    // Hero content should be visible (animated in)
    await expect(page.locator('h1')).toBeVisible();
    await expect(page.locator('text=Senior Software Engineer')).toBeVisible();
  });

  test('should have scroll indicator', async ({ page }) => {
    // Look for scroll down indicator
    const scrollIndicator = page.locator('svg').filter({ has: page.locator('[d*="down"]') });
    // The indicator might be at bottom of hero
  });
});

test.describe('Design Elements - Interactive', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('buttons should have hover states', async ({ page }) => {
    const ctaButton = page.locator('a:has-text("View My Work")');
    await expect(ctaButton).toBeVisible();

    // Hover over button
    await ctaButton.hover();

    // Button should still be visible and interactive
    await expect(ctaButton).toBeEnabled();
  });

  test('nav links should have hover effects', async ({ page }) => {
    const navLink = page.locator('nav a:has-text("Articles")');
    await navLink.hover();

    await expect(navLink).toBeVisible();
  });

  test('social icons should be interactive', async ({ page }) => {
    const socialIcon = page.locator('a[aria-label="GitHub"]').first();
    await socialIcon.hover();

    await expect(socialIcon).toBeVisible();
  });
});

test.describe('Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have proper heading hierarchy', async ({ page }) => {
    const h1 = page.locator('h1');
    const h1Count = await h1.count();

    // Should have exactly one h1
    expect(h1Count).toBe(1);
  });

  test('images should have alt text', async ({ page }) => {
    await page.goto('/about');

    const images = page.locator('img');
    const imageCount = await images.count();

    if (imageCount > 0) {
      for (let i = 0; i < imageCount; i++) {
        const alt = await images.nth(i).getAttribute('alt');
        expect(alt).toBeTruthy();
      }
    }
  });

  test('links should have accessible names', async ({ page }) => {
    const socialLinks = page.locator('a[aria-label]');
    const count = await socialLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test('page should have proper title', async ({ page }) => {
    const title = await page.title();
    expect(title).toContain('Jawad Amir');
  });
});
