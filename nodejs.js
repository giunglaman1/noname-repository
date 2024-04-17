// Array di domande del quiz
const questions = [
    {
        question: "1) Qual è il modulo di Node.js utilizzato per creare un server HTTP?",
        answers: [
            { text: "http", correct: true },
            { text: "fs", correct: false },
            { text: "path", correct: false },
            { text: "url", correct: false },
            { text: "querystring", correct: false }
        ]
    },
    {
        question: "2) Qual è il comando utilizzato per installare un modulo Node.js tramite npm?",
        answers: [
            { text: "node install <modulo>", correct: false },
            { text: "npm add <modulo>", correct: false },
            { text: "npm install <modulo>", correct: true },
            { text: "node add <modulo>", correct: false },
            { text: "install <modulo>", correct: false }
        ]
    },
    {
        question: "3) Qual è il metodo utilizzato per importare un modulo in Node.js?",
        answers: [
            { text: "import <modulo>", correct: false },
            { text: "require(<modulo>)", correct: true },
            { text: "include <modulo>", correct: false },
            { text: "load <modulo>", correct: false },
            { text: "use <modulo>", correct: false }
        ]
    },
    {
        question: "4) Come si legge il contenuto di un file in Node.js?",
        answers: [
            { text: "fs.readfile", correct: false },
            { text: "fs.open", correct: false },
            { text: "fs.read", correct: false },
            { text: "fs.readFile", correct: true },
            { text: "fs.writefile", correct: false }
        ]
    },
    {
        question: "5) Qual è il metodo utilizzato per avviare un server HTTP in Node.js?",
        answers: [
            { text: "http.start", correct: false },
            { text: "http.listen", correct: true },
            { text: "http.run", correct: false },
            { text: "http.server", correct: false },
            { text: "http.connect", correct: false }
        ]
    },
    {
        question: "6) Qual è il modulo utilizzato per gestire i percorsi dei file in Node.js?",
        answers: [
            { text: "path", correct: true },
            { text: "fs", correct: false },
            { text: "url", correct: false },
            { text: "http", correct: false },
            { text: "querystring", correct: false }
        ]
    },
    {
        question: "7) Come si verifica la presenza di un modulo specifico in Node.js?",
        answers: [
            { text: "npm search <modulo>", correct: false },
            { text: "npm check <modulo>", correct: false },
            { text: "npm install <modulo>", correct: false },
            { text: "npm info <modulo>", correct: false },
            { text: "npm list <modulo>", correct: true }
        ]
    },
    {
        question: "8) Qual è il metodo utilizzato per scrivere un file in Node.js?",
        answers: [
            { text: "fs.write", correct: false },
            { text: "fs.create", correct: false },
            { text: "fs.writeFile", correct: true },
            { text: "fs.save", correct: false },
            { text: "fs.modify", correct: false }
        ]
    },
    {
        question: "9) Qual è il metodo utilizzato per eseguire una richiesta HTTP GET in Node.js?",
        answers: [
            { text: "http.get", correct: true },
            { text: "http.request", correct: false },
            { text: "http.send", correct: false },
            { text: "http.fetch", correct: false },
            { text: "http.query", correct: false }
        ]
    },
    {
        question: "10) Qual è il comando utilizzato per avviare un'applicazione Node.js?",
        answers: [
            { text: "node run", correct: false },
            { text: "node start", correct: false },
            { text: "node app", correct: true },
            { text: "node launch", correct: false },
            { text: "node execute", correct: false }
        ]
    },
    { 
        question: "11) Qual è il metodo utilizzato per gestire le eccezioni in Node.js?",
        answers: [
            { text: "try/catch", correct: true },
            { text: "catch/throw", correct: false },
            { text: "error/throw", correct: false },
            { text: "if/else", correct: false },
            { text: "exception/throw", correct: false }
        ]
    },
    {
        question: "12) Qual è il modulo utilizzato per gestire i moduli in Node.js?",
        answers: [
            { text: "npm", correct: false },
            { text: "fs", correct: false },
            { text: "path", correct: false },
            { text: "module", correct: true },
            { text: "import", correct: false }
        ]
    },
    {
        question: "13) Come si esegue un'istruzione asincrona in Node.js?",
        answers: [
            { text: "await", correct: false },
            { text: "async", correct: false },
            { text: "sync", correct: false },
            { text: "callback", correct: true },
            { text: "promise", correct: false }
        ]
    },
    {
        question: "14) Qual è il modulo utilizzato per gestire le richieste HTTP in Node.js?",
        answers: [
            { text: "http", correct: true },
            { text: "fs", correct: false },
            { text: "url", correct: false },
            { text: "request", correct: false },
            { text: "server", correct: false }
        ]
    },
    {
        question: "15) Qual è il metodo utilizzato per eseguire un file JavaScript in Node.js da riga di comando?",
        answers: [
            { text: "node execute <file>", correct: false },
            { text: "node start <file>", correct: false },
            { text: "node run <file>", correct: false },
            { text: "node <file>", correct: true },
            { text: "node runscript <file>", correct: false }
        ]
    },
    {
        question: "16) Qual è il modulo utilizzato per gestire le richieste e le risposte HTTP in Node.js?",
        answers: [
            { text: "http", correct: true },
            { text: "fs", correct: false },
            { text: "url", correct: false },
            { text: "request", correct: false },
            { text: "server", correct: false }
        ]
    },
    {
        question: "17) Qual è il metodo utilizzato per eseguire una funzione periodicamente in Node.js?",
        answers: [
            { text: "setInterval", correct: true },
            { text: "setTimeout", correct: false },
            { text: "runEvery", correct: false },
            { text: "setInterval", correct: false },
            { text: "loopEvery", correct: false }
        ]
    },
    {
        question: "18) Qual è il modulo utilizzato per gestire le richieste dei file in Node.js?",
        answers: [
            { text: "fs", correct: true },
            { text: "http", correct: false },
            { text: "path", correct: false },
            { text: "file", correct: false },
            { text: "request", correct: false }
        ]
    },
    {
        question: "19) Come si imposta una variabile d'ambiente in Node.js?",
        answers: [
            { text: "env var_name=value", correct: false },
            { text: "export var_name=value", correct: true },
            { text: "set var_name=value", correct: false },
            { text: "var_name=value", correct: false },
            { text: "config var_name=value", correct: false }
        ]
    },
    {
        question: "20) Qual è il metodo utilizzato per leggere i parametri della query in Node.js?",
        answers: [
            { text: "request.query", correct: false },
            { text: "request.params", correct: false },
            { text: "request.queryParams", correct: false },
            { text: "request.queryString", correct: false },
            { text: "request.url", correct: true }
        ]
    },
    {
        question: "21) Qual è il modulo utilizzato per gestire le richieste dei file in Node.js?",
        answers: [
            { text: "fs", correct: true },
            { text: "http", correct: false },
            { text: "path", correct: false },
            { text: "file", correct: false },
            { text: "request", correct: false }
        ]
    }, 

];

