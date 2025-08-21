function validaProc() {
    let matriz = [];
    let linhas = 3;
    let colunas = 4;
    let soma = 0;


    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
         for (let c = 0; c < colunas; c++) {
             matriz[i][c] = parseFloat(prompt("Digite o valor da linha " + i + " e coluna " + c));
         }
     }

  
    document.write("<h3>Matriz:</h3>");
    for (let i = 0; i < linhas; i++) {
       
        for (let c = 0; c < colunas; c++) {
            document.write(matriz[i][c] + "&nbsp;&nbsp;");
            soma += matriz[i][c]
        }
        document.write("<br>"); 
    }
    
    document.write("<h5>Soma dos elementos:</h5>" + soma);
    return false;
}
