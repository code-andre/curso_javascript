/*Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o
seu novo salário, com 15% de aumento.*/

let salarioUsuario = Number(window.prompt("Digite seu salário"))

function aumento(salario) {
    let aumentoPorcent = salario * (15 / 100)
    let aumentoReal = salario + aumentoPorcent

    window.alert("Seu novo salário com 15% de aumento é:\n" + aumentoReal.toFixed(2))
}

aumento(salarioUsuario)