# ESM Forum

O **ESM Forum** é um sistema de demonstração do livro [Engenharia de Software Moderna](https://engsoftmoderna.info). 
Ele é um fórum simples de perguntas e respostas. 

O objetivo do sistema é permitir que os alunos tenham um primeiro contato prático com os conceitos estudados no livro. Ou seja:

* Trata-se de um sistema com objetivo totalmente didático e, por isso, não temos a intenção de colocá-lo em produção. 

* Também não temos a intenção de implementar um sistema completo, com todas as funcionalidades de um sistema real. 

* A interface do sistema é também muito simples e minimalista.


## Linguagens e Bibliotecas

O ESM Forum é implementado em JavaScript, usando:

* No frontend:
  * Bootstrap, um framework para construção de interfaces Web usando HTML e CSS.

* No backend:
  * Node.js, um sistema que permite a execução de programas JavaScript fora de browsers.
  * Express, uma biblioteca para construção de aplicações Web em Node.js.
  * SQLite, um banco de dados relacional simples e implementado na forma de uma biblioteca.
  
## Para instalar o sistema

Primeiro, clone o repositório:

``` git clone https://github.com/mtov/esmforum.git```

Em seguida, instale a versão mais recente do Node.js. Mais informações [aqui](https://nodejs.org/en/download).

Instale também as seguintes dependências:

```
sudo apt update
sudo apt install sqlite3 
npm install better-sqlite3
```

## Para executar o sistema

Apenas na **primeira vez** que for executar o sistema, é importante **criar o banco de dados**. Para isso, faça:

```
cd bd
./criar_bd.sh
```
Para executar o servidor, digite:

``` node server.js```

Para acessar o sistema, abre a seguinte URL no browser:

``` http://localhost:3000 ```


