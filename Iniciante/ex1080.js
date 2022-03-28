var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let entrada = 0;
let posicao = 0;
for (var i = 0; i < 100; i++){
    let valor = parseInt(lines.shift());
    if (valor > entrada){
        entrada = valor
        posicao = i + 1
    }
}

console.log(entrada)
console.log(posicao)