import { bd_queryAll, bd_exec } from './bd/bd_utils.js';

function listar_perguntas() {
  return bd_queryAll('select * from perguntas');
}

function cadastrar_pergunta(texto) {
  const data = new Date().toISOString();
  const params = [texto, 1, data, data];
  bd_exec('INSERT INTO perguntas (texto, id_usuario, data_criacao, data_modificacao) VALUES(?, ?, ?, ?)', params);
}

export { listar_perguntas, cadastrar_pergunta }