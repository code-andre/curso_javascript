/*Escreva uma função que recebe a idade de uma pessoa;

Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima
uma mensgame informando issi;

Se ela tem menos, ela não pode, imprima uma outra mensagem com este
aviso

Execute a função nos dois casos*/

function ageDriverCar(age){
    if(age >= 18){
        console.log("Pode tirar a carteira");
    } else {
        console.log("Não pode tirar a carteira");
    }
};

ageDriverCar(20);

//-----------------------------------------------------------

const ageDriverCar2 = (age) => {
    if(age >= 18){
        console.log("Pode tirar a carteira");
    } else {
        console.log("Não pode tirar a carteira");
    }
};

ageDriverCar2(17)