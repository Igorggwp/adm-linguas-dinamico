export default {
  name: 'perguntasIN',
  title: 'Adcionar Perguntas (Inglês)',
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