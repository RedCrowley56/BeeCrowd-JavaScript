var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var valor_segundos = lines.shift();
var horas = parseInt(valor_segundos / 3600);
var minutos = parseInt((valor_segundos % 3600) / 60);
var segundos = valor_segundos % 60;
console.log(`${horas}:${minutos}:${segundos}`);
