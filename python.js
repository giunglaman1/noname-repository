// Array di domande del quiz
const questions = [
    {
        question: "1) Qual è l'interprete di Python più comunemente utilizzato?",
        answers: [
            { text: "Python", correct: false },
            { text: "PyScript", correct: false },
            { text: "PyCharm", correct: false },
            { text: "Python3", correct: false },
            { text: "CPython", correct: true }
        ]
    },
    {
        question: "2) Qual è il simbolo utilizzato per i commenti in Python?",
        answers: [
            { text: "//", correct: false },
            { text: "/* */", correct: false },
            { text: "#", correct: true },
            { text: "--", correct: false },
            { text: "'", correct: false }
        ]
    },
    {
        question: "3) Qual è il comando utilizzato per stampare un messaggio a schermo in Python?",
        answers: [
            { text: "console.log()", correct: false },
            { text: "print()", correct: true },
            { text: "echo()", correct: false },
            { text: "display()", correct: false },
            { text: "output()", correct: false }
        ]
    },
    {
        question: "4) Qual è il simbolo utilizzato per l'assegnazione di valori in Python?",
        answers: [
            { text: "=", correct: true },
            { text: "==", correct: false },
            { text: "=>", correct: false },
            { text: ":", correct: false },
            { text: "->", correct: false }
        ]
    },
    {
        question: "5) Qual è il tipo di dati utilizzato per rappresentare una sequenza di caratteri in Python?",
        answers: [
            { text: "int", correct: false },
            { text: "float", correct: false },
            { text: "str", correct: true },
            { text: "list", correct: false },
            { text: "tuple", correct: false }
        ]
    },
    {
        question: "6) Qual è il simbolo utilizzato per concatenare stringhe in Python?",
        answers: [
            { text: "+", correct: true },
            { text: "&", correct: false },
            { text: "||", correct: false },
            { text: ":", correct: false },
            { text: ",", correct: false }
        ]
    },
    {
        question: "7) Qual è il costrutto utilizzato per creare una decisione condizionale in Python?",
        answers: [
            { text: "for", correct: false },
            { text: "if", correct: true },
            { text: "while", correct: false },
            { text: "else", correct: false },
            { text: "switch", correct: false }
        ]
    },
    {
        question: "7) Qual è il tipo di dati utilizzato per rappresentare una collezione di elementi unici in Python?",
        answers: [
            { text: "list", correct: false },
            { text: "set", correct: true },
            { text: "tuple", correct: false },
            { text: "dict", correct: false },
            { text: "array", correct: false }
        ]
    },
    {
        question: "8) Qual è il simbolo utilizzato per indicare un commento multiriga in Python?",
        answers: [
            { text: "/* */", correct: false },
            { text: "#", correct: false },
            { text: "''' '''", correct: true },
            { text: "//", correct: false },
            { text: "<!-- -->", correct: false }
        ]
    },
    {
        question: "9) Qual è il comando utilizzato per definire una funzione in Python?",
        answers: [
            { text: "function", correct: false },
            { text: "define", correct: false },
            { text: "func", correct: false },
            { text: "def", correct: true },
            { text: "function()", correct: false }
        ]
    },
    {
        question: "10) Qual è il simbolo utilizzato per il modulo della divisione in Python?",
        answers: [
            { text: "%", correct: true },
            { text: "/", correct: false },
            { text: "*", correct: false },
            { text: "**", correct: false },
            { text: "//", correct: false }
        ]
    },
    {
        question: "11) Qual è il comando utilizzato per creare un nuovo file in Python?",
        answers: [
            { text: "open('file.txt', 'w')", correct: true },
            { text: "create('file.txt')", correct: false },
            { text: "new('file.txt')", correct: false },
            { text: "file('file.txt')", correct: false },
            { text: "write('file.txt')", correct: false }
        ]
    },
    {
        question: "12) Qual è il metodo utilizzato per aggiungere un elemento a una lista in Python?",
        answers: [
            { text: "push()", correct: false },
            { text: "add()", correct: false },
            { text: "insert()", correct: false },
            { text: "append()", correct: true },
            { text: "extend()", correct: false }
        ]
    },
    {
        question: "13) Qual è il simbolo utilizzato per l'operatore logico 'AND' in Python?",
        answers: [
            { text: "&&", correct: false },
            { text: "||", correct: false },
            { text: "&", correct: true },
            { text: "|", correct: false },
            { text: "AND", correct: false }
        ]
    },
    {
        question: "14) Qual è il metodo utilizzato per rimuovere un elemento da una lista in Python?",
        answers: [
            { text: "remove()", correct: true },
            { text: "delete()", correct: false },
            { text: "pop()", correct: false },
            { text: "discard()", correct: false },
            { text: "clear()", correct: false }
        ]
    },
    {
        question: "15) Qual è il simbolo utilizzato per l'operatore logico 'OR' in Python?",
        answers: [
            { text: "&&", correct: false },
            { text: "||", correct: true },
            { text: "&", correct: false },
            { text: "|", correct: false },
            { text: "OR", correct: false }
        ]
    },
    {
        question: "16) Qual è il comando utilizzato per eseguire un ciclo 'for' in Python?",
        answers: [
            { text: "for i in range()", correct: true },
            { text: "foreach()", correct: false },
            { text: "for (i=0; i<10; i++)", correct: false },
            { text: "loop()", correct: false },
            { text: "repeat()", correct: false }
        ]
    },
    {
        question: "17) Qual è il metodo utilizzato per ottenere la lunghezza di una lista in Python?",
        answers: [
            { text: "count()", correct: false },
            { text: "length()", correct: false },
            { text: "size()", correct: false },
            { text: "len()", correct: true },
            { text: "getLength()", correct: false }
        ]
    },
    {
        question: "18) Qual è il comando utilizzato per eseguire un ciclo 'while' in Python?",
        answers: [
            { text: "while (condition):", correct: false },
            { text: "for i in range()", correct: false },
            { text: "do-while (condition):", correct: false },
            { text: "while condition:", correct: true },
            { text: "foreach()", correct: false }
        ]
    },
    {
        question: "19) Qual è il simbolo utilizzato per l'operatore di confronto 'uguale' in Python?",
        answers: [
            { text: "==", correct: true },
            { text: "=", correct: false },
            { text: "===", correct: false },
            { text: "!=", correct: false },
            { text: "<=", correct: false }
        ]
    },
    {
        question: "20) Qual è il metodo utilizzato per convertire una stringa in una lista in Python?",
        answers: [
            { text: "to_list()", correct: false },
            { text: "split()", correct: true },
            { text: "convert_to_list()", correct: false },
            { text: "list()", correct: false },
            { text: "string_to_list()", correct: false }
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
    }, 120000); // 120 secondi
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
