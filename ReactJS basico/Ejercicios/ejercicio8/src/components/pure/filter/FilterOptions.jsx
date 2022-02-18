import React from 'react';
import FilterContainer from '../../containers/FilterContainer';

const Filteroptions = () => {
    return (
        <div className='row'>
            <div className='col mt-4'>
                <FilterContainer filter='SHOW_ALL'>
                    ALL
                </FilterContainer>
            </div>
            <div className='col mt-4'>
                <FilterContainer filter='SHOW_ACTIVE'>
                    ACTIVE
                </FilterContainer>
            </div>
            <div className='col mt-4'>
                <FilterContainer filter='SHOW_COMPLETED'>
                    COMPLETED
                </FilterContainer>
            </div>
        </div>
    );
}

export default Filteroptions;
