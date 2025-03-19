//Podemos selecionar os valores que quisermos dentro de um array

let num = ["André", "Guilherme", "Oliveira", "Moura"];

//nesse caso ele inicia na posição 1(Guilherme) e para na posição 3(Moura)
console.log(num.slice(1, 3))

//nesse caso ele pega apenas os dois útimos valores do array
console.log(num.slice(-2))

//nesse caso inicia na posição 1 e vai até o fim do array
console.log(num.slice(1))