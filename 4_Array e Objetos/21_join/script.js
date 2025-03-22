//Serve para separar um array

//---------------------------------------

//Se a variavel conter uma string, primeiro devemos
//converter em um arry

let frase = "Testando o método split" // String

let palavras = frase.split(" ") //conversão para array

console.log(palavras)

let novaFrase = palavras.join("@") //junção para string

console.log(novaFrase)

//----------------------------------

//Só consegue separar o que for um array

let frase2 = ["André", "Guilherme"]

let novaFrase2 = frase2.join(" ")

console.log(novaFrase2)

//-----------------------------------

//Split transforma string em array
//Join transforma array em string