const input = require('fs').readFileSync('stdin', 'utf8')

let [a, b] = input.split(' ')

if( a % b === 0 || b % a === 0){
    console.log('Sao Multiplos')
} else {
    console.log('Nao sao Multiplos')
}