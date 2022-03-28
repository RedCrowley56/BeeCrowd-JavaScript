var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const NUMBER =  parseInt(lines.shift());
const valor_hora = parseInt(lines.shift());
const horas_trab = parseFloat(lines.shift());
const SALARY = valor_hora * horas_trab;
console.log(`NUMBER = ${NUMBER}`);
console.log(`SALARY = U$ ${SALARY.toFixed(2)}`);