/*Crie dois arrays, um com mais de 5 elementos e outro com menos;
Faça uma função que verifica o número de elementos
Se possuir menos que 5, imprima "Poucos elementos" no console
Se tiver mais, imprima "Muitos elementos"*/

let arr1 = ["André", "Games", true, 20, 60, 90];
let arr2 = [true, false, 99];

const verificaArr = (arr) => {
    if (arr > 5){
        console.log(`${arr}: Muitos elementos`);
    } else {
        console.log(`${arr}: Poucos elementos`)
    }
}

verificaArr(arr1.length)
verificaArr(arr2.length)