import React, { Component } from "react";


class NombreProducto extends Component {

    render() {
        const nombreProducto = this.props.producto
        return <div>
            <h3>{nombreProducto}</h3>
        </div>
    }
}

export default NombreProducto