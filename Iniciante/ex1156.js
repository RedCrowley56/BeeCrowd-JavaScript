var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let dividido = 2;
let resultado = 1;
for (let i = 3; i <= 39; i += 2){
    resultado += i / dividido;
    dividido *= 2;
}
console.log(resultado.toFixed(2));