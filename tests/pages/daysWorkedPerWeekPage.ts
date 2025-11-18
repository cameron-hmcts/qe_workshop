import { Page, expect, Locator } from '@playwright/test';
import daysWorkedPerWeekPage_content from '../content/daysWorkedPerWeekPage_content';

export class DaysWorkedPerWeekPage {
    private readonly page: Page;
    private readonly pageHeading: Locator;
    private readonly daysWorkedPerWeekTextbox: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = this.page.getByRole('heading', { name: daysWorkedPerWeekPage_content.pageHeading });
        this.daysWorkedPerWeekTextbox = this.page.getByRole('textbox', { name: daysWorkedPerWeekPage_content.daysWorkedPerWeekTextboxLabel });
        this.continueButton = this.page.getByRole('button', { name: daysWorkedPerWeekPage_content.continueButtonText });
    }

    async assertOnPage(): Promise<void> {
        await expect(this.pageHeading).toBeVisible();
    }

    async enterDaysWorkedAndContinue(days: string): Promise<void> {
        await this.daysWorkedPerWeekTextbox.fill(days);
        await this.continueButton.click();
    }
}