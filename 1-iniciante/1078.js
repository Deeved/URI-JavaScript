const input = require('fs').readFileSync('stdin', 'utf8')

let x = parseInt(input.split('\n'))
let i = 1
for(i; i<=10; i++){
    console.log(`${i} x ${x} = ${i*x}`)
}