var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let entrada = parseInt(lines.shift());
let soma = 0;
let divisao = 0;
for (; entrada >= 0 ; divisao++){
    soma += entrada
    entrada = parseInt(lines.shift())
}
console.log((soma / divisao).toFixed(2))