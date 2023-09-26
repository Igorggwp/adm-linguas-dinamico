// Perguntas
const questions = [
    {
        question: "Qual é a forma correta do verbo 'être' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "suis", correct: false },
            { text: "est", correct: true },
            { text: "sommes", correct: false },
            { text: "être", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'avoir' na forma interrogativa?",
        answers: [
            { text: "As-tu", correct: true },
            { text: "Tu as", correct: false },
            { text: "Avez-vous", correct: false },
            { text: "Vous avez", correct: false }
        ]
    },
    {

        question: "Qual é a forma correta do verbo 'faire' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "fait", correct: false },
            { text: "faites", correct: false },
            { text: "fais", correct: true },
            { text: "faies", correct: false }
        ]
    },
    {
        question: "Escolha o pronome pessoal correto para completar a frase: '______ aime la glace.'",
        answers: [
            { text: "Je", correct: true },
            { text: "Mon", correct: false },
            { text: "Mes", correct: false },
            { text: "Me", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do verbo 'nager' na terceira pessoa do singular no presente simples?",
        answers: [
            { text: "nage", correct: true },
            { text: "naget", correct: true },
            { text: "nages", correct: false },
            { text: "nagent", correct: false }
        ]
    },
    {
        question: "Qual é o passado simples da palavra 'lire'?",
        answers: [
            { text: "lut", correct: true },
            { text: "rouge", correct: false },
            { text: "roseau", correct: false },
            { text: "roseau", correct: false }
        ]
    },
    {
        question: "Qual é o tempo verbal correto nesta frase: 'Quand je suis arrivé, ils étaient déjà partis'?",
        answers: [
            { text: "Présent simple", correct: false },
            { text: "Passé simple", correct: true },
            { text: "Passé continu", correct: false },
            { text: "Passé composé", correct: false }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: 'Si je _____ la réponse, je te le dirais.'",
        answers: [
            { text: "sais", correct: false },
            { text: "savais", correct: true },
            { text: "su", correct: false },
            { text: "saias", correct: false }
        ]
    },
    {
        question: "Qual é o tempo verbal correto nesta frase: 'Elle aura travaillé ici pendant cinq ans d'ici le mois prochain'?",
        answers: [
            { text: "Futur simple", correct: false },
            { text: "Passé composé", correct: false },
            { text: "présent simple", correct: false },
            { text: "Futur antérieur", correct: true }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: 'Si j'avais su que c'était ton anniversaire, je t'______ un cadeau.'",
        answers: [
            { text: "achèterais", correct: false },
            { text: "aurais acheté", correct: true },
            { text: "acheterai", correct: false },
            { text: "avais acheté", correct: false }
        ]
    },
    {
        question: "Qual é a forma correta do condicional perfeito em francês para a frase: 'Si j'avais su, j'aurais aidé'?",
        answers: [
            { text: "Su", correct: false },
            { text: "Su", correct: false },
            { text: "Ferait", correct: false },
            { text: "Aurais", correct: true }
        ]
    },
    {
        question: "Escolha a alternativa correta para preencher o espaço em branco: '______ tu iras, je te suivrai.'",
        answers: [
            { text: "Où que", correct: true },
            { text: "Chaque fois que", correct: false },
            { text: "Quoi que", correct: false },
            { text: "Cependant", correct: false }
        ]
    }
];
// Inicializacao 
const questionElement = document.getElementById("pergunta"); // Elemento para mostrar a pergunta
const answerButtonsElement = document.getElementById("answer-button"); // Elemento para os botoes de resposta
const nextButton = document.getElementById("next-btn"); // Botao para proxima pergunta
const backButton = document.getElementById("back-btn"); // Botao para pergunta anterior
const progressBar = document.getElementById("progress"); // Barra de progresso
const progressText = document.getElementById("progress-text"); // Texto de progresso
const finishButton = document.getElementById("finish-btn"); // Botao para finalizar
const backButtonFinish = document.getElementById("back-question"); // Botao para voltar a pergunta
const result = document.getElementById("result"); // Elemento para mostrar o resultado
const resultText = document.getElementById("result-text"); // Texto do resultado
const ResultNivel = document.getElementById("result-nivel"); // Nivel do resultado
const restartButton = document.getElementById("restart-btn"); //Botao para reiniciar
let currentQuestionIndex = 0; // Indice da pergunta atual
let score = 0; // Pontuacao

// Funcao para iniciar o quiz
function startQuiz() {
    // Reinicializa
    currentQuestionIndex = 0;
    score = 0;
    // Define o botao
    nextButton.innerHTML = "Próximo";

    showQuestion(); // Exibe a pergunta
    setNextQuestion(); // Evento para ir a proxima pergunta
    selectAnswer(); // Evento para selecionar resposta
    finishQuiz(); // Evento para finalizar quiz
}

// Exibir as perguntas
function showQuestion() {
    resetState();
    // Pegar a pergunta atual baseado no indice
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    // Exibe o numero e o texto da pergunta
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    if (quiz.classList.contains("hide")) {
        quiz.classList.remove("hide");
        quiz.classList.add("show");
    }
    
    //Adciona os botoes de respostas
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtonsElement.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    // Botao voltar, se for a primeira pergunta ele fica transparente em 50%
    if (currentQuestionIndex === 0) {
        backButton.style.filter = "brightness(50%)";
    } else {
        backButton.style.filter = "brightness(100%)";
    }
    // Atualiza a barra de progresso
    progress();
}

// Evento do click pro "Proximo"
nextButton.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex++;
    // Exibe a proxima pergunta
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else if (currentQuestionIndex > lastQuestion) {

        currentQuestionIndex = lastQuestion;
        finishQuiz(); // Finaliza se for a ultima
    }
});

// Evento do click pro "Voltar"
backButton.addEventListener("click", () => {
    currentQuestionIndex--;
    // Exibe se tiver perguntas anteriores
    if (currentQuestionIndex >= 0) {
        showQuestion();
    } else {
        currentQuestionIndex = 0;
    }
});

// Selecionar a resposta
function selectAnswer(e) {
    // Selecao de uma resposta
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";

    // Atualiza o estilo do botao de resposta
    const allButtons = document.querySelectorAll('.btn');
    allButtons.forEach(button => button.classList.remove('btn-selected'));

    selectedButton.classList.add('btn-selected');

    // Soma a pontuacao
    if (correct) {
        score++;
    }

    // Libera o botao proximo
    nextButton.style.filter = "brightness(100%)";
    nextButton.disabled = false;
}

// Reinicializa antes de exibir uma nova pergunta
function resetState() {
    nextButton.style.filter = "brightness(50%)"; // fica meio tranparente
    nextButton.disabled = true;
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Atualiza a barra de progresso do quiz
function progress() {
    const currentQuestion = currentQuestionIndex + 1;
    progressBar.style.width = (currentQuestion / questions.length) * 100 + "%";
    progressText.innerHTML = (currentQuestionIndex + 1) + "/" + questions.length;
}

// Logica para finalizar o quiz
// Alterna a visibilidade do finish e quiz entre visivel e invisivel para poder exibir os resultados
function finishQuiz() {
    if (finish.classList.contains("hide")) {
        finish.classList.remove("hide");
        finish.classList.add("show");
    } else {
        finish.classList.remove("show");
        finish.classList.add("hide");
    }
    const quiz = document.getElementById("quiz");
    if (quiz.classList.contains("show")) {
        quiz.classList.remove("show");
        quiz.classList.add("hide");
    } else {
        quiz.classList.remove("hide");
        quiz.classList.add("show");
    }
}

// Evento de clique no botao "Voltar" (tela de resultados)
backButtonFinish.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex = lastQuestion;
    showQuestion();
    finishQuiz();
}
);

// Evento de clique no botao "Finalizar"
finishButton.addEventListener("click", () => {
    const lastQuestion = questions.length - 1;
    currentQuestionIndex = lastQuestion;
    if (finish.classList.contains("show")) {
        finish.classList.remove("show");
        finish.classList.add("hide");
    }
    resultQuiz();
}
);

// Logica para exibir o resultado do quiz
function resultQuiz() {
    if (result.classList.contains("hide")) {
        result.classList.remove("hide");
        result.classList.add("show");
    }
    else {
        result.classList.remove("show");
        result.classList.add("hide");
    }
    resultText.innerHTML = "Você acertou " + score + " de " + questions.length + " questões.";
    restartButton.style.filter = "brightness(100%)";
    resultNivel();
    resultBaar();

}

// Atualiza a barra de resultados com base na pontuacao
function resultBaar() {
    const resultBar = document.getElementById("result-bar");
    
    resultBar.className = '';

    const limitedScore = Math.min(12, Math.max(0, score));

    resultBar.classList.add("result-bar" + limitedScore);
}

// Funcao para mostrar o resultado baseado no score
function resultNivel() {
    const nivelText = document.getElementById("nivel-text");
    if (score <= 2) {
        ResultNivel.innerHTML = "A1";
        nivelText.innerHTML = "<strong>A1</strong> - O nivel A1 está na sessão básica, isso pode significar o início de sua caminhada.";
    }
    else if (score <= 4) {
        ResultNivel.innerHTML = "A2";
        nivelText.innerHTML = "<strong>A2</strong> - Esta é a sessão intermediária, onde você aprofundará seu conhecimento básico em francês.";
    }
    else if (score <=6) {
        ResultNivel.innerHTML = "B1";
        nivelText.innerHTML = "<strong>B1</strong> - Ao chegar à sessão B1, você estará pronto para ampliar seu vocabulário e melhorar sua capacidade de comunicação em francês.";
    }
    else if (score <= 8) {
        ResultNivel.innerHTML = "B2";
        nivelText.innerHTML = "<strong>B2</strong> - Bem-vindo à sessão B2, onde suas habilidades em francês atingirão um nível intermediário, permitindo que você participe de conversas mais complexas e compreenda textos mais avançados.";
    }
    else if (score <= 10) {
        ResultNivel.innerHTML = "C1";
        nivelText.innerHTML = "<strong>C1</strong> - Nesta sessão avançada (C1), você aprimorará suas habilidades para um nível avançado em francês, permitindo a participação em discussões profundas e a compreensão de textos desafiadores.";
    }
    else if (score <= 12) {
        ResultNivel.innerHTML = "C2";
        nivelText.innerHTML = "<strong>C2</strong> - Parabéns, você chegou à sessão C2, o nível de proficiência mais alto em francês. Aqui, você dominará a língua e poderá comunicar-se fluentemente em uma ampla gama de contextos.";
    }
}

startQuiz();