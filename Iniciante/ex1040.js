var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
var lines2 = input.split('\n');
let n1 = parseFloat(lines.shift());
let n2 = parseFloat(lines.shift());
let n3 = parseFloat(lines.shift());
let n4 = parseFloat(lines.shift());
let n6 = parseFloat(lines2.shift());
let n5 = parseFloat(lines2.shift());
let media = parseFloat((n1 * 2) + (n2 * 3) + (n3 * 4) + (n4 * 1)) / 10
if (media >= 7.0 ) {
    console.log(`Media: ${media.toFixed(1)}`)
    console.log(`Aluno aprovado.`)
}
if (media < 5.0 ) {
    console.log(`Media: ${media.toFixed(1)}`)
    console.log(`Aluno reprovado.`)
}
if (media >= 5.0 & media <= 6.9) {
    console.log(`Media: ${media.toFixed(1)}`)
    console.log("Aluno em exame.")
    media = (media + n5) / 2
    console.log(`Nota do exame: ${n5.toFixed(1)}`)
    if (media >= 5.0){
        console.log("Aluno aprovado.")
    } 
    if (media < 5.0) {
        console.log("Aluno reprovado")
    }
    console.log(`Media final: ${media.toFixed(1)}`)
}