# Calendario

# Overview of what was done:
Cypress project overview for Time.is and Consultant.ru
In this current project, I installed Cypress.
Cypress was installed with Node.js.
Cypress accepts .js (javascript)
Cypress Version 12.16.0
Windows version 11
Visual Studio Code
Node.js version 15.14.0

# Installation process
1. I created UI project: `calendario`
2. I installed devDependencies: `npm install -D cypress , cypress-xpath`
3. Run `npm install`
4. Test check. `npx cypres open` or `npm run cy:open` for to start work with Cypress.

# About Framework
1. I created folder `ui-testing` `\calendario\cypress\e2e\ui-testing`
2. Also created inside folder 2 test files 
`\ui-testing\calendar-consultant-ru.cy.js` 
`\ui-testing\calendar-time-is.cy.js`
3. Inside support folder I created a file for Hide XHR requests 
`cypress\support\disable-xhr-logs.js` 
4. I added in the `cypress.config.ts` file small necessary information to make the cypress work properly. 

# Notes:  
Make sure Cypress is installed correctly.
The Cypress file structure is used.
The tests are run on Chrome, Edge or Firefox browsers.
And all tests successfully.
