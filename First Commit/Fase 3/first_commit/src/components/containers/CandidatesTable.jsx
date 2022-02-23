import React from 'react';
import CandidateLine from '../pure/CandidateLine';

// ! Array de ejemplo de datos

const candidates = [
    {
        name: "Alejandro Martinez Martinez",
        city: 'Madrid',
        country: 'Espana',
        phone: '+34 645 56 54 64',
        email: 'alejandro93mm@gmail.com',
        tags: ['HTML&CSS','ANGULAR','REACT','SPRING']
    },
    {
        name: "Silvia Rufete Martinez",
        city: 'Alicante',
        country: 'Espana',
        phone: '+34 619 21 22 72',
        email: 'ellaesasi@gmail.com',
        tags: ['HTML&CSS','JAVASCRIPT','REACT']
    },
    {
        name: "Jose Joaquin Rodriguez Penalva",
        city: 'Bilvao',
        country: 'Espana',
        phone: '+34 666 77 55 44',
        email: 'robertoisreal@gmail.com',
        tags: ['REACT','SPRING']
    },
    {
        name: "Angeles Canalejas Martinez",
        city: 'Madrid',
        country: 'Espana',
        phone: '+34 623 45 67 78',
        email: 'abbychuelalamalota@gmail.com',
        tags: ['JAVA','HIBERNATE','SPRING']
    },
    {
        name: "Eulalio Martinez Perez",
        city: 'Madrid',
        country: 'Espana',
        phone: '+34 644 33 45 66',
        email: 'heheheheh@gmail.com',
        tags: ['HTML&CSS','ANGULAR','REACT','SPRING']
    }
]

// ? Tabla para mostrar la informacion recibida de los candidatos, organizada por lineas de candidato

const CandidatesTable = () => {

    const filterCandidates = (candidates, filter) => {
        return candidates;
    }

    return (
        <table className='candidates-table table table-hover bg-white'>
            <thead>
                <tr>
                    <th>NOMBRE <i className="bi bi-arrow-down-up"></i></th>
                    <th>CIUDAD <i className="bi bi-arrow-down-up"></i></th>
                    <th>PAIS <i className="bi bi-arrow-down-up"></i></th>
                    <th>TELEFONO <i className="bi bi-arrow-down-up"></i></th>
                    <th>CORREO ELECTRONICO <i className="bi bi-arrow-down-up"></i></th>
                    <th>ETIQUETAS <i className="bi bi-arrow-down-up"></i></th>
                </tr>
            </thead>
            <tbody>
            {/* Se obtienen los candidatos a traves de State y se les realiza un filtrado para mostrar los requeridos */}
                { filterCandidates(candidates).map((candidate, index) => (
                    <CandidateLine
                        key={ index }
                        name = { candidate.name }
                        city = { candidate.city }
                        country = { candidate.country }
                        phone = { candidate.phone }
                        email = { candidate.email }
                        tags= { candidate.tags }
                    />
                    ))
                }
            </tbody>
        </table>
    );
}

export default CandidatesTable;
