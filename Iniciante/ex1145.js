var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let [x, y] = lines.shift().split(' ');
let comeco = 1;
let numeros = [];
for (let i = 1;  parseInt(y) > comeco; i++){
    for (let i = 1; i <= parseInt(x); i++){
        numeros.push(comeco);
        comeco++;
    }
    console.log(`${numeros.join(' ')}`);
    numeros = [];
}
