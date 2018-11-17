import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './Example.scss';

interface exampleProps {

}

const Example = observer(withRouter((exampleProps) => {
    return (
        <article>
            <div>
                <h1>Example</h1>
            </div>
        </article>
    )
}));

export default Example;