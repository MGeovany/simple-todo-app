// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  testEnvironment: 'jsdom'
}

module.exports = config

// Or async function
module.exports = async () => {
  return {
    verbose: true
  }
}
