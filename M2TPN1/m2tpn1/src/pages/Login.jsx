import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form'
import firebase from '../config/Firestore'

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            const response = await firebase.auth.signInWithEmailAndPassword(data.email, data.password)
            console.log(response.user.uid)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (<>
        <div className='d-flex flex-column align-items-center'>
            <h2 className='mb-4'>Ingresá a tu cuenta y accedé a los mayores descuentos</h2>
            <Form className='p-1 w-50' onSubmit={handleSubmit(onSubmit)} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" className='mb-2' {...register('email', { required: true })} />
                    <Form.Text>
                        {errors.email && <p>El correo electrónico es requerido.</p>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="******" {...register('password', { required: true, minLength: 6, maxLength: 10 })} />
                    <Form.Text>
                        {errors.password?.type === 'required' && <span>Este campo es obligatorio</span>}
                        {errors.password?.type === 'minLength' && <span>La contraseña debe contener al menos 6 caracteres</span>}
                        {errors.password?.type === 'maxLength' && <span>La contraseña debe tener como máximo 10 caracteres</span>}
                    </Form.Text>
                </Form.Group>

                <div className='d-flex'>
                    <Button className='w-50' variant="primary" type="submit" >
                        Login
                    </Button>
                </div>
            </Form>
        </div>
    </>

    )
}

export default Login