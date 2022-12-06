const modelo = require('../modelo.js');

// mock de bd, inicialmente vazio
var mock_bd = {};

// define versão mockada da função bd.queryAll
// ao ser chamada, irá sempre retornar a lista de perguntas abaixo
mock_bd.queryAll = jest.fn().mockReturnValue(
  [ {
      "id_pergunta": 1,
      "texto": "Qual a capital de MG?",
      "id_usuario": 1,
    },
    {
      "id_pergunta": 2,
      "texto": "Qual a capital de RJ?",
      "id_usuario": 1,
    },
    {
      "id_pergunta": 3,
      "texto": "Qual a capital de SP?",
      "id_usuario": 1,
    }
  ]
);

// "listar_perguntas" chama "get_num_respostas", que chama "query". 
// Assim, o resultado de "query" será um objeto com um contador de 
// respostas igual a 5, 10 e 15, respectivamente para cada chamada
mock_bd.query = jest.fn()
  .mockReturnValue({ 'count(*)': 0 })       // todas chamadas
  .mockReturnValueOnce({ 'count(*)': 5 })   // exceto, 1a chamada
  .mockReturnValueOnce({ 'count(*)': 10 })  // exceto, 2a chamada
  .mockReturnValueOnce({ 'count(*)': 15 })  // exceto, 3a chamada
  
// reconfigura o modelo para usar a versão mockada do BD
modelo.reconfig_bd(mock_bd);

test('Testando listar três perguntas', () => {
  const perguntas = modelo.listar_perguntas();
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('Qual a capital de MG?');
  expect(perguntas[1].texto).toBe('Qual a capital de RJ?');
  expect(perguntas[2].texto).toBe('Qual a capital de SP?');
  expect(perguntas[0].num_respostas).toBe(5);
  expect(perguntas[1].num_respostas).toBe(10);
  expect(perguntas[2].num_respostas).toBe(15);
});
  