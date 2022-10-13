// Math's quiz question & answer
let Math = [
    {
        question: "Sir Issac Newton was born in ?",
        options: [1400, 1642, 1726, 1889],
        Correct: 1642,
    },
    {
        question: "Sum of first 100 natural number which are divisible by 7?",
        options: [348, 290, 1000, 735],
        Correct: 735,
    },
    {
        question: "Which sequence is Fibonacci Sequence?",
        options: ['1,1,2,3,5...', '2,4,6,8,...', '1,4,16,20,....', '3,5,7,9,11,...'],
        Correct: '1,1,2,3,5...',
    }
];

let QuestionContainer = document.querySelector("#QuestionContainer"),
    Answer = document.querySelector("#Answer"),
    submitBtn = document.querySelector("#submitBtn");

let JustOA = document.querySelectorAll(".JustO");

let index = 0;

let data = Math[index];
function showQuiz() {
    if (index < 3) {
        console.log(index);
        data = Math[index];
        console.log('data', data);
        console.log(QuestionContainer);
        QuestionContainer.innerHTML = data.question;
        for (let i in JustOA) {
            JustOA[i].innerHTML = data.options[i];
        }
    }
    else {
        alert(`Done,`);
        index = 0;
    }
};

showQuiz();

submitBtn.addEventListener('click', () => {
    if (Answer.value == data.Correct) {
        console.log("Right!!");
        Answer.value = "";
        index++;
        showQuiz();
    }
    else {
        console.log("Try again!!");
        Answer.style.borderColor = "red";
    }
})
