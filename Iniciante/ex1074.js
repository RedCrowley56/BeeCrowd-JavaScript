var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const qtd_numeros = parseInt(lines.shift());
function positive(num){
    if (num === 0) return 'NULL'
    if (num % 2 === 0 && num > 0) return 'EVEN POSITIVE'
    if (num % 2 !== 0 && num > 0) return 'ODD POSITIVE'
    if (num % 2 === 0 && num < 0) return 'EVEN NEGATIVE'
    if (num % 2 !== 0 && num < 0) return 'ODD NEGATIVE'
}
for (let i = 0; i < qtd_numeros; i++){
    let novo_numero = parseInt(lines.shift());
    console.log(positive(novo_numero));
}
