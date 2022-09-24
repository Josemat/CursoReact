import React, { Component } from "react";

class formulario extends Component {
    render() {
        function handleSubmit(e) {
            e.preventDefault()
            alert(`Perfecto ${e.target.form[0].value}! formulario enviado!`)
        }
        return (
            <form className="formulario">
                <label>Nombre</label>
                <input placeholder="Nombre" type="Text"></input>
                <label>Apellido</label>
                <input placeholder="Apellido" type="Text"></input>
                <label>Email</label>
                <input placeholder="Email" type="email"></input>
                <label>Teléfono</label>
                <input placeholder="Teléfono" type="number"></input>
                <label>Password</label>
                <input placeholder="Password" type="password"></input>
                <label>Confirmar Password</label>
                <input placeholder="Password" type="password"></input>
                <button onClick={handleSubmit}>Enviar Formulario</button>
            </form>
        )
    }
}
export default formulario