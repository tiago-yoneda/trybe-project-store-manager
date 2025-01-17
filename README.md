# Aviso
Projeto realizado durante módulo de back-end do curso da Trybe.

Uma simples API para o cadastro de produtos e vendas, com CRUD. Utilizando NodeJS, express e MongoDB.

Tem também testes unitários, feitos com Sinon e Chai, das camadas de MVC. Os testes encontram-se na pasta `./test/unit/`

---
# Trybe Projeto Store Manager
## Demo video

[![Store Manager Demo](https://img.youtube.com/vi/p8GuEGWpW4k/0.jpg)](https://www.youtube.com/watch?v=p8GuEGWpW4k)

# Sumário

- [Aviso](#aviso)
- [Trybe Projeto Store Manager](#trybe-projeto-store-manager)
- [Habilidades](#habilidades)
- [Como utilizar este projeto](#como-utilizar-este-projeto)
  - [Configuração Inicial](#configuração-inicial)
  - [Rodando o projeto](#rodando-o-projeto)
  - [Utilizando as rotas](#utilizando-as-rotas)
- [O que deverá ser desenvolvido](#o-que-deverá-ser-desenvolvido)
  - [Desenvolvimento](#desenvolvimento)
  - [Durante o desenvolvimento](#durante-o-desenvolvimento)
- [Como desenvolver](#como-desenvolver)
  - [Padrões e conexões](#padrões-e-conexões)
  - [Conexão com o Banco](#conexão-com-o-banco)
  - [Tabelas](#tabelas)
- [Requisitos do projeto](#requisitos-do-projeto)
  - [Linter](#linter)
  - [Lista de requisitos](#lista-de-requisitos)

    `Obrigatórios`
    - [1 - Crie um endpoint para o cadastro de produtos](#1---crie-um-endpoint-para-o-cadastro-de-produtos)
    - [2 - Crie um endpoint para listar os produtos](#2---crie-um-endpoint-para-listar-os-produtos)
    - [3 - Crie um endpoint para atualizar um produto](#3---crie-um-endpoint-para-atualizar-um-produto)
    - [4 - Crie um endpoint para deletar um produto](#4---crie-um-endpoint-para-deletar-um-produto)
    - [5 - Crie um endpoint para cadastrar vendas](#5---crie-um-endpoint-para-cadastrar-vendas)
    - [6 - Crie um endpoint para listar as vendas](#6---crie-um-endpoint-para-listar-as-vendas)
    - [7 - Crie um endpoint para atualizar uma venda](#7---crie-um-endpoint-para-atualizar-uma-venda)
    - [8 - Crie um endpoint para deletar uma venda](#8---crie-um-endpoint-para-deletar-uma-venda)
    - [9 - Atualize a quantidade de produtos](#9---atualize-a-quantidade-de-produtos)
    - [10 - Valide a quantidade de produtos](#10---valide-a-quantidade-de-produtos)

    `Bônus`
    
    - [11 - Escreva testes para seus models](#11---escreva-testes-para-seus-models)
    - [12 - Escreva testes para seus services](#12---escreva-testes-para-seus-services)
    - [13 - Escreva testes para seus controllers](#13---escreva-testes-para-seus-controllers)
---

# Habilidades

Nesse projeto, você será capaz de:

- Entender o funcionamento da camada de Model;
- Delegar responsabilidades específicas para essa camada;
- Conectar sua aplicação com diferentes `collections` do bancos de dados;
- Estruturar uma aplicação em camadas;
- Delegar responsabilidades específicas para cada parte do seu app;
- Melhorar manutenibilidade e reusabilidade do seu código;
- Entender e aplicar os padrões REST;
- Escrever assinaturas para APIs intuitivas e facilmente entendíveis.

---

# Como utilizar este projeto

## Configuração inicial
 - Após clonar o repositório rodar o comando `npm i` para instalar todas as dependências
 - Tenha uma instancia do banco de dados MongoDB rodando em sua máquina
 - no arquivo ./models/connection.js configurar o `MONGO_DB_URL` para o endereço da sua instancia do mongodb.
 - Utilize um API Client como Insomnia ou Postman para fazer as requisições.

## Rodando o projeto
 - o comando `npm start` vai fazer o projeto rodar na porta 3000

## Utilizando as rotas

  Existem duas rotas nessa API e ambas contam com as operações de CRUD. As rotas são `/products` e `/sales`
  ### Operações de CRUD na rota `/products`
  - POST - é utilizado na rota `/`. É necessário que a requisição seja feita passando um objeto JSON no body, com as chaves 'name' e 'quantity' do produto que você deseja adicionar. (O id é gerado automaticamente)
  - GET - pode ser efetuado na rota `/` ou utilizando um id (`/id`) do produto desejado, vale lembrar que o ID em questão é no formato utilizado pelo MongoDB então ele tem a seguinte aparência `60e91112fa67752d069f0f6c`
  - PUT - utilizado exclusivamente com o id com na rota `/id` e deve-se passar no body um JSON com o novo 'name' ou 'quantity' do produto escolhido.
  - DELETE - como no método anterior, precisamos utilizar a rota `/id` para retirarmos um produto do nosso banco de dados. Aqui não é necessário nenhum body.
  ### Operações de CRUD na rota `/sales`
  - POST - Utilizando a rota `/` e passando um JSON com um array de objetos, sendo que cada objeto tem que ter as chaves 'productId' e 'quantity', vale lembrar que o 'productId' precisa ser um produto já cadastrado.(o id também é gerado automaticamente)
  - GET - Semelhante ao GET da rota `/products/
  - PUT - necessita utilizar a rota `/id` e como no POST, um array de objetos deve ser passado como JSON
  - DELETE - Utiliza também o `/id`

---
# O que deverá ser desenvolvido

Você vai desenvolver sua primeira API utilizando a arquitetura MSC!

A API a ser construída trata-se de um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar e atualizar produtos e vendas.

---

## Desenvolvimento

Você vai desenvolver todas as camadas da API (Models, Services caso necessário, e Controllers).

Através dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, para as pessoas mais mais íntimas 😜).

Você deve utilizar o banco MongoDB para a gestão de dados. Além disso, a API deve ser RESTful.

⚠️ **Dicas Importantes** ⚠️:

- Deve ser possível que a pessoa usuária, independente de cadastramento ou login, possa adicionar, ler, deletar e atualizar produtos no seu estoque. O usuário deve poder também enviar vendas para o sistema. Essas vendas devem validar se o produto em questão existe. Deve, também, ser possível ler, deletar e atualizar vendas.

- Para **todos os endpoints** garanta que:

  - Caso o recurso não seja encontrado, sua API retorne o status HTTP adequado com o body `{ message: '<recurso> não encontrado' }`.
  - Em caso de erro, sua API retorne o status HTTP adequado com o body `{ err: { message: <mensagem de erro>, code: <código do erro> } }`.
    - O código do erro deve ser determinado por você e deve seguir o mesmo padrão para toda a aplicação. Por exemplo: `'not_found'`, `'invalid_data'` e afins.
  - Em caso de dados inválidos, sua API retorne o status HTTP adequado, com o body `{ err: { message: 'Dados inválidos', code: <código do erro> } }`.
  - Todos os retornos de erro devem seguir o mesmo formato. Para erros que requerem dados adicionais (por exemplo, para informar quais campos estão incorretos) utilize a propriedade `data` dentro do objeto `err`.
  - Para gerar os objetos de erro personalizados, você pode utilizar uma biblioteca de erros, como o [`boom`](https://www.npmjs.com/package/@hapi/boom).

- Você pode utilizar middlewares e objetos de erro personalizados para que não tenha que repetir a lógica de tratamento de erro em vários lugares. Não se esqueça também do [express-rescue](https://www.npmjs.com/package/express-rescue), ele pode facilitar muito o trabalho de tratar erros.

- Quando estiver na dúvida sobre qual status HTTP utilizar, você pode consultar sites como o [httpstatuses.com](https://httpstatuses.com/), [restapitutorial.com](https://www.restapitutorial.com/httpstatuscodes.html) ou a [documentação sobre o assunto no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status). Com o tempo, você vai lembrar com facilidade o significado dos códigos mais comuns.

- Para realizar a validação dos dados, você pode utilizar middlewares como [`Joi`](https://www.npmjs.com/package/@hapi/joi) ou o [`Expresso Validator`](https://www.npmjs.com/package/@expresso/validator). Caso prefira, você também pode realizar a validação de forma manual.

---

## Durante o desenvolvimento

* ⚠ **PULL REQUESTS COM ISSUES NO LINTER NÃO SERÃO AVALIADAS, ATENTE-SE PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO!** ⚠

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  5. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  4. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

# Como desenvolver

## Padrões e conexões

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

### Todos os seus endpoints devem estar no padrão REST

- Use os verbos HTTP adequados para cada operação.

- Agrupe e padronize suas URL em cada recurso.

- Garanta que seus endpoints sempre retornem uma resposta, havendo sucesso nas operações ou não.

- Retorne os códigos de status corretos (recurso criado, erro de validação, autorização, etc).

### Cada camada da sua API deve estar em sua respectiva pasta

- Models devem estar na pasta `models`, **na raiz do projeto**

- Services devem estar na pasta `services`, **na raiz do projeto**

- Controllers devem estar na pasta `controllers`, **na raiz do projeto**

### Arquivo index.js

Há um arquivo `index.js` no repositório. Não remova, nele, o seguinte trecho de código:

```javascript
app.get('/', (request, response) => {
  response.send();
});
```

Isso está configurado para o avaliador funcionar.

### Conexão com o Banco:

A conexão do banco local deverá conter os seguintes parâmetros:

```javascript
const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';
const DB_NAME = 'StoreManager';
```

### Tabelas

O banco terá duas tabelas: produtos e vendas

A tabela de produtos deverá ter o seguinte nome: `products`

Os campos da tabela `products` terão esse formato:

```json
{ "name": "Produto Silva", "quantity": 10 }
```

A resposta do insert que deve retornar após a criação é parecida essa:

```json
{ "_id": ObjectId("5f43cbf4c45ff5104986e81d"), "name": "Produto Silva", "quantity": 10 }
```

(O \_id será gerado automaticamente)

A tabela de vendas deverá ter o seguinte nome: `sales`

Os campos da tabela `sales` terão esse formato:

```json
{ "itensSold": [{ "productId": "5f43cbf4c45ff5104986e81d", "quantity": 2 }] }
```

A resposta do insert que deve retornar após a criação é parecida essa:

```json
{
  "_id": ObjectId("5f43cc53c45ff5104986e81e"),
  "itensSold": [{ "productId": "5f43cbf4c45ff5104986e81d", "quantity": 2 }]
}
```

(O \_id será gerado automaticamente)

# Requisitos do projeto

## Linter

Usaremos o [ESLint](https://eslint.org/) para fazer a análise estática do seu código.

Este projeto já vem com as dependências relacionadas ao _linter_ configuradas no arquivos `package.json`.

Para poder rodar os `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no seu código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`, bastar ir em extensions e baixar o [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).

---

## Testes

Usaremos o [Jest]() e o [Frisby] para fazer os testes de api.

Este projeto já vem configurado e com suas dependências

Para poder executar os testes basta executar comando `npm test` e o resultado será igual o abaixo:

![Testes](./public/testejestfrisby.png)

## Dica: desativando testes

Especialmente no início, quando a maioria dos testes está falhando, a saída após executar os testes é bastante poluída. Você pode desabilitar temporariamente um teste utilizando a função `skip` junto à função `it`. Como o nome indica, esta função "pula" um teste:

```js
it.skip('it includes the text `Movie Cards Library` inside a h1 tag', () => {
  wrapper = shallow(<Header />);

  expect(wrapper.find('header h1').text()).toBe('Movie Cards Library');
});
```

Na saída da execução dos testes, você verá um <img src="./public/orange-circle.png" width="15px"> indicando que o teste está sendo pulado:

![image](./public/skipped-test.png)

Uma estratégia é pular todos os testes no início e ir implementando um teste de cada vez, removendo dele a função `skip`.

⚠️ Lembre-se de não entregar o projeto com nenhum teste ignorado. Testes ignoradados serão tratados como testes falhando.

## Lista de requisitos

### 1 - Crie um endpoint para o cadastro de produtos

- O endpoint deve ser acessível através do caminho (`/products`);

- Os produtos enviados devem ser salvos em uma **collection** do MongoDB;

- O endpoint deve receber a seguinte estrutura:

```json
{
  "name": "product_name",
  "quantity": "product_quantity"
}
```

O retorno da API de um produto cadastrado com sucesso deverá ser:

```json
{
  "_id": "5f43a7ca92d58904914656b6",
  "name": "Produto do Batista",
  "quantity": 100
}
```

#### Requisição de Cadastro de Produtos:

O projeto deve rodar na porta `http://localhost:3000`

![Criar produtos](./public/criarProdutos.png)

#### Observações Técnicas:

- `name` deve ser uma _string_ com mais de 5 caracteres e deve ser único;

- `quantity` deve ser um número inteiro maior que 0;

- Cada produto deve ter um id que seja único e gerado no momento em que o recurso for criado. Você pode utilizar o ID gerado pelo MongoDB

- A resposta do endpoint em caso de sucesso deve ser o produto criado.

**O que será verificado:**

- Será validado que não é possível criar um produto com o nome menor que 5 caracteres
  - Se o produto tiver o nome menor que cinco caracteres o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`:

![Nome menor que 5](./public/nomeMenorQue5.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

- Será validado que não é possível criar um produto com o mesmo nome de outro já existente

  -  Se o produto tiver o mesmo nome o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Mesmo nome](./public/mesmonome.png)

- Será validado que não é possível criar um produto com quantidade menor que zero

    - Se o produto tiver uma quantidade menor que zero o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Menor que 0](./public/menorque0.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

- Será validado que não é possível criar um produto com quantidade igual a zero

  - Se o produto tiver uma quantidade igual a zero o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Igual a zero](./public/igualazero.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

- Será validado que não é possível criar um produto com uma string no campo quantidade

  - Se o produto tiver uma quantidade com o valor em string o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Quantidade como string](./public/quantidadecomostring.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

- Será validado que é possível criar um produto com sucesso

  - Se o produto for cadastrado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com status http `201`:

![Criar produtos](./public/criarProdutos.png)

### 2 - Crie um endpoint para listar os produtos

- O endpoint deve ser acessível através do caminho (`/products`) ou (`/products/:id`);

- Através do caminho `/products`, todos os produtos devem ser retornados;

- Através do caminho `/products/:id`, apenas o produto com o `id` presente na URL deve ser retornado;

**O que será verificado:**

- Será validado que todos produtos estão sendo retornados

  - Se a lista retornar com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Lista de produtos](./public/listadeprodutos.png)

- Será validado que é possível listar um determinado produto

  - Se a lista retornar com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Listar um produto](./public/produtoespecifico.png)

- Será validado que não é possível listar um produto que não existe

  - Se a lista retornar com falha, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Produto não existe](./public/produtonaoexiste.png)

### 3 - Crie um endpoint para atualizar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);

- O corpo da requisição deve seguir a mesma estrutura do método responsável por adicionar um produto;

- Apenas o produto com o `id` presente na URL deve ser atualizado;

**O que será verificado:**

- Será validado que não é possível atualizar um produto com o nome menor que 5 caracteres

  - Se o produto tiver o nome menor que cinco caracteres, o resultado retornado deverá ser conforme exibido abaixo, com status `422`:

![Atualizar com nome menor que cinco](./public/atualizarcomnomemenorque5.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

- Será validado que não é possível atualizar um produto com quantidade menor que zero

  - Se o produto tiver o quantidade menor que zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar menor que zero](./public/atualizarmenorque0.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

- Será validado que não é possível atualizar um produto com quantidade igual a zero

  - Se o produto tiver o quantidade igual a zero, o resultado mostrado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar igual a zero](./public/atualizarigual0.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

- Será validado que não é possível atualizar um produto com uma string no campo quantidade

  - Se o produto tiver o quantidade como string, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar com string](./public/atualizarcomostring.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

- Será validado que é possível atualizar um produto com sucesso]**

  - Se o produto atualizado com sucesso, o resultado mostrretornadoado deverá ser conforme exibido abaixo, com status http `200`:

![Atualizado com sucesso](./public/atualizarcomsucesso.png)

### 4 - Crie um endpoint para deletar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);

- Apenas o produto com o `id` presente na URL deve ser deletado;

**O que será verificado:**

- Será validado que é possível deletar um produto com sucesso

  - Se o produto deletado com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Deletar um produto](./public/deletarumproduto.png)

- Será validado que não é possível deletar um produto que não existe

  - Se o produto não for deletado com sucesso, o resultado retornado deverá ser esse e com status http `422`:

![Deletar um produto que não existe](./public/deletarumprodutoquenaoexiste.png)

### 5 - Crie um endpoint para cadastrar vendas

- O endpoint deve ser acessível através do caminho (`/sales`);

- As vendas enviadas devem ser salvas em uma `collection` do MongoDB;

- Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;

- O endpoint deve receber a seguinte estrutura:

```json
[
  {
  "productId": "product_id",
  "quantity": "product_quantity",
  },
  ...
]
```

O retorno de uma venda cadastrada com sucesso deverá ser:

```json
{
  "_id": "5f43ba333200020b101fe4a0",
  "itensSold": [
    {
      "productId": "5f43ba273200020b101fe49f",
      "quantity": 2
    }
  ]
}
```

#### Observações Técnicas:

- O `productId` devem ser igual ao `id` de um produto anteriormente cadastrado;

- `quantity` deve ser um número inteiro maior que 0;

- Cada venda deve ter um id que seja único e gerado no momento em que o recurso for criado;

- A resposta do endpoint em caso de sucesso deve ser a(s) venda(s) criada(s).

**O que será verificado:**

- Será validado que não é possível cadastrar vendas com quantidade menor que zero

  - Se a venda tiver uma quantidade menor que zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Vendas menor que zero](./public/comprasmenorquezero.png)

- Será validado que não é possível cadastrar vendas com quantidade igual a zero

  - Se a venda tiver uma quantidade igual a zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Vendas igual a zero](./public/comprasigualazero.png)

- Será validado que não é possível cadastrar vendas com uma string no campo quantidade

  - Se a venda tiver uma quantidade com valor, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Vendas com string](./public/comprascomstring.png)

- Será validado que é possível criar uma venda com sucesso

  - Se a venda foi feita com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Cadastro de venda com sucesso](./public/cadastrodevendacomsucesso.png)

- Será validado que é possível criar várias vendas com sucesso

  - Se as vendas foi feita com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Cadastrar varias compras](./public/variascompras.png)

### 6 - Crie um endpoint para listar as vendas

- O endpoint deve ser acessível através do caminho (`/sales`) ou (`/sales/:id`);

- Através do caminho `/sales`, todas as vendas devem ser retornadas;

- Através do caminho `/sales/:id`, apenas a venda com o `id` presente na URL deve ser retornada;

**O que será verificado:**

- Será validado que todas as vendas estão sendo retornadas

  - Se todas vendas estão sendo listadas, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Listar todas as vendas](./public/todasvendas.png)

- Será validado que é possível listar uma determinada venda

 - Se a venda esta sendo listada, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Listar uma venda](./public/listaumavenda.png)

- Será validado que não é possível listar uma venda inexistente

  - Se a venda não esta sendo listada, o resultado retornado deverá ser conforme exibido abaixo, com status http `404`:

![Listar uma venda que não existe](./public/vendanaoexiste.png)

### 7 - Crie um endpoint para atualizar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);

- O corpo da requisição deve receber a seguinte estrutura:

```json
[
  {
    "productId": "5f3ff849d94d4a17da707008",
    "quantity": 3
  }
]
```

- `quantity` deve ser um número inteiro maior que 0;

- Apenas a venda com o `id` presente na URL deve ser atualizada;

**O que será verificado:**

- Será validado que não é possível atualizar vendas com quantidade menor que zero

  - Se a venda tiver uma quantidade menor que zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar venda menor que zero](./public/atualizarvendamenorquezero.png)

- Será validado que não é possível atualizar vendas com quantidade igual a zero

  - Se a venda tiver uma quantidade igual a zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar venda igual zero](./public/atualizarvendaigualzero.png)

- Será validado que não é possível atualizar vendas com uma string no campo quantidade

  - Se a venda tiver uma quantidade do tipo string, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar venda com string](./public/atualizarvendacomstring.png)

- Será validado que é possível atualizar uma vendas com sucesso

  - Se a venda for atualizada com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Atualizar uma venda com sucesso](./public/atualizarvendacomsucesso.png)

### 8 - Crie um endpoint para deletar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);

- Apenas a venda com o `id` presente na URL deve ser deletado;

**O que será verificado:**

- Será validado que é possível deletar uma venda com sucesso

  - Se a venda foi deletada sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200` e será verificado depois que a venda não existe, com um GET nesse `id`, e este deverá retornar status http `404`:

![Deletar uma venda com sucesso](./public/deletarumavendacomsucesso.png)

- Será validado que não é possível deletar uma venda que não existe

  - Se a venda não foi deletada sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Deletar uma venda que não existe](./public/deletarumavendaquenaoexiste.png)

### 9 - Atualize a quantidade de produtos

- Ao realizar uma venda, atualizá-la ou deletá-la, você deve também atualizar a quantidade do produto em questão presente na `collection` responsável pelos produtos;

- Por exemplo: suponha que haja um produto chamado _Bola de Futebol_ e a sua propriedade `quantity` tenha o valor _10_. Caso seja feita uma venda com _8_ unidades desse produto, a quantidade do produto deve ser atualizada para _2_ , pois 10 - 8 = 2;

**O que será verificado:**

- Será validado que é possível a quantidade do produto atualize ao fazer uma compra

  - Ao fazer uma determinada venda, a quantidade do produto deverá ser atualizada.

- Será validado que é possível a quantidade do produto atualize ao deletar uma compra

  - Ao fazer deletar uma determinada venda, a quantidade do produto deverá ser atualizada para a quantidade que tinha antes de ter feito essa venda.

### 10 - Valide a quantidade de produtos

- Um produto nunca deve ter a quantidade em estoque menor que 0;

- Quando uma venda for realizada, garanta que a quantidade sendo vendida está disponível no estoque

**O que será verificado:**

- Será validado que o estoque do produto nunca fique com a quantidade menor que zero

  - Um produto não poderá ficar com a quantidade menor que zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `404`:

![Compra maior que a quantidade](./public/compramaiorqueaquantidade.png)

## Bônus

## 11 - Escreva testes para seus models

- Utilize o mocha, chai e sinon para escrever seus testes

- Coloque todos os testes de models no arquivo `test/unit/models.js`

- Será validado que cobertura total das linhas dos arquivos na pasta `models` é maior ou igual a 80%

## 12 - Escreva testes para seus services

- Utilize o mocha, chai e sinon para escrever seus testes

- Coloque todos os testes de services no arquivo `test/unit/services.js`

- Será validado que cobertura total das linhas dos arquivos na pasta `services` é maior ou igual a 80%

## 13 - Escreva testes para seus controllers

- Utilize o mocha, chai e sinon para escrever seus testes

- Coloque todos os testes de controllers no arquivo `test/unit/controllers.js`

- Será validado que cobertura total das linhas dos arquivos na pasta `controllers` é maior ou igual a 80%

---
