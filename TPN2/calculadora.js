const valor = document.querySelector('.resultado');
const valorAnterior = document.querySelector('.operacionPrevia');
let resA = '';
let resB = '';
let resultado;
let operador = '';
const boton = document.querySelectorAll('.numero');
boton.forEach((element) => {
  element.addEventListener('click', () => {
    if (operador !== '') {
      resB += element.value;
    } else {
      resA += element.value;
    }
    valor.textContent += element.value;
  });
});
const operacion = document.querySelectorAll('.operacion');
operacion.forEach((element) =>
  element.addEventListener('click', () => {
    if (element.value === '+') {
      operador = '+';
      valor.textContent += operador;
    }
    if (element.value === '=') {
      valorAnterior.textContent = resA + operador + resB;
      valor.textContent = parseInt(resA) + parseInt(resB);
    }
  })
);
const borrar = document
  .querySelector('.borrar')
  .addEventListener('click', borrarResultado);
function borrarResultado() {
  resA = '';
  resB = '';
  operador = '';
  valor.textContent = '0';
  valorAnterior.textContent = '';
}
