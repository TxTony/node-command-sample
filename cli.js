#!/usr/bin/env node
const yargs = require('yargs');
const sample = require('./src/sample.js');
const argv = yargs
    .command('hello', 'say hello and give time or not')
    .option('time', {
        alias: 't',
        description: 'Tell the present Time',
        type: 'boolean',
    })
    .help()
    .alias('help', 'h')
    .argv;

sample.run(argv);
