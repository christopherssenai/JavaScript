function validaProc(){
    let maiorNumero=0;
    let contador=1;
    while(contador<=3){
        numero = parseInt(prompt("Digite o "+contador+"º número: "));
        if(maiorNumero<numero){
            maiorNumero=numero;
        }        
        console.log("O número informado é: "+numero);
        contador++;
    }
        console.log("O maior número é: "+maiorNumero);
        return false;
}