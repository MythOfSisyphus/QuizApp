let about = document.querySelector("#about"),
math = document.querySelector("#math"),
phy = document.querySelector("#phy"),
history = document.querySelector("#history");

let menuItem = document.querySelectorAll(".menu-item");
console.log(menuItem);



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