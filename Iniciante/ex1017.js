var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var tempo = lines.shift();
var velocidade_media = lines.shift();
var combustivel_gasto = tempo * velocidade_media / 12
console.log(combustivel_gasto.toFixed(3))
