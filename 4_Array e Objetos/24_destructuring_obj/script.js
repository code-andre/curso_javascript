//Desestrutura um objeto em variáveis

//incia_constante
//abre e fecha chaves
//inserimos as keys e depois o nome das variáveis
//recebe o objeto

let pessoa = {
    nome: "André",
    idade: 20,
    cabelo: true,
    altura: 1.85,
};

const {nome: pNome, idade: pIdade, cabelo: pCabelo, altura: pAltura } = pessoa

console.log(pNome, pIdade, pCabelo, pAltura)