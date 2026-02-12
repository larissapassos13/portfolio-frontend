var display = document.getElementById("display");
var btns = document.getElementsByClassName("btn");

btns[3].style.backgroundImage = 'linear-gradient(gray, red)';

function pressed(num) { 
    display.textContent += num;
    acenderBotao(num); 
}

function calculate() {
    var expr = display.textContent;

    if (expr.trim() === "" || /[+\-*/.]$/.test(expr)) {
        display.textContent = "Erro";
        return;
    }
    display.textContent = eval(expr);
    acenderBotao("="); 
}

function clearAll() {
    display.textContent = "";
    acenderBotao("C"); 
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
    acenderBotao("<"); 
}

// capturando as teclas
document.addEventListener("keydown", function (event) {
    var key = event.key;
    var validKeys = "0123456789+-*/.";

    if (validKeys.includes(key)) {
        pressed(key);
    } else if (key === "Enter" || key === "=") {
        calculate();
    } else if (key === "Backspace") {
        backspace();
    } else if (key.toLowerCase() === "c") {
        clearAll();
    }
});

// acender led
function acenderBotao (value) {
    var botoes = document.querySelectorAll(".btn");
    botoes.forEach(btn => {
        if (btn.textContent.trim() === value) {
            btn.classList.add("active");
            setTimeout(() => btn.classList.remove("active"), 150);
        }
    });
}
