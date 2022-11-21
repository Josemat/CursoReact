import React, { useState } from 'react'
export const AuthContext = React.createContext()


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({ name: "" || localStorage.getItem('name'), lastName: "" || localStorage.getItem('lastName'), uid: "" || localStorage.getItem('uid') })
    const login = ({ name, lastName, uid }) => {
        setUser({ name, lastName, uid })
        localStorage.setItem('name', name)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('uid', uid)
    }
    const logOut = () => {
        setUser({ name: "", lastName: "", uid: "" })
        localStorage.clear('name')
        localStorage.clear('uid')

    }
    return (
        <AuthContext.Provider value={{ user, login, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider