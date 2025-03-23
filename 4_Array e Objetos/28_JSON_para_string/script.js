//Podemos converter um JSON para uma String
//Podemos converter uma String para JSON

let pessoa = {
    "nome": "André",
    "idade": 20,
    "profissao": "Analista",
    "hobbies": ["Video Game", "Leitura", "Correr"]
};
console.log(typeof pessoa);
console.log()

//converte JSON para string
let pessoaTexto = JSON.stringify(pessoa)
console.log(pessoaTexto)
console.log(typeof pessoaTexto)
console.log()

let pessoaJSON = JSON.parse(pessoaTexto)
console.log(pessoaJSON)
console.log(typeof pessoaJSON)



//Ideia para trabalhar com API
//Enviar um texto como JSON
//Receber um texto como JSON, transformando em OBJETO