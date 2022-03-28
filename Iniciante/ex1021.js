var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var numero = Number(lines.shift());
let notas = [100, 50, 20, 10, 5, 2];
let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01];
console.log("NOTAS:");
for (let nota of notas){
    let qtd_notas = parseInt(numero / nota);
    console.log(`${qtd_notas} nota(s) de R$ ${nota}.00`);
    numero -= qtd_notas * nota;
}
console.log("MOEDAS:");
for (let moeda of moedas){
    numero = numero.toFixed(2)
    let qtd_moedas = parseInt (numero / moeda );
    console.log(`${qtd_moedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
    numero -= qtd_moedas * moeda;
} 