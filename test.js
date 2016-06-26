import test from 'ava';
import log from './dist';
import chalk from 'chalk';
import CaptureOutput from '@joegesualdo/capture-output-node';

test.cb('warn', t => {
  var caputredOutput = new CaptureOutput();

  log.warn("Warning!")

  caputredOutput.get()
  .then((output) => {
    t.is(output, `${chalk.yellow('⚠')} Warning!\n`)
    t.end();
  })
});

test.cb('error', t => {
  var caputredOutput = new CaptureOutput();

  log.error("Error!")

  caputredOutput.get()
  .then((output) => {
    t.is(output, `${chalk.red('✖')} Error!\n`)
    t.end();
  })
});

test.cb('success', t => {
  var caputredOutput = new CaptureOutput();

  log.success("Success!")

  caputredOutput.get()
  .then((output) => {
    t.is(output, `${chalk.green('✔')} Success!\n`)
    t.end();
  })
});
