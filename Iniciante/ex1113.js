var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
for (;;){
    try{
        for (;;){
            let [x, y] = lines.shift().split(' ');
                if (parseInt(x) === parseInt(y)){
                    break;
                } else if (parseInt(y) > parseInt(x)){
                    console.log('Crescente');
                } else if (parseInt(x) > parseInt(y)){
                    console.log('Decrescente');
                }
            }
    } catch (e){
        break;
    }
}