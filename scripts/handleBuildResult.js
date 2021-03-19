const logger = require('./logger');
const fs = require('fs');

const getHandleBuildResult = ({ outdir }) => ({ outputFiles = [], warnings = [] }) => {
  const filesLogger = logger('files generated');
  outputFiles.forEach(file => {
    filesLogger(file.path.replace(outdir + '/', ''), file.path);
  });

  const warningsLogger = logger('warnings');
  warnings.forEach(warning => {
    warningsLogger(warning.text);
  });
};

module.exports = { getHandleBuildResult };