/*Exercício 7

Crie uma função que receba um valor e uma porcentagem como parâmetros. 
A função deve retornar o valor acrescido da porcentagem indicada.*/

const intToPercent = (num = 700, percent = 30) => {
    let result = (percent/100) * num;
    return result + num;
}

console.log(intToPercent(100, 50))