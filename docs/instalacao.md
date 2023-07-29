## Instalação do Backend

Primeiro, clone o repositório:

``` git clone https://github.com/mtov/esmforum.git```

Em seguida, instale a versão mais recente do Node.js. Mais informações [aqui](https://nodejs.org/en/download).

Instale também as dependências do projeto:

```console
npm install 
```
Por fim, você precisará instalar também o ```sqlite3```. Verifique no site da sua distribuição qual é o pacote apropriado para isso. Por exemplo, para distribuições Debian, fazemos apenas:

```console
sudo apt install sqlite3
```

## Execução do Backend

Para executar o servidor, digite no diretório raiz:

``` node server.js```

Se em algum momento você quiser "zerar" o banco de dados do sistema, você pode usar:

```
cd bd
./criar_bd.sh
```

## Instalação e Execução do Frontend

Veja informações neste [repositório](https://github.com/mtov/esmforum-react).
