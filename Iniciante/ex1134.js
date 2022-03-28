var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let alcool = 0;
let gasolina = 0; 
let diesel = 0;
for (let i = 0 ; i < 4 ;){
    let entrada = parseInt(lines.shift());
    if (entrada === 1){
        alcool++
    } else if (entrada === 2) {
        gasolina++
    } else if (entrada === 3) {
        diesel++
    } else if (entrada === 4){
        i = 4
    }
}
console.log(`MUITO OBRIGADO`)
console.log(`Alcool: ${alcool}`)
console.log(`Gasolina: ${gasolina}`)
console.log(`Diesel: ${diesel}`)