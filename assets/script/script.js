const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// Padrão de validação feito pelo cookbook
// formulario.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const campoNome = document.querySelector('#name');
//   const errNome = document.querySelector('#errNome');

//   if (campoNome.value.length < 3) {
//     errNome.innerHTML = 'O nome deve ter no minimo 3 caracteres';
//     campoNome.focus();
//     return;
//   } else {
//     errNome.innerHTML = '';
//   }

//   const campoEmail = document.querySelector('#email');
//   const errEmail = document.querySelector('#errEmail');

//   if (!campoEmail.value.match(emailRegex)) {
//     errEmail.innerHTML = 'Digite um e-mail válido';
//     campoEmail.focus();
//     return;
//   } else {
//     errEmail.innerHTML = '';
//   }

//   const campoSubject = document.querySelector('#subject');
//   const errSubject = document.querySelector('#errSubject');

//   if (campoSubject.value.length < 5) {
//     errSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres';
//     campoSubject.focus();
//     return;
//   } else {
//     errSubject.innerHTML = '';
//   }

//   const campoMessage = document.querySelector('#message');

//   window.alert('Formulário enviado com sucesso!');

//   campoNome.value = '';
//   campoEmail.value = '';
//   campoSubject.value = '';
//   campoMessage.value = '';
// });



// Padrão de validação que eu prefiro usar
// criando uma variavel para cada input/textarea do form
const nome = document.querySelector("#name")
const email = document.querySelector("#email")
const assunto = document.querySelector("#subject")
const mensagem = document.querySelector("#message")

// Criando variaveis de validação booleana para cada campo, pra controlar se pode ou não enviar o form
let isNomeValid = false
let isEmailValid = false
let isAssuntoValid = false
let isMensagemValid = false

// repetir essa função para cada campo que vai ser validado, e lembrar de colocar o event lá no input do HTML
// no css, colocar um "outline: none" no input, da um resultado visual um pouco melhor
function validaNome() {
  const errNome = document.querySelector("#errNome")
  if(nome.value.length < 3) {
    errNome.textContent = 'Nome muito curto'
    nome.style.border = '2px solid red'
  } else {
    errNome.textContent = ''
    nome.style.border = '4px solid var(--green)'
    isNomeValid = true
  }
}

function validaEmail() {
  const errEmail = document.querySelector("#errEmail")
  if (!email.value.match(emailRegex)) {
    errEmail.textContent = 'E-mail inválido'
    email.style.border = '2px solid red'
  } else {
    errEmail.textContent = ''
    email.style.border = '4px solid var(--green)'
    isEmailValid = true
  }
}

function validaAssunto() {
  const errAssunto = document.querySelector("#errSubject")
  if (assunto.value.length < 5) {
    errAssunto.textContent = 'O assunto precisa de 5 caracteres ao menos.'
    assunto.style.border = '2px solid red'
  } else {
    errAssunto.textContent = ''
    assunto.style.border = '4px solid var(--green)'
    isAssuntoValid = true
  }
}

function validaMensagem() {
  const errMensagem = document.querySelector("#errMessage")
  let tamanho = mensagem.value.length;
  errMensagem.textContent = `${tamanho}`

  if (tamanho > 140) {
    errMensagem.style.color = 'red'
    mensagem.style.border = '2px solid red'
    isMensagemValid = false
  } else {
    errMensagem.style.color = 'var(--green)'
    mensagem.style.border = '4px solid var(--green)'
    isMensagemValid = true
  }
}

// o evento de envio do formulário vai por padrão, recarregar a pagina. na function enviarForm(), iremos receber um evento, chamando ele de event (esse evento é o proprio envio do form)
function enviarForm(event) {
  // event.preventDefault previne o comportamento padrão do formulário, fazendo a pagina não recarregar mais
  event.preventDefault()
  // se todos os campos tiverem passado corretamente por suas validações, posso enviar o form
  if (isNomeValid && isEmailValid && isAssuntoValid && isMensagemValid) {
    alert('Enviado com sucesso')
    // reset de todos os campos e booleans de validação
    nome.value = '';
    email.value = '';
    assunto.value = '';
    mensagem.value = '';
    isNomeValid = false;
    isEmailValid = false;
    isAssuntoValid = false;
    isMensagemValid = false;
  } else {
    alert("Preenche direito o bagulho po...")
  }
}