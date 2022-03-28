var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let soma = 0;
let teste = [];
for (; ; ){
    try {
        let [x, y] = lines.shift().split(' ');
        if (parseInt(x) === 0 || parseInt(y) === 0 || parseInt(x) < 0 || parseInt(y) < 0){
            break;
        }
        if (x > y){
            teste = [];
            for (let i = parseInt(y); i <= parseInt(x); i++){
                teste.push(i)
                soma += parseInt(i)
            }
            console.log(`${teste.join(' ')} Sum=${soma}`)
            soma = 0;
        } else if (x < y){
            teste = [];
            for (let i = parseInt(x); i <= parseInt(y); i++){
                teste.push(i)
                soma += i
            }
            console.log(`${teste.join(' ')} Sum=${soma}`)
            soma = 0;    
        } else if (x === y){
            teste = [];
            soma = x;
            teste.push(x)
        }
    } catch (e){
        break;
    }
}