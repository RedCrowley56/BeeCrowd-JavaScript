var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let salario = parseFloat(lines.shift());
if (salario > 0 && salario <= 2000){
    console.log('Isento')
}
if (salario > 2000 && salario <= 3000){
    salarioTaxado = salario - 2000;
    salario = salarioTaxado * 0.08;
    console.log(`R$ ${salario.toFixed(2)}`)
}
if (salario > 3000 && salario <= 4500){
    salarioTaxado = salario - 2000 - 1000;
    salario = salarioTaxado * 0.18 + 80;
    console.log(`R$ ${salario.toFixed(2)}`)
}
if (salario > 4500){
    salarioTaxado = salario - 2000 - 1000 - 1500;
    salario = salarioTaxado * 0.28 + 80 + 270;
    console.log(`R$ ${salario.toFixed(2)}`)
}

