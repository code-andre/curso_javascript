/*Exercício 5

Desenvolva uma função que determine se um número é 
primo ou não. Retorne true se for primo e false se não for.*/

const ehPrimo = (numero) => {
    let divisoes = 0;

    for(let i = 1; i <= numero; i++)
        if(numero % i == 0){
            divisoes++;
        };

    if(divisoes == 2){
        return true
    } else {
        return false
    };
}

console.log(ehPrimo(2))