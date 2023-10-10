export default {
    name: 'eventos',
    type: 'document',
    title: 'Cadastro de Eventos',
    fields: [
      {
        name: 'evento',
        type: 'string',
        title: 'Novo Evento'
      },
      {
        name: 'imagem_evento',
        type: 'image',
        title: 'Imagem do Evento'
      },
      {
        name: 'link_evento',
        type: 'url',
        title: 'URL'
      }
    ]
  }
  