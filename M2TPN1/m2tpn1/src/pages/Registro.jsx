import React from 'react'

const Registro = () => {
    return (
        <div>
            <h2>Cree su Cuenta</h2>
            <form className="formLogin">
                <label>Usuario</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="password"></input>
                <label>Repita Password</label>
                <input type="password"></input>

                <div>
                    <button type="submit">Crear Cuenta</button>
                </div>
            </form>
        </div>
    )
}

export default Registro