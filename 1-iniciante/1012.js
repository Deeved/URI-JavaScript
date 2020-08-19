const input = require('fs').readFileSync('stdin', 'utf8')
const PI = 3.14159
let [a, b, c] = input.split(' ').map( item => parseFloat(item))

console.log(`TRIANGULO: ${((a*c)/2).toFixed(3)}
CIRCULO: ${((c*c)*PI).toFixed(3)}
TRAPEZIO: ${(((a+b)*c)/2).toFixed(3)}
QUADRADO: ${ (b*b).toFixed(3)}
RETANGULO: ${ (a*b).toFixed(3)}`)