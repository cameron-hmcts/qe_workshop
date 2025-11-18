import { LandingPage } from "./landingPage";
import { IrregularHoursPage } from "./irregularHoursPage";
import { HolidayEntitlementBasisPage } from "./holidayEntitlementBasisPage";
import { HolidayLeaveYearPage } from "./holidayLeaveYearPage";
import { DaysWorkedPerWeekPage } from "./daysWorkedPerWeekPage";
import { OutcomePage } from "./outcomePage";

export interface PageFixtures {
  landingPage: LandingPage;
  irregularHoursPage: IrregularHoursPage;
  holidayEntitlementBasisPage: HolidayEntitlementBasisPage;
  holidayLeaveYearPage: HolidayLeaveYearPage;
  daysWorkedPerWeekPage: DaysWorkedPerWeekPage;
  outcomePage: OutcomePage;
}

export const pageFixtures = {
  landingPage: async ({ page }, use) => {
    await use(new LandingPage(page));
  },
  irregularHoursPage: async ({ page }, use) => {
    await use(new IrregularHoursPage(page));
  },
  holidayEntitlementBasisPage: async ({ page }, use) => {
    await use(new HolidayEntitlementBasisPage(page));
  },
  holidayLeaveYearPage: async ({ page }, use) => {
    await use(new HolidayLeaveYearPage(page));
  },
  daysWorkedPerWeekPage: async ({ page }, use) => {
    await use(new DaysWorkedPerWeekPage(page));
  },
  outcomePage: async ({ page }, use) => {
    await use(new OutcomePage(page));
  },
};
