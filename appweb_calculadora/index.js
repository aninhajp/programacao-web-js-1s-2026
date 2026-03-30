//carrega framework express
const express = require('express');

const calculadora = require('./calculadora');

//cria um app usando a funcao express()
const app     = express();

//define porta de aplicação
const PORT    = 8080;


//URL FIXA 
app.get('/', function (req, rest){
    rest.send('<h1> Olá, mundo!</h1> <p>Estou na Web...');
});


app.get('/calculadora/somar/:a/:b', (req, rest)=>{
    let a = req.params.a;
    let b = req.params.b;
    let resultado = calculadora.somar(a, b);
    rest.send(`${a} + ${b} = ${resultado} `);
});

///inicializador a aplicacao na porta definida

app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});