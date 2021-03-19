const { build } = require('esbuild');
const logger = require('./logger');
const { getHandleBuildResult } = require('./handleBuildResult');
const { join } = require('path');

const outdir = join(__dirname, '..', '__tmp');


const main = async (config, tap) => {
  const handleBuildResult = getHandleBuildResult(config);
  try {
    const builResult = await build({
      ...config,
      watch: {
        onRebuild: (error, reBuildResult, ...rest) => {
          if (error) {
            throw error;
          }
          const watchLogger = logger('watching');
          watchLogger('build complete');
          console.log(rest);
          handleBuildResult(reBuildResult);
          tap && tap.onBuild && tap.onBuild();
        }
      }
    });
    handleBuildResult(builResult);
    tap && tap.onBuild && tap.onBuild();
  } catch (error) {
    const errorLogger = logger('build error');
    errorLogger(error.message);
    console.log(error);
    errorLogger('hold ⌘ + C to stop on mac');
    errorLogger('hold ctrl + C to stop on mac');
    tap && tap.onBuild && tap.onError(error);
  }
}


module.exports = function (tap) {
  main({
    entryPoints: [join(__dirname, '..', 'src', 'app.js')],
    bundle: true,
    write: true,
    outdir,
    loader: {
      '.js': 'jsx'
    },
    define: {
      'process.env.NODE_ENV': '"development"'
    }
  }, tap)
};
