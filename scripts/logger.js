const chalk = require('chalk');

const logger = logger => (...args) => 
  console.log(`${chalk.blue('['+logger.toUpperCase()+']')}\t${args.map(arg => chalk.green(arg))}`);

module.exports = logger;