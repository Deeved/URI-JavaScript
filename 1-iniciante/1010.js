const input = require('fs').readFileSync('stdin', 'utf8')

const [p1, p2] = input.split('\n').map( item => item.split(' '))

let total = p1[1] * p1[2] + p2[1] * p2[2]

console.log(`VALOR A PAGAR: R$ ${(total).toFixed(2)}`)