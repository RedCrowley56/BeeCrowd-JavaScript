var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let y = parseInt(input.split(' ').pop());
let x = parseInt(input.split(' ').shift());
let soma = 0;
for (let i = 0 ; i < y; i++){
    soma += i + x;
}
console.log(soma);