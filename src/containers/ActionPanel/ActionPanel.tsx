import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/Store';
import { withRouter } from 'react-router';

import './ActionPanel.scss';
import Profile from '../../components/ActionPanel/Profile/Profile';
import Filters from '../../components/ActionPanel/FIlters/Filters';

interface actionPanelProps {

}

const ActionPanel = observer(withRouter((actionPanelProps) => {
    return (
        <article id="actionPanel">
            <Profile persona={store.selectedUser}/>
            <Filters />
        </article>
    )
}));

export default ActionPanel;