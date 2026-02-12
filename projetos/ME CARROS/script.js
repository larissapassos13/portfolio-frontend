// declarando as variaveis
var result = document.getElementById("result"); // campo que irá exibir o nome da cor
var car_red = document.getElementById("red"); // chama o carro vermelho
var btn_red = document.getElementById("vermelho"); // botao circular vermelho
var btns = document.getElementsByClassName("btn"); // botoes de controle
var btn_reset = document.getElementById("resetar");
var btn_white = document.getElementById("branco"); // botao branco
var car_white = document.getElementById("white"); // chama carro branco
var carroSelecionado = null; // nenhum carro selecionado
var btn_acelerar = document.getElementById("acelerar");
var btn_desacelerar = document.getElementById("desacelerar");
var redKeyListener = null;
var whiteKeyListener = null;

btn_white.addEventListener("click", function(){
    alt_white()
})

car_white.addEventListener("click", function(){
    alt_white()
})

btn_red.addEventListener("click", function(){
    alt_red()
})

car_red.addEventListener("click", function(){
    alt_red()
})


btn_reset.addEventListener("click", function(){
    result.textContent = "?"; //envia a cor para a interface
    document.body.style.backgroundColor = "black"; // cor de fundo 
    document.body.style.color = "white";
    // for percorre o vetor dos botões mudando 
    // o display de none (oculto) para block (mostrar)
    
    for (var i = 0; i < btns.length; i++) {
    btns[i].style.display = "none";
    }
    carroSelecionado = null;
    
    // remover listeners anteriores
    if(redKeyListener) {
        document.removeEventListener("keydown", redKeyListener);
        redKeyListener = null;
    }
    if(whiteKeyListener) {
        document.removeEventListener("keydown", whiteKeyListener);
        whiteKeyListener = null;
    }

    car_red.style.top = "60px";
    car_red.style.height = "50px";
    car_red.style.width = "50px";
    car_red.style.right = "205px";

    car_white.style.top = "60px";
    car_white.style.height = "50px";
    car_white.style.width = "50px";
    car_white.style.left = "205px";
})


function alt_red(){
    carroSelecionado = true;
    result.textContent = "Vermelho"; //envia a cor para a interface
    document.body.style.backgroundColor = "red"; // cor de fundo 
    document.body.style.color = "white"; 
    // for percorre o vetor dos botões mudando 
    // o display de none(oculto) para block(mostrar)
    for(var i=0; i<=2; i++){
        btns[i].style.display = "block";
    }

    redKeyListener = function(event){
        console.log(event.key)
        
        // nao escolheu nenhuma cor
        if (!carroSelecionado) {
            if (event.key == "ArrowDown" || event.key == "ArrowUp") {
                alert("Selecione um carro primeiro!");
            }
            return;
        }

        if(event.key == "ArrowDown"){
            console.log("pressionou a tecla para baixo")

            var top = parseInt(window.getComputedStyle(car_red).top);
            car_red.style.top = (top + 1) + "px";
            carroSelecionado = true;
            console.log(top);

            var height = parseInt(window.getComputedStyle(car_red).height);
            car_red.style.height = (height + 1) + "px";
            console.log(height);
        }

        if(event.key == "ArrowUp"){
            console.log("pressionou a tecla para cima")

            var top = parseInt(window.getComputedStyle(car_red).top);
            car_red.style.top = (top - 1) + "px";
            carroSelecionado = true;
            console.log(top);

            var height = parseInt(window.getComputedStyle(car_red).height);
            car_red.style.height = (height - 1) + "px";
            console.log(height);
        }
    };
    document.addEventListener("keydown", redKeyListener);
}

function alt_white(){
    carroSelecionado = true;
    result.textContent = "Branco"; //envia a cor para a interface
    document.body.style.backgroundColor = "white"; // cor de fundo 
    document.body.style.color = "black"; 
    for(var i=0; i<=2; i++){
        btns[i].style.display = "block";
    }

    whiteKeyListener = function(event){
        console.log(event.key)

        // nao selecionou nenhum carro
        if (!carroSelecionado) {
            if (event.key == "ArrowDown" || event.key == "ArrowUp") {
                alert("Selecione um carro primeiro!");
            }
            return;
        }

        if(event.key == "ArrowDown"){
            console.log("pressionou a tecla para baixo")

            var top = parseInt(window.getComputedStyle(car_white).top);
            car_white.style.top = (top + 1) + "px";
            console.log(top);

            var height = parseInt(window.getComputedStyle(car_white).height);
            car_white.style.height = (height + 1) + "px";
            console.log(height);
        }

        if(event.key == "ArrowUp"){
            console.log("pressionou a tecla para cima")

            var top = parseInt(window.getComputedStyle(car_white).top);
            car_white.style.top = (top - 1) + "px";
            console.log(top);

            var height = parseInt(window.getComputedStyle(car_white).height);
            car_white.style.height = (height - 1) + "px";
            console.log(height);
        }
    };
    document.addEventListener("keydown", whiteKeyListener);
}

// botoes acelerar desacelerar
btn_acelerar.addEventListener("click", function(){
    if (!carroSelecionado) {
        alert("Selecione um carro primeiro!");
        return;
    }

    if (result.textContent === "Vermelho") {
        // acelerar = subir e diminuir o tamanho (igual seta ↑)
        var top = parseInt(window.getComputedStyle(car_red).top);
        car_red.style.top = (top - 1) + "px";

        var height = parseInt(window.getComputedStyle(car_red).height);
        car_red.style.height = (height - 1) + "px";
    } 
    else if (result.textContent === "Branco") {
        var top = parseInt(window.getComputedStyle(car_white).top);
        car_white.style.top = (top - 1) + "px";

        var height = parseInt(window.getComputedStyle(car_white).height);
        car_white.style.height = (height - 1) + "px";
    }
});

btn_desacelerar.addEventListener("click", function(){
    if (!carroSelecionado) {
        alert("Selecione um carro primeiro!");
        return;
    }

    if (result.textContent === "Vermelho") {
        // desacelerar = descer e aumentar o tamanho (igual seta ↓)
        var top = parseInt(window.getComputedStyle(car_red).top);
        car_red.style.top = (top + 1) + "px";

        var height = parseInt(window.getComputedStyle(car_red).height);
        car_red.style.height = (height + 1) + "px";
    } 
    else if (result.textContent === "Branco") {
        var top = parseInt(window.getComputedStyle(car_white).top);
        car_white.style.top = (top + 1) + "px";

        var height = parseInt(window.getComputedStyle(car_white).height);
        car_white.style.height = (height + 1) + "px";
    }
});


