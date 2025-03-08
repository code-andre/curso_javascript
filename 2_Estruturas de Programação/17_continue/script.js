for(let i = 10 ; i > 0 ; i--){
    if (i % 2 == 0) {
        console.log("Caiu no continue")
        continue; //Pula uma instrução quando atinge determinada condição
    }
    console.log(i)
}