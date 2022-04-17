import React, { useRef, useState } from 'react';
import { getCities } from '../../context/cities.enum';
import { arrayCountries } from '../../context/country.enum';
import { arrayTag } from '../../context/tags.enum';

// ? Filtro de candidatos a aplicar

const CandidatesFilter = () => {
    
    const initialFilter = {
        city: '',
        country: '',
        tags: [],
        remote: true,
        presential: true,
        traslade: null
    };

    // Array que contiene los valores de las tags selecionadas en el filtro modificado dinamicamente
    const [filter, setFilter] = useState(initialFilter);

    const selectFieldTag = useRef();
    const selectFieldCountry = useRef();
    const selectFieldCity = useRef();
    const checkFieldPresential = useRef();
    const checkFieldRemote = useRef();
    const radioFieldTrasladeYes = useRef();
    const radioFieldTrasladeNo = useRef();
    // //**
    //  * Funcion que anade las tags seleccionadas para que sean mostradas al usuario
    //  * @param {String} tag 
    //  */
    const addTag = () => {
        if(!filter.tags.includes(selectFieldTag.current.value)){
            const tempFilter = {...filter};
            tempFilter.tags.push(selectFieldTag.current.value);     
            setFilter(tempFilter);
        }
        // TODO: Regresar al valor por defecto
    }

    const removeTag = (index) => {
        const tempFilter = {...filter};
        tempFilter.tags.splice(index, 1);
        setFilter(tempFilter);
    }

    const addCountry = () => {
        const tempFilter = {...filter};
        tempFilter.country = selectFieldCountry.current.value;
        setFilter(tempFilter);
    }

    const addCity = () => {
        const tempFilter = {...filter};
        tempFilter.city = selectFieldCity.current.value;
        setFilter(tempFilter);
    }

    const addRemote = () => {
        const tempFilter = {...filter};
        if(!checkFieldPresential.current.checked && !checkFieldRemote.current.checked){
            tempFilter.presential = true;
            tempFilter.remote = true;
        } else {
            tempFilter.presential = checkFieldPresential.current.checked;
            tempFilter.remote = checkFieldRemote.current.checked;
        }
        setFilter(tempFilter);
    }

    const addTraslade = () => {
        const tempFilter = {...filter};
        if((radioFieldTrasladeYes.current.checked && radioFieldTrasladeNo.current.checked) || (!radioFieldTrasladeYes.current.checked && !radioFieldTrasladeNo.current.checked)){
            tempFilter.traslade = null;
        } else if(radioFieldTrasladeYes.current.checked){
            tempFilter.traslade = true;
        } else {
            tempFilter.traslade = false;
        }
        setFilter(tempFilter);
    }

    const resetFilter = () => {
        setFilter(initialFilter);
        selectFieldTag.current.value = 'Escribe para buscar...';
        selectFieldCountry.current.value = 'Escribe para buscar...'; 
        selectFieldCity.current.value = 'Escribe para buscar...';
        checkFieldPresential.current.checked = false;
        checkFieldRemote.current.checked = false;
        radioFieldTrasladeYes.current.checked = false;
        radioFieldTrasladeNo.current.checked = false;
    }

    return (
        <div className='container-fluid bg-white candidates-filter-container'>
            <div className='row my-4 justify-content-between'>
                <div className='col-11'>
                    <h3 className='candidates-page-title'>Filtros de busqueda</h3>
                </div>
                <div className='col-1'>
                {/* Reset Button */}
                    <i 
                        onClick={ resetFilter }
                        className="bi bi-trash3 text-green pointer"></i>
                </div>
            </div>
            <div className='row'>
                <div className='col-12 candidates-filter-select-tags'>
                    <label 
                        className='field' 
                        htmlFor='select-tags'>Etiquetas</label>
                    <select 
                        className="form-select form-select-lg field-text" 
                        ref={ selectFieldTag }
                        onChange={ addTag } >
                        <option hidden defaultValue=''>Escribe para buscar...</option>
                        { arrayTag.map((tag, index) => (
                            <option 
                                key={ index }
                                value={ tag }>
                                    { tag }
                                </option>
                        ))}
                    </select>
                    <div className='col-12 row mx-1 candidates-filter-selected-tags'>
                        {filter.tags.map((tag,index) => (
                            <div key={index}
                                className='col-2 candidates-filter-tag-span' 
                                onClick={
                                    () => removeTag(index)
                                }>
                                
                                    {tag} <i className="bi bi-x"></i>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <label 
                        className='field' 
                        htmlFor='select-country'>País</label>
                    <select 
                        className="form-select form-select-lg field-text" 
                        ref={ selectFieldCountry }
                        onChange={ addCountry } >
                        <option hidden defaultValue=''>Escribe para buscar...</option>
                        { arrayCountries.map((country, index) => (
                            <option 
                                key={ index }
                                value={ country }>
                                    { country }
                                </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <label 
                        className='field' 
                        htmlFor='select-city'>Ciudad</label>
                    <select 
                        className="form-select form-select-lg field-text" 
                        ref={ selectFieldCity }
                        onChange={ addCity } >
                        <option hidden defaultValue=''>Escribe para buscar...</option>
                        { getCities(filter.country).map((city, index) => (
                            <option 
                                key={ index }
                                value={ city }>
                                    { city }
                                </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className='row mb-4'>
                <label 
                    className='field' 
                    htmlFor='select-tags'>Presencial / a distancia</label>
                <div className='col'>
                    <div className='form-check mb-2'>
                        <input 
                            ref={ checkFieldPresential }
                            onClick = { addRemote }
                            className='form-check-input' 
                            type='checkbox' 
                            id='presential-checkbox'/>
                        <label className='form-check-label' htmlFor='presential-checkbox'>
                            Presencial
                        </label>
                    </div>
                    <div className='form-check'>
                        <input 
                            ref={ checkFieldRemote }
                            onClick = { addRemote }
                            className='form-check-input' 
                            type='checkbox' 
                            id='remote-checkbox'/>
                        <label className='form-check-label' htmlFor='remote-checkbox'>
                            En remoto
                        </label>
                    </div>
                </div>
            </div>
            <div className='row mb-4'>
                <label 
                    className='field' 
                    htmlFor='select-tags'>Posibilidad traslado</label>
                <div className='col'>
                    <div className='form-check mb-2'>
                        <input 
                            onClick={ addTraslade }
                            ref={ radioFieldTrasladeYes }
                            className='form-check-input' 
                            type='checkbox' 
                            name='candidates-filter-traslade' 
                            id='traslade-true-checkbox'/>
                        <label className='form-check-label' htmlFor='traslade-true-checkbox'>
                            Si
                        </label>
                    </div>
                    <div className='form-check'>
                        <input 
                            onClick={ addTraslade }
                            ref={ radioFieldTrasladeNo }
                            className='form-check-input' 
                            type='checkbox' 
                            name='candidates-filter-traslade' 
                            id='traslade-false-checkbox'/>
                        <label className='form-check-label' htmlFor='traslade-false-checkbox'>
                            No
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CandidatesFilter;
