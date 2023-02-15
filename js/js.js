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

let pantallaResultado = document.getElementById("result");
let operacion = "";

const container = document.querySelector(".numbers__panel");
container.addEventListener("click", (e) =>{

    if (e.target.id === "key_1") {
        operacion = operacion + document.getElementById("key_1").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "key_2") {
        operacion = operacion + document.getElementById("key_2").textContent;
        pantallaResultado.textContent = operacion;
    }
    if (e.target.id === "key_3") {
        operacion = operacion + document.getElementById("key_3").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "key_4") {
        operacion = operacion + document.getElementById("key_4").textContent;
        pantallaResultado.textContent = operacion;
    }
    if (e.target.id === "key_5") {
        operacion = operacion + document.getElementById("key_5").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "key_6") {
        operacion = operacion + document.getElementById("key_6").textContent;
        pantallaResultado.textContent = operacion;
    }
    if (e.target.id === "key_7") {
        operacion = operacion + document.getElementById("key_7").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "key_8") {
        operacion = operacion + document.getElementById("key_8").textContent;
        pantallaResultado.textContent = operacion;
    }
    if (e.target.id === "key_9") {
        operacion = operacion + document.getElementById("key_9").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "key_0") {
        operacion = operacion + document.getElementById("key_0").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "k_point") {
        operacion = operacion + document.getElementById("k_point").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "k_plus") {
        operacion = operacion + document.getElementById("k_plus").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "k_minus") {
        operacion = operacion + document.getElementById("k_minus").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "k_product") {
        operacion = operacion + "*";
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "k_division") {
        operacion = operacion + document.getElementById("k_division").textContent;
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "k_equal") {
        resultado(operacion);
    }

    if (e.target.id === "k_del") {
        operacion = operacion.slice(0, -1);
        pantallaResultado.textContent = operacion;
    }

    if (e.target.id === "k_reset") {
        operacion = "";
        pantallaResultado.textContent = 0;
    }
    
    e.stopPropagation();

});

function resultado(value){
    pantallaResultado.textContent = eval(value);
}

console.log("esto es operacione"+pantallaResultado.textContent);