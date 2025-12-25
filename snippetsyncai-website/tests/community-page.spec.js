const { test, expect } = require('@playwright/test');

test.describe('Community Page Access', () => {
  test('should redirect to the login page if not authenticated', async ({ page }) => {
    // Attempt to navigate to the community page
    await page.goto('http://localhost:8000/community.html');

    // Wait for the redirection to occur and verify the final URL
    await page.waitForURL('**/login.html');
    await expect(page).toHaveURL('http://localhost:8000/login.html');
  });
});
