var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const qtd_testes = parseInt(lines.shift());
let total = 0;
let coelhos = 0;
let ratos = 0;
let sapos = 0;
for (let i = 0; i < qtd_testes; i++){
    let [A, B] = lines.shift().split(" ");
    if (B === 'C\r' || B === 'C'){
        coelhos += parseInt(A);
    } else if (B === 'R\r' || B === 'R'){
        ratos += parseInt(A);
    } else if (B === 'S\r' || B === 'S'){
        sapos += parseInt(A);
    }
}
total = coelhos + ratos + sapos

console.log(`Total: ${total} cobaias`);
console.log(`Total de coelhos: ${coelhos}`);
console.log(`Total de ratos: ${ratos}`);
console.log(`Total de sapos: ${sapos}`);
console.log(`Percentual de coelhos: ${(coelhos / total * 100).toFixed(2)} %`);
console.log(`Percentual de ratos: ${(ratos / total * 100).toFixed(2)} %`);
console.log(`Percentual de sapos: ${(sapos / total * 100).toFixed(2)} %`);