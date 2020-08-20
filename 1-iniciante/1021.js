const input = require('fs').readFileSync('stdin', 'utf8')

let x = parseFloat(input.split('\n'))
let cem=0, cinq=0, vint=0, dez=0, cinc=0, dois=0
let m1=0, m50=0, m25=0, m10=0, m05=0, m01=0

let centavos = Math.round( (x - parseInt(x)) * 100)

if( (x/100) > 0){
    cem = parseInt(x/100)
    x-= cem*100
}

if( (x/50) > 0){
    cinq = parseInt(x/50)
    x-= cinq*50
}

if( (x/20) > 0){
    vint = parseInt(x/20)
    x-= vint*20
}

if( (x/10) > 0){
    dez = parseInt(x/10)
    x-= dez*10
}

if( (x/5) > 0){
    cinc = parseInt(x/5)
    x-= cinc*5
}

if( (x/2) > 0){
    dois = parseInt(x/2)
    x-= dois*2
}

if(x>0) {
    m1 = parseInt(x)
    x-= m1
}

//centavos
if( (centavos/50) > 0){
    m50 = parseInt(centavos/50)
    centavos-= m50*50
}

if( (centavos/25) > 0){
    m25 = parseInt(centavos/25)
    centavos-= m25*25
}

if( (centavos/10) > 0){
    m10 = parseInt(centavos/10)
    centavos-= m10*10
}

if( (centavos/5) > 0){
    m05 = parseInt(centavos/5)
    centavos-= m05*5
}

if( centavos > 0){
    m01 = centavos
    centavos-= m01
}

console.log("NOTAS:")
console.log(cem + " nota(s) de R$ 100.00")
console.log(cinq + " nota(s) de R$ 50.00")
console.log(vint + " nota(s) de R$ 20.00")
console.log(dez + " nota(s) de R$ 10.00")
console.log(cinc + " nota(s) de R$ 5.00")
console.log(dois + " nota(s) de R$ 2.00")
console.log("MOEDAS:") 
console.log(m1 + " moeda(s) de R$ 1.00")
console.log(m50 + " moeda(s) de R$ 0.50")
console.log(m25 + " moeda(s) de R$ 0.25")
console.log(m10 + " moeda(s) de R$ 0.10")
console.log(m05 + " moeda(s) de R$ 0.05")
console.log(m01 + " moeda(s) de R$ 0.01")