let about = document.querySelector("#about"),
math = document.querySelector("#math"),
phy = document.querySelector("#phy"),
history = document.querySelector("#history");

about.addEventListener('click', changeSection(this, 'section_about'));
math.addEventListener('click', changeSection(this, 'section_math'));
phy.addEventListener('click', changeSection(this, 'section_phy'));
history.addEventListener('click', changeSection(this, 'section_history'));

// Defining a function named 'changeSection'
function changeSection(evt, SName) {
    let tabContent = document.getElementsByClassName('tabContent');
    for(let i=0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    let menuItems = document.getElementsByClassName("menu-items");
    for(let i=0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
    }

    document.getElementById(SName).style.display = 'block';
    evt.className += " active";

}

// let menuItems = document.getElementsByClassName("menu-items");
// for(let i=0; i < menuItems.length; i++) {
//     menuItems[i].style.display = "none";
// }



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