/*Escreva uma função que detecta o tipo de dados passado;

Verifique se é um number, boolean ou string;

E retorne uma mensagem para cada tipo;

Execute uma função para cada caso;*/

function dataType1(data){
    if(typeof(data) === 'number'){
        return data + ': number'
    } else if (typeof(data) === 'boolean'){
        return data + ': boolean'
    } else {
        return data + ': string'
    }
}

console.log(dataType1(1));
console.log(dataType1(true));
console.log(dataType1("Andre"))