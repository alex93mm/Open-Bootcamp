import React from 'react'
import PropTypes from 'prop-types'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
    }
);

const LoginForm = ({ logged, fetching, onLogin }) => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <Formik
            initialValues={ initialCredentials }
            validationSchema={ loginSchema }
            onSubmit={
                async(values) => {
                    onLogin(values.email, values.password)
                }
            }>
        {({ values, touches, errors, isSubmitting, handleChange, handleBlur }) => (
            <Form>
                <label htmlFor='email'>Email</label>
                <Field 
                    type='text' 
                    name='email' 
                    id='email' 
                    placeholder='Email'/>
                <ErrorMessage name='email' component='div'></ErrorMessage>
                <label htmlFor='password'>Password</label>
                <Field 
                    type='password' 
                    name='password' 
                    id='password' 
                    placeholder='password'/>
                <ErrorMessage name='password' component='div'></ErrorMessage>
                <button type='submit'>Login</button>
                {fetching ? (<p>LOADING...</p>) : null}
                { isSubmitting ? (<p>Login your credentials...</p>) : null}
            </Form>
        )}
        

        </Formik>
    )
}

LoginForm.propTypes = {
    logged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
}

export default LoginForm
