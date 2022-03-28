var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A1 = parseFloat(lines.shift());
let A2 = parseFloat(lines.shift());
let A3 = parseFloat(lines.shift());
let A4 = parseFloat(lines.shift());
let A5 = parseFloat(lines.shift());
let positivos = 0;
if (A1 % 2 == 0){
    positivos += 1
}
if (A2 % 2 == 0){
    positivos += 1
}
if (A3 % 2 == 0){
    positivos += 1
}
if (A4 % 2 == 0){
    positivos += 1
}
if (A5 % 2 == 0){
    positivos += 1
}
console.log(`${positivos} valores pares`)