import * as React from 'react';
import { observer } from 'mobx-react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter,
    Redirect
} from 'react-router-dom'

import './Root.scss';

import { store } from '../../stores/Store';
import ActionPanel from '../ActionPanel/ActionPanel';
import HoodCriteria from '../HoodCriteria/HoodCriteria';
import ContextCriteria from '../ContextCriteria/ContextCriteria';
import Users from '../Users/Users';
import HoodUsers from '../HoodUsers/HoodUsers';
import Match from '../../components/Match/Match';
import { dataBase } from '../../stores/dataBase';


export class Root extends React.Component {
    constructor(props:any){
        super(props);
        store.shuffleArray(dataBase.users);
        store.setUser(dataBase.users);
        store.fillPlaces(store.placesCriteria);
    }

    render(){
        return (
            <Router>
                <section id="container">
                    <Route exact path="/" component={ActionPanel} />
                    <Route exact path="/" component={Users} />
                    <Route exact path="/" component={HoodUsers} />
                    <Route exact path="/" component={ContextCriteria} />
                    <Route exact path="/" component={HoodCriteria} />
                    <Route exact path="/" component={Match} />
                </section>
            </Router>

        )
    }
}
