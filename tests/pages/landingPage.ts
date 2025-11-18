import { Page, expect, Locator } from '@playwright/test';
import landingPage_content from "../content/landingPage_content";

export class LandingPage {
    private readonly page: Page;
    private readonly pageHeading: Locator;
    private readonly startNowButton: Locator;
    private readonly acceptCookiesButton: Locator;
    private readonly cookieBannerHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pageHeading = this.page.getByRole('heading', { name: landingPage_content.pageHeading });
        this.startNowButton = this.page.getByRole('button', { name: landingPage_content.startNowButtonText });
        this.acceptCookiesButton = this.page.getByRole('button', { name: landingPage_content.acceptCookiesButtonText });
        this.cookieBannerHeading = this.page.getByRole('heading', { name: landingPage_content.cookieBannerHeading });
    }

    async assertOnPage(): Promise<void> {
        await expect(this.pageHeading).toBeVisible();
    }

    async acceptCookies(): Promise<void> {
        await expect(this.cookieBannerHeading).toBeVisible();
        await this.acceptCookiesButton.click();
        await expect(this.cookieBannerHeading).not.toBeVisible();
    }

    async continueOn(): Promise<void> {
        await this.startNowButton.click();
    }
}
