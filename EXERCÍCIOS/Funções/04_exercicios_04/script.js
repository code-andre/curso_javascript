/*Escreva uma função que retorne um número aleatório

O número máximo retornado deve ser passado via parâmetro;

*/

function randomNumber1(max){
    return Math.round(Math.random() * max);
}

console.log(randomNumber1(10));

//-------------------------------------------------

const randomNumber2 = (max) => {
    return Math.round(Math.random() * max);
};

console.log(randomNumber2(10));

//-------------------------------------------------

const randomNumber3 = (max) => Math.round(Math.random() * max);

console.log(randomNumber3(100))