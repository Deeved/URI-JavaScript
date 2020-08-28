const input = require('fs').readFileSync('stdin', 'utf8')

let num = parseInt(input.split('\n'))

for (let index = 1; index <= num; index++) {
    (index%2 === 1) ? console.log(index) : ''
}