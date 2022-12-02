# Testes de Unidade

Na versão atual do ESM Forum, implementamos um teste de unidade para a função `listar_perguntas` da camada de Modelo.

Ele foi implementado usando o Jest e está no arquivo [listar_pergunta.test.js](../testes/listar_pergunta.test.js).

Para executar o teste, basta digitar na pasta raiz:

`npm test -- listar_perguntas.test.js`

## Explicação do Teste

A implementação de [listar_perguntas](../modelo.js) faz duas coisas:

* Chama a função `queryAll` para recuperar todas as perguntas cadastradas no sistema. Veja que para isso `queryAll` acessa o BD.
* Depois, para cada pergunta, chama a função `query` para recuperar seu número de respostas. Em seguida, essa informação é adicionada na lista de perguntas que será retornada.

Então, no teste de unidade, nós realizamos o **mock** de:

* `queryAll` para retornar sempre uma lista conhecida e fixa de respostas.
* `query` para retornar os valores 5, 10 e 15, nessa ordem. 

## Exercícios

1. No nosso teste de unidade, foram mockadas: (a) a lógica para recuperar todas as perguntas do BD; (b) a lógica para recuperar o número de respostas de uma pergunta. O que exatamente então o teste irá testar? Em outras palavras, qual lógica restou em `listar_perguntas` e que está sendo testada?