var input = require('fs').readFileSync('stdin','utf8')

let [a, b, c] = input.split('\n').map( item => parseFloat( item )) 
let media = ( (a*2 + b*3 + c*5) /10 ).toFixed(1)
console.log(`MEDIA = ${media}`) 