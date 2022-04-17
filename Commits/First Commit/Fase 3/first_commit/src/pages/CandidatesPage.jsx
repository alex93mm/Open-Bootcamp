import React from 'react';
import CandidatesContainer from '../components/containers/CandidatesContainer';
import Header from '../components/pure/Header';

// ? Pagina principal de la App (Listado de candidatos y sus filtros)

const CandidatesPage = () => {
    return (
        <div className='container-fluid h-100 bg-light'>
            <Header></Header>
            <CandidatesContainer></CandidatesContainer>
        </div>
    );
}

export default CandidatesPage;
