const input = require('fs').readFileSync('stdin', 'utf8')

let [id, hrs_worked, value_hr_work  ] = input.split('\n').map( item => parseFloat( item ))

console.log(`NUMBER = ${id}\nSALARY = U$ ${(hrs_worked * value_hr_work).toFixed(2)}`)