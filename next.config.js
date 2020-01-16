// Validate env file
;(() => {
  const fs = require('fs');
  const envSchema = require('./env.schema');
  const envJsonObject = require('./env.json');
  const { error, value } = envSchema.validate(envJsonObject);
  if (error) {
    console.error(error);
    process.exit(1);
  }
})()

// Export next config
const withSass = require("@zeit/next-sass");
module.exports = withSass({
  cssModules: true
});
