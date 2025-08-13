function validaProc(){   
    
    let soma=0;
  
        num1 = parseInt(prompt("Digite 1º o número: "));
        console.log("Número digitado: "+num1);
        num2 = parseInt(prompt("Digite 2º o número: "));
        console.log("Número digitado: "+num2);
        soma = num1 + num2;

        do{
            
            resposta  = parseInt(prompt("Resposta: "));
            
            if(soma!=resposta){
                console.log("Tente novamente!");
            }
            else{
                console.log("A resposta esta correta!")
            }
         }while(soma!=resposta)
}