import React from 'react';
import CandidatesFilter from '../pure/CandidatesFilter';
import CandidatesTable from './CandidatesTable';

// ? Contenedor principal de los elementos de la pagina Candidatos
// ? Contiene:
// CandidatesTable -> Devuelve los candidatos en formato tabla
// CandidatesFilter -> Hace uso de filtros de busqueda para filtar los candidatos de la tabla

const CandidatesContainer = () => {
    return (
        <div className='container-fluid'>
            <div className='row mx-4'>
                <div className='col-9 candidates-container'>
                    <div className='row align-items-center justify-content-between'>
                        <div className='col-8'>
                            <div className='row align-items-center'>
                                <div className='col-1 mx-4'>
                                    <h3 className='candidates-page-title mx-2'>Alumnos</h3>
                                </div>
                                <div className='col-5 mx-2'>
                                    <i className='bi bi-search input-search-candidates-icon'></i>
                                    <input
                                        id=''
                                        name=''
                                        className='form-control mt-4 form-control-lg field-text input-search-candidates'
                                        placeholder='Buscar por Nombre, Email o Palabra clave...'/>
                                </div>
                                
                            </div>
                        </div>
                        <div className='col-2'>
                        {/* El boton add alumnos - candidatos abre una ventana modal para registrar un nuevo candidato en la base de datos */}
                            <button
                                className='btn btn-add-candidate'
                                // onClick=''
                                >
                                <i className="bi bi-plus-lg"></i>
                                <span className='btn-text'>Añadir alumnos</span>
                            </button>
                        </div>
                    </div>
                    <div className='row container mx-2'>
                        <CandidatesTable></CandidatesTable>
                    </div>
                </div>
                <div className='col-3 filter-container'>
                    <CandidatesFilter></CandidatesFilter>
                </div>
            </div>
        </div>
    );
}

export default CandidatesContainer;
