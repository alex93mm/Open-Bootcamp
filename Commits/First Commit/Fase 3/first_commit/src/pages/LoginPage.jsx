import React from 'react';
import LoginForm from '../components/pure/forms/LoginForm';


// ? Pagina principal para inicio de sesion

const LoginPage = () => {
    return (
        <div className='container-fluid h-100 login-page'>
            <div className='row h-100'>                
                <div className='col-5 align-items-center bg-white login-form-container'>
                    <div className='login-form'>
                        <h2 className='login-title'>OpenBootcamp <span className='text-salient'>| Alumnos</span></h2>
                        {/* Adjuntamos formulario de inicio de sesion */}
                        <LoginForm></LoginForm>
                    </div>
                    <footer className='footer-rights'>
                        <div>Copyright &#169; 2021 Open Bootcamp SL, Imagina Group</div>
                        <div>Todos los derechos reservados</div>
                        <div>Politica de privacidad</div>
                    </footer>
                </div>
                <div className='col-7 empty-col'>
                    {/* Empty col */}
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
