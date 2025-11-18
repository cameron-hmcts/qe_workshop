import { Page, expect, Locator } from '@playwright/test';

export class LandingPage {
    readonly page: Page;
    readonly title: Locator;
    readonly startButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('h1');
        this.startButton = page.getByRole('button', { name: 'Start now' });
    }

    async goto(): Promise<void> {
        await this.page.goto('/');
    }

    async startNow(): Promise<void> {
        await this.startButton.click();
    }
}
