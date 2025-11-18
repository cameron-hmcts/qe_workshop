import { Page, expect, Locator } from '@playwright/test';
import irregularHoursPage_content from '../content/irregularHoursPage_content';

export class IrregularHoursPage {
    private readonly page: Page;
    private readonly pageHeading: Locator;
    private readonly noRadioButton: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = this.page.getByRole('heading', { name: irregularHoursPage_content.pageHeading });
        this.noRadioButton = this.page.getByRole('radio', { name: irregularHoursPage_content.noRadioButtonText });
        this.continueButton = this.page.getByRole('button', { name: irregularHoursPage_content.continueButtonText });
    }

    async assertOnPage(): Promise<void> {
        await expect(this.pageHeading).toBeVisible();
    }

    async selectNoAndContinue(): Promise<void> {
        await this.noRadioButton.click();
        await this.continueButton.click();
    }
}