let idade = 19;

if(idade == 19){
    console.log("A idade é igual a 19");
};

if(idade > 26){
    console.log("A idade é maior que 26");
};

let nome = "André";
if(nome == "André" && idade == 19){
    console.log("Liberado!");
};

let passaporte = true;
if((nome == "André" && idade == 19) || passaporte == true){
    console.log("Liberado!");
};