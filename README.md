check out the following files:
  - ./tests/example.spec.js - Example end-to-end test
  - ./playwright.config.js - Playwright Test configuration

runs in headless mode in all 3 browsers.
  npx playwright test example.spec.js

runs in headless mode only on chromium browsers.
  npx playwright test example.spec.js --project=chromium

runs on headed or browser mode only on chromium browsers.
  npx playwright test example.spec.js --project=chromium --headed

Runs the tests in debug mode.
  npx playwright test example.spec.js --project=chromium --headed --debug

Auto generate tests with Codegen.
  npx playwright codegen

Installation of playwroght allure model
  1. npm i -D @playwright/test allure-playwright
  2. npm install -g allure-commandline --save-dev
  3. reporter= ['allure-playwright', { outputFolder: 'allure-results' }] //add this in playwright.config.js
  4. npx playwright test example.spec.js // run tests
  4. allure generate allure-results -o allure-report --clean //generate report after running tests
  5. allure open allure-report //opens the report

    allure open allure-report
      Starting web server...
      Server started at <http://127.0.0.1:63721>. Press <Ctrl+C> to exit  


Changes to playwright.config.js section for reporting purposes

1. types of reports 

    reporter: [
    ['list'],
    ['html'],
    ['json', { outputFile: 'test-results.json' }],
    ['junit', { outputFile: 'results.xml' }],
    ['allure-playwright', { outputFolder: 'allure-results' }],
  ],

  2. parallel mode is set to false when involving a session and series of dependant ops
      fullyParallel: false

  3. set video and screenshot and trace 
      trace: 'retain-on-failure',
      screenshot: 'only-on-failure',
      video: 'retain-on-failure'

Visit https://playwright.dev/docs/intro for more information. ✨