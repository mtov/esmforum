
```mermaid
    sequenceDiagram
        activate /perguntas
        /perguntas->>Modelo: listar_perguntas()
        activate Modelo
        Modelo->>BD: bd_queryAll()
        activate BD
        BD-->>Modelo: perguntas
        deactivate BD
        Modelo-->>/perguntas: perguntas
        deactivate Modelo
	deactivate /perguntas
```	
