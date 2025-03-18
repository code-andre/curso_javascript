/*Exercício 2

Desenvolva uma função que receba um número como parâmetro e verifique se 
ele é par ou ímpar. Retorne true se for par e false se for ímpar.*/

function parOuImpar(num) {
    if(num % 2 == 0){
        console.log(`${num} é Par`);
    } else {
        console.log(`${num} é Impar`)
    }
}

parOuImpar(3);