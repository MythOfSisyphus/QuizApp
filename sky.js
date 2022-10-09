let about = document.querySelector("#about"),
math = document.querySelector("#math"),
phy = document.querySelector("#phy");
// history = document.querySelector("#history");


// Defining a function named 'changeSection'
function changeSection(element, SName) {
    let tabContent = document.getElementsByClassName('tabContent');
    for(let i=0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    let menuItems = document.getElementsByClassName("menu-items");
    for(let i=0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
    }

    document.getElementById(SName).style.display = 'block';
    element.className += " active";

};

// Math's quiz question & answer
let Math = [
    {
        question: "Sir Issac Newton was born in ?",
        option1 : 1400,
        option2 : 1642,
        option3 : 1726,
        option4 : 1889,
        Correct : 1642,
    },
    {
        question: "Sum of first 100 natural number which are divisible by 7?",
        option1 : 348,
        option2 : 290,
        option3 : 1000,
        option4 : 735,
        Correct : 735,
    },
    {
        question: "Which sequence is Fibonacci Sequence?",
        option1 : '1,1,2,3,5...',
        option2 : '2,4,6,8,...',
        option3 : '1,4,16,20,....',
        option4 : '3,5,7,9,11,...',
        Correct : '1,1,2,3,5...',
    }
];

function QuizIterator(data) {
    let index = 0;
    return {
        next : function() {
            if(index < data.length) {
                let result = {value: data[index], done: false};
                index++;
                return result;
            }
            else {
                return{value: undefined, done: true};
            }
        }
    }
}

let itQuiz = QuizIterator(Math);
// console.log(itQuiz);
// console.log(itQuiz.next().value);
let Next =document.querySelector("#Next");
Next.addEventListener('click', ShowQuiz);

let MathQuizstarter = document.querySelector("#Math_Quiz_starter");

let currentQ = itQuiz.next().value;
function ShowQuiz() {
    console.log(`Showing questions`);
    MathQuizstarter.innerHTML = `
    <div class="border space-y-2 border-black my-5 mx-2 px-2 py-2 rounded-md">
    <div>
        ${currentQ.question}
    </div>
    <div class="ml-1">
        <div>${currentQ.option1}</div>
        <div>${currentQ.option2}</div>
        <div>${currentQ.option3}</div>
        <div>${currentQ.option4}</div>
    </div>
    <div>
        <input id="Answer" placeholder="Answer here..." class="ouline-none border border-black rounded-sm px-2">
        <button id="Check" class="btn-sm">Check</button>
    </div>
</div>
    `;
}

let Answer = document.querySelector("#Answer"),
Check = document.querySelector("#Check");
Check.addEventListener('click', () => {
    let s = currentQ.Correct;
    if(Answer.value == s) {
        Check.innerHTML = "Congratulations!!";
    }
})