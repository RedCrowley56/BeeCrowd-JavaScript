var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var separacao = lines.shift().split(" ")
var A = Number(separacao.slice(0, -2));
var B = Number(separacao.slice(1, -1));
var C = Number(separacao.slice(-1));
var MaiorAB = ((A+B+Math.abs(A-B))/2);
var Maior = ((MaiorAB+C+Math.abs(MaiorAB-C))/2);
console.log (`${Maior} eh o maior`);