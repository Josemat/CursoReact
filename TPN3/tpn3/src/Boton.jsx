import React, { Component } from "react";
class Boton extends Component {
    render() {
        return <button onClick={() => alert('Felicidades! compraste el producto!')}>Comprar</button>
    }
}
export default Boton