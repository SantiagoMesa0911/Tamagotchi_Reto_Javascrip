var sleep = 100
var eat = 100
var incrementar = 0

function Start() {
    var temporizador = setInterval(loop, 1000);
}

function Eat() {
    eat += 5
    document.getElementById('eat').innerHTML = eat + '%';
    document.getElementById('eat').style.width = eat + '%';
}
function Sleep() {
    sleep += 5
    document.getElementById('sleep').innerHTML = sleep + '%'
    document.getElementById('sleep').style.width = sleep + '%'
}

function loop(time = 2) {
    var total = sleep + eat

    if (sleep <= 0 || eat <= 0) {
        document.getElementById('pet').src = "img/preto.jpg"
        document.getElementById('mensagem').innerHTML = 'TU MASCOTA HA MUERTO'
    }
    else if (total > 400)
        document.getElementById("pet").src = "img/azul.jpg"
    else if (total > 300)
        document.getElementById("pet").src = "img/verde.jpg"
    else if (total > 200)
        document.getElementById("pet").src = "img/cinza.jpg"
    else if (total > 100)
        document.getElementById("pet").src = "img/amarelo.jpg"
    else if (total > 50)
        document.getElementById("pet").src = "img/vermelho.jpg"

    sleep -= parseInt(time)
    eat -= parseInt(time)

    /* En esta parte controlamos la barra de estado de la mascota */
    document.getElementById('eat').style.width = eat + '%'
    document.getElementById('sleep').style.width = sleep + '%'


    /* En esta parte controlamos el porcentaje del estado de la mascota */
    document.getElementById('eat').innerHTML = eat + '%'
    document.getElementById('sleep').innerHTML = sleep + '%'
}

Start()