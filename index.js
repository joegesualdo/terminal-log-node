import chalk from 'chalk';

let log = {
  warn(message) {
    process.stdout.write(`${chalk.yellow('⚠')} ${message}\n`);
  },
  error(message) {
    process.stdout.write(`${chalk.red('✖')} ${message}\n`);
  },
  success(message) {
    process.stdout.write(`${chalk.green('✔')} ${message}\n`);
  },
};

export default log;
