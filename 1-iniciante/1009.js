const input = require('fs').readFileSync('stdin', 'utf8')

let [name, base_salary, amount] = input.split("\n")

let total_salary = Number(base_salary) + (Number(amount)*0.15)

console.log(`TOTAL = R$ ${(total_salary).toFixed(2)}`)