import express from 'express';
import { listar_perguntas, cadastrar_pergunta, cadastrar_resposta, get_pergunta, get_respostas } from './modelo.js';

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'));
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  try {
    const perguntas = listar_perguntas();
    res.render('index', {
      perguntas: perguntas
    });
  }
  catch(erro) {
    res.status(500).json(erro.message); 
  }
});


app.post('/perguntas', (req, res) => {
  try {
    cadastrar_pergunta(req.body.pergunta);
    res.render('pergunta-sucesso');
  }
  catch(erro) {
    res.status(500).json(erro.message); 
  } 
});


app.get('/respostas', (req, res) => {
  const id_pergunta = req.query.id_pergunta;
  const pergunta = get_pergunta(id_pergunta);
  const respostas = get_respostas(id_pergunta);
  try {
    res.render('respostas', {
      pergunta: pergunta,
      respostas: respostas
    });
  }
  catch(erro) {
    res.status(500).json(erro.message); 
  } 
});


app.post('/respostas', (req, res) => {
  try {
    const id_pergunta = req.body.id_pergunta;
    const resposta = req.body.resposta;
    cadastrar_resposta(id_pergunta, resposta);
    res.render('resposta-sucesso', {
      id_pergunta: id_pergunta
    });
  }
  catch(erro) {
    res.status(500).json(erro.message); 
  } 
});


// espera e trata requisições de clientes
const port = 3000;
app.listen(port, () => {
  console.log(`ESM Forum rodando na porta ${port}`)
});