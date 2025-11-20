# Testing workshop with Gemini CLI

This is your starting repository for the workshop!
It contains a basic Page Object Model (POM) skeleton as a staring point for generating the playwright tests.

### Pre-requisites

Homebrew - https://brew.sh/

### Run before you start
Any errors during setup - please ask for help from Cameron, Abi, Johnny or Jessie!
Run these commands in your terminal:

Yarn - `brew install yarn`
Node - `brew install node`

`yarn setup` 
This will enable corepack & install playwright.

### Install gemini CLI

run `brew install gemini-cli`

run `gemini` to start the cli tool

You will need to Login with Google using your Solirius account

### Install Playwright MCP

Go to extensions tab in VSCode and search `@mcp playwright`

You may need to enable MCP servers 

Install and start server

You are now set up!

## Task

Before you start, open the /prompts/test_generator_prompt.md file and on line 2 replace `INSERT WEBSITE LINK HERE` with your website url

1. Manually explore your website and write down a user journey you would like to automate

    Example user journey - Calculate holiday entitlement 
    1. Open website
    2. landing page - click start now
    3. irregular hours page - Click no - continue
    4. holiday entitlement based on page - Click days worked per week - Continue
    5. work out holiday for page - Click for a full leave year - continue
    6. days worked page - Enter 4 - continue
    7. Check final page is correct with 22.4 days holiday

2. Start gemini by running `gemini` in the terminal in the root of your project

3. Prompt gemini with `@prompts/test_generator_prompt.md ` + your user journey
    
    This should automate your user journey! It will take around 10 minutes - if it takes longer or appears to get 'stuck', ask for help!
    ###  Once your tests have been generated, exit geminiCLI and run the tests in the terminal

    `yarn test` will run your tests in a Chromium browser as specified in the package.json script

    `yarn playwright test` will run your tests in all browsers

    You can create new scripts in the package.json file.

4. If your tests fail, that's fine! Provide the error message to the gemini CLI tool and see if it can fix it

    Don't suffer in silence here - if your tests are failing and you can't fix them, ask for help.

5. Congratulations! You have just automated a user journey in playwright using the Gemini CLI tool!

    Save your work and show a helper - we will discuss everyone's progress at 3:45

## Extra Task Ideas

Now the real fun begins. 
Choose ANY extra task from the list of ideas below and test the boundaries of the Gemini CLI tool!

1. Automate another user journey the same way as before. Continue to build out your test suite.
2. Create your own prompt file to prompt the Gemini CLI - this is how you create an 'agent' to acheive any task. Customise your agent to work the way you want it to using the prompt file.
    Example 1: Playwright Best practice agent... `You are a Playwright Best practice agent, look at my test suite and make sure the following best practice are being followed...`
    Example 2: Playwright test healer... `You are a Playwright test healer, run my test suite and fix any failing tests...`
    Example 3: Manual testing agent... `You are a manual tester, take scenarios you are given and manually test the website using the Playwright MCP. Provide a test report when you are finished to show what you tested and any issues identified`
    Example 4: Accessibility testing agent... `Explore my website using the Playwright MCP and create a .md file listing any accessibility concerns according to WCAG2.2...`
3. Try to set up and use another MCP such as the GitHub MCP, Notion MCP, Figma MCP, or any other.
4. Start over and create an automated journey for ANY website you like.
5. Any thing else you can think of! (feel free to ask a helper)

Bonus points if you run out of prompts on your Gemini account :) Enjoy!