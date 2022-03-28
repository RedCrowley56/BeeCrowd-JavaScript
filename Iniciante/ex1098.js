let e = parseInt(0);
let b = parseInt(1);
let soma = parseInt(0);
let contagem = 0;
for (let i = 0; i < 33; i++){
    console.log(`I=${e} J=${b}`)
    b++
    contagem++
    if (contagem === 3){
        e += 0.2
        soma += 0.2
        b = 1 + soma
        contagem = 0
    }
    if (e === 0.6000000000000001){
        e = 0.60
    }
    if (e === 1.5999999999999999){
        e = 1.60
    }
    if (b === 2.5999999999999996){
        b = 2.6
    }else if (b === 3.5999999999999996){
        b = 3.6
    }
}