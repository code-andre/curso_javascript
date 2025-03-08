 const primo = (x) => {
    let divisoes = 0

    for(let i = 0; i <= x; i++){
        if(x % i == 0){
            divisoes++
        }
    }

    if(divisoes == 2){
        console.log(`${x} é Primo`)
    } else {
        console.log(`${x} não é Primo`)
    }
 }

primo(97);

//-------------------------------------------------

let cosoleteste = () => {
    console.log("Olá mundo");
}

cosoleteste();

//-------------------------------------------------

let soma = (a, b) => {
    return a + b;
}

console.log(soma(1, 2));