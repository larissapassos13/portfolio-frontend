var lamp = document.getElementById("lamp");
console.log("js carregado")
lamp.addEventListener("click", function() {
    if (lamp.src.includes("lamp_on.png")) {
        lamp.src = "assets/lamp_off.png";
    } else {
        lamp.src = "assets/lamp_on.png";
    }
});

