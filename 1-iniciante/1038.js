const input = require('fs').readFileSync('stdin', 'utf8')
const precos = [4.00, 4.50, 5.00, 2.00, 1.50]
let [a, b] = input.split(' ').map( item => parseInt(item))
let total = precos[a-1] * b

console.log(`Total: R$ ${(total).toFixed(2)}`)