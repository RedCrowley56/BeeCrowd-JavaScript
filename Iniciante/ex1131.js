var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let grenal = 0;
let inter = 0;
let gremio = 0;
let empates = 0;
for (let i = 0; i < 2;){
    let [x, y] = lines.shift().split(' ');
    i = parseInt(lines.shift());
    console.log('Novo grenal (1-sim 2-nao)');
    grenal++;
    if  (parseInt(x) === parseInt(y)){
        empates++;
    } else if (parseInt(x) > parseInt(y)){
        inter++;
    } else {
        gremio++;
    }
}
console.log(`${grenal} grenais`);
console.log(`Inter:${inter}`);
console.log(`Gremio:${gremio}`);
console.log(`Empates:${empates}`);
if (inter > gremio && inter > empates){
    console.log(`Inter venceu mais`);
} else if (gremio > inter && gremio > empates){
    console.log('Gremio venceu mais');
} else {
    console.log('Nao houve vencedor');
}



