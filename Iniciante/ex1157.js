var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let entrada = parseInt(lines.shift());
for (let i = 1; i <= entrada; i++){
    if (entrada % i === 0){
        console.log(i);
    }
}