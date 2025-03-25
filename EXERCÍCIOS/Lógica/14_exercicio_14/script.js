/*A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva
um programa que pergunte a quantidade de Km percorridos por um carro alugado e a
quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar,
sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado*/

let kmUser = window.prompt("Quantidade de KM rodado?");
let qtdDiasUser = window.prompt("Quantidade de dias?");

let calcLocadora = (km, qtdDias) => {
    return (90 * 0.20) + (km * qtdDias)
}

console.log(calcLocadora(kmUser, qtdDiasUser))