//shift - Inserir elemento em array no inicio
//unshift - Remove o elemento do array no inicio

let carros = ["BMW", "Audi", "VW", "Fiat"];

let removePrimeiroCarro = carros.shift();
console.log(carros);
console.log(removePrimeiroCarro);

carros.unshift("Mercedes");
console.log(carros);