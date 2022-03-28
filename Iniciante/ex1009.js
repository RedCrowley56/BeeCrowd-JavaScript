var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const nome = lines.shift();
const salario = parseFloat(lines.shift());
const vendas = parseFloat(lines.shift());
const salario_final = salario + (vendas * 0.15);
console.log(`TOTAL = R$ ${salario_final.toFixed(2)}`);
