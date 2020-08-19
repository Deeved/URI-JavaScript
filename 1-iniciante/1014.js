const input = require('fs').readFileSync('stdin', 'utf8')

let [dist, comb] = input.split("\n")

console.log(`${(parseInt(dist)/parseFloat(comb)).toFixed(3)} km/l`)