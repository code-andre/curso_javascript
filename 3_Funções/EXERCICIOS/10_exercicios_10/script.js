/*Escreva uma função que recebe um número, e o decrementa de 1
em 1 com um loop;

Além disso imprima somente os números pares no console;*/

function decrementa(num){
   for(let i = num; i > 0; i--){
      if(num % 2 == 0){
         console.log(num)
      }
      num--;
   }
}

decrementa(6);

//----------------------------------------

const decrementa2 = (num) => {
   for(let i = num; i > 0; i--){
      num % 2 == 0 ? console.log(num) : 'error';
      num--;
   }
};

decrementa2(5);