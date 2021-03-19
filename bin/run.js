const config = require('../babel.config');
require("@babel/register")(config);
require('../src/server/server');
