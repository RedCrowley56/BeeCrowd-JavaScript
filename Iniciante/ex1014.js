var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var distancia = Number(lines.shift());
var combustivel_gasto = Number(lines.shift());
var consumo_medio = (distancia/combustivel_gasto).toFixed(3)
console.log(`${consumo_medio} km/l`)