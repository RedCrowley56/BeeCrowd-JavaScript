var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var x = parseInt(lines.shift());
var y = parseInt(lines.shift());
let i = 1;
let soma = x;
for (;y <= x;){
    y = parseInt(lines.shift());
}
while (soma < y){
    soma += x + i;
    i++;
}
console.log(i);