import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// ? Estructura de los datos y control de formato de los campos de inicio de sesion

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Debe introducir un email válido ( example@domain.com )')
            .required('Debe introducir un email'),
        password: Yup.string()
            .required('Debe introducir una contrasena')
    }
)

// ? Valores por defecto

const initialValues = {
    email: '',
    password: '',
    remember: false
}

// ? Formulario de inicio de sesion, trabajado con Formik y Yup

export default function LoginForm() {

    /**
     *  Funcion para obtener token de acceso y almacearlo en la sessionData
     * @returns String tokenAcceso 
     */
    const loginMethod = () => {
        // Metodo de login
    }

  return (
    <Formik 
        initialValues={ initialValues }
        validationSchema={ loginSchema }
        onSubmit={ loginMethod }>
        {({ values, touches, errors, isSubmitting, handleChange, handleBlur }) => (
            <Form>
                <label 
                    className='field' 
                    htmlFor='email'>Email</label>
                <Field 
                    className='form-control form-control-lg field-text'
                    type='text' 
                    name='email' 
                    id='email' 
                    placeholder='Introduce tu correo'/>
                <label
                    className='field' 
                    htmlFor='password'>Contraseña</label>
                <Field 
                    className='form-control form-control-lg field-text'
                    type='password' 
                    name='password' 
                    id='password' 
                    placeholder='Introduce tu contraseña'/>
                <div className='row my-4'>
                    <div className='col'>
                        <Field 
                            className='mx-2'
                            type='checkbox' 
                            name='remember' 
                            id='remember' />
                        <label className='font-weigth-500' htmlFor='remember'>Recuérdame</label>
                    </div>
                    <div className='col'>
                        <span className='text-salient m-2'>He olvidado la contraseña</span>
                    </div>
                </div>
                <button 
                    className='btn form-control btn-login'
                    type='submit'>Iniciar sesion</button>
            {/* TODO: Controlar el evento onMouseOut para el aspecto de boton blanco... */}
                <ErrorMessage 
                    className='text-center error-message'
                    name='email' 
                    component='div'>
                </ErrorMessage>
                <ErrorMessage 
                    className='text-center error-message'
                    name='password' 
                    component='div'>
                </ErrorMessage>
            </Form>
        )}
    </Formik>
  )
}
