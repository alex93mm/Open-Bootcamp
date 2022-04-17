import React from 'react';

// ? Encabezado de la pagina principal, por el momento sin funcionalidad

const Header = () => {
    return (
        <div className='row p-4 justify-content-between'>
            <h2 className='login-title col-8 mt-2'>OpenBootcamp <span className='text-salient'>| Alumnos</span></h2>
            <div className='col-4 bg-white header-user-container'>
                <div className='row m-0'>
                    <div className='col-3 header-user-img'>
                    {/* Recibir imagen de usuario en sessionData */}
                    {/* <img src='' alt='user-avatar'></img> */}
                        <i className="bi bi-person-circle"></i>
                    </div> 
                    <div className='col-6 header-user-info'>
                        <span className='header-user-name'>
                        {/* Recibir nombre del usuario en sessionData */}
                            UserName
                        </span>
                    </div> 
                    <div className='col-3 header-user-arrow'>
                        <i className="bi bi-chevron-down"></i>
                    </div> 
                </div>
                
                
            </div>
        </div>
    );
}

export default Header;
