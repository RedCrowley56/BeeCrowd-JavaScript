var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var entrada = parseFloat(lines.shift());
for (var i = 0; i <= entrada; i++){
    if (i % 2 != 0){
        console.log(i)
    }
}