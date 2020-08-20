const input = require('fs').readFileSync('stdin', 'utf8')

let x = parseInt(input.split('\n'))

let h=0, m=0, s=0

if( (x/3600) > 0 ){
    h = parseInt(x / 3600)
    x-= h*3600
}

if( (x/60) > 0 ){
    m = parseInt(x/60)
    x-= m*60
}

s = x
x-= s

console.log(`${h}:${m}:${s}`)