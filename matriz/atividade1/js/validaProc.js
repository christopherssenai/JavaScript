function validaProc() {
    let matriz=[];
    let multipla;
    let linhas=3;
    let colunas=3;

    // alimentar a matriz

    for (i = 0; i < linhas; i++){
        matriz[i]=[]
        for(c = 0; c < colunas;c++){
            matriz[i][c]=parseInt(prompt("Digite o valor da liha " + i + " e coluna "+ c));
        }
    }
    multipla=parseInt(prompt("Digite um número para multiplicar: "))
    

    // imprimindo os dados da matriz

    for(i = 0; i < linhas; i++){
        for(c = 0; c < colunas; c++){
            document.write((matriz[i][c]*multipla)+"&nbsp&nbsp");
        }
        document.write("<br>");
    }
    return false;
}


