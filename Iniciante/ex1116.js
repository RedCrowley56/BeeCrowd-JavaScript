var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const ENTRADA = parseInt(lines.shift());
for (let i = 0; i < ENTRADA; i++){
    let [A, B] = lines.shift().split(' ');
    let divisao = parseInt(A) / parseInt(B);
    if (!isFinite(divisao)){
        console.log('divisao impossivel');
    }else{
        console.log(`${divisao.toFixed(1)}`);
    }
}
