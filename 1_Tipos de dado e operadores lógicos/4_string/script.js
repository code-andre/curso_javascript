console.log('STRING\n');

console.log(
    `Texto com aspas duplas: "Oi, meu nome é André"
Tipo: ${typeof "Oi, meu nome é André"}\n`
);

console.log(
    `Texto com aspas simples: 'Eu queria comprar um carro'
Tipo: ${typeof 'Eu queria comprar um carro'}\n`
);

console.log(
    `Texto com crase (template string): \`Teste\`
Tipo: ${typeof `Teste`}\n`
);

console.log('VALORES ESPECIAIS - INFINITY');
console.log(
    `Texto "Infinity" (com aspas):
Valor: "Infinity"
Tipo: ${typeof "Infinity"}\n`
);

console.log(
    `Valor Infinity (sem aspas):
Valor: ${Infinity}
Tipo: ${typeof Infinity}\n`
);
