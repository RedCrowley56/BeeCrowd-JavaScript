var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let x = parseInt(lines.shift());
let y = parseInt(lines.shift());
let soma = 0;
if (x > y){
    for (var i = y + 1; i < x; i++ ){
        if (i % 2 != 0){
            soma = soma + i
        }
    }
}else if (x < y){
    for (var i = x + 1; i < y; i++ ){
        if (i % 2 != 0){
            soma = soma + i
        }
    }
} else {
    soma = 0
}
console.log(soma)