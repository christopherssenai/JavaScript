function validaProc() {
    let matriz = [];
    let linhas = 5;
    let colunas = 4;
    let soma = [];
    let somaTotal = 0


    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        soma[i]= 0
         for (let c = 0; c < colunas; c++) {
             matriz[i][c] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + c));
             somaTotal += matriz[i][c];
             soma[i] += matriz[i][c];
         }
     }


    document.write("<h3>Matriz:</h3>");
    for (let i = 0; i < linhas; i++) {
       
        for (let c = 0; c < colunas; c++) {
            document.write(matriz[i][c] + "&nbsp;&nbsp;");
            
        }
        document.write("<br>"); 
    }

    document.write("<h3>Soma das linhas:</h3>");
    for (let i = 0; i < linhas; i++) {
            document.write((i+1) + "º linha: "+ soma[i]);
        document.write("<br>"); 
    }

    document.write("<h3>Soma total:</h3>");
    document.write("<br>");
    document.write(somaTotal)
    
}

