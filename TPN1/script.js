  const formulario = document.querySelector('#form');
  const valor = document.querySelector('#tipoSeguro')
  const resultado = document.querySelector('.resultado')

  const tipo = valor.addEventListener('change',(e)=>{
    e.preventDefault()
    borrarPrecio()
    const precio = document.createElement('h2')
    precio.textContent = e.target.value
    resultado.appendChild(precio)
  })
  formulario.addEventListener("submit", agregarValor);
  function agregarValor(e) {
    e.preventDefault();
    const boton = document.querySelector('button')
    boton.textContent = 'Consulta enviada!'
  }
  const borrarPrecio = ()=>{
    while(resultado.firstElementChild){
      resultado.removeChild(resultado.firstElementChild)
    }
  }
