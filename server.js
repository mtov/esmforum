import express from 'express';
import { listar_perguntas, cadastrar_pergunta, get_pergunta, get_respostas } from './modelo.js';

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


app.post('/pergunta', (req, res) => {
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
  console.log('respostas' + respostas);
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

// espera e trata requisições de clientes
const port = 3000;
app.listen(port, () => {
  console.log(`ESMForum rodando na porta ${port}`)
});