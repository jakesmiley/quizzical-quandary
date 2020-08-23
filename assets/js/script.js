//set up primary constants
const initializeBtn = document.getElementById('start-btn')
const nextBtn = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const queryEl = document.getElementById('query')
const answerButtonsEl = document.getElementById('answer-btns')
var highestScore = 0

//allow to be changed instant of constant
let randomizedQueries, currentQuery;

//local storage stuff
// let highScore = 10
// username = window.prompt("What is your name or initials?");
// localStorage.setItem(`${username}`, `${highScore}`)


function saveScore() {
    const score = points //poin
    const username = window.prompt("Enter your initials");
    for(var aeiou in localStorage) {
        if(score > highestScore) {
            highestScore = score 
            localStorage.setItem(username, score)
        }
    };
};

// const score = 0;
// const username = window.prompt("Enter your initials.");
// localStorage.setItem(username, score);

// for(var aeiou in localStorage) {
//     console.log(aeiou);
// };





//start the game
function initializeGame() {
    //reset score
    points = 0;
    // let highScore = JSON.parse(localStorage.getItem('highScore'))
    // if(!highScore) {
    //     highScore = [];
    // };
    //hide initialize button
    initializeBtn.classList.add('invis')
    //shuffle questions
    randomizedQueries = queries.sort(() => Math.random() - .5)
    //set default
    currentQuery = 0;
    //unhide questions
    questionContainerEl.classList.remove('invis');
    generateQuestion();
};

//generate next question
function generateQuestion() {
    //clear old info
    resetfield();
    //show current question
    displayQuery(randomizedQueries[currentQuery]);
};

//choose thine answer
function chooseAnswer(x) {
    const chosenBtn = x.target;
    const correct = chosenBtn.dataset.correct;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    });
    //add points if right
    if (chosenBtn.dataset = correct) {
        points++;
    };

    if (randomizedQueries.length > currentQuery + 1) {
        nextBtn.classList.remove('invis')
    } else {
        initializeBtn.innerText = 'Try again?'
        initializeBtn.classList.remove('invis')
        saveScore();
    }
    
    //points setup
    document.getElementById('points').innerHTML = points;
};

//clear old info
function resetfield() {
    clearStatusClass(document.body);
    nextBtn.classList.add('invis');
    //remove old answer buttons
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    };
};

//display question
function displayQuery(question) {
    //set question text
    queryEl.innerText = question.question
    //set answer text and functionality
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      };
      button.addEventListener('click', chooseAnswer);
      answerButtonsEl.appendChild(button);
    });
};

//take element, check if correct
function setStatusClass(element, correct) {
    clearStatusClass(element);
    //add correct class if correct
    if (correct) {
        element.classList.add('correct')
    //add wrong class if incorrect
    } else {
        element.classList.add('wrong')
    };
};

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
};

//show score upon submission
// function finalScore() {
//     alert("Your score was " + points.value + " points.");
//     if (points > highScore) {
//         alert("You set a new high score of " + points.value + " points!");
//         highScore = points;
//         saveScore();
//     } else {
//         alert("You did not set a new high score :(");
//     }
// };


//save score
// function saveScore() {
//     console.log("Saved score!");
//     event.preventDefault;
    
//     const highScore = {
//         score: currentScore,
//         name: window.prompt("What are your initials?")
//     };

//     localStorage.setItem('s')
// };

//load high score
// function loadScore() {
//     highScore = localStorage.getItem("highScore");
// };

//initiate
initializeBtn.addEventListener('click', initializeGame)

//next button for genearting next question and increasing count
nextBtn.addEventListener('click', () => {
    currentQuery++;
    generateQuestion();
});

//question & answer list
const queries = [
    {
        question: "What is the airspeed velocity of an unladen swallow?",
        answers: [
        {text: "I don't know that!", correct: false},
        {text: "What do you mean? An African or European Swallow?", correct: true}
        ]
    },
    {
        question: "Who is best doggo?",
        answers: [
        {text: "Aislin", correct: true},
        {text: "Aislin", correct: true},
        {text: "Aislin", correct: true},
        {text: "Aislin", correct: true}
        ]
    },
    {
        question: "What are the holidays about?",
        answers: [
        {text: "Loved ones", correct: false},
        {text: "Gifts", correct: false},
        {text: "Assorted cheeses and alcohol", correct: true},
        {text: "Holidays are pointless", correct: false}
        ]
    },
    {
        question: "Do you consent to giving Jake Smiley $1?",
        answers: [
        {text: "NO!", correct: false},
        {text: "Yes!", correct: true},
        {text: "Hell naw!", correct: false},
        {text: "Mayyyybe. Will it help my score?", correct: true}
        ]
    },
    {
        question: "Pick a letter.",
        answers: [
        {text: "That's not a question!", correct: false},
        {text: "This quiz is more puzzling than quizzical.", correct: false},
        {text: "Listen. I hate you.", correct: false},
        {text: "a", correct: true}
        ]
    },
    {
        question: "2(7-3)^2 / 8 = ? ",
        answers: [
        {text: "2", correct: false},
        {text: "4", correct: true},
        {text: "6", correct: false},
        {text: "8", correct: false}
        ]
    },
    {
        question: "Coding is fun!",
        answers: [
        {text: "If by fun you mean crying myself to sleep every night, sure.", correct: false},
        {text: "It sure is.", correct: true},
        {text: "Meh.", correct: false},
        {text: "Not really, it's too easy for me.", correct: false}
        ]
    },
    {
        question: "Which of the following about Joan of Arc (Jean d'Orléans) is NOT true?",
        answers: [
        {text: "She led charges in battle weilding a banner rather than a sword", correct: false},
        {text: "She relied on donated items for her armor, horse, and other items.", correct: false},
        {text: "She was canonized as a saint, and is the patron saint of France.", correct: false},
        {text: "She lost more battles than she won.", correct: true}
        ]
    },
]