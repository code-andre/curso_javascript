/*Crie um array a partir de uma frase
Imprima cada palavra do array no console por meio de um for*/

let string = "André é muito legal";

let split = string.split(" ")

for (let i = 0; i < split.length; i++){
    console.log("Posição " + (i + 1) + ": " + split[i])
}