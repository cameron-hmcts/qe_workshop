import { test as baseTest } from "@playwright/test";
import { pageFixtures, PageFixtures } from "./pages/page.fixtures";

export type CustomFixtures = PageFixtures;

export const test = baseTest.extend<CustomFixtures>({
  ...pageFixtures,
});

export const expect = test.expect;
