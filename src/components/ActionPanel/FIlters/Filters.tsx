import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../../stores/Store';
import { withRouter } from 'react-router';

import './Filters.scss';
import { dragAndDropStore } from '../../../stores/DragAndDropStore';
import Filter from './Filter/Filter';

interface filtersProps {

}

const Filters = observer(withRouter((filtersProps) => {
    return (
        <article id="filters">
            <h4>Criterios</h4>
            {dragAndDropStore.filters.map((elem: any, index: number) =>
                <Filter background={"white"} content={""} used={false} value={""} position={index}/>
            )}
            
        </article>
    )
}));

export default Filters;