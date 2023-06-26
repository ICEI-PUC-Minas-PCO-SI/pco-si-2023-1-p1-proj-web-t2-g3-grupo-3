const url = "http://localhost:3000/usuario";

function criar(event) {
  event.preventDefault(); // Impede o envio do formulário

  let nome = document.getElementById("nome").value;
  let cpf = document.getElementById("cpf").value;
  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      "nome": nome,
      "senha": senha
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(() => {
      console.log("Conta criada!");
    });
}

function formataCPF(cpf) //FUNÇÃO PARA FORMATAR O CPF
{
    const elementoAlvo = cpf
    const cpfAtual = cpf.value
    
    let cpfAtualizado;
    
    cpfAtualizado = cpfAtual.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
        function( regex, argumento1, argumento2, argumento3, argumento4 ) 
        {
            //FUNÇÃO PARA RETORNAR OS NÚMEROS FORMATADOS COMO CPF PARA VARIÁVEL cpfAtualizado
            return argumento1 + '.' + argumento2 + '.' + argumento3 + '-' + argumento4;
        }
    )  
    elementoAlvo.value = cpfAtualizado;//VARIÁVEL elementoAlvo RECEBE O CPF FORMATADO.
}
