var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const senha = 2002;
for ( ; ; ){
    var x = parseInt(lines.shift());
    if (x === senha){
        console.log('Acesso Permitido');
        break;
    } else if (isNaN(x)) {
        break;
    } else if (x != senha){
        console.log('Senha Invalida');
    }
}