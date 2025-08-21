function validaProc() {
    let matriz = [];
    let nomes = [];
    let compras = [];
    let gastos = [];
    let linhas = 3;
    let colunas = 3;
    let mediaGastos = [];

    for (let i = 0; i < linhas; i++) {

        nomes[i] =prompt("Nome: ");
     }

    for (let i = 0; i < linhas; i++) {
        matriz[i] = [];
        compras[i] = 0;
        mediaGastos[i] = 0;
        gastos[i] = 0;
         for (let c = 0; c < colunas; c++) {
             matriz[i][c] = parseFloat(prompt("Digite o valor gasto no" + i + "º mês: "));
             gastos[i] += matriz[i][c];
           
             if(matriz[i][c]>0){
                compras[i]++;
             }
             else{
                compras[i]+=0;
             }
         }
         mediaGastos[i] = gastos[i] / compras[i];
     }

     document.write("<table border='1' cellpadding='5' cellspacing='0'>");
     document.write("<tr><th>Cliente</th><th>Gasto mes 1</th><th>Gasto mes 2</th><th>Gasto mes 3</th><th>Média de Gastos</th><th>Compras</th></tr>");

     for (let i = 0; i < linhas; i++) {
         document.write("<tr>");
         document.write("<td>" + nomes[i] + "</td>");
         for (let c = 0; c < colunas; c++) {
         document.write("<td>R$ " + matriz[i][c] + "</td>");
         }
         document.write("<td>R$ " + mediaGastos[i] + "</td>");
         document.write("<td>" + compras[i] + "</td>");
         document.write("</tr>");
     }

     document.write("</table>");
}
