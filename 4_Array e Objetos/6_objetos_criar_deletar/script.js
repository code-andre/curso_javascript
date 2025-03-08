let pessoa = {
   nome: 'André',
   idade: 20,
   sexo: 'Masculino',
   profissao: 'Analista de Sistemas',
}

// Deletando

console.log(pessoa.nome);
delete pessoa.nome;
console.log(pessoa.nome);


console.log(pessoa)

// Adicionando

pessoa.casado = false
console.log(pessoa)