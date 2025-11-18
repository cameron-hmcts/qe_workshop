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

Install and start server

You are now set up!

### To run the tests

`yarn test` will run your tests in a Chromium browser as specified in the package.json script

`yarn playwright test` will run your tests in all browsers

You can create new scripts in the package.json file.


## Task

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