// Variabili globali per tenere traccia dell'indice della domanda corrente e delle risposte corrette
let currentQuestionIndex = 0;
let correctAnswers = 0;
let timer; // Variabile per il timer del quiz

// Funzione per avviare il quiz
function startQuiz() {
    // Nasconde il tasto "Avvia il quiz"
    document.getElementById("start-btn").style.display = "none";

    // Visualizza la prima domanda
    showQuestion();

    // Imposta il timer per la domanda corrente
    timer = setTimeout(function() {
        showNextQuestion(true); // Passa true per indicare che il timer è scaduto
    }, 70000); // 70 secondi
}

// Funzione per visualizzare la domanda corrente
function showQuestion() {
    const question = questions[currentQuestionIndex];
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        <ul>
            ${question.answers.map((answer, index) => `
                <li>
                    <button id="answer-btn-${index}" onclick="checkAnswer(${index})">${answer.text}</button>
                </li>
            `).join('')}
        </ul>
    `;

    // Abilita tutti i pulsanti delle risposte
    enableAnswerButtons();
}

// Funzione per controllare la risposta data
function checkAnswer(answerIndex) {
    clearTimeout(timer); // Interrompe il timer quando viene data una risposta
    disableAnswerButtons(); // Disabilita tutti i pulsanti delle risposte

    const selectedAnswer = questions[currentQuestionIndex].answers[answerIndex];
    if (selectedAnswer.correct) {
        document.getElementById(`answer-btn-${answerIndex}`).style.backgroundColor = "lightblue"; // Risposta corretta (colore azzurro)
        correctAnswers++;
    } else {
        document.getElementById(`answer-btn-${answerIndex}`).style.backgroundColor = "lightgray"; // Risposta sbagliata (colore grigio)
    }

    // Passa alla prossima domanda dopo un breve ritardo
    setTimeout(showNextQuestion, 1000); // 2 secondi
}

// Funzione per passare alla prossima domanda
function showNextQuestion(timerExpired = false) {
    currentQuestionIndex++;

    // Controlla se ci sono ancora domande
    if (currentQuestionIndex < questions.length) {
        // Visualizza la prossima domanda
        showQuestion();
        // Avvia il timer per la prossima domanda
        timer = setTimeout(function() {
            showNextQuestion(true); // Passa true per indicare che il timer è scaduto
        }, 120000); // 120 secondi
    } else {
        // Calcola la percentuale del punteggio
        const percentage = (correctAnswers / questions.length) * 100;

        // Visualizza la frase appropriata in base alla percentuale del punteggio
        let message = "";
        if (percentage <= 65) {
            message = "Non è ancora arrivato il tuo tempo, giovane eroe.";
        } else if (percentage <= 75) {
            message = "Sei sulla strada giusta, giovane avventuriero!";
        } else if (percentage <= 90) {
            message = "Sulla tua maestria scriveranno leggende!";
        } else {
            message = "La verità? Tu non puoi gestire la verità!";
        }

        // Nascondi il punteggio finale se il punteggio è superiore al 90%
        const scoreContainer = document.getElementById("score-container");
        if (percentage <= 90) {
            scoreContainer.innerHTML = `<h2>Punteggio finale: ${correctAnswers} su ${questions.length}</h2>`;
        } else {
            scoreContainer.innerHTML = "";
        }

        // Visualizza il messaggio
        scoreContainer.innerHTML += `<p>${message}</p>`;

        // Mostra il tasto "Riprova quiz"
        const retryButton = document.getElementById("retry-btn");
        retryButton.style.display = "block";

        // Scrolla in cima alla pagina
        window.scrollTo(0, 0);

        // Esci dalla funzione in quanto il quiz è terminato
        return;
    }

    // Disabilita tutti i pulsanti delle risposte se il timer è scaduto
    if (timerExpired) {
        disableAnswerButtons();
        // Aggiungi un messaggio quando il tempo è scaduto
        const questionContainer = document.getElementById("question-container");
        questionContainer.innerHTML += `<p>Il tempo è scaduto, RIPROVA.</p>`;
    }
    // Mostra il tasto "Riprova quiz"
    const retryButton = document.getElementById("retry-btn");
    retryButton.style.display = "block";
}

// Funzione per disabilitare tutti i pulsanti delle risposte
function disableAnswerButtons() {
    const answerButtons = document.querySelectorAll("#question-container button");
    answerButtons.forEach(button => button.disabled = true);
}

// Funzione per abilitare tutti i pulsanti delle risposte
function enableAnswerButtons() {
    const answerButtons = document.querySelectorAll("#question-container button");
    answerButtons.forEach(button => button.disabled = false);
}

// Funzione per riprovare il quiz
function retryQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    // Nasconde il tasto "Riprova quiz"
    document.getElementById("retry-btn").style.display = "none";
    startQuiz();
}
// Funzione per riprovare il quiz
function retryQuiz() {
    currentQuestionIndex = 0;
    correctAnswers = 0;
    // Nasconde il tasto "Riprova quiz"
    document.getElementById("retry-btn").style.display = "none";
    // Nasconde il testo del punteggio finale
    document.getElementById("score-container").innerHTML = "";
    startQuiz();
}

// Funzione per passare alla pagina associata al linguaggio selezionato
function openPage(language) {
    let pageUrl = '';
    switch (language) {
        case 'javascript':
            pageUrl = 'javascript.html';
            break;
        case 'css':
            pageUrl = 'css.html';
            break;
        case 'html':
            pageUrl = 'html.html';
            break;
        case 'react':
            pageUrl = 'react.html';
            break;
        case 'nodejs':
            pageUrl = 'nodejs.html';
            break;
        case 'python':
            pageUrl = 'python.html';
            break;
        case 'angular':
            pageUrl = 'angular.html';
            break;
        case 'altro':
            pageUrl = 'altro.html';
            break;
        default:
            pageUrl = 'index.html'; // Pagina predefinita in caso di errore
    }
    document.getElementById('content').innerHTML = `<iframe src="${pageUrl}" style="width: 100%; height: 500px; border: none;"></iframe>`;
}
