var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = lines.shift();
let B = lines.shift();
const X = parseInt(A) + parseInt(B)
console.log(`SOMA = ${X}`);