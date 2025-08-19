function validaProc() {
    let i;
    let num=[];
    let procura;
    let encontrado = false

    for (i = 0; i<10; i++){
        num[i] = parseInt(prompt("Digite seu "+(i+1)+"º número: ")) ; 
        console.log("Número informado: "+num[i]);
    }
    procura=parseInt(prompt("Procure um numero informado: "));
    console.log("")

    for (i = 0; i<10; i++){
        if( num[i] == procura){
            alert("Número encontrado na posição "+i+" do vetor:");
            encontrado = true;
            break;
           
        }
    }  
    if (encontrado != true){
        alert("Número não encontrado!")
    }
    return false;
}


