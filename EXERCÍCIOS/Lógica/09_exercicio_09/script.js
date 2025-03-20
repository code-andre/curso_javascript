/*Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.*/

let real = window.prompt("Digite o valor em reais (R$)")
let dol = window.prompt("Digite o valor do dólar atual (U$)")

function converteRealDolar(qtd, cambio) {
    let comprar = qtd / cambio
    return comprar
}

window.alert(`Você pode comprar ${converteRealDolar(real, dol).toFixed(2)} dólares`);