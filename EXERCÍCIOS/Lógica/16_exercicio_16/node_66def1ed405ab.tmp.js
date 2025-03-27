/*[DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
quantos dias de vida um fumante perderá e exiba o total em dias*/

while(true){
    let qtdCigarrosUser = 88
    let qtdAnosFumandoUser = 1
    reduzTempo(qtdCigarrosUser, qtdAnosFumandoUser)
}

function reduzTempo(qtdCigarros, qtdAnos){
    //1 cigarro = (-10min)
    let minVida = 10
    let minutosDeVidaPerdido = qtdCigarros * minVida
    if(minutosDeVidaPerdido > 1440){
        let dias = dias + 1
        return console.log(dias)
    }
}