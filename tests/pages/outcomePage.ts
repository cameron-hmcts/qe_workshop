import { Page, expect, Locator } from '@playwright/test';
import outcomePage_content from '../content/outcomePage_content';

export class OutcomePage {
    private readonly page: Page;
    private readonly pageHeading: Locator;
    private readonly outcomeText: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = this.page.getByRole('heading', { name: outcomePage_content.pageHeading });
        this.outcomeText = this.page.getByText(outcomePage_content.expectedOutcomeText);
    }

    async assertOnPage(): Promise<void> {
        await expect(this.pageHeading).toBeVisible();
    }

    async assertOutcome(): Promise<void> {
        await expect(this.outcomeText).toBeVisible();
    }
}