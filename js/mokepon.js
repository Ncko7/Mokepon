let ataqueJugador 

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

function ataqueFire() {
    ataqueJugador = 'Fire 🔥';
    alert(ataqueJugador);
}
function ataqueWater() {
    ataqueJugador = 'Water 💧';
    alert(ataqueJugador);
}
function ataqueEarth() {
    ataqueJugador = 'Earth 🌱'
    alert(ataqueJugador);
} 
function ataqueAir() {
    ataqueJugador = 'Air 🌪️';
    alert(ataqueJugador);
}
function ataqueLighting() {
    ataqueJugador = 'Ligthing ⚡';
    alert(ataqueJugador);
}

//Funcion aleatoria para elegir la mascota del enemigo
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}


//Funcion para activiar los botones del DOM
window.addEventListener('load', iniciarJuego);