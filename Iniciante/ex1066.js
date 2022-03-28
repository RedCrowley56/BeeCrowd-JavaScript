var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let negativo = 0;
let positivo = 0;
let par = 0;
let impar = 0;

for (let i = 0; i < 5; i++){
    let A = parseInt(lines.shift());
    if (A > 0){
        positivo++
    } else if (A === 0){
        
    } else{
        negativo++
    }
    if (A % 2 === 0){
        par++
    } else {
        impar++
    }
}
console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${positivo} valor(es) positivo(s)`)
console.log(`${negativo} valor(es) negativo(s)`)