# Testes de Integração

O ESM Forum possui alguns testes de integração, implementados 
usando o Jest. Para mais informações sobre esse tipo de teste 
consulte o 
[Capítulo 8](https://engsoftmoderna.info/cap8.html#testes-de-integra%C3%A7%C3%A3o)
do livro.

Os testes de integração estão implementados no arquivo
[modelo.test.js](../testes/modelo.test.js).

Eles verificam a camada de modelo e o acesso da mesma ao banco de 
dados, conforme ilustrado a seguir:

```mermaid
flowchart LR
    BD[(BD)]
    Frontend  <--->|json| Controlador
    subgraph backend
       Controlador <--> Modelo
       subgraph testes de integração
          Modelo  <--> BD 
       end
    end
```

## Executando os testes de integração

Primeiro, certifique-se de que instalou o backend do sistema, conforme explicado [aqui](./instalacao.md). 

Basta instalar o backend, isto é, para fins exclusivos deste teste, você não precisa 
rodar o servidor do lado backend. O motivo é que o teste vai testar apenas as funções
da camada de Modelo e o acesso delas ao banco de dados (veja figura acima)

Depois, digite na pasta raiz do projeto:

``npm test``

Para ver a cobertura dos testes, digite:

``npm test -- --coverage`` 

Para ver o relatório de cobertura, abra o arquivo:

`coverage/lcov-report/index.html`

Também é possível ver a cobertura no próprio código exibido pela IDE. Para isso, basta adicionar alguma extensão compatível. Um exemplo, para o VSCode, é a [Coverage Gutters](https://marketplace.visualstudio.com/items?itemName=ryanluker.vscode-coverage-gutters), que marca no próprio arquivo os trechos de código cobertos e os não cobertos pelos testes.

## Exercício

Após o rodar o comando acima, você vai perceber que a cobertura 
de comandos (Stmts) do arquivo `modelo.js` é de 78.26%.

Implemente então um ou mais casos de testes, sempre no 
arquivo [modelo.test.js](../testes/modelo.test.js), de forma que 
essa cobertura atinja 100%.
