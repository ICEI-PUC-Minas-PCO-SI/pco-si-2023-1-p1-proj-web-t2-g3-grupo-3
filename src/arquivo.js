//URL da api:
const URL = 'http://localhost:3000/usuarios';

const DadosCliente = document.getElementById('exibir');

fetch(URL)
  .then(res => res.json())
  .then(dados => {
    let lista_usuario = '';
    for (let i = 0; i < dados.length; i++) {
      let data = dados[i]; 
      lista_usuario += `
        <div class="foto-perfil-cliente">
          <img class="img-perfil-cliente" src="${data.foto}" alt="">
          <div id="btn-perfil">
          <button onclick="mudarFotoPerfil(${i})">Mudar/adicionar</button>
          <button onclick="removerFotoPerfil(${data.id}, ${i})">Remover</button>
          </div>
        </div>
        <div class="informacoes-cliente">
          <div id="nome-cliente">${data.nome}</div>
          <div id="email-cliente">${data.email}</div>
          <div id="telefone-cliente">${data.fone}</div>
          <button onclick="openModal(${i})">Editar Perfil</button>
        </div> `;
    }

    DadosCliente.innerHTML = lista_usuario;
  });

  
const PrefCliente = document.getElementById('preferencia-cliente');

fetch(URL)
  .then(res => res.json())
  .then(dados => {
    let lista_usuario = '';
    for (let i = 0; i < dados.length; i++) {
      let data = dados[i];
      let horariosMarcados = '';
      for (let j = 0; j < data.horarios.length; j++) {
        horariosMarcados += `${data.horarios[j]}<br>`;
      }
      lista_usuario += `
      <div class="caixa-preferencia">
        <div class="tipo-de-cabelo">
            <p>Tipo de cabelo:</p>
            ${data.cabelo}
        </div>
        <div class="idade">
            <p>Idade:</p>
            ${data.idade}
        </div>
        <div id="preferencias">
            <p>preferências:</p>
            ${data.preferencias}
        </div>
        <div class="horarios-marcados">
            <p>Horários marcados:</p>
            ${horariosMarcados}
            <button onclick="openModalDesmarcar(${data.id}, ${i})">Desmarcar</button>
        </div>
      </div>`;
    }

    PrefCliente.innerHTML = lista_usuario;
  });

