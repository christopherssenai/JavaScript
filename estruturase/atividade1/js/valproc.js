function procFormulario(){
    //Validação de campos
    if(document.frmnotas.txtnum1.value==""){
        alert("Preencha eo campo Nota 1");
        document.frmnotas.txtnum1.focus();
        return false;
    }
    else if(document.frmnotas.txtnum2.value==""){
        alert("Preencha eo campo Nota 2");
        document.frmnotas.txtnum2.focus();
        return false;
        }
        else if(document.frmnotas.txtnum3.value==""){
            alert("Preencha eo campo Nota 3");
            document.frmnotas.txtnum3.focus();
            return false;
            }else{
                //Processamento do prgramam
                let nota1 = parseFloat(document.getElementById('num1').value);  
                let nota2 = parseFloat(document.getElementById('num2').value); 
                let nota3 = parseFloat(document.getElementById('num3').value); 
                //"Let" é uma diretiva em JavaScript para declarar uma variavel,parseFloat é uma função de conversão
                //getElementById esta capturando o valor de um elemento cujo o id chama-se num1 e convertendo em numero real
                //ele pega a função e transforma em numero real
                //parseint é para numero inteiro
                let media = (nota1 + nota2 + nota3) / 3;
                if(media>=7){
                    alert("Sua média foi "+ media.toFixed(2)+ " você foi aprovado!")
                }
                else if(media=>5){
                    alert("Sua média foi "+ media.toFixed(2)+ " você está em recuperção!")
                    }
                    else {
                        alert("Sua média foi "+ media.toFixed(2)+ " você foi reprovado!")
                    }
                
            }
}