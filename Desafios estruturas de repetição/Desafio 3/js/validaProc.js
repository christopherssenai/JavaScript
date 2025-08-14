function validaProc(){
        let idade;
        let somaIdade = 0;
        let totalPessoas = 0;
        let genero;
        let salarioMasculino = 0;
        let salarioFeminino = 0;
        let totalMasculino = 0;
        let totalFeminino = 0;
        let totalSalarios = 0;
        let continuar;
        
    do{    
        do{
            idade = parseInt(prompt("Digite a idade: "))
            if (idade < 1){
                alert("Digite uma idade valida!");
            }
            somaIdade += idade;

        }while(idade < 1)
            genero = parseInt(prompt("Digite (M) para masculino e (F) para feminino: "));

            if("M"){
                totalPessoas++;
                salarioMasculino = parseInt(prompt("Salario: "));
                totalMasculino += salarioMasculino
            }
            else if ("F"){
                totalPessoas++;
                salarioFeminino = parseInt(prompt("Salario: "));
                totalFeminino += salarioFeminino
            }
            continuar = prompt("deseja finalizar? "); 
     }while(continuar!="FINALIZAR")   
        totalSalarios = salarioFeminino + salarioMasculino

        console.log("A média salarial é de: " +totalSalarios/totalPessoas);
        console.log("A média de idade é: "+somaIdade/totalPessoas);
        console.log("A média salarial feminina é de: " +totalFeminino/totalPessoas);
        console.log("A média Salarial masculina é de: " +totalMasculino/totalPessoas);    
}