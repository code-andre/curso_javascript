/*Crie um array com 5 nomes, incluindo o seu;
Verifique se o seu nome existe no array;
Se existir imprima alguma mensagem no console*/

let nomes = ["André", "Guilherme", "João", "Maria", "José"];

console.log(nomes.includes("André"))

nomes.includes("André") == true ? console.log("Seu nome está na lista") : console.log("Nome não encontrado")