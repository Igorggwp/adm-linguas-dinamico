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
      title: 'Respostas ( Recomendado 4 alternativas )',
      type: 'array',
      of: [{ type: 'resposta' }],
    },
  ],
};