function openModalDesmarcar(usuarioId, index) {
  fetch(`${URL}/${usuarioId}`)
    .then(res => res.json())
    .then(usuario => {
      const horariosMarcados = usuario.horarios;

      const modalContent = document.querySelector('.modal-content'); // Corrigido aqui
      modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>Desmarcar Horário</h2>
        <form id="modal-form-desmarcar">
          <label for="modal-horarios">Horários Marcados:</label>
          <select id="modal-horarios">
            ${horariosMarcados.map(horario => `<option value="${horario}">${horario}</option>`)}
          </select>
          <button type="submit">Confirmar</button>
        </form>
      `;

      const modalFormDesmarcar = document.getElementById('modal-form-desmarcar');
      modalFormDesmarcar.onsubmit = (event) => {
        event.preventDefault();
        const horarioSelecionado = document.getElementById('modal-horarios').value;
        const horariosFiltrados = horariosMarcados.filter(horario => horario !== horarioSelecionado);
        usuario.horarios = horariosFiltrados;

        fetch(`${URL}/${usuarioId}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario),
        })
          .then(res => res.json())
          .then(updatedUsuario => {
            console.log('Horário desmarcado:', updatedUsuario);
            closeModal();
            // Atualizar a exibição dos horários marcados na interface, se necessário
          });
      };

      document.getElementById('modal').style.display = 'block';
    });
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}









  function mudarFotoPerfil(index) {
    // Recupere os dados do usuário com base no índice
    fetch(URL)
      .then(res => res.json())
      .then(dados => {
        const usuario = dados[index];
  
        // Crie um elemento de input para selecionar a nova foto
        const inputFoto = document.createElement('input');
        inputFoto.type = 'file';
        inputFoto.accept = 'image/*';
        inputFoto.addEventListener('change', (event) => {
          const file = event.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
              const novaFoto = event.target.result;
              usuario.foto = novaFoto;
  
              // Atualize a imagem exibida
              const imgPerfil = document.querySelector(`#exibir .foto-perfil-cliente:nth-child(${index + 1}) .img-perfil-cliente`);
              imgPerfil.src = novaFoto;
  
              // Atualize os dados do usuário na API
              fetch(`${URL}/${usuario.id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(usuario),
              })
                .then(res => res.json())
                .then(updatedUsuario => {
                  // Exiba uma mensagem de sucesso ou atualize a interface conforme necessário
                  console.log('Dados do usuário atualizados:', updatedUsuario);
                });
            };
            reader.readAsDataURL(file);
          }
        });
  
        // Dispare um clique no elemento de input para abrir o seletor de arquivo
        inputFoto.click();
      });
  }

  // Função para remover a foto de perfil
function removerFotoPerfil(usuarioId, index) {
  // Recupere os dados do usuário com base no índice
  fetch(`${URL}/${usuarioId}`)
    .then(res => res.json())
    .then(usuario => {
      // Verifique se o usuário possui uma foto de perfil
      if (!usuario.foto) {
        return;
      }

      // Remova a foto do servidor
      fetch(usuario.foto, {
        method: 'DELETE',
      })
        .then(() => {
          // Atualize o campo "foto" no JSON com uma string vazia
          usuario.foto = '';

          // Atualize a imagem exibida
          const imgPerfil = document.querySelector(`#exibir .foto-perfil-cliente:nth-child(${index + 1}) .img-perfil-cliente`);
          imgPerfil.src = ''; // Defina uma imagem de espaço reservado ou deixe em branco, conforme necessário

          // Atualize os dados do usuário na API
          fetch(`${URL}/${usuarioId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario),
          })
            .then(res => res.json())
            .then(updatedUsuario => {
              // Exiba uma mensagem de sucesso ou atualize a interface conforme necessário
              console.log('Dados do usuário atualizados:', updatedUsuario);
            });
        })
        .catch(error => {
          console.error('Erro ao remover a foto:', error);
        });
    });
}





let usuarioOriginal; //Variável q armazena os dados originais do usuário

function openModal(index) {
  //Recupera os dados do usuário
  fetch(URL)
    .then(res => res.json())
    .then(dados => {
      const usuario = dados[index];

      //Armazena os dados originais do usuário
      usuarioOriginal = { ...usuario };

      //Preenche o modal com os dados do usuário
      document.getElementById('modal-nome').value = usuario.nome;
      document.getElementById('modal-email').value = usuario.email;
      document.getElementById('modal-telefone').value = usuario.fone;
      document.getElementById('modal-idade').value = usuario.idade;
      document.getElementById('modal-tipo-cabelo').value = usuario.cabelo;
      document.getElementById('modal-preferencias').value = usuario.preferencias;

      //Adiciona o evento de envio do formulário ao modal
      const modalForm = document.getElementById('modal-form');
      modalForm.onsubmit = (event) => {
        event.preventDefault(); //Impede o envio do formulário

        //Atualiza os dados do usuário com os novos valores do modal
        usuario.nome = document.getElementById('modal-nome').value;
        usuario.email = document.getElementById('modal-email').value;
        usuario.fone = document.getElementById('modal-telefone').value;
        usuario.idade = document.getElementById('modal-idade').value;
        usuario.cabelo = document.getElementById('modal-tipo-cabelo').value;
        usuario.preferencias = document.getElementById('modal-preferencias').value;

        //Atualize os dados do usuário no db.json
        fetch(`${URL}/${usuario.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(usuario),
        })
          .then(res => res.json())
          .then(updatedUsuario => {
            //mensagem de sucesso ou atualiza
            console.log('Dados do usuário atualizados:', updatedUsuario);
          });

        closeModal(); //Fecha o modal dps da atualização
      };

      //Abre o modal
      document.getElementById('modal').style.display = 'block';
    });
}

function closeModal() {
  //Restaura os dados originais do usuário caso nao clicar em salvar
  if (usuarioOriginal) {
    document.getElementById('modal-nome').value = usuarioOriginal.nome;
    document.getElementById('modal-email').value = usuarioOriginal.email;
    document.getElementById('modal-telefone').value = usuarioOriginal.fone;
    document.getElementById('modal-idade').value = usuarioOriginal.idade;
    document.getElementById('modal-tipo-cabelo').value = usuarioOriginal.cabelo;
    document.getElementById('modal-preferencias').value = usuarioOriginal.preferencias;
  }

  //Fecha o modal
  document.getElementById('modal').style.display = 'none';
}
