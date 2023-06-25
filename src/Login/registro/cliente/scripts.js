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

