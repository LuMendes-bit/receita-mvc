const express = require('express');

const receitaController = require('./controllers/receita.controller');

const app = express();

app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/receitas', receitaController.listarReceitas)

app.listen(3000, function() {
    console.log("Servidor rodando com sucesso")
})