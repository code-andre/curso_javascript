/*[DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias*/



    //Quantidade de cigarros tem que ser de 13 ate 143 para números fracionados
    //Quandidade de cigarros tem que ser maior que 144 para números inteiros
    let qtdCigarrosUser = 13
    let qtdAnosFumandoUser = 1
    

function reduzTempo(qtdCigarros, qtdAnos){
    //1 cigarro = (-10min)
    //Pega a quantidade de cigarros, multiplica por 10 e divide por 1440(1dia)
    //Calcula a quantidade de dias
    let minVida = 10
    let minutosDeVidaPerdido = qtdCigarros * minVida
    let diasDeVidaPerdido = (minutosDeVidaPerdido / 1440)

    console.log("Dias em decimal: " + diasDeVidaPerdido.toFixed(5))
    
    //Compara a quantidade de dias
    if(diasDeVidaPerdido >= 1){
        console.log(`Minutos de vida Perdidos ${minutosDeVidaPerdido}`)
        console.log("Dias de via perdidos " + Math.floor(diasDeVidaPerdido))



        //Se os dias estar entre 0.09 e 1
    } else if(diasDeVidaPerdido > 0.09 && diasDeVidaPerdido < 1){

        let hora = diasDeVidaPerdido * 24
        console.log("Hora " + hora.toFixed(0))

        let minutoParaString = hora.toFixed(4).toString().split(".").slice(1)
        let minuto = ((Number(minutoParaString) / 10000) * 60)
        console.log("Minutos " + Math.floor(minuto))

        let segundosParaString = (minuto.toFixed(4).toString().split(".").slice(1))
        let segundos = ((Number(segundosParaString) / 10000) * 60)
        console.log("Segundos " + Math.floor(segundos))


    } else {
        console.log("Número não válido")
    }
    
}

reduzTempo(qtdCigarrosUser, qtdAnosFumandoUser)