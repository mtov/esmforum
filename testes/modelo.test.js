const modelo = require('../modelo.js');
const bd = require('../bd/bd_utils.js');

beforeEach(() => {
  // banco de dados de teste
  bd.reconfig('./bd/esmforum-teste.db');
  // limpa dados de todas as tabelas
  bd.exec('delete from perguntas', []);
  bd.exec('delete from respostas', []);
});

test('Testando banco de dados vazio', () => {
  expect(modelo.listar_perguntas().length).toBe(0);
});

test('Testando uma lista com três perguntas', () => {
  modelo.cadastrar_pergunta('1 + 1 = ?');
  modelo.cadastrar_pergunta('2 + 2 = ?');
  modelo.cadastrar_pergunta('3 + 3 = ?');
  const perguntas = modelo.listar_perguntas(); 
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toEqual('1 + 1 = ?');
  expect(perguntas[1].texto).toEqual('2 + 2 = ?');
  expect(perguntas[2].num_respostas).toBe(0);
});
