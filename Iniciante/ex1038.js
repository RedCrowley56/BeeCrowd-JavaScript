var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let codigo = lines.shift();
let qtd_item = lines.shift();
if (codigo == 1) {
    console.log(`Total: R$ ${(qtd_item * 4).toFixed(2)}`)
}
if (codigo == 2) {
    console.log(`Total: R$ ${(qtd_item * 4.50).toFixed(2)}`)
}
if (codigo == 3) {
    console.log(`Total: R$ ${(qtd_item * 5).toFixed(2)}`)
}
if (codigo == 4) {
    console.log(`Total: R$ ${(qtd_item * 2).toFixed(2)}`)
}
if (codigo == 5) {
    console.log(`Total: R$ ${(qtd_item * 1.50).toFixed(2)}`)
}