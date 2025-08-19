function validaProc() {
    let i=0;
    let j=0;
    let mediaBimestre=[0, 0];
    let notaAluno=[];
    let mediaNota=0;

    for (i = 0; i < 2; i++){
        console.log("");
        console.log("Notas dos alunos no "+(i+1)+"º Bimestre: ");
        console.log("");

        for (j = 0; j < 5; j++){
            notaAluno[j] = parseFloat(prompt("Nota do "+(j+1)+"º aluno: "));
            console.log("Nota: "+notaAluno[j]);
            mediaBimestre[i] += notaAluno[j];
        }

        console.log("Média do "+(i+1)+"º bimestre: " + (mediaBimestre[i] / 5));
    }

    for (i = 0; i < 2; i++){
        mediaNota += mediaBimestre[i];
    }

    console.log("");
    console.log("A média total dos alunos é " + (mediaNota / (2*5))); 
}


