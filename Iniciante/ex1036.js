var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());
let C = parseFloat(lines.shift());
let delta = (B ** 2 - 4 * A * C)
let R1 = (-B + Math.sqrt(delta)) / (2 * A)
let R2 = (-B - Math.sqrt(delta)) / (2 * A)
if (isNaN(R1, R2)) {
    console.log("Impossivel calcular")
} else {
    console.log(`R1 = ${R1.toFixed(5)}`)
    console.log(`R2 = ${R2.toFixed(5)}`)
}
