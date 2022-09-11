//Selecciono los elementos a escuchar o modificar
const entrada = document.querySelector('.entrada');
const boton = document.querySelector('.adivina');
const reset = document.querySelector('.reset');
const resultado = document.querySelector('.resultado');
const ayuda = document.querySelector('small');

//Genero el numero random
const numeroRandom = Math.floor(Math.random() * 10);
console.log(`Vos que no aguantás la intriga, el numero es: ${numeroRandom}`); // Si quieren hacer trampa y ver cual es el numero en consola jaja
//Establecemos la cantidad de veces a ejecutar
let intentos = 3;
ayuda.textContent = ` (Tienes ${intentos} intentos)`;

//Controlamos si la entrada de valor es valida
entrada.addEventListener('input', esValido);
function esValido() {
  entrada.value < 10
    ? boton.removeAttribute('disabled') //Si es valida habilitamos el boton de adivina
    : boton.setAttribute('disabled', null); // Si no es valida lo deshabilitamos
}

//De aqui se controla el click de adivinar
boton.addEventListener('click', adivina);
function adivina() {
  if (intentos > 0 && intentos <= 3) {
    // se controla que este dentro de los intentos
    if (parseInt(entrada.value) === numeroRandom) ganaste(); // Si el numero es, se llama a la funcion ganaste()
  }
  if (intentos === 1) perdiste(); // Si los intentos llegan a 1 (que es el ultimo) se pierde
  intentos -= 1; // Se resta un intento
  ayuda.textContent = ` (Tienes ${intentos} intentos)`;
  entrada.value = '';
}
function ganaste() {
  const ganaste = document.createElement('h2'); // Creamos un elemento H2
  ganaste.textContent = `Felicidades, acertaste!🎉`; // Le agregamos el texto
  resultado.appendChild(ganaste); // Agregamos el elemento creado a el html
  disableBotones();
}
function perdiste() {
  const perdiste = document.createElement('h2');
  perdiste.textContent = `Perdiste😔! el numero era: ${numeroRandom}`; // Se le agrega dinamicamente el Valor adivinado
  resultado.appendChild(perdiste);
  disableBotones();
}
//Una funcion para dejar inactivos los botones cuando se pierde o se gana
function disableBotones() {
  entrada.setAttribute('disabled', null); //se inactiva el input y el boton
  boton.setAttribute('disabled', null);
}
//Se reinicia la pagina asi se crea otro numero random
reset.addEventListener('click', () => {
  location.reload();
});
