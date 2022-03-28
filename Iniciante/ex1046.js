var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let horaInicial = parseInt(lines.shift());
let horaFinal = parseInt(lines.shift());
let qtd_horas = 0;
if (horaInicial > horaFinal){
    qtd_horas = 24 - horaInicial + horaFinal ;
} else if (horaInicial === horaFinal) {
    qtd_horas = 24;
} else{
    qtd_horas = horaFinal - horaInicial;
}

console.log(`O JOGO DUROU ${qtd_horas} HORA(S)`)