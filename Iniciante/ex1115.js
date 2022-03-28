var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
for (;;){
    let [x, y] = lines.shift().split(' ');
    if (parseInt(x) === 0 || parseInt(y) === 0){
        break;
    }
    if (parseInt(x) > 0 && parseInt(y) > 0){
        console.log('primeiro');
    } else if (parseInt(x) < 0 && parseInt(y) > 0){
        console.log('segundo');
    } else if (parseInt(x) < 0 && parseInt(y) < 0){
        console.log('terceiro');         
    } else if (parseInt(x) > 0 && parseInt(y) < 0){
        console.log('quarto');     
    }
}