const input = require('fs').readFileSync('stdin', 'utf8')
const PI = 3.14159

let raio = parseFloat(input.split('\n'))

let volume = (4/3) * PI * Math.pow(raio,3)

console.log(`VOLUME = ${(volume).toFixed(3)}`)