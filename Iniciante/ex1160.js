var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
const qtd_testes = parseInt(lines.shift());
for (let i = 0; i < qtd_testes ; i++){
    let [PA, PB, G1, G2] = lines.shift().split(' ');
    let qtd_anos = 0;
    for(;parseInt(PA) <= parseInt(PB);){
        PA = parseInt(PA) * (parseFloat(G1) / 100) + parseInt(PA);
        PB = parseInt(PB) * (parseFloat(G2) / 100) + parseInt(PB);
        qtd_anos++;
        if (qtd_anos > 100){
            break;
        }
    }
    if (qtd_anos > 100){
        console.log('Mais de 1 seculo.');
    } else {
        console.log(`${qtd_anos} anos.`);
    }
}