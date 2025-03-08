function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2, 3, 4));

const mult = multiplicarTresNumeros(5, 4, 8);
console.log("O valor de mult é " + mult)
console.log()

//------------------------------------------------

function podeDirigir(idade, cnh){
    if(idade >= 18 && cnh == true){
        console.log(`André com ${idade}, ${cnh} pode dirigir`);
    } else {
        console.log("Não pode dirigir")
    }
}

podeDirigir(20, true)
console.log()

//------------------------------------------------

const saudacao = function(nome){
    if(nome == "André"){
        return "Olá André";
    }
}

console.log(saudacao("André")); 