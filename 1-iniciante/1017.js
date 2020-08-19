const input = require('fs').readFileSync('stdin', 'utf8')

let [temp, velm] = input.split('\n').map( item => parseInt(item))

console.log(`${((temp*velm)/12).toFixed(3)}`)