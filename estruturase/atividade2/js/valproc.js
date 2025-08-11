function procFormulario(){
    //Validação de campos
    if(document.frmnumero.txtnum1.value==""){
        alert("Preencha eo campo Nota 1");
        document.frmnumero.txtnum1.focus();
        return false;
    }
    else if(document.frmnumero.txtnum2.value==""){
        alert("Preencha eo campo Nota 2");
        document.frmnumero.txtnum2.focus();
        return false;
            }else{
                let numero1 = parseFloat(document.getElementById('num1').value);  
                let numero2 = parseFloat(document.getElementById('num2').value); 
                if(numero1>numero2){
                    alert("Primeiro número maior que o segundo")
                }
                    if(numero1<numero2) {
                        alert("Segundo número maior que o Primeiro")
                        }
                        else if(numero1=numero2){
                            alert("Números iguais")
                        }
                
            }
}