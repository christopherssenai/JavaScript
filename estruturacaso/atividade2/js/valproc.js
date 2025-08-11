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
            }else if(document.frmnumero.txtopera.value==""){
        alert("Preencha o campo Operação");
        document.frmnumero.txtopera.focus();
        return false;
            }else{
                let numero1 = parseFloat(document.getElementById('num1').value);  
                let numero2 = parseFloat(document.getElementById('num2').value); 
                let operacao =  parseFloat(document.getElementById('opera').value);
                let calculo;
                
                switch(operacao){
                    case 1:
                    calculo=numero1+numero2;
                        if(calculo % 2 == 0){
                            alert(numero1+"+"+numero2+"="+calculo+" Seu número é par.");
                        }
                        else{
                            alert(numero1+"+"+numero2+"="+calculo+" Seu número é impar.");
                        }
                    break;
                    case 2:
                    calculo=numero1-numero2;
                        if(calculo % 2 == 0){
                            alert(numero1+"-"+numero2+"="+calculo+" Seu número é par.");
                        }
                        else{
                            alert(numero1+"-"+numero2+"="+calculo+" Seu número é impar.");
                        }
                    break;
                    case 3:
                    calculo=numero1*numero2;
                        if(calculo % 2 == 0){
                            alert(numero1+"*"+numero2+"="+calculo+" Seu número é par.");
                        }
                        else{
                            alert(numero1+"*"+numero2+"="+calculo+" Seu número é impar.");
                        }
                    break;
                    case 4:
                    calculo=numero1/numero2;
                        if(numero2==0){
                            alert("Impossivel dividir um numero por zero! Digite outro numero.");
                        }
                        else if(calculo % 2 == 0){
                            alert(numero1+"/"+numero2+"="+calculo+" Seu número é par.");
                            }
                            else{
                                alert(numero1+"/"+numero2+"="+calculo+" Seu número é impar.");
                            }
                    break;
                    default:
                        alert("Preencha campo de operação com um número existente!");
                        document.frmnumero.txtopera.focus();
                        return false;
                }
                
                
            }
}