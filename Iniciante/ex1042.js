var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let maior = 0;
let medio = 0;
let menor = 0;
if (A > B & A > C){
    maior = A;
    if (B > C){
        medio = B;
        menor = C;
    } else {
        medio = C;
        menor = B;
    }
}
if (B > A & B > C){
    maior = B;
    if (A > C){
        medio = A;
        menor = C;
    } else {
        medio = C;
        menor = A;
    }
}
if (C > B & C > A){
    maior = C;
    if (B > A){
        medio = B;
        menor = A;
    } else {
        medio = A;
        menor = B;
    }
}
console.log(menor)
console.log(medio)
console.log(maior)
console.log('')
console.log(A)
console.log(B)
console.log(C)