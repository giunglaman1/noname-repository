
/// Array di domande del quiz
const questions = [
        {
            question: "1) Qual è il selettore utilizzato per selezionare tutti gli elementi di un documento HTML?",
            answers: [
                { text: "#elementi", correct: false },
                { text: ".tutti-gli-elementi", correct: false },
                { text: "*", correct: true },
                { text: "&", correct: false },
                { text: "elemento", correct: false }
            ]
        },
        {
            question: "2) Qual è il selettore utilizzato per selezionare un elemento con un particolare ID?",
            answers: [
                { text: ".id", correct: false },
                { text: "elemento", correct: false },
                { text: "*", correct: false },
                { text: "#", correct: true },
                { text: "[id]", correct: false }
            ]
        },
        {
            question: "3) Come si applica un colore di sfondo a un elemento in CSS?",
            answers: [
                { text: "background: colore;", correct: true },
                { text: "bg-color: colore;", correct: false },
                { text: "sfondo: colore;", correct: false },
                { text: "color: background;", correct: false },
                { text: "colore-di-sfondo: colore;", correct: false }
            ]
        },
    
            {
                question: "4) Qual è la proprietà CSS utilizzata per definire il colore del testo?",
                answers: [
                    { text: "testo-colore", correct: false },
                    { text: "colore", correct: false },
                    { text: "text-color", correct: false },
                    { text: "color", correct: true },
                    { text: "text", correct: false }
                ]
            },
            {
                question: "5) Come si applica un margine a un elemento in CSS?",
                answers: [
                    { text: "margine: valore;", correct: false },
                    { text: "margine: valore px;", correct: false },
                    { text: "spazio: valore;", correct: false },
                    { text: "padding: valore;", correct: false },
                    { text: "margin: valore;", correct: true }
                ]
            },
            {
                question: "6) Qual è la proprietà CSS utilizzata per definire la larghezza di un elemento?",
                answers: [
                    { text: "dimensione", correct: false },
                    { text: "width", correct: true },
                    { text: "altezza", correct: false },
                    { text: "lunghezza", correct: false },
                    { text: "dimensione-larghezza", correct: false }
                ]
            },
            {
                question: "7) Come si applica un bordo a un elemento in CSS?",
                answers: [
                    { text: "border: valore;", correct: true },
                    { text: "bordo: colore;", correct: false },
                    { text: "bordo: spessore;", correct: false },
                    { text: "spazio: valore;", correct: false },
                    { text: "confine: valore;", correct: false }
                ]
            },
            {
                question: "8) Qual è il selettore utilizzato per selezionare tutti gli elementi figlio di un altro elemento?",
                answers: [
                    { text: ":figlio", correct: false },
                    { text: "figlio-di", correct: false },
                    { text: "elemento-figlio", correct: false },
                    { text: "padre figlio", correct: false },
                    { text: "figlio > elemento", correct: true }
                ]
            },
            {
                question: "9) Qual è la proprietà CSS utilizzata per definire la dimensione del testo?",
                answers: [
                    { text: "dimensione", correct: false },
                    { text: "testo-dimensione", correct: false },
                    { text: "dimensione-testo", correct: false },
                    { text: "font-size", correct: true },
                    { text: "dimensione-font", correct: false }
                ]
            },
            {
                question: "10) Come si applica un'ombra a un elemento in CSS?",
                answers: [
                    { text: "ombra: valore;", correct: false },
                    { text: "ombra: colore;", correct: false },
                    { text: "ombra: spessore;", correct: false },
                    { text: "spazio: valore;", correct: false },
                    { text: "box-shadow: valore;", correct: true }
                ]
            },
            {
                question: "11) Qual è la proprietà CSS utilizzata per definire lo spazio tra le lettere di un testo?",
                answers: [
                    { text: "spazio-lettere", correct: false },
                    { text: "spazio", correct: false },
                    { text: "lettere", correct: false },
                    { text: "letter-spacing", correct: true },
                    { text: "text-spacing", correct: false }
                ]
            },
            {
                question: "12) Come si applica una trasformazione di scala a un elemento in CSS?",
                answers: [
                    { text: "scala: valore;", correct: false },
                    { text: "transform:: scala(valore);", correct: true },
                    { text: "trasform: valore;", correct: false },
                    { text: "trasform: scala;", correct: false },
                    { text: "spazio: valore;", correct: false }
                ]
            },
            {
                question: "13) Qual è il selettore utilizzato per selezionare un elemento con una classe specifica?",
                answers: [
                    { text: "#", correct: false },
                    { text: "@", correct: false },
                    { text: "*", correct: false },
                    { text: "class", correct: false },
                    { text: ".", correct: true }
                ]
            },
            {
                question: "14) Come si applica una trasformazione di rotazione a un elemento in CSS?",
                answers: [
                    { text: "rotazione: valore;", correct: false },
                    { text: "rotazione: angolo;", correct: false },
                    { text: "trasform: rotazione(valore);", correct: true },
                    { text: "trasformazione: angolo;", correct: false },
                    { text: "trasformazione: rotazione;", correct: false }
                ]
            },
            {
                question: "15) Qual è la proprietà CSS utilizzata per definire il tipo di carattere del testo?",
                answers: [
                    { text: "font-family", correct: true },
                    { text: "tipo-carattere", correct: false },
                    { text: "carattere", correct: false },
                    { text: "font-style", correct: false },
                    { text: "tipo", correct: false }
                ]
            },
            {
                question: "16) Come si applica un'animazione a un elemento in CSS?",
                answers: [
                    { text: "animazione: valore;", correct: false },
                    { text: "animazione: nome;", correct: false },
                    { text: "animazione: tipo;", correct: false },
                    { text: "trasform: animazione(valore);", correct: true },
                    { text: "spazio: valore;", correct: false }
                ]
            },
            {
                question: "17) Qual è la proprietà CSS utilizzata per definire lo spazio tra le righe di un testo?",
                answers: [
                    { text: "spazio-righe", correct: false },
                    { text: "righe", correct: false },
                    { text: "line-height", correct: true },
                    { text: "spazio-linea", correct: false },
                    { text: "testo-line-height", correct: false }
                ]
            },
            {
                question: "18) Come si applica un'opacità a un elemento in CSS?",
                answers: [
                    { text: "opacity: valore;", correct: true },
                    { text: "opacità: colore;", correct: false },
                    { text: "trasparenza: valore;", correct: false },
                    { text: "trasparenza: colore;", correct: false },
                    { text: "opaco: valore;", correct: false }
                ]
            },
            {
                question: "19) Qual è il selettore utilizzato per selezionare un elemento con uno specifico attributo?",
                answers: [
                    { text: "@", correct: false },
                    { text: "#", correct: false },
                    { text: ".", correct: false },
                    { text: "attributo", correct: false },
                    { text: "[attributo]", correct: true }
                ]
            },
            {
                question: "20) Come si applica un bordo arrotondato a un elemento in CSS?",
                answers: [
                    { text: "bord-arrotondato: valore;", correct: false },
                    { text: "bordo-arrotondato: angolo;", correct: false },
                    { text: "bordo: arrotondato;", correct: false },
                    { text: "bordo: valore;", correct: false },
                    { text: "bordo: angolo;", correct: false }
                ]
            },
            {
                question: "21) Qual è la proprietà CSS utilizzata per definire lo stile del cursore quando passa sopra un elemento?",
                answers: [
                    { text: "cursor-style", correct: false },
                    { text: "hover-cursor", correct: false },
                    { text: "cursore", correct: false },
                    { text: "mouse-style", correct: false },
                    { text: "cursor", correct: true }
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
