require('dotenv').config();
require('./server')
const {
    environmentsUtils: { validateRequiredEnvs }
} = require('./utils')

const requiredEnvs = ['PORT']
validateRequiredEnvs(requiredEnvs)