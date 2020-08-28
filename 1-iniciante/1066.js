const input = require('fs').readFileSync('stdin', 'utf8')

let arr = input.split('\n').map( item => parseInt(item) )

let par = 0, impar = 0, pos = 0, neg = 0

arr.map( item => {
  if( Math.abs(item % 2) === 0) par++
  if( Math.abs(item % 2) === 1) impar++
  if(item > 0) pos++
  if(item <0 ) neg++
})

console.log(`${par} valor(es) par(es)`)
console.log(`${impar} valor(es) impar(es)`)
console.log(`${pos} valor(es) positivo(s)`)
console.log(`${neg} valor(es) negativo(s)`)