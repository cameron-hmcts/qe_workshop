import { LandingPage } from "./landingPage";

export interface PageFixtures {
  landingPage: LandingPage;
}

export const pageFixtures = {
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
};
