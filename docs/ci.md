## Integração Contínua

No repositório do ESM Forum, ativamos o sistema de integração contínua do
GitHub, conhecido pelo nome de GitHub Actions.

Com isso, após qualquer `push` ou qualquer submissão 
de um novo Pull Request, os [testes de integração](testes.md) serão automaticamente executados em servidores do próprio GitHub.

Para conferir se a execução dos testes foi bem sucedida, consulte o menu 
[Actions](https://github.com/mtov/esmforum/actions) da barra principal do GitHub.


## Arquivo de Configuração do GitHub Actions

Para ver o arquivo de configuração do GitHub Actions, clique 
[aqui](../.github/workflows/node.js.yml). 

Conforme pode ver no arquivo, ele possui duas seções principais.

 Primeiro, na seção *on*, definimos que as tarefas (*jobs*) da integração contínua serão executadas quando chegar um push ou um PR no repositório. 
 
 Já na segunda seção, chamada *jobs*, fazemos o seguinte:

* definimos que os jobs serão executados pelo GitHub usando-se uma máquina virtual com o sistema operacional Ubuntu.

* definimos que eles serão executados para três versões diferentes do Node.js (14, 16 e 18). Ou seja, o objetivo é garantir que nosso sistema funciona em qualquer uma dessas versões.

* e, por fim, definimos que para executar os jobs deve-se fazer um checkout do repositório e então rodar os seguintes comandos: `npm ci` (que é similar a um `npm install`), 
`npm build` (para executar algum script extra de instalação, caso exista) e, finalmente, `npm test` (para rodar os testes).

## Exercícios

1. Faça uma pequena modificação no seu repositório local. Por exemplo, faça uma pequena atualização nos arquivos de documentação do ESM Forum, que estão na pasta [docs](.). Em seguida, execute os comandos `git add`, `git commit` e `git push`. 

    Então, na página do repositório no GitHub, clique na opção Actions do menu principal. Você vai poder acessar um log com informações da execução do sistema de integração contínua. E verá que o seu `push` disparou a execução de um job para rodar os testes do ESM Forum. Um ícone verde indicará uma execução bem sucedida de tais testes.

2. Agora, vamos introduzir um bug no código do ESM Forum. Por exemplo, no arquivo [modelo.js](../modelo.js), função `cadastrar_pergunta`, comente a segunda linha:

    ```javascript
    function cadastrar_pergunta(texto) {
     const params = [texto, 1];
      // bd.exec('INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?)', params);
    }
    ```

    Dê agora um `git add`, `git commit` e `git push`, para enviar para o repositório o código com esse bug.

    Então, na página do repositório no GitHub, em Actions, inspecione o resultado da execução da integração contínua. Você vai perceber que ela não foi bem sucedida, conforme indicado por um ícone vermelho.

    Por último, para não deixar o repositório com um bug, volte o código para a versão de antes e faça um novo `push`.