const receitaModel = require('../models/receita.model');

function listarReceitas(request, response) {

    const receitas = receitaModel.listarReceitas()

     //response.json(livros)

    response.render('listar-receitas', {
      receitas
    })
}

module.exports = {
    listarReceitas
}