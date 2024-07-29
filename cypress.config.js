const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    url: "https://airalo.com",
    apiUrl: "https://sandbox-partners-api.airalo.com"
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
