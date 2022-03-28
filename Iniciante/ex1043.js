var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());

if (A + B > C & A + C > B & B + C > A){
     console.log(`Perimetro = ${(A + B + C).toFixed(1)}`)
} else {
    console.log(`Area = ${((A+B)*C/2).toFixed(1)}`)
}    

