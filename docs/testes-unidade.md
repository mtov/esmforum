# Testes de Unidade

Na versão atual do ESM Forum, implementamos um teste de unidade para a função `listar_perguntas` da camada de Modelo.

Ele foi implementado usando o Jest e está no arquivo [listar_perguntas.test.js](../testes/listar_perguntas.test.js).

Para executar o teste, basta digitar na pasta raiz:

`npm test -- listar_perguntas.test.js`

## Explicação do Teste

A implementação de [listar_perguntas](../modelo.js) faz duas coisas:

* Chama a função `queryAll` para recuperar todas as perguntas cadastradas no sistema. Veja que para isso `queryAll` acessa o BD.
* Depois, para cada pergunta, chama a função `query` para recuperar seu número de respostas. Em seguida, essa informação é adicionada na lista de perguntas que será retornada.

Então, no teste de unidade, nós realizamos o **mock** de:

* `queryAll` para retornar sempre uma lista com respostas conhecidas.
* `query` para retornar os valores 5, 10 e 15, nessa ordem. 

### Exercício

No nosso teste de unidade, foram mockadas: (a) a lógica para 
recuperar todas as perguntas do BD; (b) a lógica para recuperar 
o número de respostas de uma pergunta. Então, o que exatamente
  o teste irá testar? Em outras palavras, qual  lógica restou 
em `listar_perguntas` e que está sendo testada?

## Criando uma Camada de Repositórios

No teste de unidade explicado acima, "mockamos" diretamente
funções de acesso ao banco de dados. O problema dessa solução é que 
`queryAll` e `query` podem ser usadas por outras funções da 
camada de Modelo. Por exemplo, como "mockamos" `query` para atender
apenas ao teste de `listar_perguntas`, nosso mock pode não ser útil para testar outras funções.

Uma solução mais genérica consiste na criação de uma camada
intermediária entre o modelo e o banco de dados, normalmente 
chamada de **repositório**. Basicamente, um repositório
oferece funções de mais alto nível para acessar um banco de dados 
(do que, por exemplo, as funções `queryAll` e `query`).

Por exemplo, poderíamos criar um repositório de perguntas 
com as seguintes funções:

* findAll: retorna uma lista com dados de todas as perguntas.
* find(id_pergunta): retorna dados de uma pergunta específica.
* insert(): insere uma pergunta no banco de dados.
* etc

Veja então que funcionaria assim:

```mermaid
flowchart LR
    BD[(BD)]
    Controle --> Modelo
    Modelo --> RepositórioBD
    RepositórioBD --> BD
```

Assim, o código SQL que hoje está implementado nas funções de 
Modelo seria movido para funções da camada de Repositório.

### Qual a vantagem de usar Repositórios?

Repositórios facilitam a escrita de testes de unidade, pois 
podemos criar um novo tipo de repositório que manipula e recupera dados em memória principal. Sendo mais específico, 
teríamos dois tipos de repositórios: `RepositoriBD` e
`RepositorioMemória`, sendo que esse última manipula apenas 
algumas poucas perguntas e será utilizado quando o Modelo for chamado pelos testes de unidade.

```mermaid
flowchart LR
    BD[(BD)]
    TesteUnidade --> Modelo
    Modelo --> RepositórioMemória
```


### Exercício

Implemente uma camada de Repositório no ESM Forum, com os dois 
tipos de repositório que mencionamos acima: `RepositoriBD` e `RepositorioMemoria`. Neste último, você pode implementar as 
funções manualmente, isto é, sem usar mocks. Por fim, 
reimplemente o teste de unidade para usar essa camada.
