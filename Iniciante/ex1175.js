var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0; i < 20; i++){
    let numeros = parseInt(lines.pop());
    console.log(`N[${i}] = ${numeros}`);
}