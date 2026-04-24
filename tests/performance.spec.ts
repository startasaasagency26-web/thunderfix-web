import { test, expect } from "@playwright/test";

test.describe("Mobile Navigation Performance", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("should open mobile menu and navigate smoothly", async ({ page }) => {
    // 1. Load homepage
    await page.goto("/");
    
    // 2. Check for horizontal overflow
    const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    const innerWidth = await page.evaluate(() => window.innerWidth);
    expect(scrollWidth).toBeLessThanOrEqual(innerWidth);

    // 3. Open hamburger menu
    const menuButton = page.getByRole("button", { name: /toggle menu/i });
    await menuButton.click();
    
    // 4. Verify menu items are visible
    const servicesLink = page.getByRole("link", { name: /services/i });
    await expect(servicesLink).toBeVisible();

    // 5. Click Services (should close menu and scroll)
    await servicesLink.click();
    
    // 6. Verify menu closed immediately
    await expect(servicesLink).not.toBeVisible();

    // 7. Check Locations navigation
    await menuButton.click();
    const locationsLink = page.getByRole("link", { name: /locations/i }).first();
    await locationsLink.click();
    
    // 8. Verify /locations route
    await expect(page).toHaveURL(/\/locations/);
    
    // 9. Check for console errors
    page.on("pageerror", (err) => {
      throw new Error(`Page error: ${err.message}`);
    });
  });
});
