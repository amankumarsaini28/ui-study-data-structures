const Express = require('express');
const morgan = require('morgan');
const { urlencoded } = require('body-parser');
const Logger = require('../scripts/logger');

const viewController = require('./controller/view-controller');
const staticController = require('./controller/static-controller');

const consoleLogger = Logger('express');

Express()
  .use(morgan('dev'))
  .use(urlencoded({ extended: true }))
  .use('/assets', staticController)
  .use(viewController)
  .listen(3000, () => {
    consoleLogger('Server running on http://localhost:3000');
  });
