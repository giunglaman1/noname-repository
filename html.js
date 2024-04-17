// Array di domande del quiz
const questions = [
    {
        question: "1)Qual è l'acronimo di HTML?",
        answers: [
            { text: "Hypertextual Markup Language", correct: false },
            { text: "HyperMarkup Language", correct: false },
            { text: "HTML sta per HyperText Markup Language.", correct: true },
            { text: "HyperText Markdown Language", correct: false },
            { text: "Hypertext Markup Line", correct: false }
        ]
    },
    {
        question: "2)Qual è il tag utilizzato per definire l'intestazione di una pagina HTML?",
        answers: [
            { text:  "< head >", correct: true },
            { text: "< header >.", correct: false },
            { text: "< heading >", correct: false },
            { text: "< title >", correct: false },
            { text: "< top >", correct: false }
        ]
    },
    {
        question: "3)Cosa rappresenta l'elemento < div > in HTML?",
        answers: [
            { text: "< div > è utilizzato per creare una divisione o una sezione generica.", correct: true },
            { text: "< div > in HTML rappresenta un link ipertestuale.", correct: false },
            { text: "Definisce una lista di definizioni", correct: false },
            { text: "Rappresenta un elemento multimediale", correct: false },
            { text: "Specifiche di intestazione di pagina", correct: false }
        ]
    },
    {
        question: "4)Qual è la differenza tra < div > e < span >?",
        answers: [
            { text: " < div > è un elemento di blocco e < span > è un elemento inline.", correct: true },
            { text: "< span > è un elemento di blocco, mentre < div > è un elemento inline.", correct: false },
            { text: "Il tag < div > rappresenta un'immagine, mentre < span > rappresenta un paragrafo.", correct: false },
            { text: "Il tag < div > è utilizzato per definire un hyperlink, mentre < span > è utilizzato per definire un campo di input.", correct: false },
            { text: "Il tag < div > è un elemento di testo, mentre < span > è un elemento grafico.", correct: false }
        ]
    },
    {
        question: "5)Come si crea un link ipertestuale in HTML?",
        answers: [
            
            { text: "Un link ipertestuale in HTML si crea utilizzando il tag < link >", correct: false },
            { text: "Utilizzando il tag < lik >", correct: false },
            { text: "Usando il tag < href >", correct: false },
            { text: "Utilizzando il tag < a > e l'attributo href=,", correct: true },
            { text: "Attraverso il tag < url >", correct: false }
        ]
    },
    {
        question: "6) Qual è il tag utilizzato per inserire un'immagine in una pagina HTML?",
        answers: [
            
            { text: "< picture >.", correct: false },
            { text: "< img >", correct: true },
            { text: "< graphic >", correct: false },
            { text: "< figura >", correct: false },
            { text: "< foto >", correct: false }
        ]
    },
    {
        question: "7)Cosa significa l'acronimo URL  e cosa rappresenta in HTML?",
        answers: [
            { text: "URL sta per Uniform Resource Locator ed è utilizzato per identificare in modo univoco una risorsa su Internet.", correct: true },
            { text: "L'acronimo URL sta per Universal Resource Locator ed è utilizzato per specificare il colore del testo in HTML.", correct: false },
            { text: "URL sta per Unordered List", correct: false },
            { text: "URL significa Uniform Resource Locator e rappresenta la posizione di un file su un server web", correct: false },
           
        ]
    },
    {
        question: "8)Qual è il tag utilizzato per creare una lista non ordinata in HTML?",
        answers: [
            { text: "Il tag utilizzato per creare una lista non ordinata in HTML è < il >", correct: false },
            { text: "Il tag < ul > è utilizzato per creare una lista non ordinata in HTML.", correct: true },
            { text: "Il tag utilizzato < ulist > ", correct: false },
            { text: "Il tag utilizzato per creare una lista non ordinata in HTML è <ol>", correct: false }
        ]
    },
    {
        question: "9)Come si definisce il carattere di testo in grassetto in HTML?",
        answers: [
           
            { text: "< italic >Testo in grassetto< /italic >", correct: false },
            { text: "< heavy>Testo in grassetto< /heavy >", correct: false },
            { text: "< big >Testo in grassetto< /big >", correct: false },
            { text: "< strong > Testp in grassetto < /strong >", correct: true },
        ]
    },
    {
        question: "10)Cosa rappresenta l'attributo href all'interno di un tag < a >?",
        answers: [
            { text: "L'attributo href specifica l'URL della pagina a cui il link porta.", correct: true },
            { text: "L'attributo href specifica l'header del documento HTML.", correct: false },
            { text: "href è utilizzato per definire lo stile del testo all'interno del tag < a >.", correct: false },
            { text: "L'attributo href indica la grandezza del carattere all'interno del link.", correct: false },
        ]
    },
    {
        question: "11)Qual è il tag utilizzato per definire una tabella in HTML?",
        answers: [
            
            { text: "< tabled >", correct: false },
            { text: "< grid >", correct: false },
            { text: "< table >", correct: true },
            { text: "< chart >", correct: false },
        ]
    },
    {
        question: "12)Come si crea una cella di intestazione in una tabella HTML?",
        answers: [
            { text: "< th >", correct: true },
            { text: "< header >", correct: false },
            { text: "< cell-header >", correct: false },
            { text: "< th-cell >", correct: false },
            { text: "< heading >", correct: false }
        ]
    },
    {
        question: "13) Qual è il modo corretto per inserire un commento in HTML?",
        answers: [
            
            { text: "// Questo è un commento in HTML", correct: false },
            { text: "# Questo è un commento in HTML", correct: false },
            { text: "< !-- Commento -- >", correct: true },
            { text: "/* Questo è un commento in HTML */", correct: false },
            { text: "< comment >Questo è un commento in HTML< /comment >", correct: false }
        ]
    },
    {
        question: "14)Cosa rappresenta l'attributo src all'interno di un tag < img >?",
        answers: [
            
            { text: "L'attributo src specifica lo stile visivo dell'immagine.", correct: false },
            { text: "L'attributo src specifica l'URL dell'immagine da visualizzare.", correct: true },
            { text: "src indica la posizione di un elemento all'interno della pagina web.", correct: false },
            { text: "L'attributo src definisce la grandezza dell'immagine.", correct: false },
            { text: "src determina il testo alternativo dell'immagine.", correct: false }
        ]
    },
    {
        question: "15)Qual è il tag utilizzato per definire un campo di input testuale in un modulo HTML?",
        answers: [
           
            { text: "< input >", correct: false },
            { text: "< textbox >", correct: false },
            { text: "< field >", correct: false },
            { text: "< textinput >", correct: false },
            { text: "< input > con l'attributo type=text", correct: true },

        ]
    },
    {
        question: "16)Cosa significa  DOCTYPE in HTML e qual è il suo utilizzo?",
        answers: [
            
            { text: "DOCTYPE specifica lo stile visivo della pagina HTML.", correct: false },
            { text: "DOCTYPE indica la posizione della pagina HTML nel filesystem.", correct: false },
            { text: "DOCTYPE specifica la versione di HTML utilizzata nel documento HTML.", correct: true },
            { text: "DOCTYPE definisce la grandezza del testo all'interno della pagina HTML.", correct: false },
            { text: "DOCTYPE determina il testo alternativo delle immagini nella pagina HTML.", correct: false }
        ]
    },
    {
        question: "17) Qual è il tag utilizzato per definire un elenco ordinato in HTML?",
        answers: [
            
            { text: "< list >", correct: false },
            { text: "< unordered-list >", correct: false },
            { text: "< item >", correct: false },
            { text: "< ol >", correct: true },
            { text: "< ol-type >", correct: false }
        ]
    },
    {
        question: "18)Cosa rappresenta l'elemento < meta > in una pagina HTML?",
        answers: [
            { text: "L'elemento < meta > viene utilizzato per specificare metadati.", correct: true },
            { text: "Dei blocchi di codice riutilizzabile.", correct: false },
            { text: "Il tag < meta > indica la posizione di un elemento all'interno della pagina web.", correct: false },
            { text: "Il tag < meta > definisce la grandezza del testo all'interno della pagina HTML.", correct: false },
            { text: "Il tag < meta > determina il testo alternativo delle immagini nella pagina HTML.", correct: false }
        ]
    },
    {
        question: "19)Qual è il tag utilizzato per inserire un video in una pagina HTML?",
        answers: [
            
            { text: "< media >", correct: false },
            { text: "< movie >", correct: false },
            { text: "< play >", correct: false },
            { text: " < video >", correct: true },
            { text: "< mov >", correct: false }
        ]
    },
    {
        question: "20)Qual è il tag utilizzato per creare un elenco di definizioni in HTML?",
        answers: [
            { text: "< dl > ", correct: true },
            { text: "< deflist >", correct: false },
            { text: "< define >", correct: false },
            { text: "< def >", correct: false },
            { text: "< definelist >", correct: false }
        ]
    },
    {
        question: "21)Qual è il tag utilizzato per creare un hyperlink senza che apra una nuova finestra del browser?",
        answers: [
            
            { text: " tag < a > con l'attributo target=_blank", correct: false },
            { text: "< linktarget >", correct: false },
            { text: " target=_self nel tag < a > ", correct: true },
            { text: "< external >", correct: false },
            { text: "< newlink >", correct: false }
        ]
    },                                                                        
    // Aggiungi altre domande qui...
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
