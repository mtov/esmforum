
```mermaid
    sequenceDiagram
        activate browser
	browser->>server: POSTperguntas 
        activate server
        server->>modelo: listar_perguntas()
        activate modelo
        modelo->>bd_utils: bd_queryAll()
        activate bd_utils
        bd_utils-->>modelo: perguntas
        deactivate bd_utils
        modelo-->>server: perguntas
        deactivate modelo
	server-->>browser: index
	deactivate server
	deactivate browser
```	
