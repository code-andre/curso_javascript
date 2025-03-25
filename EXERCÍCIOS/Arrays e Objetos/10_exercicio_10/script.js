/*Crie um objeto calculadora
Que tem os seguintes métodos: somar, subtrair, multiplicar e dividir
Os métodos só devem aceitar dois parâmetros
Utilize cada um dos métodos e imprima os valores no console*/

let calculadora = {
    somar: function (num1, num2){
        console.log(num1 + num2);
    },
    subtrair: function (num1, num2){
        console.log(num1 - num2);
    },
    multiplicar: function (num1, num2){
        console.log(num1 * num2);
    },
    dividir: function (num1, num2){
        console.log(num1 / num2);
    }
}

calculadora.somar(1, 9)
calculadora.subtrair(10, 5)
calculadora.multiplicar(4, 5)
calculadora.dividir(100, 10)