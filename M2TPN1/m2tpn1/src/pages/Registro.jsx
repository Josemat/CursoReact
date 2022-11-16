import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import firebase from '../config/Firestore'

const Registro = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            const respuesta = await firebase.auth.createUserWithEmailAndPassword(data.email, data.password)
            console.log(respuesta.user.uid)
            if (respuesta.user.uid) {
                const res = await firebase.firestore().collection('usuarios').add({
                    name: data.name,
                    lastName: data.lastName,
                    uid: respuesta.user.uid
                })
                console.log(res)
            }
        } catch (error) {
            console.error(error)

        }
    }

    return (

        <div className='d-flex flex-column align-items-center'>

            <h2 className='mb-4'>Creá tu cuenta para adquirir a los mejores productos</h2>

            <Form className='p-1 w-50' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre" className='mb-2'{...register("name", { required: true })} />
                    {errors.name && <span>El nombre es requerido</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName2">
                    <Form.Label>Apellido</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu Apellido" className='mb-2' {...register("lastName")} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo electrónico</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className='mb-2' {...register('email', { required: true })} />
                    <Form.Text>
                        {errors.email && <p>El correo electrónico es requerido.</p>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="******" {...register('password', { required: true, minLength: 6, maxLength: 10 })} />
                    <Form.Text>
                        {errors.password?.type === 'required' && <span>Este campo es obligatorio</span>}
                        {errors.password?.type === 'minLength' && <span>La contraseña debe contener al menos 6 caracteres</span>}
                        {errors.password?.type === 'maxLength' && <span>La contraseña debe tener como máximo 10 caracteres</span>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Repita contraseña</Form.Label>
                    <Form.Control type="password" placeholder="******" />
                </Form.Group>
                <Button className='w-50' variant="primary" type="submit">Crear usuario</Button>
                <div className='d-flex'>
                </div>
            </Form>
        </div>
    )
}

export default Registro