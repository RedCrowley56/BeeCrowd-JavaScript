var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let B = 0;
let positivos = 0;
for (let i = 0; i < 6; i++){
    let A1 = parseFloat(lines.shift());
    if (A1 > 0){
        positivos += 1
        B += A1 
    }
}
media = (B / positivos).toFixed(1)
console.log(`${positivos} valores positivos`)
console.log(`${media}`)
