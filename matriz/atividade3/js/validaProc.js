function validaProc() {
    let matriz = [];
    let linhas = 2;
    let colunas = 2;


    // for (let i = 0; i < linhas; i++) {
        
    //     for (let c = 0; c < colunas; c++) {
    //         matriz[i][c] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + c));
    //     }
    // }

  
    document.write("<h3>Matriz:</h3>");
    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let c = 0; c < colunas; c++) {
            document.write(([i+c]) + "&nbsp;&nbsp;");
        }
        document.write("<br>"); 
    }

    return false;
}

