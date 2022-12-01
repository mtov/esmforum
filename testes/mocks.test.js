const modelo = require('../modelo.js');
const bd = require('../bd/bd_utils.js');

// versão mockada da função bd.queryAll
// ao ser chamada, irá sempre retornar a lista de perguntas abaixo
bd.queryAll = jest.fn().mockReturnValue(
  [ {
      "id_pergunta": 1,
      "texto": "1 + 1 = ?",
      "id_usuario": 1,
    },
    {
      "id_pergunta": 2,
      "texto": "2 + 2 = ?",
      "id_usuario": 1,
    },
    {
      "id_pergunta": 3,
      "texto": "3 + 3 = ?",
      "id_usuario": 1,
    }
  ]
);

// Estamos supondo que todas as perguntas não possuem respostas
// Logo, a versão mockada de get_num_respostas sempre retorna zero
bd.get_num_respostas = jest.fn().mockReturnValue(0);

test('Testando listar três perguntas', () => {
  const perguntas = modelo.listar_perguntas(); 
  expect(perguntas.length).toBe(3);
  expect(perguntas[0].texto).toBe('1 + 1 = ?');
  expect(perguntas[1].texto).toBe('2 + 2 = ?');
  expect(perguntas[2].num_respostas).toBe(0);
  expect(perguntas[1].id_pergunta).toBe(perguntas[2].id_pergunta-1);
});
  