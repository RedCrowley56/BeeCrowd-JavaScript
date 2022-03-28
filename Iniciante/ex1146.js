var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let numeros = [];
for (let x = parseInt(lines.shift()) ; x !== 0; x = parseInt(lines.shift()) ){
    for (let i = 1; i <= x; i++ ) {
        numeros.push(i);
    }
    console.log(`${numeros.join(' ')}`);
    numeros = [];
}