let e = 1;
let b = 7;
let contagem = 0;
for (let i = 0; i < 15; i++){
    console.log(`I=${e} J=${b}`)
    b--
    contagem++
    if (contagem === 3){
        e += 2
        b = 7
        contagem = 0
    }
}