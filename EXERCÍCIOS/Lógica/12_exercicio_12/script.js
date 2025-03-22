/*Crie um programa que leia o preço de um produto, calcule e mostre o seu
PREÇO PROMOCIONAL, com 5% de desconto.*/

let precoUsuario = Number(window.prompt("Qual o valor do produto?"))

const promo = (preco) => {
    let valorPorcent = preco * (5/100)
    let valorDesc = preco - valorPorcent

    window.alert("Valor final com desconto: " + valorDesc.toFixed(2))
}

promo(precoUsuario)