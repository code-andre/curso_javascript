/*Desenvolva um programa que leia uma distância em metros e mostre os valores
relativos em outras medidas.
Ex:
Digite uma distância em metros: 185.72
A distância de 85.7m corresponde a:
0.18572Km
1.8572Hm
18.572Dam
1857.2dm
18572.0cm
185720.0mm*/


let converteDistancias = (metros) => {
    let conversoes = {
        km: metros / 1000,
        Hm: metros / 100,
        Dam: metros / 10,
        Cm: metros * 100,
        Mm: metros * 1000,
    };
    
    let resultados = `A distância de ${metros} metros corresponde a:\n
    - ${conversoes.km} Km\n
    - ${conversoes.Hm} Hm\n
    - ${conversoes.Dam} Dam\n
    - ${conversoes.Cm} Cm\n
    - ${conversoes.Mm} Mm`

    return resultados
}

while(true){
    let resp = Number(window.prompt("Digite uma distância em metros:"))
    window.alert(converteDistancias(resp))
}

