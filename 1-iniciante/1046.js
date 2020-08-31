const input = require('fs').readFileSync('stdin', 'utf8')

let [ i, f] = input.split(' ').map(item => parseInt(item))

if(i == f){
    console.log('O JOGO DUROU 24 HORA(S)')
}else if(i>f){
    console.log(`O JOGO DUROU ${((f+24)-i)} HORA(S)`)
}else{
    console.log(`O JOGO DUROU ${(f-i)} HORA(S)`)
}