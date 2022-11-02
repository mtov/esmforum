import { bd_query, bd_queryAll, bd_exec } from './bd/bd_utils.js';

function listar_perguntas() {
  
  const perguntas = bd_queryAll('select * from perguntas', []);
  perguntas.forEach(pergunta => pergunta['num_respostas'] = get_num_respostas(pergunta['id_pergunta']));
  return perguntas;
}

function cadastrar_pergunta(texto) {
  const params = [texto, 1];
  bd_exec('INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?)', params);
}

function cadastrar_resposta(id_pergunta, texto) {
  const params = [id_pergunta, texto];
  bd_exec('INSERT INTO respostas (id_pergunta, texto) VALUES(?, ?)', params);
}

function get_pergunta(id_pergunta) {
  return bd_query('select * from perguntas where id_pergunta = ?', [id_pergunta]);
}

function get_respostas(id_pergunta) {
  return bd_queryAll('select * from respostas where id_pergunta = ?', [id_pergunta]);
}

function get_num_respostas(id_pergunta) {
  const resultado = bd_query('select count(*) from respostas where id_pergunta = ?', [id_pergunta]);
  return resultado['count(*)'];
}

export { listar_perguntas, cadastrar_pergunta, cadastrar_resposta, get_pergunta, get_respostas }