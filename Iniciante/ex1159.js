var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let soma = 0;
let x = parseInt(lines.shift());
for (;x !== 0;){
    for (let i = 0; i < 5;){
        if (x % 2 === 0){
            soma += x
            i++
        }
        x++
    }
    console.log(soma)
    soma = 0;
    x = parseInt(lines.shift());
}
