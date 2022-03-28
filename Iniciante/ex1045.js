var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

if (A < B){
    temp = A
    A = B;
    B = temp;
}
if (B < C){
    temp = B
    B = C;
    C = temp;
}
if (A < B){
    temp = A
    A = B;
    B = temp;
}

if (A >= B + C){
    console.log('NAO FORMA TRIANGULO')
} else {
    if ((A ** 2) == (B ** 2) + (C ** 2)){
        console.log('TRIANGULO RETANGULO')
    } 
    if ((A ** 2) > (B ** 2) + (C ** 2)){
        console.log('TRIANGULO OBTUSANGULO')
    }  
    if ((A ** 2) < (B ** 2) + (C ** 2)){
        console.log('TRIANGULO ACUTANGULO')
    } 
    if (A == B & B == C){
        console.log('TRIANGULO EQUILATERO')
    } 
    if (A == B & B != C || B == C & C != A || C == A & A != B){
        console.log('TRIANGULO ISOSCELES')
    }
}