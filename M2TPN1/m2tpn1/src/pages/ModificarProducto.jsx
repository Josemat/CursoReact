import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useForm } from 'react-hook-form';
import RequestItemDetail from '../services/RequestItemDetail';
import firebase from '../config/Firestore'
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import Alerta from '../components/Alert';

const ModificarProducto = () => {
    const [alerta, setAlerta] = useState(false)
    const [variante, setVariante] = useState('success')
    const [texto, setTexto] = useState('Producto modificado correctamente!')
    const { id } = useParams()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const navigate = useNavigate()

    useEffect(() => {
        const result = async () => {
            const prod = await RequestItemDetail(id)
            const { title, price, descripcion, urlImagen } = prod.data()

            if (prod) {
                setValue("title", title)
                setValue("price", price)
                setValue("descripcion", descripcion)
                setValue("urlImagen", urlImagen)
            }
        }
        result()
    }, [id])
    const onSubmit = async data => {
        try {
            const res = await firebase.firestore().doc(`producto/${id}`).set(data)

            setAlerta(true)
            setVariante('success')

            {
                setTimeout(() => {
                    navigate('/')
                }, 3000);
            }

        } catch (error) {
            setAlerta(true)
            setTimeout(() => {
                setAlerta(false)
            }, 4000);
            setVariante('danger')
            setTexto(error.message)

        }
    }

    return (<>
        <div className='d-flex flex-column align-items-center'>
            {alerta && <Alerta variant={variante} text={texto} />}

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
                <Button className='w-50' variant="primary" type="submit">Modificar</Button>
                <div className='d-flex'>
                </div>
            </Form>
        </div>
    </>
    )
}

export default ModificarProducto