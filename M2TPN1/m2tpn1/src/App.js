import React, { useEffect } from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import './App.css';
import ProductoId from './pages/ProductoId';
import Productos from './components/Productos';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Busqueda from './components/Busqueda';
import Navbar from './layout/Navbar';



function App() {
  return <>
    <Router>
      <Navbar/>
    <Link to="/">
    <h1>Tienda de productos</h1>
    </Link>
      <Routes>
        <Route path='/' index element={<Productos/>}/>
          <Route path='/busqueda/:busqueda' element={<Productos/>}/>
          <Route path='/sites/:id' element={<ProductoId/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/registro' element={<Registro/>}/>
      </Routes>
    </Router>
    
  </>
  
}

export default App;
