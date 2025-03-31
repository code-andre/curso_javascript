//Trocando o valor de uma chave por outro valor
//passado por método

const cachorro = {
    raca: "SRD", //Valor inicial
    setRaca: function(racaSetada){ //Função para setar outra raça
        this.raca = racaSetada; //serve para referenciar o proprio objeto (como se fosse cachorro.raca = racaSetada)
    },
    getRaca: function(){
        return "A raça é: " + this.raca
    }
}

cachorro.setRaca("Pastor Alemão")//passando valor pelo método
console.log(cachorro.raca)
console.log(cachorro.getRaca())
