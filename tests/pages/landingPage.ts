import { Page, expect } from '@playwright/test';
import landingPage_content from "../content/landingPage_content";

export class LandingPage {
    private readonly page: Page;
    private readonly title = 'h1';

    constructor(page: Page) {
        this.page = page;
    }

    async continueOn(): Promise<void> {
        // Click the continue button
        await this.page.click('');
    }
}
