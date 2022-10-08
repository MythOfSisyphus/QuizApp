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

// Iterator to change the questions : 
function QuizIterator(data) {
    let index = 0;
    return {
        next: function() {
            if(index < data.length) {
                let result;
                result = {value: data[index], done: false};
                index++;
                return result;
            }
            else {
                return {value: undefined, done: true};
            }
        }
    }
}

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

let itMath = QuizIterator(Math);

let startMath = document.querySelector("#start_math"),
main_math = document.querySelector("#main_math"),
Mquiz = document.querySelector("#Mquiz");
startMath.addEventListener('click', () => {
    console.log(`Starting Math Quiz..`);
    main_math.style.display = 'none';
    let currentQ = itMath.next().value;
    Mquiz.innerHTML = `
    <!-- Quiz Template I mean UI design of Question & options -->
                <div>
                    <div class="border shadow-md shadow-gray-900 border-black rounded-sm px-5 my-7 py-4">
                        <!-- Question -->
                        <div class="font-semibold"> <span>Q)</span> ${currentQ.question} </div>
                        <!-- options -->
                        <div>
                            <div> <span>1)</span> ${currentQ.option1}</div>
                            <div> <span>2)</span> ${currentQ.option2}</div>
                            <div> <span>3)</span> ${currentQ.option3}</div>
                            <div> <span>4)</span> ${currentQ.option4}</div>
                        </div>
                        <!-- Answer input from user -->
                        <div class="flex space-x-2 my-3">
                            <input id="" class="border px-1 py-[2px] rounded-lg border-black outline-none"
                                placeholder="Answer here...">
                            <button
                                class="bg-black text-white border font-semibold shadow-lg rounded-lg hover:bg-gray-600 px-2 py-[2px]">Check</button>
                        </div>
                    </div>
                </div>

                <!-- Next question -->
                <div class="flex my-7 justify-center text-xl shadow py-3 shadow-gray-900 space-x-7">
                    <!-- <div class="font-semibold italic text-red-600">
                        <div>Congratulations!!</div>
                    </div>
                    <button class="bg-black text-white border shadow-lg rounded-lg hover:bg-gray-600 px-2">Next</button> -->
                    <div class="hidden">Uff Try again !</div>
                </div>
    `;









    // if(currentQ != undefined) {
    //     console.log(currentQ.question);
    //     console.log(currentQ.Correct);
    // }
    // else {
    //     alert('You have completed the quiz.');
    //     window.location.reload();
    // }
})