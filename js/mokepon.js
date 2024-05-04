let ataqueJugador; 
let ataqueEnemigo;

//Funcion para iniciar el juego
function iniciarJuego() {
    let botonMascota = document.getElementById('btn-mascota');
    botonMascota.addEventListener('click', seleccionarMascotaJugagor);

    let botonFire = document.getElementById('btn-fire');
    botonFire.addEventListener('click', ataqueFire);

    let botonWater = document.getElementById('btn-water');
    botonWater.addEventListener('click', ataqueWater);

    let botonEarth = document.getElementById('btn-earth');
    botonEarth.addEventListener('click', ataqueEarth);

    let botonAir = document.getElementById('btn-air');
    botonAir.addEventListener('click', ataqueAir);

    let botonLigthing = document.getElementById('btn-ligthing');
    botonLigthing.addEventListener('click', ataqueLighting);

}

//Funcion para elegir la mascota
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

//Funcion para elegir la mascota aleatoria enemigo
function seleccionarMascostaEnemigo() {
    let mascotaAleatoria = aleatorio(1, 6);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');

    if (mascotaAleatoria == 1)  {
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    } else if (mascotaAleatoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    } else if (mascotaAleatoria == 3) {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    } else if (mascotaAleatoria == 4) {
        spanMascotaEnemigo.innerHTML = 'Langostelvis';
    } else if (mascotaAleatoria == 5) {
        spanMascotaEnemigo.innerHTML = 'Tucapalma';
    } else {
        spanMascotaEnemigo.innerHTML = 'Pydos';
    }
}
// Funciones para los ataques de las mascotas de nuestro jugadores
function ataqueFire() {
    ataqueJugador = 'Fire 🔥';
    ataqueAleatorioEnemigo();
}
function ataqueWater() {
    ataqueJugador = 'Water 💧';
    ataqueAleatorioEnemigo();
}
function ataqueEarth() {
    ataqueJugador = 'Earth 🌱'
    ataqueAleatorioEnemigo();
} 
function ataqueAir() {
    ataqueJugador = 'Air 🌪️';
    ataqueAleatorioEnemigo();
}
function ataqueLighting() {
    ataqueJugador = 'Ligthing ⚡';
    ataqueAleatorioEnemigo();
}

//Funcion para los ataques aleatorios de nuestros enemigos
function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 5);

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fire 🔥';
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Water 💧';
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = 'Earth 🌱';
    } else if (ataqueAleatorio == 4) {
        ataqueEnemigo = 'Air 🌪️'; 
    } else {
        ataqueEnemigo = 'Ligthing ⚡';
    }

    crearMensaje()
}

function crearMensaje() {
    let sectionMensajes = document.getElementById('mensajes');

    let parrafo = document.createElement('p')
    parrafo.innerHTML = "Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + "pendiente...."

    sectionMensajes.appendChild(parrafo)
}

//Funcion aleatoria para elegir la mascota del enemigo
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//Funcion para activiar los botones del DOM
window.addEventListener('load', iniciarJuego);