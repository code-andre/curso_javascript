/*Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
sua terça parte.
Ex:
Digite um número: 3.5
O dobro de 3.5 é 7.0
A terça parte de 3.5 é 1.16666*/

while(true){
    let resp = Number(window.prompt("Digite um número:"));
    dobroTercaParte(resp)
}

function dobroTercaParte(numero) {
    let tercaParte = numero / 3;
    window.alert(`O dobro de ${numero} é ${numero * 2}\nA terça parte de ${numero} é ${tercaParte.toFixed(2)}`);
}
