#!/usr/bin/env node
var program = require('commander'),
  rot47 = require('./rot47')

program
  .arguments('<file>')
  .action(function (file) {
    require('fs').readFile(file, "utf8", function (err, data) {
      console.log(rot47(err ? file : data))
    })
  })

if(process.stdin.isTTY) {
  program.parse(process.argv)
} else {
  var stdin = ''
  process.stdin.on('readable', function() {
    var chunk = this.read();
    if (chunk !== null) {
      stdin += chunk;
    }
  });
  process.stdin.on('end', function() {
    stdin = stdin.replace(/\n+$/, '')
    console.log(rot47(stdin))
  });
}