var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let salario = parseFloat(lines.shift());
if (salario > 0 && salario <= 400){
    reajuste = salario * 0.15
    porcentagem = 15
    salario = salario + reajuste
}else if (salario > 400 && salario <= 800){
    reajuste = salario * 0.12
    porcentagem = 12
    salario = salario + reajuste
}else if (salario > 800 && salario <= 1200){
    reajuste = salario * 0.10
    porcentagem = 10
    salario = salario + reajuste
}else if (salario > 1200 && salario <= 2000){
    reajuste = salario * 0.07
    porcentagem = 7
    salario = salario + reajuste
}else{
    reajuste = salario * 0.04
    porcentagem = 4
    salario = salario + reajuste
}
console.log(`Novo salario: ${salario.toFixed(2)}`)
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
console.log(`Em percentual: ${porcentagem} %`)
