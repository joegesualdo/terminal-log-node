import test from 'ava';
import log from './dist';
import fs from 'fs';
import chalk from 'chalk';

class CaptureOutput {
  constructor() {
    let fileName = './tmp/captured-ouput.txt';
    this.originalStdoutWrite = process.stdout.write
    this.originalStderrWrite = process.stderr.write
    this.fileName = fileName;
    var access = fs.createWriteStream(fileName);
    process.stdout.write = process.stderr.write = access.write.bind(access);
    process.on('unhandledRejection', (reason) => {
      this.stop()
      throw new Error('error');
    });
  }
  get() {
    return new Promise(resolve => {
      var readStream = fs.createReadStream(this.fileName);
      let file = '';
      readStream.on('data', (chunk) => {
        file += chunk.toString('utf8');
      })
      readStream.on('end', () => {
        resolve(file)
      })
    })
  }
  stop() {
    return new Promise(resolve => {
      process.stdout.write = this.originalStdoutWrite;
      process.stderr.write = this.originalStderrWrite;
      resolve();
    })
  }
}

test.cb(t => {
  var caputredOutput = new CaptureOutput();

  log.warn("Warning!")

  caputredOutput.get()
  .then((output) => {
    t.is(output, `${chalk.yellow('⚠')} Warning!\n`)
    t.end();
  })
});

test.cb(t => {
  var caputredOutput = new CaptureOutput();

  log.error("Error!")

  caputredOutput.get()
  .then((output) => {
    t.is(output, `${chalk.red('✖')} Error!\n`)
    t.end();
  })
});

test.cb(t => {
  var caputredOutput = new CaptureOutput();

  log.success("Success!")

  caputredOutput.get()
  .then((output) => {
    t.is(output, `${chalk.green('✔')} Success!\n`)
    t.end();
  })
});
