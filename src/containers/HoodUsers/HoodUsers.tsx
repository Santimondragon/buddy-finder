import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './HoodUsers.scss';
import User from '../../components/User/User';
import HoodUser from '../../components/HoodUser/HoodUser';

interface hoodUsersProps {

}

const HoodUsers = observer((hoodUsersProps:any) => {
    return (
        <article id="hoodUsers">
            {store.hoodUsers.map((elem: any, index: number) =>
                <HoodUser person={elem} picture={elem.foto} genre={elem.genero}/>
            )}
        </article>
    )
});

export default HoodUsers;