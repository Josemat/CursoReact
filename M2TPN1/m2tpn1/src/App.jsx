import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductoId from './pages/ProductoId';
import Productos from './components/Productos';
import Login from './pages/Login';
import Checkout from './pages/Checkout';
import Registro from './pages/Registro';
import Navbar from './layout/Navbar';
import AltaProducto from './pages/AltaProducto';
import ModificarProducto from './pages/ModificarProducto';
import AuthProvider from './context/AuthContext';

function App() {
  return (
    <>
      <Router>
        <AuthProvider>

          <Navbar />
          <h1 className='text-center m-5' style={{ textDecoration: 'none', color: 'black' }}>
            Tienda de Emmanuel en Firebase
          </h1>

          <Routes>
            <Route path="/" index element={<Productos />} />
            <Route path="/busqueda/:busqueda" element={<Productos />} />
            <Route path="/sites/:id" element={<ProductoId />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/productos/alta" element={<AltaProducto />} />
            <Route path="/producto/modificar/:id" element={<ModificarProducto />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
