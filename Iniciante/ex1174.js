var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0; i < 100; i++){
    let numeros = parseFloat(lines.shift());
    if (numeros <= 10){
        console.log(`A[${i}] = ${numeros.toFixed(1)}`);
    }
}