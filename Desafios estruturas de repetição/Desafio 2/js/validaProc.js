function validaProc(){
    if(document.frmnumero.txtnum.value==""){
        alert("Preencha o campo Número");
        document.frmnumero.txtnum.focus();
        return false
    }else{
        let nu=parseInt(document.getElementById('num').value);
        cont=1;
        console.log("Tabuada do número "+nu);
        do{
            console.log(nu+" X "+cont+" = "+ nu * cont);
            cont=cont+1;
        }while(cont<=10)
            return false;    
    }
}
