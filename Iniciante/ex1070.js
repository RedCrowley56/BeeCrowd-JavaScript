var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var entrada = parseFloat(lines.shift());
var contagem = 0;
for (var i = entrada; contagem < 6; i++){
    if (i % 2 != 0 && contagem < 6){
        console.log(i)
        contagem += 1
    }
}
