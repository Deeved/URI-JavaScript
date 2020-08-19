var input = require('fs').readFileSync('stdin', 'utf8')

var [a,b] = input.split('\n').map( item => parseInt(item))

console.log(`PROD = ${a*b}`)