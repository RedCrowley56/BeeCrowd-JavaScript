var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const qtd_numeros = parseInt(lines.shift());
let soma = 0;
for (let i = 0; i < qtd_numeros; i++){
    let [x, y] = lines.shift().split(' ');
    for (let i = 0; i < parseInt(y); ){
        if (parseInt(x) % 2 !== 0){
            soma += parseInt(x);
            i++;
        }
        parseInt(x++);
    }
    console.log(soma);
    soma = 0;
}
