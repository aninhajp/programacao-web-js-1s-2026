//carrega framework express
const express = require('express');

//cria um app usando a funcao express()
const app     = express();

//define porta de aplicação
const PORT    = 8080;

app.get('/', function (req, rest){
    rest.send('<h1> Olá, mundo!</h1> <p>Estou na Web...');
});


app.get('/bem-vindo', function (req, rest){
    rest.send('<h1> Bem vindo ao desenvolvimento Web!</h1>');
});

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});