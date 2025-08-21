function validaProc() {
    let matriz = [];
    let linhas = 5;
    let colunas = 5;


    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
         for (let c = 0; c < colunas; c++) {
             matriz[i][c] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + c));
         }
     }

  
    document.write("<h3>Matriz:</h3>");
    for (let i = 0; i < linhas; i++) {
       
        for (let c = 0; c < colunas; c++) {
            document.write(matriz[i][c] + "&nbsp;&nbsp;");
        }
        document.write("<br>"); 
    }

    document.write("<h3>Matriz dobrada:</h3>");
    for (let i = 0; i < linhas; i++) {
       
        for (let c = 0; c < colunas; c++) {
            document.write((matriz[i][c]*2) + "&nbsp;&nbsp;");
        }
        document.write("<br>"); 
    }
    
}


