
```mermaid
    sequenceDiagram
        activate /perguntas
        /perguntas->>Modelo: listar_perguntas()
        activate Modelo
        Modelo->>bd_utils: bd_queryAll()
        activate bd_utils
        bd_utils-->>Modelo: perguntas
        deactivate bd_utils
        Modelo-->>/perguntas: perguntas
        deactivate Modelo
	deactivate /perguntas
```	
