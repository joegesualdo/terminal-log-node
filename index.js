import chalk from 'chalk';
import indentString from '@joegesualdo/indent-string';

const log = {
  warn(message, indent = 0) {
    process.stdout.write(indentString(`${chalk.yellow('⚠')} ${message}\n`, indent));
  },
  error(message, indent = 0) {
    process.stdout.write(indentString(`${chalk.red('✖')} ${message}\n`, indent));
  },
  success(message, indent = 0) {
    process.stdout.write(indentString(`${chalk.green('✔')} ${message}\n`, indent));
  },
  created(name, indent = 0) {
    process.stdout.write(indentString(`${chalk.green('create')} ${name}\n`, indent));
  },
};

export default log;
