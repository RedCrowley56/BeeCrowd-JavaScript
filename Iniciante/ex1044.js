var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());

if (B > A & B % A == 0){
    console.log('Sao Multiplos')
} else if (A > B & A % B == 0){
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}