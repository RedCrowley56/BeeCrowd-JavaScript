var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n'); // /r/n para funcionar no windows
let entrada1 = lines.shift();
let entrada2 = lines.shift();
let entrada3 = lines.shift();
const esquema = {
    vertebrado: {
        ave: {
            carnivoro: 'aguia',
            onivoro: 'pomba'
        },
        mamifero: {
            onivoro: 'homem',
            herbivoro: 'vaca'
        }
    },
    invertebrado: {
        inseto: {
            hematofago: 'pulga',
            herbivoro: 'lagarta'
            },
        anelideo: {
            hematofago: 'sanguessuga',
            onivoro: 'minhoca'
        }
    }
}
console.log(esquema[entrada1][entrada2][entrada3])

