/*Verifique se o número é primo!;*/

/*Um número primo, é um número natural, maior que 1 e apenas
divisível por si próprio e por 1;*/

let num = 4;

let divisoes = 0;

for(let i = 0; i <= num; i++){
    if (num % i == 0) {
        divisoes++
    }
}

if(divisoes === 2){
    console.log(`${num} é primo`);
} else {
    console.log(`${num} não é primo`);
};