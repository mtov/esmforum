# Instalação 

Primeiro, clone o repositório:

``` git clone https://github.com/mtov/esmforum.git```

Em seguida, instale a versão mais recente do Node.js. Mais informações [aqui](https://nodejs.org/en/download).

Instale também as seguintes dependências:

```console
npm install better-sqlite3
npm install --save-dev jest
```
Você precisará instalar também o ```sqlite3```. Verifique no site da sua distribuição qual é o pacote apropriado para isso. Por exemplo, para distribuições Debian, fazemos apenas:

```console
sudo apt install sqlite3
```

# Execução 

Apenas na **primeira vez** que for executar o sistema, é importante **criar o banco de dados**. Para isso, faça:

```
cd bd
./criar_bd.sh
```
Para executar o servidor, digite no diretório raiz:

``` node server.js```

Para acessar o sistema, abra a seguinte URL no browser:

``` http://localhost:3000 ```


