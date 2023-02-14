let toggleSwitch = document.getElementsByClassName('redButton')[0];

function go_to_1() {
    document.documentElement.setAttribute('theme', 'light');
    toggleSwitch.classList.add('horizTranslate1');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
}

function go_to_2() {
    document.documentElement.setAttribute('theme', 'theme2');
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
}

function go_to_3() {
    document.documentElement.setAttribute('theme', 'theme3');
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
}

function value(){
    console.log(document.getElementById("key_1").textContent);
    console.log(document.getElementById("key_2").textContent);
}