var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const pi = 3.14159;
const raio = lines.shift();
const calculo = (4/3) * pi * raio ** 3
console.log(`VOLUME = ${calculo.toFixed(3)}`)
