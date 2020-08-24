const input = require('fs').readFileSync('stdin', 'utf8')

let count = 0
let arr = input.split('\n').map(item => {
    if(parseFloat(item) > 0 ) { count++} 
})

console.log(`${count} valores positivos`)

