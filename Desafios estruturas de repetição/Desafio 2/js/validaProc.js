function validaProc(){   
    let peso=parseFloat(document.getElementById('pes').value)
    let altura=parseFloat(document.getElementById('alt').value)
    imc = peso/(altura * altura)
    alert(imc)
}