import chalk from 'chalk';

const log = {
  warn(message) {
    process.stdout.write(`${chalk.yellow('⚠')} ${message}\n`);
  },
  error(message) {
    process.stdout.write(`${chalk.red('✖')} ${message}\n`);
  },
  success(message) {
    process.stdout.write(`${chalk.green('✔')} ${message}\n`);
  },
  created(name) {
    process.stdout.write(`${chalk.green('create')} ${name}\n`);
  },
};

export default log;
