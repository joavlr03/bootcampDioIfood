let nivelXp = 7000;
let nivelNome = "";
let nickname = "João";

if (nivelXp < 1000){
    nivelNome = "ferro";
}
else if (nivelXp > 1000 && nivelXp <= 2000){
    nivelNome = "bronze";
}
else if (nivelXp > 2000 && nivelXp <= 5000){
    nivelNome = "prata";
}
else if (nivelXp > 5000 && nivelXp <= 7000){
    nivelNome = "ouro";
}
else if (nivelXp > 7000 && nivelXp <= 8000){
    nivelNome = "platina";
}
else if (nivelXp > 8000 && nivelXp <= 9000){
    nivelNome = "ascendente";
}
else if (nivelXp > 9000 && nivelXp <= 10000){
    nivelNome = "epico";
}
else {
    nivelNome = "radiante";
}

console.log("O herói de nome " + nickname + " tem o nível de " + nivelXp + " e está no nível " + nivelNome);

