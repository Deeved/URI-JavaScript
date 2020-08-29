const input = require('fs').readFileSync('stdin', 'utf8')

let sal_base = parseFloat(input.split('\n'))
let novo_sal = 0, reajuste = 0, percentual = 0

if(sal_base >= 0 && sal_base <= 400){
    reajuste = sal_base * 0.15
    novo_sal = sal_base + reajuste
    percentual = '15 %'      
} else if(sal_base > 400 && sal_base <= 800){
    reajuste = sal_base * 0.12
    novo_sal = sal_base + reajuste
    percentual = '12 %'      
} else if(sal_base > 800 && sal_base <= 1200){
    reajuste = sal_base * 0.10
    novo_sal = sal_base + reajuste
    percentual = '10 %'      
} else if(sal_base > 1200 && sal_base <= 2000){
    reajuste = sal_base * 0.07
    novo_sal = sal_base + reajuste
    percentual = '7 %'
} else if(sal_base > 2000){
    reajuste = sal_base * 0.04
    novo_sal = sal_base + reajuste
    percentual = '4 %' 
} 

console.log(`Novo salario: ${(novo_sal).toFixed(2)}`)
console.log(`Reajuste ganho: ${(reajuste).toFixed(2)}`)
console.log(`Em percentual: ${percentual}`)