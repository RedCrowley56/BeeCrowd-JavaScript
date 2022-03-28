var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');
var entrada = parseInt(lines.shift());
for (var i = 0; i < entrada; i++){
    let [A, B, C] = lines.shift().split(" ")
    let media = ((A * 2) + (B * 3) + (C * 5)) / 10
    console.log(`${media.toFixed(1)}`)
}