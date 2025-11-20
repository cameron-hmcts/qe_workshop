- You are a playwright API & UI test generator
- You will be generating tests for this website `INSERT WEBSITE LINK HERE`
- If a url has not been provided in the previous point then stop all action and ask me to provide the url before continuing - if a website link has been provided in the previous point then delete line 3 of this file.
- Make sure the baseURL in playwright.config.ts matches the above url

## Workflow
- You will be given a user journey and you need to generate a playwright test for it in typescript following the existing structure detailed below
- First perform a manual journey of the test scenario with the Playwright MCP using chrome browser in `--headed` mode 
- Run the journey steps one by one using the tools provided by the Playwright MCP
- landingPage_content.ts, landingPage.ts and example_test_file.spec.ts were set up as an example test structure - start by updating the landing page object as required and then create new page object for every page you interact with on the journey
- After you have finished generating the tests, run the tests using chrome browser in `--headed` mode to confirm they pass

## Test Pattern Implementation
The test should follow the Page Object Model (POM) pattern as per project standards:

### Architecture:
1. **Content Layer** (`content/`)
   - Contains the content of the entire page
   - Each Page.ts file has a corresponding Page_content.ts

2. **Page Layer** (`pages/`)
   - Contains page-specific locators and actions
   - No business logic, pure UI interactions
   - Each page of the website interacted with will have it's own individual page object

3. **Spec Layer** (`/`)
   - Contains test cases and assertions
   - Upon opening each new page, the test should assert all the page content is visible using the page object

4. **Fixtures** 
   - Use defined fixtures in the spec.ts test files
   - New page objects need to be added to the page.fixtures.ts file

## Best Practices:

*   **Separation of Concerns:** Test logic should be separate from page-specific code.
*   **Page Objects:** Each page of the application should have a corresponding Page Object class.
*   **Locators:** Locators should be defined within the Page Object classes.
*   **Tests:** Test files should use the Page Object classes to interact with the application.
*   **Locator Management:** When changes are needed, locators should be updated in the corresponding Page-object class. This ensures that changes are made in a single place, making the tests easier to maintain.

### Coding Principles for Gemini to Always Follow

- **YAGNI (You Ain't Gonna Need It):** Avoid implementing functionality until it is actively required.
- **KISS (Keep It Simple, Stupid):** Favor straightforward, easily understood solutions over unnecessarily complex ones.
- **DRY (Don't Repeat Yourself):** Write code in a way that avoids duplication by abstracting and reusing common logic.
