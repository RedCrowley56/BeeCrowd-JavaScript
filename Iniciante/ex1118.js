var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let media = 0;
let contagem = 0
for (; contagem !== 2 ;){
    while ( contagem < 2 ) {
        let nota = Number(lines.shift());
        if (nota >= 0 && nota <= 10){
            contagem++;
            media += nota;
        } else {
            console.log('nota invalida');
        }
    }
    console.log(`media = ${(media / 2).toFixed(2)}`);
    while (contagem >= 2){
        console.log('novo calculo (1-sim 2-nao)')
        let nota = Number(lines.shift());
        if (nota === 1){
            media = 0;
            contagem = 0;
            break;
        } else if (nota === 2){
            break;
        }
    }
}