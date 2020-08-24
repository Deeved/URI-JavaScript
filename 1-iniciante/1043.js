const input = require('fs').readFileSync('stdin', 'utf8')

let [a, b, c] = input.split(' ').map(item => parseFloat(item))
let flag = false

if( Math.abs(b-c) < a && a < (b+c) ){
    if( Math.abs(a-c) < b && b < (a+c) ) {
        if( Math.abs(a-b) < c && c < (a+b) ){
            console.log(`Perimetro = ${(a+b+c).toFixed(1)}`)
        }else{
            flag = true
        }
    }else{
        flag = true
    }
}else{
    flag = true
}

if(flag) {
    console.log(`Area = ${ ((c * (a+b))/2).toFixed(1)}`)
}