url: string = "http://localhost:3000/usuario/";

function getLogin(nome: string, senha: string)
{
    return this.http.post(this.url, {email: email, senha: senha});
}