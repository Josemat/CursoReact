import React, { Component } from "react";
import Boton from "./Boton";
import Cantidad from "./Cantidad";
import Descripcion from './Descripcion';
import Imagen from "./Imagen";
import NombreProducto from './NombreProducto';
import Precio from './Precio';
import Sku from './Sku'
class producto extends Component {
    render() {
        return <div className="producto">
            <Imagen />
            <NombreProducto producto='Zapatillas Adidas' />
            <Descripcion />
            <Precio />
            <Sku />
            <Cantidad />
            <Boton />
        </div>
    }
}
export default producto