const { test, expect } = require('@playwright/test');

test.describe('Footer Links', () => {
  test('should navigate to the privacy and terms pages', async ({ page }) => {
    // Navigate to the home page
    await page.goto('http://localhost:8000/index.html');

    // Click the Privacy link and verify the URL
    await page.click('a[href="privacy.html"]');
    await expect(page).toHaveURL('http://localhost:8000/privacy.html');

    // Go back to the home page
    await page.goBack();

    // Click the Terms link and verify the URL
    await page.click('a[href="terms.html"]');
    await expect(page).toHaveURL('http://localhost:8000/terms.html');
  });
});
