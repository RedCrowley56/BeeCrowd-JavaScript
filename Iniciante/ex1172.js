var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
for (let i = 0; i < 10; i++){
    let vetorX = parseInt(lines.shift());
    if (vetorX <= 0){
        console.log(`X[${i}] = 1`);
    } else {
        console.log(`X[${i}] = ${vetorX}`);
    }
}