function validaProc(){
    let soma=0;
    let contador=1;
    while(contador<=3){
        numero = parseInt(prompt("Digite o "+contador+"º número: "));
        if(numero % 5 == 0){
            soma+=numero;
        }    

        console.log("O número informado é: "+numero);
        contador++;
    }
        console.log("A soma dos números é: "+soma);
        return false;
}