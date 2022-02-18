import React from 'react';
import { FILTER_ACTIVE, FILTER_ALL, FILTER_COMPLETED } from '../../../store/Filters';
import Filter from './Filter';

const Filteroptions = () => {
    return (
        <div className='row'>
            <div className='col mt-4'>
                <Filter filter={ FILTER_ALL }>
                    ALL
                </Filter>
            </div>
            <div className='col mt-4'>
                <Filter filter={ FILTER_ACTIVE }>
                    ACTIVE
                </Filter>
            </div>
            <div className='col mt-4'>
                <Filter filter={ FILTER_COMPLETED }>
                    COMPLETED
                </Filter>
            </div>
        </div>
    );
}

export default Filteroptions;