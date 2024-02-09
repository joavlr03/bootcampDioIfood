let numVitorias = 15;
let numDerrotas = 5;
let nomeUsuario = "João";
let nivelNome = "";

function subtracao(numDerrotas, numVitorias){
    return numVitorias - numDerrotas;
}

let resultado = subtracao(numDerrotas, numVitorias);

if (resultado < 10) {
    nivelNome = "ferro";
} else if (resultado >= 10 && resultado <= 20) {
    nivelNome = "bronze";
} else if (resultado >= 21 && resultado <= 50) {
    nivelNome = "prata";
} else if (resultado >= 51 && resultado <= 70) {
    nivelNome = "ouro";
} else if (resultado >= 71 && resultado <= 80) {
    nivelNome = "platina";
} else if (resultado >= 81 && resultado <= 90) {
    nivelNome = "ascendente";
} else if (resultado >= 91 && resultado <= 100) {
    nivelNome = "epico";
} else if (resultado >= 101) {
    nivelNome = "imortal";
}

console.log("O HEROI DE NOME "+ nomeUsuario +" tem o saldo de vitórias "+ resultado + " e está no nível "+ nivelNome);
