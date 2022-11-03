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


