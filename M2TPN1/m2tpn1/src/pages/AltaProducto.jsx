import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import firebase from '../config/Firestore'

const AltaProducto = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async data => {
        try {
            const res = await firebase.firestore().collection('producto').add(data)
            console.log(res)

        } catch (error) {
            console.error(error)

        }
    }

    return (

        <div className='d-flex flex-column align-items-center'>

            <h2 className='mb-4'>Ingresá el producto que quieras ofrecer</h2>

            <Form className='p-1 w-50' onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa el titulo de tu producto" className='mb-2'{...register("title", { required: true })} />
                    {errors.title && <span>El título es requerido</span>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="text" placeholder="ingresa el precio" className='mb-2' {...register('price', { required: true })} />
                    <Form.Text>
                        {errors.price && <p>El precio es requerido.</p>}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>URL imagen</Form.Label>
                    <Form.Control type="text" placeholder="http://algorandom.com" {...register('urlImagen')} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicName2">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa la descripcion del mismo" className='mb-2' {...register("descripcion")} />
                </Form.Group>
                <Button className='w-50' variant="primary" type="submit">Crear producto</Button>
                <div className='d-flex'>
                </div>
            </Form>
        </div>
    )
}

export default AltaProducto