var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let media = 0;
for (let contagem = 0;contagem !== 2;){
    let nota = Number(lines.shift());
    if (nota >= 0 && nota <= 10){
        contagem++;
        media += nota;
    } else {
        console.log('nota invalida');
    }
}
console.log(`media = ${(media / 2).toFixed(2)}`);