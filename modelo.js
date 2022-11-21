const bd = require('./bd/bd_utils.js');

// listar_perguntas retorna um array de objetos com os seguintes campos:
// { id_pergunta: int
//   texto: int
//   id_usuario: int
//   num_respostas: int 
// }
function listar_perguntas() {
  const perguntas = bd.queryAll('select * from perguntas', []);
  perguntas.forEach(pergunta => pergunta['num_respostas'] = get_num_respostas(pergunta['id_pergunta']));
  return perguntas;
}

function cadastrar_pergunta(texto) {
  const params = [texto, 1];
  bd.exec('INSERT INTO perguntas (texto, id_usuario) VALUES(?, ?)', params);
}

function cadastrar_resposta(id_pergunta, texto) {
  const params = [id_pergunta, texto];
  bd.exec('INSERT INTO respostas (id_pergunta, texto) VALUES(?, ?)', params);
}

function get_pergunta(id_pergunta) {
  return bd.query('select * from perguntas where id_pergunta = ?', [id_pergunta]);
}

function get_respostas(id_pergunta) {
  return bd.queryAll('select * from respostas where id_pergunta = ?', [id_pergunta]);
}

function get_num_respostas(id_pergunta) {
  const resultado = bd.query('select count(*) from respostas where id_pergunta = ?', [id_pergunta]);
  return resultado['count(*)'];
}

exports.listar_perguntas = listar_perguntas;
exports.cadastrar_pergunta = cadastrar_pergunta;
exports.cadastrar_resposta = cadastrar_resposta;
exports.get_pergunta = get_pergunta;
exports.get_respostas = get_respostas;
exports.get_num_respostas = get_num_respostas;