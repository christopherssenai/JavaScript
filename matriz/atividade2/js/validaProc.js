function validaProc() {
    let matriz = [];
    let somaA = 0;
    let somaB = 0;
    let linhas = 2;
    let colunas = 2;


    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        for (let c = 0; c < colunas; c++) {
            matriz[i][c] = parseInt(prompt("Digite o valor da linha " + i + " e coluna " + c));
        }
    }

    let linhaEscolhida = parseInt(prompt("Digite uma linha para somar (0 ou 1): "));

  
    document.write("<h3>Matriz:</h3>");
    for (let i = 0; i < linhas; i++) {
        for (let c = 0; c < colunas; c++) {
            document.write(matriz[i][c] + "&nbsp&nbsp");
        }
        document.write("<br>"); 
    }


    if (linhaEscolhida == 0) {
        for (let c = 0; c < colunas; c++) {
            somaA += matriz[0][c];
        }
        alert("A soma da linha 0 é: " + somaA);
    } else if (linhaEscolhida == 1) {
        for (let c = 0; c < colunas; c++) {
            somaB += matriz[1][c];
        }
        alert("A soma da linha 1 é: " + somaB);
    } else {
        alert("Linha inválida, digite 0 ou 1!");
    }

    return false;
}

