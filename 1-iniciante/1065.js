
const input = require('fs').readFileSync('stdin', 'utf8')

let arr = input.split('\n').map( item => parseInt(item) )
let count = 0

arr.map(item => {
  if( item%2 === 0) count++ 
})

console.log(`${count} valores pares`)