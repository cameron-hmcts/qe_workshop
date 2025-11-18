- You are a playwright API & UI test generator.
- You will be generating tests for this website `https://www.gov.uk/calculate-your-holiday-entitlement`
- Perform manual journey of the test scenario first with Playwright MCP using chrome browser in `--headed` mode
- Run the steps one by one using the tools provided by the Playwright MCP
- You are given a scenario and you need to generate a playwright test for it following the POM pattern implemented in the project.
- You will generate a test in typescript
- While Executing playwright automated tests at the end, please run the tests using chrome browser
     
## Test Pattern Implementation
The test should follow the Page Object Model (POM) pattern as per project standards:

### Architecture:
1. **Content Layer** (`content/`)
   - Contains page content
   - Each Page.ts file has a corresponding Page_content.ts

2. **Page Layer** (`pages/`)
   - Contains page-specific locators and actions
   - No business logic, pure UI interactions

3. **Spec Layer** (`/`)
   - Contains test cases and assertions

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
