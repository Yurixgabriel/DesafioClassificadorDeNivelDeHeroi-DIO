//# 1️⃣ Desafio Classificador de nível de Herói

//variaveis
let nomeHeroi = "Aki";
let xpHeroi = 2001;
let nivel;

//niveis de heroi
if (xpHeroi >= 0 && xpHeroi <= 1000) {
    nivel = "Ferro";
} else if (xpHeroi > 1000 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi > 2000 && xpHeroi <= 3000) {
    nivel = "Prata";
} else if (xpHeroi > 3000 && xpHeroi <= 4000) {
    nivel = "Ouro";
} else if (xpHeroi > 4000 && xpHeroi <= 6000) {
    nivel = "Platina";
} else if (xpHeroi > 6000 && xpHeroi <= 8000) {
    nivel = "Ascendente";
} else if (xpHeroi > 8000 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else if (xpHeroi > 10000) {
    nivel = "Radiante";
}

//saida
console.log("O Herói de nome " + nomeHeroi + " está no nível " + nivel);