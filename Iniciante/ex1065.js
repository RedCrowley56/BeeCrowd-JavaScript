var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let pares = 0;
for (let i = 0; i < 5; i++){
    let numeros = parseFloat(lines.shift());
    if (numeros % 2 === 0){
        pares += 1;
    }
}
console.log(`${pares} valores pares`);