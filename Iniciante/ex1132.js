var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
let soma = 0;
if (A > B){
    for (let i = B; i <= A; i++){
        if (i % 13 !== 0){
            soma += i;
        }
    }
} else {
    for (let i = A; i <= B; i++){
        if (i % 13 !== 0){
            soma += i;
        }
    }
}
console.log(soma);