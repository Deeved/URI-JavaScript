const input = require('fs').readFileSync('stdin', 'utf8')

let valor = parseInt(input.split('\n'))

let rest = valor
let cem=0, cinq=0, vint=0, dez=0, cinc=0, dois=0, um=0 

if( (rest/100) > 0 ) {
    cem = parseInt(rest/100) 
    rest -= cem*100
}

if( (rest/50) > 0 ) {
    cinq = parseInt(rest/50)
    rest -= cinq*50
}

if( (rest/20) > 0 ) {
    vint = parseInt(rest/20)
    rest -= vint*20
}

if( (rest/10) > 0 ) {
    dez = parseInt(rest/10)
    rest -= dez*10
}

if( (rest/5) > 0 ) {
    cinc = parseInt(rest/5)
    rest -= cinc*5
}

if( (rest/2) > 0 ) {
    dois = parseInt(rest/2)
    rest -= dois*2
}

if( rest > 0 ) {
    um = parseInt(rest)
    rest -= um
}

console.log(`${valor}
${cem} nota(s) de R$ 100,00
${cinq} nota(s) de R$ 50,00
${vint} nota(s) de R$ 20,00
${dez} nota(s) de R$ 10,00
${cinc} nota(s) de R$ 5,00
${dois} nota(s) de R$ 2,00
${um} nota(s) de R$ 1,00`)
