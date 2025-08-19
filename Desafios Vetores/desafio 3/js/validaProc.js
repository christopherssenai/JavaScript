function validaProc() {
    let i;
    let numero=[];
    let multipla;
    let numeroMultipla=[];

    for(i=0; i<5; i++) {
        numero[i]=parseInt(prompt("Informe seu número: "));
        console.log("Número informado: "+numero[i]);
    }
    console.log("");

    multipla=parseInt(prompt("número para multiplicar todos: "))
    console.log("Número à multiplicar: "+multipla);
    console.log("")

    for(i=0; i<5; i++) {
        numeroMultipla[i]=numero[i]*multipla;
        console.log(numero[i]+" X "+multipla+" = "+numeroMultipla[i]);
    }
    return false;

}


