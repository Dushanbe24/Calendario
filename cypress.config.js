const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 7000,
 
  e2e: {
    env: {
      log: true,
      hideXHR: true,
    },
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
  },
});
