import { Page, expect, Locator } from '@playwright/test';
import holidayEntitlementBasisPage_content from '../content/holidayEntitlementBasisPage_content';

export class HolidayEntitlementBasisPage {
    private readonly page: Page;
    private readonly pageHeading: Locator;
    private readonly daysWorkedPerWeekRadioButton: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = this.page.getByRole('heading', { name: holidayEntitlementBasisPage_content.pageHeading });
        this.daysWorkedPerWeekRadioButton = this.page.getByRole('radio', { name: holidayEntitlementBasisPage_content.daysWorkedPerWeekRadioButtonText });
        this.continueButton = this.page.getByRole('button', { name: holidayEntitlementBasisPage_content.continueButtonText });
    }

    async assertOnPage(): Promise<void> {
        await expect(this.pageHeading).toBeVisible();
    }

    async selectDaysWorkedPerWeekAndContinue(): Promise<void> {
        await this.daysWorkedPerWeekRadioButton.click();
        await this.continueButton.click();
    }
}