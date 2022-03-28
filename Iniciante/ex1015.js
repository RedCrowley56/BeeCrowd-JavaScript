var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var [x1, y1] = lines.shift().split(" ");
var [x2, y2] = lines.shift().split(" ");
var distancia = Math.sqrt(((x2- x1)**2)+((y2-y1)**2));
console.log(distancia.toFixed(4));