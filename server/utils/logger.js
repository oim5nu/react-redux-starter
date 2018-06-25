const chalk = require('chalk');
const ip = require('ip');

const divider = chalk.gray('\n------------------------------------');

/**
 *  Logger middleware, messages could be customised to be more personal
 */

 const logger = {
   error: (err) => {
     /* eslint-disable-next-line no-console */
     console.error(chalk.red(err));
   },

   // Called when express.js app starts on given port w/o errors
   appStarted: (port, host) => {
     /* eslint-disable-next-line no-console */
     console.log(`Server started! ${chalk.green('√')}`);
     /* eslint-disable-next-line no-console */
     console.log(`
      ${chalk.bold('Access URLs:')}${divider}
      Localhost: ${chalk.magenta(`http://${host}:${port}`)}
            LAN: ${chalk.magenta(`http://${ip.address()}:${port}`)}${divider}
            ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)} 
     `);
   }
 };

 module.exports = logger;