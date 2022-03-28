var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let A = lines.shift();
if (A >= 0 & A <= 25) {
    console.log("Intervalo [0,25]")
}
if (A > 25 & A <= 50) {
    console.log("Intervalo (25,50]")
}
if (A > 50 & A <= 75) {
    console.log("Intervalo (50,75]")
}
if (A > 75 & A <= 100) {
    console.log("Intervalo (75,100]")
}   
if (A < 0 || A > 100){
    console.log("Fora de intervalo")
}