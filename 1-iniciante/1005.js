var input = require('fs').readFileSync('stdin', 'utf8')

let [a, b] = input.split('\n').map( item => parseFloat(item))
let media = ( (a*3.5 + b*7.5 )/11).toFixed(5)
console.log(`MEDIA = ${ media }`)