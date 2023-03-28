# Especificações do Projeto

A aplicação Barber Point é a solução perfeita para pessoas que se encontram indecisas ou insatisfeitas com a barbearia que frequentam, seja por falta de produtos, preço ou o ambiente do local, ou seja, independente de quem é ou o que faz, o usuário poderá encontrar a barbearia que melhor atenda suas necessidades.

As tecnologias que serão utilizadas no fron-end são HTML, CSS, Boostrap, Jquery. Na parte do back-end será utilizado JavaScript ou Json Cruds.

Para solucionar este problema a aplicação conta com diversas funcionalidades, tais como a completa personalização do perfil do usuário, permissão para criação de um portifólio customizado de cada barbearia, e também a obtenção da localização do usuário, que é extremamente necessário para que a aplicação direcione o usuário até a melhor barbearia na região do mesmo. 

Este documento irá abordar de forma mais específica sobre do que se trata a aplicação, apresentando quais as funcionalidades e restrições.

## Personas (Pedro Matta - Adicionar Persona)

* __Persona 1:__ Os donos das barbearias são as pessoas responsáveis por criar a página e o portifólio da barbearia, com diversas informações como preço, local, produtos utilizados e ambientes.

* __Persona 2:__ Mohammad tem 26 anos e é natural da Arábia Saudita, dono de uma multi-nacional no seu País que é responsável por criar camelos. Veio para o Brasil visitar seus amigos e família, que moram na cidade de Belo Horizonte. Sendo uma pessoa muito vaidosa, Mohammad gosta de fazer a barba de 5 em 5 dias, mas tem uma alergia que impossibilita fazer ele mesmo, sendo necessário um tratamento especial para sua barba, e tem dificuldades de encontrar barbearias que consigam antende-lo da melhor forma.

* __Persona 3:__ Afonso é um senhor de 73 anos, natural de Contagem e aposentado. Por ser uma pessoa com a idade mais avançada, Afonso prefere cortar seu cabelo e fazer a barba uma vez por mês em lugares próximos de sua casa, com um ambiente mais tranquilo e maduro. As barbearias que Afonso já frequentou eram lugares de público jovem, o deixando desconfortável em relação aos assuntos e ambientes dos estabelecimentos. Por não entender de tecnologia, ele se encontra em uma enorme dificuldade de encontrar uma barbearia que seja de público adulto, pois não sabe como procurar na internet.

* __Persona 4:__ Arthur é pai de César, uma ciança de 9 anos, naturais de Belo Horizonte. Como César precisa cortar o cabelo, Arthur se encontra em uma grande dúvida a qual barbearia deve levar seu filho, devido a falta de espaços e ambientes infantis na maioria dos estabelecimentos. Já que os horários de Arthur eram muito apertados e a mãe de César estava viajando a trabalho, ele procurou por diversos lugares, porém, não encontrava barbearias com horários compatíveis com o dele, impossibilitando o mesmo de levar a criança ao local.

* __Persona 5:__ Lucas Kelvin de apenas 16 anos, natural de Betim, é um jovem que trabalha em uma borracharia e gosta de cortar seu cabelo e fazer seu bigode semanalmente em barbearias que são especializadas em cortes mais criativos, reflexos, disfarçados, dentre outros tipos cortes. Lucas prefere um ambiente com mais diversidades como por exemplo a disponibilidade de um vídeo-game, sinuca e outros jogos. Porém, ele têm encontrado muitas dificuldades em achar barbearias de seu gosto com localidade mais próxima.

* __Persona 6:__ Marcos tem 22 anos, é natural de Belo Horizonte e trabalha com organização de eventos. O jovem tem a necessidade de sempre manter uma boa aparência, pois a todo momento precisa estar presente em eventos promovidos pela sua empresa, sendo assim, é importante manter seu corte de cabelo e barba sempre atualizados. Como as datas e horários variam ao longo do ano, Marcos não tem um período estabelecido na semana para ir à barbearia, estando sujeito à falta de vagas para realizar o corte. O organizador precisa cuidar do seu visual em média duas vezes por semana. Tendo em vista a sua demanda, Marcos precisa de uma barbearia que sempre tenha disponibilidade para qualquer dia e horário. Existe a preferência de que o estabelecimento tenha a flexibilidade de disponibilizar um profissional para ir ao local que o cliente precise e executar o corte em um lugar improvisado, sem que isso prejudique a qualidade do trabalho.

* __Persona 7:__

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Administrador       | Alterar permissões                        | Administrar contas e páginas    |
|Usuários            | Criar, configurar, personalizar sua conta | Encontrar a barbearia ideal     |
|Donos das barbearias| Criar uma página e portifólio do estabelecimento | Promover, conquistar e agradar clientes |
|Mohammad            | Encontrar uma barbearia com produtos específicos | Alergia                  |
|Afonso              | Encontrar um local com ambiente maduro    | Pessoa idosa                    |
|Arthur              | Barbearia infantil                        | Levar seu filho César para cortar cabelo |

Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais
|  ID  | Descrição do Requisito  | Prioridade | Responsável |
|------|-----------------------------------------|----| ----|
|RF-001| Permitir que o usuário crie uma conta | ALTA |  |
|RF-002| Permitir que o usuário cadastre sua barbearia | ALTA |  |
|RF-002| Permitir que o usuário consiga alterar as informações da conta | MÉDIO |  |
|RF-003| Permitir que o usuário inclua requisitos e necessidades que o melhor atenda | MÉDIO |  |
|RF-004| Permitir que o usuário encontre barbearias condizentes com as necessidades e requisitos próprios | ALTA |  |
|RF-005| Permitir que as barbearias criem seu portifólio detalhado com redes sociais, produtos, cortes, localização, preços, ambiente e características do local | ALTA |  |
|RF-006| Permitir que o usuário consiga marcar horário na barbearia desejada | ALTA |  |
|RF-007| Permitir que o usuário consiga desmarcar horário nas barbearias | ALTA |  |
|RF-008| Permitir o usuário consultar quais horários estão marcados em seu nome | ALTA |  |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar agendamento do usuário em no máximo 3s | BAIXA | 
|RNF-003| Permitir o cliente avaliar a barbearia | MÉDIA |
|RNF-004| Permitir o cliente a comentar sobre a barbearia | MÉDIA |

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagramas e Casos de Uso

fazer um diagrama de caso
