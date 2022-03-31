var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let numero = parseInt(lines.shift());
for (let i = 0; i < 10; i++){
    console.log(`N[${i}] = ${numero}`);
    numero = numero * 2;
}
