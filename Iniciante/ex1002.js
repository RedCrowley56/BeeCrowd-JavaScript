var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const pi = 3.14159;
let raio = parseFloat(lines.shift());
let resultado = raio ** 2 *pi 
console.log(`A=${resultado.toFixed(4)}`)
