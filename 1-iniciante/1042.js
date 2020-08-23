const input = require('fs').readFileSync('stdin', 'utf8')

let x = input.split(' ').map(item => parseInt(item))
let y = [...x]

x.sort( (a,b) => a-b).map(item => console.log(item))
console.log()
y.map(item => console.log(item))