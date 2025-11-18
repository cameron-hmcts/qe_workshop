import { Page, expect, Locator } from '@playwright/test';
import holidayLeaveYearPage_content from '../content/holidayLeaveYearPage_content';

export class HolidayLeaveYearPage {
    private readonly page: Page;
    private readonly pageHeading: Locator;
    private readonly fullLeaveYearRadioButton: Locator;
    private readonly continueButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = this.page.getByRole('heading', { name: holidayLeaveYearPage_content.pageHeading });
        this.fullLeaveYearRadioButton = this.page.getByRole('radio', { name: holidayLeaveYearPage_content.fullLeaveYearRadioButtonText });
        this.continueButton = this.page.getByRole('button', { name: holidayLeaveYearPage_content.continueButtonText });
    }

    async assertOnPage(): Promise<void> {
        await expect(this.pageHeading).toBeVisible();
    }

    async selectFullLeaveYearAndContinue(): Promise<void> {
        await this.fullLeaveYearRadioButton.click();
        await this.continueButton.click();
    }
}