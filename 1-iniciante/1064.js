const { parse } = require('path')

const input = require('fs').readFileSync('stdin', 'utf8')

let arr = input.split('\n').map(item=> parseFloat(item))

let qtd_pos = 0, acc = 0

arr.map(item => {
    if(item > 0){
        acc+=item
        qtd_pos++
    } 
})

console.log(`${qtd_pos} valores positivos`)
console.log(`${(acc/qtd_pos).toFixed(1)}`)