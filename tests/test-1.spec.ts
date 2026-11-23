import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://playground.bondaracademy.com/pages/modal-overlays/dialog');
  await page.getByRole('link', { name: 'Forms' }).click();
  await page.getByRole('link', { name: 'Form Layouts' }).click();
  await page.getByRole('textbox', { name: 'Jane Doe' }).fill('O K');
  await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByPlaceholder('Email').fill('test@test.com');
  await page.locator('.custom-checkbox').first().click();
  await page.locator('form').filter({ hasText: 'Remember meSubmit' }).getByRole('button').click();
});