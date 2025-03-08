function soma(x, y) {
    if(x === undefined || y === undefined){
        console.log("Esta função precisa de argumentos");
    } else {
        return x + y;
    }
}

console.log(soma(1));

console.log(soma(1, 2));

//---------------------------------------------------


function pessoa(nome, idade) {
    if(nome === "André"){
        console.log(`Seja bem vindo ${nome}`)
    } else { 
        console.log(`O seu nome é ${nome} e sua idade é ${idade}`)
    }
}

pessoa("André")

pessoa("Andre", 99)