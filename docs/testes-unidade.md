# Testes de Unidade

O ESM Forum é um sistema com funções muito simples e que realizam pouco processamento. Logo, isso dificulta a implementação de testes de unidade.

Porém, nós implementamos um teste de unidade para a função `listar_perguntas` da camada de Modelo.

Esse teste foi implementado usando o Jest e está no arquivo [mocks.test.js](../testes/mocks.test.js).

Para executar o teste de unidade, basta digitar na pasta raiz do projeto:

`npm test`

## Explicação do Teste

A implementação original de [listar_perguntas](../modelo.js) faz duas coisas:

* Chama a função `queryAll` para recuperar todas as perguntas cadastradas no sistema. Veja que para isso a implementação de `queryAll` acessa o BD.
* Depois, para cada pergunta, chama a função `query` para recuperar seu número de respostas. Essa informação é então adicionada na lista de perguntas que será retornada.

Então, no teste de unidade, nós realizamos o **mock** de:

* `queryAll` para retornar sempre uma lista conhecida e fixa de respostas.
* `query` para retornar sempre zero. Ou seja, no teste de `listar_perguntas` vamos assumir que todas as perguntas ainda estão sem respostas.