//Criação de um JSON atribuido a uma variável

let pessoa = [
    {
        "nome": "André",
        "idade": 20,
        "trabalhando": true,
        "detalhesProfissao": {
            "cargo": "analista",
            "empresa": "XXXX"
        }
    },
    {
        "nome": "Guilherme",
        "idade": 18,
        "trabalhando": false,
        "detalhesProfissao": {
            "cargo": null,
            "empresa": null
        }
    }
];

console.log("Objeto pessoa: " + typeof pessoa)
console.log("\n\n\n\n\n\n\n\n\n")

//---------------------------------------------------------------------------

//"Enviando" para a API
//Transformando Objeto JavaScript (Array de Objetos) em JSON válido

//JSON.stringfy converte um objeto para string na formatação de um JSON

let pessoasObjetoParaJson = JSON.stringify(pessoa, null, 1)
console.log("Convertendo Objeto para JSON")
console.log(typeof pessoasObjetoParaJson)
console.log(pessoasObjetoParaJson)
console.log("\n\n\n\n\n\n\n\n\n")

//----------------------------------------------------------------------------

//"Recebendo" dados de uma API
//Transformando JSON(string) para Objeto JavaScript

let pessoasJsonParaObjeto = JSON.parse(pessoasObjetoParaJson);
console.log("JSON(string) para Objeto")
console.log(typeof pessoasJsonParaObjeto)
console.log(pessoasJsonParaObjeto)