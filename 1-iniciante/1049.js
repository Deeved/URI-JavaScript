const input = require('fs').readFileSync('stdin', 'utf8')

let especie = input.split("\n").map( item => item.split('\r')[0] )

if(especie[1] == 'ave'){
    if(especie[2] == 'carnivoro'){
        console.log('aguia')
    }else{
        console.log('pomba')
    }
}

if(especie[1] == 'mamifero'){
    if(especie[2] == 'onivoro'){
        console.log('homem')
    }else{
        console.log('vaca')
    }
}

if(especie[1] == 'inseto'){
    if(especie[2] == 'hematofago'){
        console.log('pulga')
    }else{
        console.log('lagarta')
    }
}

if(especie[1] == 'anelideo'){
    if(especie[2] == 'hematofago'){
        console.log('sanguessuga')
    }else{
        console.log('minhoca')
    }
}