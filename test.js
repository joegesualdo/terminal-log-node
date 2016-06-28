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

test.cb('warn with indent', t => {
  var caputredOutput = new CaptureOutput();

  log.warn("Warning!", 2)

  caputredOutput.get()
  .then((output) => {
    t.is(output, `  ${chalk.yellow('⚠')} Warning!\n`)
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

test.cb('error with indent', t => {
  var caputredOutput = new CaptureOutput();

  log.error("Error!", 2);

  caputredOutput.get()
  .then((output) => {
    t.is(output, `  ${chalk.red('✖')} Error!\n`)
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

test.cb('success with indent', t => {
  var caputredOutput = new CaptureOutput();

  log.success("Success!", 2);

  caputredOutput.get()
  .then((output) => {
    t.is(output, `  ${chalk.green('✔')} Success!\n`)
    t.end();
  })
});

test.cb('created', t => {
  var caputredOutput = new CaptureOutput();

  log.created("index.js")

  caputredOutput.get()
  .then((output) => {
    t.is(output, `${chalk.green('create')} index.js\n`)
    t.end();
  })
});

test.cb('created with indent', t => {
  var caputredOutput = new CaptureOutput();

  log.created("index.js", 2)

  caputredOutput.get()
  .then((output) => {
    t.is(output, `  ${chalk.green('create')} index.js\n`)
    t.end();
  })
});
