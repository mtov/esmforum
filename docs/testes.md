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
    Browser <--> Controlador <--> Modelo
    Controlador <--> Visão
    subgraph testes de integração
    Modelo  <--> BD 
    end
```

## Executando os testes de integração

Digite na pasta raiz do projeto:

``npm test``

Para ver a cobertura dos testes, digite:

``npm test -- --coverage`` 

## Exercício

Após o rodar o comando acima, você vai perceber que a cobertura 
de comandos (Stmts) do arquivo `modelo.js` é de 78.94%.

Implemente então um ou mais casos de testes, sempre no 
arquivo [modelo.test.js](../testes/modelo.test.js), de forma que 
essa cobertura atinja 100%.
