var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split(' ');
let horaInicial = parseInt(lines.shift());
let minutoInicial = parseInt(lines.shift());
let horaFinal = parseInt(lines.shift());
let minutoFinal = parseInt(lines.shift());
let qtd_horas = 0;
let qtd_minutos = 0;

if (horaInicial > horaFinal){
    qtd_horas = 24 - horaInicial + horaFinal ;
} else if (horaInicial === horaFinal && minutoInicial >= minutoFinal) {
    qtd_horas = 24;
} else{
    qtd_horas = horaFinal - horaInicial;
}

if (minutoInicial > minutoFinal){
    qtd_minutos = 60 - minutoInicial + minutoFinal ;
    qtd_horas -= 1;
} else if (minutoInicial === minutoFinal) {
    qtd_minutos = 0;
} else{
    qtd_minutos = minutoFinal - minutoInicial;
}

console.log(`O JOGO DUROU ${qtd_horas} HORA(S) E ${qtd_minutos} MINUTO(S)`)