function iniciarJuego() {
    let botonMascota = document.getElementById('btn-mascota');
    botonMascota.addEventListener('click', seleccionarMascotaJugagor);

}

function seleccionarMascotaJugagor() {
    let inputHipodoge = document.getElementById('hipodoge');
    let inputCapipepo = document.getElementById('capipepo');
    let inputRatigueya = document.getElementById('ratigueya');
    let inputLangostelvis = document.getElementById('langostelvis');
    let inputTucapalma = document.getElementById('tucapalama');
    let inputPydos = document.getElementById('pydos');
    let spanMascotaJugador = document.getElementById('mascota-jugador')


   if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
   } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
   } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
   } else if (inputLangostelvis.checked) {
    spanMascotaJugador.innerHTML = 'Langostelvis';
   } else if (inputTucapalma.checked) {
    spanMascotaJugador.innerHTML = 'Tucapalma';
   } else if (inputPydos.checked) {
    spanMascotaJugador.innerHTML = 'Pydos';
   } else {
    alert('Selecciona una mascota')
   }
   seleccionarMascostaEnemigo();
}

function seleccionarMascostaEnemigo() {
    let ataqueAleatorio = aleatorio(1, 6);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (ataqueAleatorio == 1)  {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (ataqueAleatorio == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else if (ataqueAleatorio == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    } else if (ataqueAleatorio == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis';
    } else if (ataqueAleatorio == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma';
    } else {
        spanMascotaEnemigo.innerHTML = 'Pydos';
    }
}
//Funcion aleatoria para elegir la mascota del enemigo
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//Funcion de escucha del evento load del documento e inicia el juego
window.addEventListener('load', iniciarJuego);