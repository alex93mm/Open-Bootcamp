import React from 'react'
import PropTypes from 'prop-types'

// ? Muestra cada uno de los Candidatos ya filtrados, estructurados como fila de la tabla

function CandidateLine({ name, city, country, phone, email, tags}) {

    // ? Obtenemos el excedente de tags que no pueden ser mostradas por motivos de espaciado

    let tagExcedent = tags.length - 2;

    /**
     * Funcion que retorna las 2 primeras tag de cada alumno e indica las que no se pueden mostrar
     * @param {String} tag 
     * @param {number} index 
     * @returns elemento SPAN con la informacion de la tag
     */

    const drawTag = (tag, index) => {
        if(index < 2){
            return (<span key={index} className='candidates-table-tags'>{ tag }</span>);
        } else if (index === tags.length - 1) {
            return (<span key={index} className='candidates-table-tags'>+{tagExcedent}</span>);
        }
        return null;
    }

    return (
        <tr>
            <th>{ name }</th>
            <td>{ city }</td>
            <td>{ country }</td>
            <td>{ phone }</td>
            <td>{ email }</td>
            <td>
                {tags.map(
                    (tag, index) => {
                    return drawTag(tag, index);
                })
                }
            </td>
        </tr>
    )
}

CandidateLine.propTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(
        PropTypes.string.isRequired
        ).isRequired

}

export default CandidateLine;