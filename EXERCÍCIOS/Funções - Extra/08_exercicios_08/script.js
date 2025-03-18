/*Exercício 8

Desenvolva uma função que verifique se uma palavra é um palíndromo 
(lê-se da mesma forma da esquerda para a direita e vice-versa). 
Retorne true se for um palíndromo e false se não for.*/

function palindromo(nome = "arara") {
    let result = nome.split('').reverse().join('')
    console.log(result)
}

// console.log(palindromo())

palindromo("Andre")