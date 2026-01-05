const quizData = [
    {
        question: "Which country is famous for the Eiffel Tower?",
        options: ["Italy", "France", "Spain", "Belgium"],
        correct: 1
    },
    {
        question: "Which country is best known for Sushi?",
        options: ["China", "Thailand", "Japan", "Vietnam"],
        correct: 2
    },
    {
        question: "Which country is famous for Pyramids?",
        options: ["Mexico", "Peru", "Egypt", "India"],
        correct: 2
    },
    {
        question: "Which country is known for Chocolate?",
        options: ["Germany", "Belgium", "USA", "Brazil"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementsByClassName("option");
const feedbackEl = document.getElementById("feedback");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    feedbackEl.textContent = "";
    questionEl.textContent = quizData[currentQuestion].question;

    for (let i = 0; i < 4; i++) {
        optionsEl[i].textContent = quizData[currentQuestion].options[i];
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].correct) {
        feedbackEl.textContent = "✅ Correct!";
        score++;
        scoreEl.textContent = "Score: " + score;
    } else {
        feedbackEl.textContent = "❌ Wrong!";
    }
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.textContent = "🎉 Quiz Finished!";
        feedbackEl.textContent = "Your final score is: " + score;
        document.getElementById("options").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
    }
}

loadQuestion();
