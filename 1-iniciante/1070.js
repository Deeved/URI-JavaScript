const input = require('fs').readFileSync('stdin', 'utf8')

let x = parseInt(input.split('\n'))

if( x % 2 === 0 ) { x++ }

for(let i=0; i<12; i+=2){
    console.log(x+i)
}
