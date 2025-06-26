const receitaModel = require('../models/receita.model');

function listarReceitas(request, response) {

    const receitas = receitaModel.listarReceitas()

    response.render('listar-receitas', {
      receitas
    })
}

module.exports = {
    listarReceitas
}