import './App.css';
import Producto from './components/Producto';
import {RequestApiML} from './services/RequestApiML'
function App() {
  const productos = RequestApiML()
  
  return<div className='grilla'>
     {productos && productos.map(element=><Producto data={element} />)}
  </div>
  
}

export default App;
