/*Exercício 3

Implemente uma função que calcule a média aritmética de um array
de números e retorne o resultado. Utilize essa função para calcular
a média de diferentes conjuntos de números.*/

/*
const mediaAritmetica = (a, b, c, d) => {
    let arr = [a, b, c, d]
    let somaArr = 0
    let resultado = 0

    for(let i = 0; i < arr.length; i++){
       somaArr += arr[i]
    }
    
    resultado = somaArr / arr.length;

    console.log(resultado)
    
}

mediaAritmetica(30, 78, 29, 50)
*/

//--------------------------------------------------

const mediaAritimetica2 = (numero) => {
    let soma = 0;

    for(let i = 0; i < numero.length; i++){
        soma += numero[i];
    }

    return soma / numero.length
}

console.log(mediaAritimetica2([10, 10, 10, 10, 10, 10]));