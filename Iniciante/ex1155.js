var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let valor = 1;
let resultado = 1;
for (let i = 2; i <= 100; i++) {
    resultado += valor / i;
}
console.log(resultado.toFixed(2));