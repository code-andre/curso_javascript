/*Escreva uma função que recebe uma string;

Se o texto conter mais de 10 caracteres imprima "Texto muito longo";

Se conter menos, imprima "Texto dentro do limite";*/

function text(strg){
    if(strg != undefined && strg.length > 10){
       console.log('Texto muito longo')
    } else {
       console.log('Texto dentro do limite')
    }
}

text('aaaaaaaaaaaaaaaaaaaaaaaaaaaa')