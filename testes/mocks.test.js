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

// Define função mockada de bd.queryAll.
// Estamos supondo que todas as perguntas possuem 5 respostas.
// Logo, quando "listar_perguntas" realizar uma query para obter
// o número de respostas de qualquer pergunta, o resultado será
// um objeto com um contador de respostas igual a 5
mock_bd.query = jest.fn().mockReturnValue({ 'count(*)': 5 });

// reconfigura o modelo para usar a versão mockada do BD
modelo.reconfig_bd(mock_bd);

test('Testando listar três perguntas', () => {
  const perguntas = modelo.listar_perguntas();
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('Qual a capital de MG?');
  expect(perguntas[1].texto).toBe('Qual a capital de RJ?');
  expect(perguntas[2].texto).toBe('Qual a capital de SP?');
  expect(perguntas[0].num_respostas).toBe(5);
  expect(perguntas[1].num_respostas).toBe(5);
  expect(perguntas[2].num_respostas).toBe(5);
});
  