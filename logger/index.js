const buildDevLogger = require('./dev-logger')
const buildProdLogger = require('./prod-logger')

let logger = buildProdLogger

if (process.env.NODE_ENV !== 'production') {
   logger = buildDevLogger()
}

module.exports = logger