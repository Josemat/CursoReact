import React from 'react'

const Login = () => {
    return (
        <div>
            <h2>Ingrese a su Cuenta</h2>
            <form className="formLogin">
                <label>Usuario</label>
                <input type="text"></input>
                <label>Password</label>
                <input type="password"></input>
                <div><button type="submit">Login</button></div>
            </form>
        </div>
    )
}

export default Login