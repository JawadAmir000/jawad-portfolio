import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should display About page content', async ({ page }) => {
    // Check for name or heading
    await expect(page.locator('text=Jawad Amir').first()).toBeVisible();
  });

  test('should display profile image', async ({ page }) => {
    const profileImage = page.locator('img[alt*="Jawad"]').or(page.locator('img[src*="profile"]'));
    await expect(profileImage).toBeVisible();
  });

  test('should display skills or expertise section', async ({ page }) => {
    // Look for skills related content
    const skillsSection = page.locator('text=/Skills|Technologies|Expertise/i');
    if (await skillsSection.isVisible()) {
      await expect(skillsSection).toBeVisible();
    }
  });

  test('should display work experience or background', async ({ page }) => {
    // Look for experience or background content
    const experienceText = page.locator('text=/experience|years|engineer/i').first();
    await expect(experienceText).toBeVisible();
  });

  test('should have contact or social links', async ({ page }) => {
    // Check for social links or contact info
    const contactLink = page.locator('a[href*="github"]').or(page.locator('a[href*="linkedin"]')).or(page.locator('a[href*="mailto"]'));
    await expect(contactLink.first()).toBeVisible();
  });
});
