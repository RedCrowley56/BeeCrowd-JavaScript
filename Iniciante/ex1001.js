var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
console.log(`X = ${A + B}`);
