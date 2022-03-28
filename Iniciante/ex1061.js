var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let diaInicio = lines.shift().split('Dia ');
let [horaInicial, minutoInicial, segundoInicial] = lines.shift().split(' : ');
let diaFinal = lines.shift().split('Dia ');
let [horaFinal, minutoFinal, segundoFinal] = lines.shift().split(' : ');
let dia_resul = 0;
let hora_resul = 0;
let minuto_resul = 0;
let segundo_resul = 0;
if (diaInicio.join('') === diaFinal.join('')){
    hora_resul = parseInt(horaFinal) - parseInt(horaInicial)
    if (parseInt(minutoFinal) < parseInt(minutoInicial)){
        hora_resul--
        minuto_resul = parseInt(minutoFinal) - parseInt(minutoInicial) + 60
    } else if (parseInt(minutoFinal) > parseInt(minutoInicial)){
        minuto_resul = parseInt(minutoFinal) - parseInt(minutoInicial)
    } else if (parseInt(minutoFinal) === parseInt(minutoInicial) && parseInt(segundoFinal) < parseInt(segundoInicial)){
        hora_resul--
        minuto_resul = 60
    }
    if (parseInt(segundoFinal) < parseInt(segundoInicial)){
        minuto_resul--
        segundo_resul = parseInt(segundoFinal) - parseInt(segundoInicial) + 60
    } else if(parseInt(segundoFinal) > parseInt(segundoInicial)) {
        segundo_resul = parseInt(segundoFinal) - parseInt(segundoInicial)
    }
} else{
    dia_resul = parseInt(diaFinal.join('')) - parseInt(diaInicio.join(''))
    if (parseInt(horaFinal) < parseInt(horaInicial)){
        dia_resul--
        hora_resul = parseInt(horaFinal) - parseInt(horaInicial) + 24
    } else if (parseInt(horaFinal) > parseInt(horaInicial)){
        hora_resul = parseInt(horaFinal) - parseInt(horaInicial)
    } else if (parseInt(horaFinal) === parseInt(horaInicial) && parseInt(minutoFinal) < parseInt(minutoInicial)){
        dia_resul--
        hora_resul = 24
    }
    if (parseInt(minutoFinal) < parseInt(minutoInicial)){
        hora_resul--
        minuto_resul = parseInt(minutoFinal) - parseInt(minutoInicial) + 60
    } else if (parseInt(minutoFinal) > parseInt(minutoInicial)){
        minuto_resul = parseInt(minutoFinal) - parseInt(minutoInicial)
    } else if (parseInt(minutoFinal) === parseInt(minutoInicial) && parseInt(segundoFinal) < parseInt(segundoInicial)){
        hora_resul--
        minuto_resul = 60
    }
    if (parseInt(segundoFinal) < parseInt(segundoInicial)){
        minuto_resul -= 1
        segundo_resul = parseInt(segundoFinal) - parseInt(segundoInicial) + 60
    } else if (parseInt(segundoFinal) > parseInt(segundoInicial)){
        segundo_resul = parseInt(segundoFinal) - parseInt(segundoInicial)
    }
}

console.log(`${dia_resul} dia(s)`)
console.log(`${hora_resul} hora(s)`)
console.log(`${minuto_resul} minuto(s)`)
console.log(`${segundo_resul} segundo(s)`)