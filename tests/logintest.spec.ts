import {test,expect} from '@playwright/test';
import type {Locator} from '@playwright/test';

let usernameInput: Locator;
let passwordInput: Locator;
let loginButton: Locator;

test.beforeEach(async ({ page }) => {
 await page.goto('http://localhost:4200/login');

 //check if Already Registered!! Login Here is visible
  const alreadyRegisteredText = page.locator('text=Already Registered!! Login Here');
  await expect(alreadyRegisteredText).toBeVisible();
  
  usernameInput = page.locator('input[name="name"]');
  await expect(usernameInput).toBeVisible();

  passwordInput = page.locator('input[name="password"]');
  await expect(passwordInput).toBeVisible();

  loginButton = page.locator('button[type="submit"]');
  await expect(loginButton).toBeVisible();

});


test('check for username blank error message', async ({ page }) => {
 
  await usernameInput.fill(''); // Leave username blank 
  await passwordInput.fill('abacd'); // Fill in a valid password  
  await loginButton.click();

  const errorMessage = page.locator('text=Username is required');
  await expect(errorMessage).toBeVisible();
});


test('check for password blank error message', async ({ page }) => {
    await usernameInput.fill('testuser'); // Fill in a valid username
    await passwordInput.fill(''); // Leave password blank
    await loginButton.click();
    const errorMessage = page.locator('text=Password is required');
    await expect(errorMessage).toBeVisible();
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:4200/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('ania');
  await page.getByRole('textbox', { name: 'Enter Password' }).click();
  await page.getByRole('textbox', { name: 'Enter Password' }).fill('ania@123');
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Login' }).click();
  await page.goto('http://localhost:4200/customer-update?username=ania');
});
