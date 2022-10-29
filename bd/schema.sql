create table perguntas (
  id_pergunta       integer      unique  not null  primary key  autoincrement,
  texto             text         not null,
  id_usuario        integer      not null,
  data_criacao      integer      not null,
  data_modificacao  integer      not null
);
  
