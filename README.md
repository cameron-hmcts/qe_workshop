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
