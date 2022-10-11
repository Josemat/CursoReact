import './App.css';
import { useState } from 'react';
function App() {
  const [comprado, setComprado] = useState(false);
  const nombreProducto = 'NFT de Lorem Picsum';
  const [cantidad, setCantidad] = useState(~~(Math.random() * 10));
  return (
    <div className="producto">
      <img
        src="https://picsum.photos/200/200"
        alt="imagen random"
        className="imagen"
      />
      <h3>{nombreProducto}</h3>
      <div className="descripcion">Descripcón breve de un producto random</div>
      <div className="precio">$5000</div>
      <p className="sku">S.K.U: {~~(Math.random() * 10000)}000</p>
      <p className="cantidad">Cantidad: {cantidad}</p>
      <button
        onClick={() => {
          setComprado(true);
          setCantidad(cantidad - 1);
          setTimeout(() => {
            setComprado(false);
          }, 4000);
        }}
      >
        Comprar
      </button>
      {comprado && (
        <>
          <h2>Felicidades! acabas de comprar {nombreProducto}</h2>
        </>
      )}
    </div>
  );
}

export default App;
