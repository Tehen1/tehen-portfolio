import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads and displays hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/TeheN/);
    await expect(page.getByText("Architect")).toBeVisible();
  });

  test("navigates to projects", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Projets" }).click();
    await expect(page).toHaveURL(/projets/);
  });
});