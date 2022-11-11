# Diagramas de Sequência

Veja a seguir alguns diagramas de sequência para as operações principais do sistema.
Para saber mais sobre esses diagramas, recomendamos o [Capítulo 4](https://engsoftmoderna.info/cap4.html#diagrama-de-sequ%C3%AAncia) do livro.

## Listar Perguntas

```mermaid
    sequenceDiagram
        activate browser
	browser->>server: GET / 
        activate server
        server->>modelo: listar_perguntas()
        activate modelo
        modelo->>bd_utils: queryAll()
        activate bd_utils
        bd_utils-->>modelo: perguntas
        deactivate bd_utils
	loop Para cada pergunta
	  activate modelo
	  modelo->>modelo: get_num_respostas(id_pergunta)
	  modelo->>bd_utils: query()
          activate bd_utils
          bd_utils-->>modelo: num_respostas
          deactivate bd_utils
	  deactivate modelo
	end  
        modelo-->>server: perguntas, num_respostas
        deactivate modelo
	server-->>browser: index
	deactivate server
	deactivate browser
```	

## Cadastrar Pergunta

```mermaid
    sequenceDiagram
        activate browser
	browser->>server: POST /perguntas 
        activate server
        server->>modelo: cadastrar_pergunta(pergunta)
        activate modelo
        modelo->>bd_utils: exec()
        activate bd_utils
        bd_utils-->>modelo: return
        deactivate bd_utils
        modelo-->>server: return
        deactivate modelo
	server-->>browser: pergunta-sucesso
	deactivate server
	deactivate browser
```	

## Listar Respostas (de uma pergunta)

```mermaid
    sequenceDiagram
        activate browser
	browser->>server: GET /respostas
        activate server
        server->>modelo: get_pergunta(id_pergunta)
        activate modelo
        modelo->>bd_utils: query()
        activate bd_utils
        bd_utils-->>modelo: pergunta
        deactivate bd_utils
        modelo-->>server: pergunta
        deactivate modelo
	server->>modelo: get_respostas(id_pergunta)
        activate modelo
        modelo->>bd_utils: queryAll()
        activate bd_utils
        bd_utils-->>modelo: respostas
        deactivate bd_utils
        modelo-->>server: respostas
        deactivate modelo
	server-->>browser: respostas
	deactivate server
	deactivate browser
```	

## Exercício

Crie um diagrama de sequência ilustrando os métodos chamados quando se cadastra uma pergunta no ESM Forum.

Dica: os diagramas anteriores foram criados em Markdown usando a ferramenta [Mermaid](https://mermaid-js.github.io/mermaid/#/sequenceDiagram), que é suportada nativamente pelo GitHub.
