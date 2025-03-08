/*Escreva uma função que recebe um parâmetro de idade;

E imprima esta mensagem no console com templete literals dizendo
"Você tem x anos";*/

function ageUser(age){
    console.log(`Você tem ${age} anos`);
};

ageUser(20);

//----------------------------------------

const ageUser2 = (age2) => {
    console.log(`Você tem ${age2} anos`);
};

ageUser2(18);

//----------------------------------------

const ageUser3 = (age3) => age3;

console.log(`Você tem ${ageUser3(22)} anos`);