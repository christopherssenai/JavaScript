function validaProc()
{ 
    let matriz = [];
    let quarto = 4;
    let andares = 6;
    let rendaTotal = 0;
    let totalQuartos = 0;

     for (let i = 0; i < andares; i++) {
        matriz[i]= [];
         for (let q = 0; q < quarto; q++) {
             matriz[i][q] = parseInt(prompt("Digite a renda do ap número "+ q +", "+ i +"º andar"));
             console.log("Renda do ap número "+ (q+1) +", "+ (i+1) +"º andar: " + matriz[i][q]);
             rendaTotal += matriz[i][q];
             totalQuartos++;
         }
         console.log("");
     }

     console.log("");
     console.log("Renda total: R$" + rendaTotal);
     console.log("Média: R$" + rendaTotal/totalQuartos);
    return false;
}