var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const numero = lines.shift();
for (let i = 0; i <= 10000; i++){
    if (i % numero === 2){
        console.log(i)
    }
}