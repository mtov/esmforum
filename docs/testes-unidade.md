# Testes de Unidade

Na versão atual do ESM Forum, nós implementamos um teste de unidade para a função `listar_perguntas` da camada de Modelo.

Ele foi implementado usando o Jest e está no arquivo [mocks.test.js](../testes/mocks.test.js).

Para executar esse teste, basta digitar na pasta raiz do projeto:

`npm test`

## Explicação do Teste

A implementação original de [listar_perguntas](../modelo.js) faz duas coisas:

* Chama a função `queryAll` para recuperar todas as perguntas cadastradas no sistema. Veja que para isso a implementação de `queryAll` acessa o BD.
* Depois, para cada pergunta, chama a função `query` para recuperar seu número de respostas. Em seguida, essa informação é adicionada na lista de perguntas que será retornada.

Então, no teste de unidade, nós realizamos o **mock** de:

* `queryAll` para retornar sempre uma lista conhecida e fixa de respostas.
* `query` para retornar sempre o valor 5. Ou seja, no teste, vamos assumir que todas as perguntas possuem exatamente 5 respostas.

## Exercícios

1. No nosso teste de unidade, foram mockadas: (a) a lógica para recuperar todas as perguntas do BD; (b) a lógica para recuperar o número de respostas de uma pergunta. O que exatamente então o teste irá testar? Em outras palavras, qual lógica restou em `listar_perguntas` e que está sendo testada?