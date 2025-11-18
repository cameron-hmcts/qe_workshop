import { test, expect } from '../tests/fixtures';

test.describe('Holiday Entitlement Calculation', () => {
    test('Calculate holiday entitlement for 4 days worked per week', async ({ page, landingPage, irregularHoursPage, holidayEntitlementBasisPage, holidayLeaveYearPage, daysWorkedPerWeekPage, outcomePage }) => {
        await page.goto('https://www.gov.uk/calculate-your-holiday-entitlement');

        await landingPage.assertOnPage();
        await landingPage.acceptCookies();
        await landingPage.continueOn();

        await irregularHoursPage.assertOnPage();
        await irregularHoursPage.selectNoAndContinue();

        await holidayEntitlementBasisPage.assertOnPage();
        await holidayEntitlementBasisPage.selectDaysWorkedPerWeekAndContinue();

        await holidayLeaveYearPage.assertOnPage();
        await holidayLeaveYearPage.selectFullLeaveYearAndContinue();

        await daysWorkedPerWeekPage.assertOnPage();
        await daysWorkedPerWeekPage.enterDaysWorkedAndContinue('4');

        await outcomePage.assertOnPage();
        await outcomePage.assertOutcome();
    });
});