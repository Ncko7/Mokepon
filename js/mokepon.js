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


   if (inputHipodoge.checked) {
    alert('Seleccionaste a hipodoge');
   } else if (inputCapipepo.checked) {
    alert('Seleccionaste a capipepo');
   } else if (inputRatigueya.checked) {
    alert('Seleccionaste a ratigueya');
   } else if (inputLangostelvis.checked) {
    alert('Seleccionaste a langostelvis');
   } else if (inputTucapalma.checked) {
    alert('Seleccionaste a tucapalama');
   } else if (inputPydos.checked) {
    alert('Seleccionaste a pydos');
   } else {
    alert('Selecciona una mascota')
   }
}


window.addEventListener('load', iniciarJuego);