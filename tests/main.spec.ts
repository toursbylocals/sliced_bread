import { expect, test } from "@playwright/test";

test.describe("Main Flow", () => {
  test("should have the submit button disabled when fields are empty", async ({ page }) => {
    await page.goto("http://localhost:3000");

    const submitButton = page.locator('[automation-id="submit-button"]');

    await expect(submitButton).toBeDisabled();
  });

  test("should successfully submit the form, display a modal with OrderID and navigate to Details Page", async ({
    page
  }) => {
    await page.goto("http://localhost:3000");

    await page.click('text="Select country"');
    await page.click('span:has-text("Canada")');
    await page.click('text="Select region"');
    await page.click('span:has-text("British Columbia")');
    await page.fill('input[name="username"]', "John Doe");
    await page.fill('input[name="quantity"]', "5");
    await page.fill('input[name="city"]', "Hope");

    const submitButton = page.locator('[automation-id="submit-button"]');

    await expect(submitButton).toBeEnabled();

    await submitButton.click();

    const modal = page.locator('[automation-id="confirmation-modal"]');

    await expect(modal).toBeVisible();

    const modalText = await modal.textContent();

    expect(modalText).toMatch(/Your order number is \w{10}/);

    const link = page.locator('[automation-id="go-to-details"]');

    await link.click();

    await page.waitForURL(/\/order-details\/\w{10}/);

    const orderDetailsText = page.locator('[automation-id="order-details-header"]');

    await expect(orderDetailsText).toHaveText("Order Details");
  });
});
