const input = require('fs').readFileSync('stdin', 'utf8')

let [x, y] = input.split('\n').map(item => parseInt(item))

let count = 0

if(x>y) {
   for(++y; y<x; y++){
       if(y % 2 !== 0) { count += y }
   }
}else{
    for(++x; x<y; x++){
        if(x%2 !== 0) {count += x }
    }
}

console.log(count)