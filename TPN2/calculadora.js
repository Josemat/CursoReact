const input = document.querySelector('input');
const valor = document.querySelector('.resultado');
const valorAnterior = document.querySelector('.operacionPrevia');
const operacion = document.querySelectorAll('.operacion');
const boton = document.querySelectorAll('.numero');
const borrar = document.querySelector('.borrar');
const botonIgual = document.querySelector('.igual');

let resA = '';
let resB = '';
let resultado;
let operador = '';
//Se hace un foreach a cada boton, esperando al evento de click, cuando éste se clickea se agrega el valor al input
boton.forEach((element) => {
  element.addEventListener('click', () => {
    input.value += element.value;
  });
});
//nuevamente se hace un listener de click a los botones  'operadores' y cuando son clickeados se le da el valor a los siguientes elementos
operacion.forEach((element) => {
  element.addEventListener('click', () => {
    resA = input.value; //variable A para la operacion
    operador = element.value; // tipo de operacion
    valor.textContent = resA + operador; // se agrega el valor al input en pantalla
    input.value = ''; // se pone en cero el valor del input
  });
});
//cuando el boton de '=' es clickeado se procede a la funcion operacionDinamica
botonIgual.addEventListener('click', () => {
  operacionDinamica(resA, operador);
});

function operacionDinamica(numA, operacion) {
  resB = input.value; //esta toma el ultimo input y lo agrega a la variable resB
  //Luego se procede con el calculo
  if (operacion === '+') valor.textContent = parseInt(numA) + parseInt(resB);
  if (operacion === '-') valor.textContent = parseInt(numA) - parseInt(resB);
  if (operacion === '*') valor.textContent = parseInt(numA) * parseInt(resB);
  if (operacion === '/') valor.textContent = parseInt(numA) / parseInt(resB);
  valorAnterior.textContent = numA + operador + resB; // Se muestra el valor en el dom
  input.value = '';
}
//Cuando se clickea el boton de borrado se procede a borrar todas las variables
borrar.addEventListener('click', borrarResultado);
function borrarResultado() {
  resA = '';
  resB = '';
  operador = '';
  valor.textContent = '0';
  input.value = '';
}
