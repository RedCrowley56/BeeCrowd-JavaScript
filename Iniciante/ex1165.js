var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const QTD_TESTES = parseInt(lines.shift());
for (let i = 0; i < QTD_TESTES; i++){
    let testes = parseInt(lines.shift());
    let soma = 0;
    for (let i = 1; i <= testes; i++) {
        if (testes % i === 0){
            soma++;
        }
    }
    if (soma > 2) {
        console.log(`${testes} nao eh primo`);
    } else {
        console.log(`${testes} eh primo`);
    }
}