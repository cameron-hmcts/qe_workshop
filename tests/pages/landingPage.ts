import { Page, expect, Locator } from '@playwright/test';
import landingPage_content from "../content/landingPage_content";

export class LandingPage {
    private readonly page: Page;
    private readonly title: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('h1');
    }

    async continueOn(): Promise<void> {
        // Click the continue button
        await this.page.click('');
    }
}
