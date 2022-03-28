var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = lines.shift();
let B = lines.shift();
let C = lines.shift();
let D = lines.shift();
const DIFERENCA = (A * B - C * D)
console.log(`DIFERENCA = ${DIFERENCA}`)