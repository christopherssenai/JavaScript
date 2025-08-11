function validaProc(){
    alert("estou")
    if(docucument.frmnumero.txtnum.value==""){
        alert("Preencha o campo Número");
        document.frmnumero.txtnum.focus();
    return false;

    }else{
        let nu=parseInt(document.getElementById('num').value);
        for(let i=1; i<11;i++){
        console.log(nu + "X" + i + "=" + nu * i);
        }
    return false;
    }
}