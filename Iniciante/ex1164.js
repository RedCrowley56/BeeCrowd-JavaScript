var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const qtd_testes = parseInt(lines.shift());
for (let i = 0; i < qtd_testes; i++){
    let soma = 0;
    let teste = parseInt(lines.shift());
    for (let i = 1; i < teste; i++){
        if (teste % i === 0){
            soma += i;
        }
    }
    if (soma === teste){
        console.log(`${teste} eh perfeito`);
    } else {
        console.log(`${teste} nao eh perfeito`);
    }
}