const logger = require('./logger')

logger.error('teste')
logger.info('teste 2')
logger.warn('teste 3')
logger.error(new Error('Error'))