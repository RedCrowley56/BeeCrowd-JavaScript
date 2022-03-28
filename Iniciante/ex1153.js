var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let entrada = parseInt(lines.shift());
let soma = 1;
for (let i = 1; i <= entrada; i++){
    soma *= i;
}
console.log(soma);