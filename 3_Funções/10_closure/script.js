// function lembrarSoma(x) {
//     return function(y) {
//         return x + y
//     }
// }

// let soma1 = lembrarSoma(3)
// console.log(soma1(3))

//----------------------------------------

// function primeiraFuncao(nome) {
//     let sobrenome = "Guilherme"
//     function segundaFuncao(idade){
//         console.log(`O seu nome é ${nome} ${sobrenome}, e sua idade é ${idade} anos`)
//     }
//     return segundaFuncao
// }

// let closure = primeiraFuncao("André")
// closure(19)

//-----------------------------------------

// function criarContaBancaria(saldoInicial = 0){
//     let saldo = saldoInicial
//     function movimento(saldoMovimento, operacao){
//         if(operacao === "deposito"){
//             saldo += saldoMovimento
//             console.log(saldo)
//         }
//     }
//     return movimento
// }

// let cliente = criarContaBancaria(100)
// cliente(100, "deposito")

//-----------------------------------------

function soma(numero){
    num = numero
    let incremento = function() {
        console.log(num)
        num++
    }
    return incremento
}

let y = soma(5)
y()
y()
y()
y()