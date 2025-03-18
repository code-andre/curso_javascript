/*Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
sucessor.
Ex:
Digite um número: 9
O antecessor de 9 é 8
O sucessor de 9 é 10*/

let num = Number(window.prompt("Digite um número"));

window.alert("O antecessor de " + num + " é " + (num - 1) + "\nO sucessor de " + num + " é " + (num + 1))