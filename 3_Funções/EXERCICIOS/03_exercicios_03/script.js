/*Escreva uma função que some dois números e retorne eles;

Depois imprima este retoro*/

function sumNumbers1(num1, num2){
    return num1 + num2;
};

console.log(sumNumbers1(1, 1));

//-------------------------------------

const sumNumbers2 = (num1, num2) => {
    return num1 + num2;
};

console.log(sumNumbers2(2, 2));

//--------------------------------------

const sumNumbers3 = (num1, num2) => num1 + num2;

console.log(sumNumbers3(3, 3));