function imprimirNoConsole() {
    console.log("Olá Mundo!");
};

imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log("O número é: " + num);
};

imprimirUmNumero(999);
imprimirUmNumero(268);
imprimirUmNumero(127);

//-----------------------------------------------

// Funções anônimas
    //Funções anônimas são aquelas que não possuem nome porém são atreladas a uma variável ou constante

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio()

const teste = function(num2) {
    console.log(num2)
}

teste(2)

