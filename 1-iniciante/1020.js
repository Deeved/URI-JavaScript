const input = require('fs').readFileSync('stdin', 'utf8')

let dias = parseInt(input.split('\n'))
let ano=0, mes=0

if( (dias/365) > 0 ){
    ano = parseInt(dias/365)
    dias -= ano*365
}

if( (dias/30) > 0){
    mes = parseInt(dias/30)
    dias -= mes*30
}

console.log(`${ano} ano(s)
${mes} mes(es)
${dias} dia(s)`)