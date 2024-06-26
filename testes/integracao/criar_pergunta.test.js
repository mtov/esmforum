const modelo = require('../modelo.js');

describe('Teste de integração: criar pergunta', () => {
  it('deve criar uma pergunta', async () => {
    // Cria uma nova pergunta
    const pergunta = new Pergunta("Título da pergunta", "Corpo da pergunta");

    // Salva a pergunta no banco de dados
    await pergunta.save();

    // Obtém a pergunta do banco de dados
    const perguntaObtida = await Pergunta.findOne({ título: pergunta.título });

    // Verifica se a pergunta obtida é igual à pergunta criada
    expect(perguntaObtida).toEqual(pergunta);
  });
});