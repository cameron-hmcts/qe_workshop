import {test} from "./fixtures";

test(`example test`, async ({ landingPage }): Promise<void> => {
    await landingPage.checkPageLoads();
    await landingPage.continueOn();
    // Continue
});