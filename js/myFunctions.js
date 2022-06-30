let empate = 0, g1 = 0, g2 = 0;
let contador = 0, siguiente = 1;
let timer;

/**
 * Aplicación para jugar a Piedra - Papel - Tijeras contra la maquina
 * 
 * @author Oscar Monforte Prades
 * @version 1.0
 */

/**
 * Función que indica la elección que ha hecho el player
 * 
 * @param {Number} jugada número de la jugada del player
 */
function hacerJugada(jugada) {
    document.getElementById("jugadaVs").innerHTML = "<br>VS";
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn3").disabled = true;

    switch (jugada) {
        case 1:
            document.getElementById("jugadaPlayer").innerHTML = "YOU<br><i class='fa-solid fa-hand-back-fist'></i>";
            break;

        case 2:
            document.getElementById("jugadaPlayer").innerHTML = "YOU<br><i class='fa-solid fa-hand'></i>";
            break;

        case 3:
            document.getElementById("jugadaPlayer").innerHTML = "YOU<br><i class='fa-solid fa-hand-scissors'></i>";
            break;

        default:
            break;
    }

    contador = 0;
    siguiente = 1;
    timer = setInterval(ruleta, 100, jugada);
}

/**
 * Funcion que hace el efecto carrousel de las imagenes
 * 
 * @param {Number} jugada número de la jugada del player
 */
function ruleta(jugada) {
    if (contador < 20) {
        contador++;

        switch (siguiente) {
            case 1:
                document.getElementById("jugadaPc").innerHTML = "PC<br><i class='fa-solid fa-hand-back-fist'></i>";
                siguiente++;
                break;

            case 2:
                document.getElementById("jugadaPc").innerHTML = "PC<br><i class='fa-solid fa-hand'></i>";
                siguiente++;
                break;

            case 3:
                document.getElementById("jugadaPc").innerHTML = "PC<br><i class='fa-solid fa-hand-scissors'></i>";
                siguiente = 1;
                break;

            default:
                break;
        }
    } else {
        clearTimeout(timer);
        resultado(jugada);
    }
}

/**
 * Función que muestra el resultado de la jugada
 * 
 * @param {Number} jugada número de la jugada del player
 */
function resultado(jugada) {
    let jugadaMaquina = parseInt((Math.random() * 10) % 3) + 1;

    switch (jugadaMaquina) {
        case 1:
            document.getElementById("jugadaPc").innerHTML = "PC<br><i class='fa-solid fa-hand-back-fist'></i>";
            break;

        case 2:
            document.getElementById("jugadaPc").innerHTML = "PC<br><i class='fa-solid fa-hand'></i>";
            break;

        case 3:
            document.getElementById("jugadaPc").innerHTML = "PC<br><i class='fa-solid fa-hand-scissors'></i>";
            break;

        default:
            break;
    }

    if (jugada == jugadaMaquina) {
        empate++;
        document.getElementById("jugadaPlayer").innerHTML += "<br><i class='empate'>DRAW</i>";
        document.getElementById("jugadaPc").innerHTML += "<br><i class='empate'>DRAW</i>";
        // alert("Empate");
    }

    else if ((jugada == 1 && jugadaMaquina == 2) ||
        (jugada == 2 && jugadaMaquina == 3) ||
        (jugada == 3 && jugadaMaquina == 1)) {
        g2++;
        document.getElementById("jugadaPlayer").innerHTML += "<br><i class='pierde'>LOSE</i>";
        document.getElementById("jugadaPc").innerHTML += "<br><i class='gana'>WIN</i>";
        // alert("Lá máquina gana!!");
    }
    else {
        g1++;
        document.getElementById("jugadaPlayer").innerHTML += "<br><i class='gana'>WIN</i>";
        document.getElementById("jugadaPc").innerHTML += "<br><i class='pierde'>LOSE</i>";
        // alert("Felicidades!! Has ganado");
    }

    document.getElementById("j1").innerHTML = g1;
    document.getElementById("j2").innerHTML = g2;
    document.getElementById("em").innerHTML = empate;

    document.getElementById("btn1").disabled = false;
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn3").disabled = false;
}