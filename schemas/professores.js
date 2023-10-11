export default {
    name: 'professor',
    type: 'document',
    title: 'Cadastro de Professor',
    fields: [
      {
        name: 'novo_professor',
        type: 'string',
        title: 'Novo Professor'
      },
      {
        name: 'disciplina',
        type: 'string',
        title: 'Disciplina'
      },
      {
        name: 'imagem_professor',
        type: 'image',
        title: 'Imagem do novo Professor'
      }
    ]
  }