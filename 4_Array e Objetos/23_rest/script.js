//Serve para passarmos quantos argumentos forem necessarios
//pois agrupa tudo em um array

// let num1 = 1;
// let num2 = 2;
// let num3 = 3;
// let num4 = 4;

// function imprimirNumeros(...args){
//     for(let i = 0; i < args.length; i++){
//         console.log(args[i]);
//     }
// }

// imprimirNumeros(num1, num2, num3, num4)
// console.log("pausa")
// imprimirNumeros(num2, num3)
// console.log("pausa")
// imprimirNumeros(1, 2, 3, 4, 5, 6, 7)


//---------------------------------------

function imprimirNumeros2(...args2){
    let qtd = args2.length
    console.log("Quantidades de elementos do array")
    console.log(qtd)

    console.log('Loop para ver os elementos dentro de um array')
    args2.forEach(arg => {
        console.log(arg)
    })
}

imprimirNumeros2(1, 2, 3, 4, 5, 6, 7)

