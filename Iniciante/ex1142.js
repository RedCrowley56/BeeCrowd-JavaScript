var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
let entrada = lines.shift();
let comeco = 3;
for (let i = 0; i < entrada; i++){
    console.log(`${comeco - 2} ${comeco - 1} ${comeco} PUM`);
    comeco += 4;
}