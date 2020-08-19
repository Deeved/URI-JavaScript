var input = require('fs').readFileSync('stdin','utf8')

let [a, b, c, d] = input.split('\n').map( item => parseInt(item) )

console.log(`DIFERENCA = ${(a*b - c*d)}`) 