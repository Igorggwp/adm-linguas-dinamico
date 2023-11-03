export default {
    name: 'avaliacoes',
    type: 'document',
    title: 'Cadastro de Avaliações',
    fields: [
      {
        name: 'nota',
        type: 'string',
        title: 'Nova Nota'
      },
      {
        name: 'nome',
        type: 'string',
        title: 'Novo Nome'
      },
      {
        name: 'usuario',
        type: 'string',
        title: '@'
      },
      {
        name: 'opiniao',
        type: 'string',
        title: 'Opiniao'
      },
      {
        name: 'imagem_avalicao',
        type: 'image',
        title: 'Imagem do Avaliador'
      }
    ]
  }