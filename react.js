// Array di domande del quiz
const questions = [
    {
        question: "1) Qual è la libreria JavaScript utilizzata per lo sviluppo di interfacce utente in React?",
        answers: [
            { text: "React.js", correct: false },
            { text: "Vue.js", correct: false },
            { text: "Angular.js", correct: false },
            { text: "React", correct: true },
            { text: "jQuery", correct: false }
        ]
    },
    {
        question: "2) Qual è il comando utilizzato per creare un nuovo progetto React?",
        answers: [
            { text: "create-react-app", correct: true },
            { text: "new-react-app", correct: false },
            { text: "react-create", correct: false },
            { text: "generate-react", correct: false },
            { text: "init-react-app", correct: false }
        ]
    },
    {
        question: "3) Qual è il componente radice di una applicazione React?",
        answers: [
            { text: "index.js", correct: false },
            { text: "root.js", correct: false },
            { text: "app.js", correct: false },
            { text: "index.html", correct: false },
            { text: "App", correct: true }
        ]
    },
    {
        question: "4) Come si crea un componente funzionale in React?",
        answers: [
            { text: "class MyComponent extends Component", correct: false },
            { text: "function MyComponent()", correct: true },
            { text: "class MyComponent", correct: false },
            { text: "create Component MyComponent", correct: false },
            { text: "component MyComponent", correct: false }
        ]
    },
    {
        question: "5) Qual è il metodo utilizzato per passare dati da un componente padre a un componente figlio in React?",
        answers: [
            { text: "data", correct: false },
            { text: "sendData", correct: false },
            { text: "props", correct: true },
            { text: "state", correct: false },
            { text: "passData", correct: false }
        ]
    },
    {
        question: "5) Qual è il ciclo di vita del componente di React in cui è possibile eseguire operazioni di inizializzazione?",
        answers: [
            { text: "componentWillUnmount", correct: false },
            { text: "componentDidMount", correct: true },
            { text: "componentDidUpdate", correct: false },
            { text: "componentWillUpdate", correct: false },
            { text: "componentWillMount", correct: false }
        ]
    },
    {
        question: "6) Qual è il metodo utilizzato per aggiornare lo stato di un componente in React?",
        answers: [
            { text: "setState", correct: true },
            { text: "updateState", correct: false },
            { text: "changeState", correct: false },
            { text: "modifyState", correct: false },
            { text: "stateUpdate", correct: false }
        ]
    },
    {
        question: "7) Qual è il concetto fondamentale di React utilizzato per riutilizzare il codice?",
        answers: [
            { text: "componente", correct: true },
            { text: "funzione", correct: false },
            { text: "variabile", correct: false },
            { text: "proprietà", correct: false },
            { text: "stato", correct: false }
        ]
    },
    {
        question: "8) Qual è la sintassi utilizzata per creare un elemento JSX in React?",
        answers: [
            { text: "<MyComponent />", correct: true },
            { text: "<MyComponent></MyComponent>", correct: false },
            { text: "createElement(MyComponent)", correct: false },
            { text: "{MyComponent}", correct: false },
            { text: "create(MyComponent)", correct: false }
        ]
    },
    {
        question: "9) Qual è il metodo utilizzato per gestire gli eventi in React?",
        answers: [
            { text: "onEvent", correct: false },
            { text: "handleEvent", correct: false },
            { text: "eventHandler", correct: false },
            { text: "onClick", correct: true },
            { text: "triggerEvent", correct: false }
        ]
    },
    {
        question: "10) Qual è il modulo utilizzato per gestire le rotte in un'applicazione React?",
        answers: [
            { text: "react-router", correct: false },
            { text: "router", correct: false },
            { text: "react-route", correct: false },
            { text: "react-router-dom", correct: true },
            { text: "route", correct: false }
        ]
    },
    {
        question: "11) Qual è il metodo utilizzato per gestire lo stato in un componente di React?",
        answers: [
            { text: "this.state", correct: false },
            { text: "setState()", correct: true },
            { text: "this.setState()", correct: false },
            { text: "state()", correct: false },
            { text: "updateState()", correct: false }
        ]
    },
    {
        question: "12) Qual è il concetto utilizzato per passare dati da un componente padre a un componente figlio in React?",
        answers: [
            { text: "state", correct: false },
            { text: "props", correct: true },
            { text: "context", correct: false },
            { text: "passData", correct: false },
            { text: "sendData", correct: false }
        ]
    },
    {
        question: "13) Qual è il ciclo di vita di un componente di React in cui è possibile fare richieste HTTP o chiamate API?",
        answers: [
            { text: "componentWillUnmount", correct: false },
            { text: "componentDidMount", correct: true },
            { text: "componentWillUpdate", correct: false },
            { text: "componentWillMount", correct: false },
            { text: "componentDidUpdate", correct: false }
        ]
    },
    {
        question: "14) Come si rende un componente in React?",
        answers: [
            { text: "render()", correct: true },
            { text: "this.render()", correct: false },
            { text: "renderComponent()", correct: false },
            { text: "component()", correct: false },
            { text: "show()", correct: false }
        ]
    },
    {
        question: "15) Qual è il metodo utilizzato per aggiungere classi CSS condizionali in React?",
        answers: [
            { text: "addClass()", correct: false },
            { text: "setClass()", correct: false },
            { text: "toggleClass()", correct: false },
            { text: "className", correct: true },
            { text: "addClassName()", correct: false }
        ]
    },
    {
        question: "16) Qual è il concetto fondamentale di React utilizzato per il rendering condizionale di elementi?",
        answers: [
            { text: "if-else statement", correct: false },
            { text: "conditional rendering", correct: true },
            { text: "switch-case statement", correct: false },
            { text: "ternary operator", correct: false },
            { text: "conditional operator", correct: false }
        ]
    },
    {
        question: "17) Qual è il modulo utilizzato per gestire lo stato globale in un'applicazione React?",
        answers: [
            { text: "react-redux", correct: false },
            { text: "flux", correct: false },
            { text: "redux", correct: true },
            { text: "react-state", correct: false },
            { text: "state-management", correct: false }
        ]
    },
    {
        question: "18) Qual è il concetto di React utilizzato per evitare la ripetizione di codice tra i componenti?",
        answers: [
            { text: "ereditarietà", correct: false },
            { text: "composizione", correct: true },
            { text: "aggregazione", correct: false },
            { text: "astrazione", correct: false },
            { text: "estensione", correct: false }
        ]
    },
    {
        question: "19) Qual è il modulo utilizzato per il routing nelle applicazioni React?",
        answers: [
            { text: "react-route", correct: false },
            { text: "router-dom", correct: false },
            { text: "react-router", correct: true },
            { text: "react-navigation", correct: false },
            { text: "routing", correct: false }
        ]
    },
    {
        question: "20) Qual è il metodo utilizzato per impostare lo stato iniziale di un componente React?",
        answers: [
            { text: "setState()", correct: false },
            { text: "this.state()", correct: false },
            { text: "getInitialState()", correct: false },
            { text: "constructor()", correct: true },
            { text: "initialState()", correct: false }
        ]
    }                                              
    
];

// Variabili globali per tenere traccia dell'indice della domanda corrente e delle risposte corrette
let currentQuestionIndex = 0;
let correctAnswers = 0;
let timer; 

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
