import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './Users.scss';
import User from '../../components/User/User';

interface usersProps {

}

const Users = observer((usersProps:any) => {
    return (
        <article id="users">
            {store.users.map((elem: any, index: number) =>
                <User person={elem} picture={elem.foto} genre={elem.genero}/>
            )}
        </article>
    )
});

export default Users;