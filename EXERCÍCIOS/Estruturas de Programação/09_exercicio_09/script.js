/*Escreva um loop for ou while que exiba qual número é par e qual
número é ímpar;*/

/*O contador deve iniciar em 0 e ir até 50;*/

let i = 0;

while(i <= 50){
    let parOuImpar = i%2==0;
    console.log(parOuImpar ? `${i} é par` : `${i} é impar`);
    i++;
}; 