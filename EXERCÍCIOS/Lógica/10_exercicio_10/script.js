/*Faça um algoritmo que leia a largura e altura de uma parede, calcule e
mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
sabendo que cada litro de tinta pinta uma área de 2metros quadrados.*/

let alt = Number(window.prompt("Altura: "));
let larg = Number(window.prompt("Largura: "));

function calcAreaTinta(alt, larg){
    let area = alt * larg;
    return area;
};

window.alert(`Área a ser pintada: ${calcAreaTinta(alt, larg)}\nQuantidade de tinta necessária: ${calcAreaTinta(alt, larg) / 2} litros`)