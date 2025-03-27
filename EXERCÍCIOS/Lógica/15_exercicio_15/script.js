/* Crie um programa que leia o número de dias trabalhados em um mês e mostre o
salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25
por hora trabalhada*/


function calcDiasTrabalhados(dias) {
    let expediente = 8
    let salarioPorHora = 25

    let horaTrabalhadas = dias * expediente
    let salFinal = horaTrabalhadas * salarioPorHora

    return window.alert("Seu salário final será" + salFinal);
}

while(true){
    let diasTrabalhadosUser = Number(window.prompt("Quantos dias vc trabalhou esse mês"))
    calcDiasTrabalhados(diasTrabalhadosUser)
}