/*Escreva uma função que recebe um número, e o decrementa de 1
em 1 com um loop;

Além disso imprima somente os números pares no console;*/


function decrementa(num) {
   for(let i = 0; i < num; i--){
      num--
      console.log(num);
   }
}

decrementa(100);