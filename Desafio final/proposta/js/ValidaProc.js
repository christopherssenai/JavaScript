// Nome e sobrenome: só aceita letras (com acento), podendo ter espaço ou hífen
const regexNome = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

// Telefone: aceita formatos (99) 9999-9999 ou (99) 99999-9999
const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;

// Email: Um e-mail precisa ter um nome, o símbolo @, e depois o site que termina com .com, .br, etc.
const regexEmail = /^[\w.-]+@[A-Za-z]+\.[A-Za-z]{2,}(\.[A-Za-z]{2,})?$/;

// CPF: só aceita no formato 000.000.000-00
const regexCPF = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

// Data: aceita datas no formato 00/00/0000
const regexData = /^\d{2}\/\d{2}\/\d{4}$/;

//Puxei a regex e apliquei no ID que eu queria
function procForms() {
  const nome = document.getElementById("nome").value.trim();
  const sobrenome = document.getElementById("Sobrename").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const nascimento = document.getElementById("nascimento").value.trim();
  // Validações: se o valor não bater com a regex → mostra alerta e para o envio
  if (!regexNome.test(nome)) {
    alert("Nome inválido! Use apenas letras.");
    return false;
  }

  if (!regexNome.test(sobrenome)) {
    alert("Sobrenome inválido! Use apenas letras.");
    return false;
  }

  if (!regexTelefone.test(telefone)) {
    alert("Telefone inválido! Formato: (99) 99999-9999");
    return false;
  }

  if (!regexEmail.test(email)) {
    alert("E-mail inválido!");
    return false;
  }

  if (!regexCPF.test(cpf)) {
    alert("CPF inválido! Formato: 000.000.000-00");
    return false;
  }

  if (!regexData.test(nascimento)) {
    alert("Data de nascimento inválida! Formato: 00/00/0000");
    return false;
  }
 // Se tudo passar, retorna true e permite o envio do formulário
  return true;
}