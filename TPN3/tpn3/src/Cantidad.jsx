import React, { Component } from "react";

class Cantidad extends Component {
    render() {
        return (
            <p className="cantidad">Cantidad: {~~(Math.random() * 10)}</p >
        )
    }
}
export default Cantidad