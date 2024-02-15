//criando um personagem e dando suas caracteristicas por meio do JSON

let personagem ={
    nome: 'João',
    idade: 20,
    tipo: 'mago',
    ataque: 'usou magia'

}

generatePersonagem(personagem)

function generatePersonagem(personagem){

    console.log(`O ${personagem.tipo} atacou usando ${personagem.ataque}`);

}

