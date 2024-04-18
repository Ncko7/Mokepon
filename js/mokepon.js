function iniciarJuego() {
    let botonMascota = document.getElementById('btn-mascota');
    botonMascota.addEventListener('click', seleccionarMascotaJugagor);
}

function seleccionarMascotaJugagor() {
    
    alert('seleccionaste tu mascota');
}





window.addEventListener('load', iniciarJuego)