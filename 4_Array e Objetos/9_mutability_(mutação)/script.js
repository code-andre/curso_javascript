let pessoa = {
   nome: 'André',
};

let pessoa2 = pessoa;

console.log(pessoa2 == pessoa)

pessoa2.nome = 'Guilherme';

console.log(pessoa.nome)

pessoa.nome = 'Moura';

console.log(pessoa2.nome);

//Quando troca o valor de uma chave altera os dois objetos pois um 
//é referência do outro