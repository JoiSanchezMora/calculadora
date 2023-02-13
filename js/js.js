let toggleSwitch = document.getElementsByClassName('redButton')[0];
console.log(toggleSwitch);

function go_to_1() {
    toggleSwitch.classList.add('horizTranslate1');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    document.getElementById("outerContainer").style.backgroundColor = "#4A5B7E"
    document.getElementById("buttonContainer").style.backgroundColor = "#222D41"
    document.getElementById("legendTextContainer").style.color = "#ffffff"
    doStuff(1)
}

function go_to_2() {
    toggleSwitch.classList.add('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#E5E5E5"
    document.getElementById("buttonContainer").style.backgroundColor = "#D3CCCA"
    document.getElementById("legendTextContainer").style.color = "#222222"
    doStuff(2)
}

function go_to_3() {
    toggleSwitch.classList.add('horizTranslate3');
    toggleSwitch.classList.remove('horizTranslate2');
    toggleSwitch.classList.remove('horizTranslate1');
    document.getElementById("outerContainer").style.backgroundColor = "#000000"
    document.getElementById("buttonContainer").style.backgroundColor = "#444444"
    document.getElementById("legendTextContainer").style.color = "#E2D241"
    doStuff(3)
}

function doStuff(n) {
    document.getElementById("message").innerHTML = "Switch is in position " + n
    //your code here...
}