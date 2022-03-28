var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let A = lines.shift().split(" ");
let B = lines.shift().split(" ");

let Qtd_pecasA = A.slice(1, -1)
let Qtd_pecasB = B.slice(1, -1)

let valor_pecasA = A.slice(-1)
let valor_pecasB = B.slice(-1)

let valor_total = parseFloat(valor_pecasA * Qtd_pecasA) + parseFloat(valor_pecasB * Qtd_pecasB) 
console.log(`VALOR A PAGAR: R$ ${valor_total.toFixed(2)}`)
