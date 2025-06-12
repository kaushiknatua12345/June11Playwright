import { Page,Locator,expect } from "playwright/test";

export class CommonInfo {
   readonly page: Page;  
  //define locator for Welcome to the Hyland Employee Portal
    readonly headerText: Locator;
    //define locators for hyperlinks
    readonly homeLink: Locator;
    readonly aboutLink: Locator; 
    readonly loginLink: Locator;   
    //define locators for the footer
    readonly footerText: Locator;

    constructor(page: Page) {
        this.page = page;
        //initialize locators
        this.headerText = page.locator('h1', { hasText: 'Welcome to the Hyland Employee Portal' });
        this.homeLink = page.locator('a', { hasText: 'Home' });
        this.aboutLink = page.locator('a', { hasText: 'About' });
        this.loginLink = page.locator('a', { hasText: 'Login' });
        this.footerText = page.locator('footer');
    }

    async verifyHeaderText() {
        await expect(this.headerText).toBeVisible();
        await expect(this.headerText).toHaveText('Welcome to the Hyland Employee Portal');
    }

    async verifyHomeLink() {
        await expect(this.homeLink).toBeVisible();
        await expect(this.homeLink).toHaveAttribute('href', '/home');
    }

    async verifyAboutLink() {
        await expect(this.aboutLink).toBeVisible();
        await expect(this.aboutLink).toHaveAttribute('href', '/about');
    }

    async verifyLoginLink() {
        await expect(this.loginLink).toBeVisible();
        await expect(this.loginLink).toHaveAttribute('href', '/login');
    }

    async verifyFooterText() {
        await expect(this.footerText).toBeVisible();
        await expect(this.footerText).toHaveText('Copywright © Hyland Softwares 2025');
    }


  
}

