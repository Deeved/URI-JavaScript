const input = require('fs').readFileSync('stdin', 'utf8')

let [p1, p2] = input.split("\n").map( item => item.split(' ') )

let dist = Math.sqrt( Math.pow( (p2[0]-p1[0]),2) + Math.pow( (p2[1]-p1[1]),2 ) )

console.log(dist.toFixed(4))