let nome = "André";
let idade = 28;

if(nome != undefined && nome == "Guilherme"){
    console.log("Nome está defindo");
} else if(nome == "André" && nome.length > 4 && idade == 50){
    console.log("O meu nome é André");
} else {
    console.log("Não é André");
};

console.log();

let cep = 20;
if(cep > 28){
    console.log("O cep é maior que 28");
} else if(cep == 2){
    console.log("Testando");
} else {
    console.log("Nada acontece");
};

console.log();

let idade2 = 3;
if(idade2 >= 18){
    console.log("Pode dirigir no Brasil!");
} else if(idade2 >= 16){
    console.log("Pode dirigir nos EUA");
} else {
    console.log("Não pode dirigir");
};

// //Quando usar else if ou vários if?

// ✅ Use else if quando apenas um bloco deve ser executado.
// ✅ Use vários if separados quando mais de uma condição pode ser verdadeira ao mesmo tempo.