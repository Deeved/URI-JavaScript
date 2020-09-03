const input = require('fs').readFileSync('stdin', 'utf8')

let arr = input.split('\n')
arr.shift()
let dentro = 0, fora = 0

arr.map( (item, indice) => {
    if(indice >= 10000) return 
    if(item > -10000000 && item < 10000000){
        (item>=10 && item <=20) ? dentro++ : fora++
    }
})

console.log(`${dentro} in`)
console.log(`${fora} out`)