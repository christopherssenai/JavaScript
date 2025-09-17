function procFormulario(){
    let matriz = [];
    let valor = [];
    let i;
    let linhas = 2;
    let colunas = 2;
    let soma = 0;
    let maiorNumero=0;
    let menorNumero=999;
    // validar campo vazio
    if(document.frmnumint.txtnumint.value==""){
        alert("Preencha o campo valor");
        document.frmnumint.txtnumint.focus();
        return false;
    }
    
    else{
        // transformar numero informado em repetições
        let quantidade = parseInt(document.getElementById('numint').value);

        // validando se esta valido o numero
        if(quantidade>0){
            console.log("Quantidade de vezes que ira repetir: "+quantidade);     
        }else{
            alert("Digite um número válido!!");
            document.frmnumint.txtnumint.focus();
            return false;
        } 

        // alimentando valores      
        for(i = 0; i<quantidade; i++){
            valor[i]=parseInt(prompt("Digite seu º"+(i+1)+" valor: "));
            console.log("Valor informado: "+ valor[i]);
            soma=soma+valor[i];
            if(valor[i]>maiorNumero){
                maiorNumero=valor[i];
            }
            if(valor[i]<menorNumero){
                menorNumero=valor[i];
            }
        }
        // MOSTRAR RESULTADOS

        document.write("<h3>Vetor:</h3>")
        for(i = 0; i<quantidade; i++){
            document.write(valor[i] + "&nbsp;&nbsp;")
        }
        document.write("<br><br>")
        document.write("Quantidade de numeros: "+ quantidade);
        document.write("<br>")
        document.write("Soma: "+ soma);
        document.write("<br>")
        document.write("Maior valor:"+ maiorNumero);
        document.write("<br>")
        document.write("Menor valor:"+ menorNumero);
        document.write("<br>")
        document.write("Média:"+ soma/quantidade);

        for (let i = 0; i < linhas; i++) {
            matriz[i] = [];
             for (let c = 0; c < colunas; c++) {
                if(i>0){
                 matriz[i][c] = valor [i+c]+1;
                }
                else{
                matriz[i][c] = valor [i+c];
                }
             }
         }

         document.write("<h3>Matriz:</h3>");
         for (let i = 0; i < linhas; i++) {
            
             for (let c = 0; c < colunas; c++) {
                if(i>0){
                    document.write((matriz[i][c]*matriz[i][c]) + "&nbsp;&nbsp;");
                }
                 else{
                    document.write(matriz[i][c] + "&nbsp;&nbsp;");
                 }
             }
             document.write("<br>"); 
         }
        
       
    }
}