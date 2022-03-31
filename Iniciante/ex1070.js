var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var entrada = parseInt(lines.shift());
for (var contagem = 0; contagem < 6; entrada++){
    if (entrada % 2 !== 0){
        console.log(entrada);
        contagem++;
    }
}
