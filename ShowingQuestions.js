
const PhysicsQuestions = [
    // {
    //     question: 'A body is an equilibrium when its:',
    //     options: ['Acceleration is Zero', 'Speed is uniform', 'Speed and acceleration are uniform'],
    //     correct: 'Acceleration is Zero'
    // },
    // {
    //     question: 'Which one of the following converts lights energy into electrical energy.',
    //     options: ['Electric Bulb', 'Photocell', 'Electric Cell'],
    //     correct: 'Photocell'
    // },
    {
        question: 'By dividing the displacement of a moving body with time, we obtain.',
        options: ['Velocity', 'Acceleration', 'Speed'],
        correct: 'Velocity'
    },
    {
        question: 'Earths gravitational force of attraction vanishes at:',
        options: ['6400 km', 'Infinity', '42300 km'],
        correct: 'Infinity'
    },
    {
        question: 'A measuring cylinder is used to measure.',
        options: ['mass', 'area', 'volume'],
        correct: 'volume'
    },
]

const Math = [
    {
        question: "Sir Issac Newton was born in ?",
        options: [1400, 1642, 1726, 1889],
        correct: 1642,
    },
    {
        question: "Sum of first 100 natural number which are divisible by 7?",
        options: [348, 290, 1000, 735],
        correct: 735,
    },
    // {
    //     question: "Which sequence is Fibonacci Sequence?",
    //     options: ['1,1,2,3,5...', '2,4,6,8,...', '1,4,16,20,....', '3,5,7,9,11,...'],
    //     Correct: '1,1,2,3,5...',
    // }
];

// console.log(PhysicsQuestions);

let MainContainer = document.querySelector('#MainContainer')
let QuestionContainer = document.querySelector('#QuestionContainer')
let Options_container = document.querySelector('#Options_container')

// function to show questions and options

// setting Question_Number = 0, to show first question from the array
let Question_Number = 0;
let Question_Number_Answer;

function startQuiz(Data) {
    // console.log(Data[Question_Number]);

    if (Question_Number < Data.length) {

        QuestionContainer.innerHTML = Data[Question_Number].question;

        for (let i = 0; i < Data[Question_Number].options.length; i++) {
            let Just_Options = document.createElement('p')
            Just_Options.innerHTML = `${i + 1}) <span> ${Data[Question_Number].options[i]} </span>`
            Options_container.appendChild(Just_Options)
        }

        Question_Number_Answer = Data[Question_Number].correct;
    }

    else {
        MainContainer.classList.add('hidden')
        let mesg = document.querySelector('#mesg');
        mesg.classList.remove('hidden')

    }

}

// checking the answer 

function checkingAnswers(Data) {
    let Answer = document.querySelector('#Answer')
    let submitBtn = document.querySelector('#submitBtn')

    let congrats = document.querySelector('#congrats')
    let encourage = document.querySelector('#encourage')

    document.body.addEventListener('keydown', (e) => {
        if (e.key == 'Enter') {
            submitBtn.click();
        }
    })

    submitBtn.addEventListener('click', () => {
        let Answer_value = Answer.value;

        if (Answer_value == '') {
            Answer.classList.remove('border-black')
            Answer.classList.add('border-red-600')
        }

        else {
            if (Answer_value == Question_Number_Answer) {

                // encrougement
                congrats.classList.remove('hidden')
                setTimeout(() => {
                    congrats.classList.add('hidden')
                }, 500)

                Answer.classList.add('border-black')
                Answer.classList.remove('border-red-600')

                Options_container.textContent = ''
                Answer.value = ''
                Question_Number++;

                startQuiz(Data)
            }
            else {
                // alert('Try again!')
                encourage.classList.remove('hidden')
                setTimeout(() => {
                    encourage.classList.add('hidden')
                }, 500)

                Answer.value = '';
            }
        }
    })
}


let url = window.location.href;
let currentPage = url.split('/')[3]

if(currentPage == 'MathSection.html') {
    startQuiz(Math)

    checkingAnswers(Math)
}

else if(currentPage == 'PhysicsSection.html') {
    startQuiz(PhysicsQuestions)

    checkingAnswers(PhysicsQuestions)
}

else {
    location.assign('/index.html')
}