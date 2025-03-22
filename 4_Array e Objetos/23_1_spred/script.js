//Serve para "espalhar" elementos para outro

//Neste caso, parecido com o mutability

console.log("Spred em array")
let n1 = [10, 20, 30];
let n2 = [11, 22, 33, 44, 55];
let n3 = [...n1, ...n2];

// console.log("n1 " + n1);
// console.log("n2 " + n2);

console.log("n3 " + n3);
console.log(typeof(n3))
console.log()

//----------------------------------------

//Clonar objetos

console.log("Spred em objetos")
const jogador1 = {
    nome: "André",
    energia: 100,
    vidas: 3,
    magia: 150,
}

const jogador2 = {
    nome: "Bruce",
    energia: 100,
    vidas: 5,
    velocidade: 50,
}

const jogador3 = {...jogador1, ...jogador2}

console.log(jogador3) //Só vai mostrar caso as chaves entre objetos forem diferentes, caso contrario mostrará apenas as iguais
console.log()

//Spred em funções

console.log("Spred em funções")
const soma = (v1, v2, v3) => {
    return v1+v2+v3;
}

let valores = [1, 5, 4, 6 ,8]

console.log(soma(...valores)) //Espalho os valores para a função v1 = 1, v2 = 5, v3 = 4
//vai pegar apenas os primeiros valores, mesmo que tenha mais