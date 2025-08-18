function validaProc() {
    let i;
    let num=[];

    for (i = 0; i<10; i++){
        num[i] = parseInt(prompt("Digite seu "+(i+1)+"º número: ")) ;   
    }
    for (i = 0; i<10; i++){
        if( i % 2 != 0){
            console.log("Número digitado na posição "+i+" do vetor:"+num[i]);
        }
    }    
    return false;
}


