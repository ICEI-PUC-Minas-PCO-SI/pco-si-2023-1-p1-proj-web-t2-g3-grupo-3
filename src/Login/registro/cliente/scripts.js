const url = "http://localhost:3000/usuario";


//================> CRIAR PERFIL DE CLIENTE
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
      "cpf": cpf,
      "email": email,
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


//================> CRIAR PERFIL DE BARBEARIA
function criarBarbearia(event) {
    event.preventDefault(); // Impede o envio do formulário

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("tel").value;
    let endereco = document.getElementById("endereco").value;
    let senha = document.getElementById("senha").value;

    fetch("http://localhost:3000/barbeiros", {
        method: 'POST',
        body: JSON.stringify({
        "nome": nome,
        "email": email,
        "telefone": telefone,
        "endereco": endereco,
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


//================> FORMATAÇÃO DE CPF
function formataCPF(cpf)
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
