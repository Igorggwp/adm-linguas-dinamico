export default {
  name: 'perguntasFR',
  title: 'Adcionar Perguntas (Francês)',
  type: 'document',
  fields: [
    {
      name: 'pergunta',
      title: 'Pergunta',
      type: 'string',
    },
    {
      name: 'respostas',
      title: 'Respostas',
      type: 'array',
      of: [{ type: 'resposta' }],
    },
  ],
};