var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
const media = ((A * 2) + (B * 3) + (C * 5)) / ( 2 + 3 + 5);
console.log(`MEDIA = ${media.toFixed(1)}`)
