var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const entrada = lines.shift();
let resultado = 0;
for (let i = 0; i < entrada; i++){
    resultado = 0;
    let [x, y] = lines.shift().split(' ');
    if (parseInt(x) < parseInt(y)){
        for (let i = parseInt(x) + 1; i < parseInt(y); i++){
            if (i % 2 !== 0){
                resultado += parseInt(i)
            }
        }
    } else {
        for (let i = parseInt(y) + 1; i < parseInt(x); i++){
            if (i % 2 !== 0){
                resultado += parseInt(i)
            }
        }
    }
    console.log(resultado);
}