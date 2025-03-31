/*[DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias*/



    //Quantidade de cigarros tem que ser de 13 ate 143 para números fracionados
    //Quandidade de cigarros tem que ser maior que 144 para números inteiros
    let qtdCigarrosUser = 15
    //let qtdAnosFumandoUser = 1
    

function reduzTempo(qtdCigarros /*qtdAnos*/){
    //1 cigarro = (-10min)
    //Pega a quantidade de cigarros, multiplica por 10 e divide por 1440(1dia)
    //Calcula a quantidade de dias
    let minVida = 144000
    let minutosDeVidaPerdido = qtdCigarros * minVida
    let diasDeVidaPerdido = (minutosDeVidaPerdido / 1440)

    console.log("Quantidade de cigarros fumados: " + qtdCigarros)
    console.log("Minutos de vida perdido (1 cigarro = -10 minutos de vida): " + minutosDeVidaPerdido + " minutos")
    console.log("Dias de vida perdidos (inteiro - decimal): " + diasDeVidaPerdido.toFixed(5) + "\n")
    
    //Compara a quantidade de dias
    if(diasDeVidaPerdido >= 1){
        
        console.log(Math.floor(diasDeVidaPerdido) + " Dia(s)")

        //Converter em horas
        let horaParaString = diasDeVidaPerdido.toFixed(4).toString().split(".").slice(1)
        let hora = ((Number(horaParaString) / 10000) * 24)
        console.log(Math.floor(hora) + " horas")

        // //Converter em minutos
         let minutosParaString = (hora.toFixed(4).toString().split(".").slice(1))
         let minuto = ((Number(minutosParaString) / 10000) * 60)
         console.log(Math.floor(minuto) + " minutos")

        // //Converter para segundos
         let segundoParaString = ((minuto.toFixed(3).toString().split(".").slice(1)))
         let segundo = ((Number(segundoParaString) / 10000) * 60)
         console.log(Math.floor(segundo) + " segundos")

        //Se os dias estar entre 0.09 e 1
    } else if(diasDeVidaPerdido > 0.09 && diasDeVidaPerdido < 1){

        console.log("Quantidade de vida perdida por fumar cigarro:")

        let hora = diasDeVidaPerdido * 24
        console.log(hora.toFixed(0) + " horas")

        let minutoParaString = hora.toFixed(4).toString().split(".").slice(1)
        let minuto = ((Number(minutoParaString) / 10000) * 60)
        console.log(Math.floor(minuto) + " minutos")

        let segundosParaString = (minuto.toFixed(4).toString().split(".").slice(1))
        let segundos = ((Number(segundosParaString) / 10000) * 60)
        console.log(Math.floor(segundos) + " segundos")


    } else {
        console.log("Número não válido")
    }
    
}

reduzTempo(qtdCigarrosUser, /*qtdAnosFumandoUser*/)