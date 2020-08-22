//set up primary constants
const initializeBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionContainerEl = document.getElementById('question-container');
const queryEl = document.getElementById('query');
const answerButtonsEl = document.getElementById('answer-btns');

//allow to be changed instead of constant
let randomizedQueries, currentQuery;


// start the game
function initializeGame() {
    // console.log("initiated");
    initializeBtn.classList.add('invis');
    randomizedQueries = queries.sort(() => Math.random() - .5);
    currentQuery = 0;
    questionContainerEl.classList.remove('invis');
    generateQuestion();
}

// generate next question
function generateQuestion() {
    //clear old info
    resetField();
    //show current question
    displayQuery(randomizedQueries[currentQuery]);
}

// choose answer
function chooseAnswer(e) {

}

function resetField() {
    nextBtn.classList.add('invis');
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild);
    }
}

function displayQuery(query) {
    queryEl.innerText = query.query;
    query.answers.forEach(answer => {
        const btn = document.createElement('btn');
        btn.innerText = answer.text;
        btn.classList.add('btn');
        if (answer.correct) {
            btn.dataset.correct = answer.correct;
        }
        btn.addEventListener('click', chooseAnswer);
        answerButtonsEl.appendChild(btn);
    })
}

// show score upon submission

initializeBtn.addEventListener('click', initializeGame);

const queries = [
    {
        query: "Who is best doggo?",
        answers: [
            {text: "Aislin", correct: true},
            {text: "Me", correct: false}
        ]
    }
]