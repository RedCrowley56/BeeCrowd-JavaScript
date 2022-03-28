var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var entrada = lines.shift();
var arvore = {
    '61': 'Brasilia',
    '71': 'Salvador',
    '11': 'Sao Paulo',
    '21': 'Rio de Janeiro',
    '32': 'Juiz de Fora',
    '19': 'Campinas',
    '27': 'Vitoria',
    '31': 'Belo Horizonte'
}
function isKeyExists(arvore,entrada){
    return entrada in arvore;
}
if (isKeyExists(arvore, entrada) == false){
    console.log('DDD nao cadastrado')
} else{
    console.log(arvore[entrada])
}
