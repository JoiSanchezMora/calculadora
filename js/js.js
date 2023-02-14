let toggleSwitch = document.getElementsByClassName('pivot__button')[0];

function go_to_1() {
    document.documentElement.setAttribute('theme', 'light');
    toggleSwitch.classList.add('horiz__translate1');
    toggleSwitch.classList.remove('horiz__translate2');
    toggleSwitch.classList.remove('horiz__translate3');
}

function go_to_2() {
    document.documentElement.setAttribute('theme', 'theme2');
    toggleSwitch.classList.add('horiz__translate2');
    toggleSwitch.classList.remove('horiz__translate3');
    toggleSwitch.classList.remove('horiz__translate1');
}

function go_to_3() {
    document.documentElement.setAttribute('theme', 'theme3');
    toggleSwitch.classList.add('horiz__translate3');
    toggleSwitch.classList.remove('horiz__translate2');
    toggleSwitch.classList.remove('horiz__translate1');
}

// function value(){
//     console.log(document.getElementById("key_1").textContent);
//     console.log(document.getElementById("key_2").textContent);
// }

const container = document.querySelector(".numbers__panel");
container.addEventListener("click", (e) =>{

    if (e.target.id === "key_1") {
        console.log(document.getElementById("key_1").textContent);
    }

    if (e.target.id === "key_2") {
        console.log(document.getElementById("key_2").textContent);
    }
    e.stopPropagation();

});