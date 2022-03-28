var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const qtd_numeros = lines.shift();
let numero_novo = lines.shift();
let ind = 0;
let out = 0;
for (var i = 0; i < qtd_numeros; i++){
    if (numero_novo >= 10 && numero_novo <= 20){
        ind++
        numero_novo = lines.shift();
    }else {
        out++
        numero_novo = lines.shift();
    }
}
console.log(`${ind} in`)
console.log(`${out} out`)