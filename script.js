// Script por Paucia

var myButtonModal = document.getElementById('myButtonModal')
var myTextModal = document.getElementById('myTextModal')

var inputName = document.getElementById('inputNome')
var inputEmail = document.getElementById('inputEmail')
var inputMensagem = document.getElementById('inputMensagem')

function validar_autenticar(event){
  event.preventDefault()

  if(inputName.value == " "){
    myTextModal.classNome = 'text-success'
    myTextModal.innerText = 'Mensagem enviada!!!'
  } else {
    myTextModal.className = 'text-danger'
    myTextModal.innerText = 'Nome, Email ou Mensagem obrigatoria!'
  }

  myButtonModal.click() 
}
  
