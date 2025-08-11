function validaProc(){
    let somatoria=0;
    let contador=1
    while(contador<=3){
        numero = parseInt(prompt("Digite o "+contador+"º número: "));
        somatoria += numero;
        console.log("O número informado é: "+numero)
        contador++;
    }
        console.log("A somatória dos números é : "+somatoria);
        return false;
}