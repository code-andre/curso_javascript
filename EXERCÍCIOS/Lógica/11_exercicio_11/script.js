/*Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
segundo grau e mostre o valor de Delta.*/

function equation(a, b, c){
    let delta = Math.pow(b, 2) - 4 * (a * c)

    let x1 = (-b + Math.sqrt((delta))) / 2 * a
    let x2 = (-b - Math.sqrt((delta))) / 2 * a

    let arrEq = ["x1: " + x1, "x2: " + x2]

    console.log(arrEq.join("\n"))
}

equation(1, -3, 2)