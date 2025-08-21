function validaProc() {
    let matriz = [];
    let linhas = 4;
    let colunas = 4;


    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let c = 0; c < colunas; c++) {
            matriz[i][c] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + c));
        }
    }

    document.write("<h3>Matriz:</h3>");
    for (let i = 0; i < linhas; i++) {
        for (let c = 0; c < colunas; c++) {
            document.write(matriz[i][c] + "&nbsp&nbsp");
        }
        document.write("<br>"); 
    }
    document.write("<h3>1º diagonal:</h3>");
    for (let i = 0; i < linhas; i++) {
        for (let c = 0; c < colunas; c++) {
            if(i==c){
            document.write(matriz[i][c] + "&nbsp&nbsp");
            }
            else{
                document.write("&nbsp&nbsp");
            }
           
        }
        document.write("<br>"); 
    }
    document.write("<h3>2º diagonal:</h3>");

    for (let i = 0; i < linhas; i++) {
        for (let c = 0; c < colunas; c++) {
            if (i + c == linhas - 1) {
                document.write(matriz[i][c] + "&nbsp&nbsp");
            }
            else{
                document.write("&nbsp&nbsp");
            }
        }
        document.write("<br>");
    }
    
    
}