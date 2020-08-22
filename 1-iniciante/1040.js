const input = require('fs').readFileSync('stdin', 'utf8')

let notas = input.split('\n')
let rec

let [n1,n2,n3,n4] = notas[0].split(' ').map(item => parseFloat(item))

if(notas[1]) rec = parseFloat(notas[1])

let media = (n1*2 + n2*3 + n3*4 + n4) / 10

if (media < 5.0){
    console.log(`Media: ${(media).toFixed(1)}\nAluno reprovado.`)
}else if(media >= 7.0){
    console.log(`Media: ${(media).toFixed(1)}\nAluno aprovado.`)
}else{
    console.log(`Media: ${(media).toFixed(1)}\nAluno em exame.\nNota do exame: ${(rec).toFixed(1)}`)
    if ( ((media + rec)/2) < 5 ) {
        console.log('Aluno reprovado.')
    }else{
        console.log('Aluno aprovado.')
    } 
    console.log(`Media final: ${((media + rec)/2).toFixed(1)}`)
}
