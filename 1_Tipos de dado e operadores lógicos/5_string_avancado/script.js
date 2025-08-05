console.log('STRING AVANÇADO\n')

console.log('QUEBRA DE LINHA COM \\n');
console.log(
    `Texto: "Primera linha \\n Segunda linha"
Resultado no console:
Primera linha 
Segunda linha
Tipo: ${typeof "Primera linha \n Segunda linha"}\n`
);

console.log('USO DE ASPAS MISTURADAS');
console.log(
    `Texto com aspas simples por fora e duplas por dentro:
'O meu nome é "André"'
Tipo: ${typeof 'O meu nome é "André"'}\n`
);

console.log(
    `Texto com aspas duplas por fora e simples por dentro:
"O meu nome é 'André'"
Tipo: ${typeof "O meu nome é 'André'"}\n`
);

console.log('INTERPOLAÇÃO COM TEMPLATE STRING');
console.log(
    `Texto com crase e cálculo embutido:
\`A multiplicação de 5 por 3 é \${5 * 3}\`
Resultado: A multiplicação de 5 por 3 é ${5 * 3}
Tipo: ${typeof `A multiplicação de 5 por 3 é ${5 * 3}`}\n`
);

console.log('CONCATENAÇÃO COM +');
console.log(
    `Texto: "O " + "meu " + "nome " + "é " + "André"
Resultado: ${"O " + "meu " + "nome " + "é " + "André"}
Tipo: ${typeof ("O " + "meu " + "nome " + "é " + "André")}\n`
);
