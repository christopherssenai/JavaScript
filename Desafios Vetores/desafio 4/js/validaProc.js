function validaProc() {
    let i;
    let num=[];

    for (i = 0; i<4; i++){
        num[i] = parseInt(prompt("Digite seu "+(i+1)+"º número: ")) ;   
        console.log("Número digitado: "+num[i]); 
    }
    console.log("")
    for (i = 3; i>=0; i--){
            console.log("Número digitado na posição "+i+" do vetor: "+num[i]);       
    }   
    return false;
}


