import {test,expect} from '@playwright/test';
import type {Locator} from '@playwright/test';
import { CommonInfo } from '../Pages/CommonInfo';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200/home');

  const commonInfo = new CommonInfo(page);
  await commonInfo.verifyHeaderText();
  await commonInfo.verifyLoginLink();
  await commonInfo.verifyAboutLink();
  await commonInfo.verifyLoginLink();
  await commonInfo.verifyFooterText(); 
 
});

/*test('check for image visibility', async ({ page }) => {
    // Check if the image is visible
    const image = page.locator('img[src="/assets/images/hyland-logo.png"]');
    await expect(image).toBeVisible();
    
    // Check if the image has the correct alt text
    await expect(image).toHaveAttribute('alt', 'Hyland Logo');
    });*/