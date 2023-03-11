let = convert = document.getElementById("convert");
let = cantidad = document.getElementById("cantidad");
let = divisa = document.getElementById("divisa");
let resultado = document.getElementById ("resultado");
let modo = document.getElementById("modo");
let contenedor = document.getElementById("contenedor");
let pic = document.getElementById("pic");
let cerrar = document.getElementById("cerrar");
let Creditos = document.getElementById("Creditos");

divisa.addEventListener("change", (e) => {
    console.log(e.target.value);
});

modo.addEventListener("change", () => {
    if(modo.checked) {
        contenedor.classList.add("noche");
    }else{
        contenedor.classList.remove("noche");
    }
});

let convertilos = () => {
    let valor = 0;
    let moneda = "usd";
    if(divisa.value == "usd") {
        valor = 370;
        moneda = "usd";
        resultado.style.color ="green";
        pic.src = "https://upload.wikimedia.org/wikipedia/commons/f/fa/Presidential_dollar_coin_reverse.png"
    } else {
        valor = 380;
        moneda = "eur";
        resultado.style.color ="blue";
        pic.src= "https://upload.wikimedia.org/wikipedia/commons/5/56/Reverso_1_euro.jpg"
    }
    let elegida = parseInt();
    let cuanto = parseInt(cantidad.value);
    let result = cuanto * valor;
    resultado.innerHTML = cuanto + " " + moneda + " son: $" + result;
};
convert.addEventListener("click", convertilos);
