const input = require('fs').readFileSync('stdin', 'utf8')

let x = input.split('\n')

x.map(item => {
    let flag = 0
    let sentenca = ''
    let frase = item.split('')
    
    frase.map( letra => {
        if(letra ==='\r'){
            sentenca += ' '
        }else{
            if(letra.charCodeAt() != 32 ){
                if(flag === 0) {
                    sentenca += (letra.toUpperCase())
                    flag = 1
                }else{
                    flag = 0
                    sentenca += (letra.toLowerCase())
                }
            }else{
                sentenca += ' '
            }
        }
    })
    console.log(sentenca)
})