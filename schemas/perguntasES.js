export default {
  name: 'perguntasES',
  title: 'Adcionar Perguntas (Espanhol)',
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