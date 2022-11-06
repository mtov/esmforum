
```mermaid
    sequenceDiagram
        activate Controllers
        Controllers->>Models: comment.listAllComments()
        activate Models
        Models->>DB: dbQuery()
        activate DB
        DB-->>Models: Comment[ ]
        deactivate DB
        Models-->>Controllers: Comment[ ]
        deactivate Models
	deactivate Controllers

```	
