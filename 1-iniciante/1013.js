const input = require('fs').readFileSync('stdin', 'utf8')

let arr = input.split(" ").map( item => parseInt(item))
let maior = arr.reduce( (a, b) => Math.max(a,b) )

console.log(`${maior} eh o maior`)