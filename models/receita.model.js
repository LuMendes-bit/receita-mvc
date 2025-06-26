function listarReceitas() {
    const receitas = [
       {
            id:1,
            nome:"Omelete Simples",
            ingredientes:"3 ovos,Sal,Pimenta-do-reino,1 colher de sopa de manteiga,queijo,presunto",
            modo_preparo:"Bata 3 ovos, tempere com sal e pimenta, e cozinhe na manteiga até ficar firme. Pode acrescentar queijo ou presunto se quiser."
       },
       {
            id:2,
            nome:"Salada de Quinoa com Legumes",
            ingredientes:"1 xícara de quinoa,2 xícaras de água,1 tomate picado,1 pepino picado,1 cenoura ralada,Suco de 1 limão,Azeite a gosto,Sal e pimenta a gosto,Salsinha ou coentro picado",
            modo_preparo:"Cozinhe a quinoa, misture com tomate, pepino, cenoura, tempere com limão, azeite, sal, pimenta e ervas. Sirva gelada ou em temperatura ambiente."
       },
       {
            id:3,
            nome:"Bolo de Chocolate Simples",
            ingredientes:"2 xícaras de açúcar,1 e 3/4 xícaras de farinha de trigo,3/4 de xícara de cacau em pó,1 colher de sopa de fermento em pó,1 colher de chá de bicarbonato de sódio,1/2 colher de chá de sal,2 ovos,1 xícara de leite,1/2 xícara de óleo,2 colheres de chá de essência de baunilha,1 xícara de água fervente",
            modo_preparo:"Misture ingredientes secos (açúcar, farinha, cacau, fermento, sal), adicione ovos, leite, óleo e essência de baunilha, acrescente água fervente, asse por 35-40 minutos. Depois de assado, deixe esfriar e aproveite!"
       }
    ] 

    return receitas;
}

module.exports = {
    listarReceitas
}