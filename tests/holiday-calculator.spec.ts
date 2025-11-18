import { test } from "./pages/page.fixtures";
import { expect } from "@playwright/test";

test.describe("Holiday entitlement calculator", () => {
  test("should allow a user to calculate their holiday entitlement", async ({
    landingPage,
  }) => {
    await landingPage.goto();
    await expect(landingPage.title).toBeVisible();
  });
});
