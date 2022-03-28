var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let entrada = parseInt(lines.shift());
let numeros = [0, 1];
let soma = 0;
for (let i = 0; i < entrada - 2; i++){
    soma = numeros[numeros.length - 1] + numeros[numeros.length - 2];
    numeros.push(soma);
}
if (entrada === 1){
    numeros = [0];
} else if (entrada === 0){
    numeros = [];
}
console.log(numeros.join(' '));