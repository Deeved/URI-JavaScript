const input = require('fs').readFileSync('stdin', 'utf8')

let [a, b, c] = input.split(' ').map( item => parseFloat(item))

let delta = Math.pow(b,2) - (4*a*c)
let r1 = (-b + Math.sqrt(delta))/(2*a)
let r2 = (-b - Math.sqrt(delta))/(2*a)

if( a === 0 ){
    console.log('Impossivel calcular')
}else if(delta < 0){
    console.log('Impossivel calcular')
}else{
    console.log(`R1 = ${(r1).toFixed(5)}\nR2 = ${(r2).toFixed(5)}`)
}