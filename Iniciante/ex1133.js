var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
if (A > B){
    for (let i = B + 1; i < A; i++){
        if (i % 5 === 2 || i % 5 === 3){
            console.log(i);
        }
    }
} else {
    for (let i = A + 1; i < B; i++){
        if (i % 5 === 2 || i % 5 === 3){
            console.log(i);
        }
    }
}
