import { Page, expect } from '@playwright/test';
import landingPage_content from "../content/landingPage_content";

export class LandingPage {
    private readonly page: Page;
    private readonly title = 'h1';

    constructor(page: Page) {
        this.page = page;
    }

    async checkPageLoads(): Promise<void> {
        // Navigate to the landing page
        await this.page.goto('');

        // Check all elements of the page
        await Promise.all([
            expect(this.page.locator(this.title)).toHaveText(landingPage_content.pageTitle),
            // Continue checking the elements after adding them to the content file!
        ]);
    }

    async continueOn(): Promise<void> {
        // Click the continue button

    }
}

// export default LandingPage;
