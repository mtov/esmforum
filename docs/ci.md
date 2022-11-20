## Integração Contínua

No repositório do ESM Forum, ativamos o sistema de integração contínua do
GitHub, conhecido pelo nome de GitHub Actions.

Com isso, após qualquer `push` ou qualquer submissão 
de um novo Pull Request, os [testes de integração](testes.md)  
serão automaticamente executados em servidores do próprio GitHub.

Para ver se a execução dos testes foi bem sucedida, consulte  
meu Actions da barra principal do GitHub ou clique
[aqui](https://github.com/mtov/esmforum/actions).

Para ver o arquivo de configuração do GitHub Actions, clique 
[aqui](../.github/workflows/node.js.yml).

## Exercício

1. Faça uma pequena modificação no seu repositório local. Por exemplo, faça uma pequena atualização nos arquivos de documentação do ESM Forum, que estão na pasta [docs](.). Em seguida, execute os comandos `git add`, `git commit` e `git push`. 

    Então, na página do repositório no GitHub, clique na opção Actions do menu principal. Você vai poder acessar um log com informações da execução do sistema de integração contínua.

2. Agora, vamos introduzir um bug no código do ESM Forum. Por exemplo, vá no arquivo [modelo.js](../modelo.js) e na função `cadastrar_pergunta` comente a segunda linha, a qual faz o `insert` no BD.

    ```javascript
    function cadastrar_pergunta(texto) {
     const params = [texto, 1];
      // bd.exec('INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?)', params);
    }
    ```

    Dê agora um `git add`, `git commit` e `git push`, para enviar para o repositório um código com bug.

    Então, na página do repositório no GitHub, em Actions, inspecione o resultado da execução da integração contínua. Você vai perceber que a integração não foi bem sucedida, conforme indicado por um ícone vermelho.

    Por último, para não deixar o repositório com um bug, volte o código para a versão de antes e faça um novo `push`.