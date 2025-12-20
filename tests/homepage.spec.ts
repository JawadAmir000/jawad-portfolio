import { test, expect } from '@playwright/test';

test.describe('Homepage Design & Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should load homepage successfully', async ({ page }) => {
    await expect(page).toHaveTitle(/Jawad Amir/);
  });

  test('should display Hero section with correct content', async ({ page }) => {
    // Check hero heading
    await expect(page.locator('h1')).toContainText('Jawad Amir');

    // Check subtitle
    await expect(page.locator('text=Senior Software Engineer')).toBeVisible();
    await expect(page.locator('text=AI Innovation Specialist')).toBeVisible();

    // Check availability badge
    await expect(page.locator('text=Available for new opportunities')).toBeVisible();
  });

  test('should display stats section', async ({ page }) => {
    await expect(page.locator('text=6+')).toBeVisible();
    await expect(page.locator('text=Years Experience')).toBeVisible();
    await expect(page.locator('text=50+')).toBeVisible();
    await expect(page.locator('text=Projects Delivered')).toBeVisible();
    await expect(page.locator('text=100K+')).toBeVisible();
    await expect(page.locator('text=Users Impacted')).toBeVisible();
  });

  test('should have working CTA buttons', async ({ page }) => {
    const viewWorkBtn = page.locator('text=View My Work');
    await expect(viewWorkBtn).toBeVisible();

    const aboutMeBtn = page.locator('text=About Me');
    await expect(aboutMeBtn).toBeVisible();
  });

  test('should display social links', async ({ page }) => {
    // GitHub link
    const githubLink = page.locator('a[aria-label="GitHub"]');
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', 'https://github.com/JawadAmir000');

    // LinkedIn link
    const linkedinLink = page.locator('a[aria-label="LinkedIn"]');
    await expect(linkedinLink).toBeVisible();

    // Email link
    const emailLink = page.locator('a[aria-label="Email"]');
    await expect(emailLink).toBeVisible();
  });

  test('should display Work Experience section', async ({ page }) => {
    await expect(page.locator('text=Work Experience')).toBeVisible();
    await expect(page.locator('text=IQVIA')).toBeVisible();
    await expect(page.locator('text=Autonomix')).toBeVisible();
    await expect(page.locator('text=Secured Link Service')).toBeVisible();
  });

  test('should display Featured Articles section', async ({ page }) => {
    await expect(page.locator('text=Latest Articles')).toBeVisible();
  });
});

test.describe('Homepage Animations & Effects', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have glassmorphism navbar', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toHaveClass(/glass/);
  });

  test('should have gradient text on name', async ({ page }) => {
    const gradientText = page.locator('.gradient-text').first();
    await expect(gradientText).toBeVisible();
  });

  test('social icons should have hover effect', async ({ page }) => {
    const githubIcon = page.locator('a[aria-label="GitHub"]');
    await githubIcon.hover();
    // Visual check - the icon should be visible and interactive
    await expect(githubIcon).toBeVisible();
  });
});
