var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let idade_dias = Number(lines.shift());
let ano = parseInt(idade_dias / 365);
let mes = parseInt((idade_dias % 365) / 30);
const dias = parseInt(idade_dias - ((ano * 365) + (mes * 30)));
console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dias} dia(s)`);
