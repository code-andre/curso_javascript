/*Armazene a velocidade de um carro em uma variável, com o número
que desejar;*/

/*Faça uma estrutura if/else que verifica se ele está acima da
velocidade;*/

/*80 é a velocidade máxima permitida;*/

/*Se estiver acima ou abaixo exiba mensagens com console.log();*/

let velCar = 100;

if(velCar > 80){
    console.log("Velocidade acima do permtido [80km/h]\n*MULTADO*\nSua velocidade: " + velCar + "km/h");
} else {
    console.log("Prossiga com a sua viagem\nSua velocidade: " + velCar + "km/h");
};