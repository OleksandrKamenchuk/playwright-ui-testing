import { test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("https://playground.bondaracademy.com/");
});

test.describe("suite 1", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Forms").click();
  });

  test("This is the first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  test("This is the first test to datepicker", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});
test.describe("suite 2", () => {
  test.beforeEach(async ({ page }) => {
    await page.getByText("Charts").click();
  });

  test("This is the first test", async ({ page }) => {
    await page.getByText("Form Layouts").click();
  });

  test("This is the first test to datepicker", async ({ page }) => {
    await page.getByText("Datepicker").click();
  });
});
