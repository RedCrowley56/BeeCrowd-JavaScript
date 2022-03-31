var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let positivos = 0;
for (let i = 0; i < 6; i++){
    let numeros = parseFloat(lines.shift());
    if (numeros > 0){
        positivos += 1;
    }
}
console.log(`${positivos} valores positivos`);