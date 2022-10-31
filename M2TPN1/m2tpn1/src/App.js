import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import ProductoId from './pages/ProductoId';
import Productos from './components/Productos';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Navbar from './layout/Navbar';
import firestore from './config/Firestore';
import Nav from 'react-bootstrap/Nav';

function App() {
  console.log(firestore);
  return (
    <>
      <Router>
        <Navbar />
        <Nav>
          <Nav.Item>
            <h1>
              <Nav.Link
                as={Link}
                to="/"
                style={{ textDecoration: 'none', color: 'black' }}
              >
                Tienda de Productos
              </Nav.Link>
            </h1>
          </Nav.Item>
        </Nav>
        <Routes>
          <Route path="/" index element={<Productos />} />
          <Route path="/busqueda/:busqueda" element={<Productos />} />
          <Route path="/sites/:id" element={<ProductoId />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
