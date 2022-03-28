var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var numero = lines.shift();
var notas_100 = Math.floor(numero / 100)
var notas_50 = Math.floor((numero - (notas_100 * 100)) / 50)
var notas_20 = Math.floor((numero - (notas_100 * 100) - (notas_50 * 50)) / 20)
var notas_10 = Math.floor((numero - (notas_100 * 100) - (notas_50 * 50) - (notas_20 * 20)) / 10)
var notas_5 = Math.floor((numero - (notas_100 * 100) - (notas_50 * 50) - (notas_20 * 20) - (notas_10 * 10)) / 5)
var notas_2 = Math.floor((numero - (notas_100 * 100) - (notas_50 * 50) - (notas_20 * 20) - (notas_10 * 10) - (notas_5 * 5)) / 2)
var notas_1 = Math.floor((numero - (notas_100 * 100) - (notas_50 * 50) - (notas_20 * 20) - (notas_10 * 10) - (notas_5 * 5) - (notas_2 * 2)) / 1)
console.log(numero)
console.log(`${notas_100} nota(s) de R$ 100,00`)
console.log(`${notas_50} nota(s) de R$ 50,00`)
console.log(`${notas_20} nota(s) de R$ 20,00`)
console.log(`${notas_10} nota(s) de R$ 10,00`)
console.log(`${notas_5} nota(s) de R$ 5,00`)
console.log(`${notas_2} nota(s) de R$ 2,00`)
console.log(`${notas_1} nota(s) de R$ 1,00`)
