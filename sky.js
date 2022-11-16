let about = document.querySelector("#about"),
    math = document.querySelector("#math"),
    phy = document.querySelector("#phy");
// history = document.querySelector("#history");


// Defining a function named 'changeSection'
function changeSection(element, SName) {
    let tabContent = document.getElementsByClassName('tabContent');
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';
    }

    let menuItems = document.getElementsByClassName("menu-items");
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].classList.remove("active");
    }

    document.getElementById(SName).style.display = 'block';
    element.className += " active";

}

// Quiz Starter
let Physics_QUiz_Starter = document.querySelector('#Physics_QUiz_Starter')
Physics_QUiz_Starter.addEventListener('click', () => {
    location.assign('/PhysicsSection.html')
})

let Math_Quiz_Starter = document.querySelector('#Math_Quiz_Starter')
Math_Quiz_Starter.addEventListener('click', () => {
    location.assign('/MathSection.html')
})